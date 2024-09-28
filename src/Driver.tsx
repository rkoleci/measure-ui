import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MenuBar from './components/MenuBar';
import { useMeasure } from './store';

const pxToNum = (px: string) => px.split('px')[0];



function drawTooltips(boundingRect: DOMRect,  typographyStyle: CSSStyleDeclaration, setTypographyIds: (id: string) => void) {
  const container = document.createElement('div');
  const id = createId()
  container.id = id
  setTypographyIds(id)
  container.textContent = `${typographyStyle.fontSize}\n${typographyStyle.fontWeight}\n${typographyStyle.lineHeight}`;
  container.style.position = 'absolute';
  container.style.left = `${boundingRect.left - 55}px`; // Adjust the value as needed
  container.style.top = `${boundingRect.top}px`;
  container.style.fontSize = '10px'; // Small font size
  container.style.color = 'white';
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Semi-transparent background for better visibility
  container.style.borderRadius = '4px';
  container.style.whiteSpace = 'pre-wrap'; // Changed to pre-wrap to preserve line breaks
  container.style.textAlign = 'center'
  container.style.height = '50px'
  container.style.width = '50px'
  container.style.padding = '0px'

  document.body.appendChild(container);


}

function drawGuideLines(boundingRect: DOMRect, setTypographyIds: (id: string) => void) {
  const topLine = document.createElement('div');
  const topLineId = createId()
  topLine.id = topLineId
  setTypographyIds(topLineId)
  topLine.style.position = 'absolute';
  topLine.style.left = `${boundingRect.left}px`
  topLine.style.top = `${boundingRect.top}px`
  topLine.style.width = '6px'
  topLine.style.height = '2px'
  topLine.style.backgroundColor = 'yellow';
  document.body.appendChild(topLine);

  const bottomLine = document.createElement('div');
  const bottomId = createId()
  bottomLine.id = bottomId
  setTypographyIds(bottomId)
  bottomLine.style.position = 'absolute';
  bottomLine.style.left = `${boundingRect.left}px`
  bottomLine.style.top = `${boundingRect.bottom}px`
  bottomLine.style.width = '6px'
  bottomLine.style.height = '2px'
  bottomLine.style.backgroundColor = 'yellow';
  document.body.appendChild(bottomLine);
}

function measureTypography(elementId: string, setTypographyIds: (id: string) => void) {
  const element = document.getElementById(elementId)

  if (!element) {
    console.error('Element not found');
    return;
  }

  const boundingRect = element.getBoundingClientRect();
  const computedStyle = window.getComputedStyle(element);
  console.log(element, computedStyle.fontSize);
  console.log(boundingRect);

  const lineHeight = Number(pxToNum(computedStyle.lineHeight));

  const lineTop =
    boundingRect.top +
    Number(pxToNum(computedStyle.paddingTop)) +
    Number(pxToNum(computedStyle.borderTop));

  const lineLeft =
    boundingRect.left +
    Number(pxToNum(computedStyle.paddingLeft)) -
    Number(pxToNum(computedStyle.borderLeft)) - 10

  const line = document.createElement('div');
  const lineId = createId()
  line.id = lineId
  setTypographyIds(lineId)
  line.style.top = `${lineTop}px`;
  line.style.height = `${lineHeight}px`;
  line.style.left = `${lineLeft}px`;
  line.style.position = 'absolute';
  line.style.backgroundColor = 'yellow';
  line.style.width = '2px';


  const parentElement = element.parentElement || document.body;
  parentElement.appendChild(line);
  drawGuideLines(line.getBoundingClientRect(), setTypographyIds)
  drawTooltips(line.getBoundingClientRect(), computedStyle, setTypographyIds)
}

function clearTypographyMeasures (typographyIds: Array<string>) {
  typographyIds.forEach((id) => {
  const elementToRemove = document.getElementById(id);
  if (elementToRemove) {
    elementToRemove.remove();
  }
  })
}

export default function Driver() {
  const { typography, setTypographyIds, typographyIds } = useMeasure()

  useEffect(() => {
    if (typography) {
      const listIds = [...getElementsIds('p'), ...getElementsIds('h1')]
        .filter(id => !id.includes('measure'))
  
    listIds.forEach((id) => measureTypography(id, setTypographyIds));
    } else {
      clearTypographyMeasures(typographyIds)
    }
  }, [typography]);

  return (
    <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 9999 }}>
      <MenuBar />
    </div>
  )
}

const getElementsIds = (selector: string) => {
  if (!selector) return [];

  const listIds: Array<string> = [];

  const elementsList = document.querySelectorAll(selector);
  elementsList.forEach((element) => {
    const uniqueId = element.id || createId();
    listIds.push(uniqueId);
    element.id = uniqueId;
  });

  return listIds;
};

const createId = () => {
  return uuidv4();
};
