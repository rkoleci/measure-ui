import { useEffect, } from 'react';

const pxToNum = (px: string): Number => Number(px.split('px')[0]);

function measureTypography(elementId: string) {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error('Element not found');
    return;
  }

  const boundingRect = element.getBoundingClientRect();
  const computedStyle = window.getComputedStyle(element);
  console.log(computedStyle, computedStyle['font-size' as any]);
  console.log(boundingRect);

  const lineHeight = Number(pxToNum(computedStyle['font-size' as any]));

  const lineTop =
    boundingRect.top +
    Number(pxToNum(computedStyle.paddingTop)) +
    Number(pxToNum(computedStyle.borderTop));

  const lineLeft =
    boundingRect.left +
    Number(pxToNum(computedStyle.paddingLeft)) -
    Number(pxToNum(computedStyle.borderLeft));

  console.log({ lineHeight, lineTop });

  const line = document.createElement('div');
  line.style.top = `${lineTop}px`;
  line.style.height = `${lineHeight}px`;
  line.style.left = `${lineLeft}px`;
  line.style.position = 'absolute';
  line.style.backgroundColor = 'red';
  line.style.width = '2px';

  const parentElement = element.parentElement || document.body;
  parentElement.appendChild(line);
}

export default function Driver() {
  useEffect(() => {
    setTimeout(() => {
      measureTypography('typography');
      measureTypography('typography-2');
    }, 1000);
  }, []);

  return <></>;
}
