import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const pxToNum = (px: string) => px.split('px')[0];

function measureTypography(elementId: string) {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error('Element not found');
    return;
  }

  const boundingRect = element.getBoundingClientRect();
  const computedStyle = window.getComputedStyle(element);
  console.log(computedStyle, computedStyle['font-size'as any] );
  console.log(boundingRect);

  const lineHeight = Number(pxToNum(computedStyle['line-height' as any]));

  const lineTop =
    boundingRect.top +
    Number(pxToNum(computedStyle.paddingTop)) +
    Number(pxToNum(computedStyle.borderTop));

  const lineLeft =
    boundingRect.left +
    Number(pxToNum(computedStyle.paddingLeft)) -
    Number(pxToNum(computedStyle.borderLeft));

  console.log({ lineHeight, lineTop }, computedStyle['line-height' as any]);

  const line = document.createElement('div');
  line.style.top = `${lineTop}px`;
  line.style.height = `${lineHeight}px`;
  line.style.left = `${lineLeft}px`;
  line.style.position = 'absolute';
  line.style.backgroundColor = 'yellow';
  line.style.width = '2px';
  

  const parentElement = element.parentElement || document.body;
  parentElement.appendChild(line);
}

export default function Driver() {
  useEffect(() => {
    const listIds = getElementsIds('p');
    console.log({ listIds });

    listIds.forEach((id) => measureTypography(id));
  }, []);

  return <></>;
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
