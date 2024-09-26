import { CSSProperties, useEffect, useState } from 'react';
import './style.css';

const pxToNum = (px: string): number => Number(px.split('px')[0]);

function measureTypography(elementId: string) {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error('Element not found');
    return;
  }

  const boundingRect = element.getBoundingClientRect();
  const computedStyle = window.getComputedStyle(element);
  console.log(computedStyle.paddingTop, computedStyle.paddingBottom);
  console.log(boundingRect);

  const lineHeight: any =
    boundingRect.height -
    pxToNum(computedStyle.paddingTop) -
    pxToNum(computedStyle.paddingBottom) -
    pxToNum(computedStyle.borderTop) -
    pxToNum(computedStyle.borderBottom);

  const lineTop =
    boundingRect.top +
    Number(pxToNum(computedStyle.paddingTop)) +
    Number(pxToNum(computedStyle.borderTop));
  console.log({ lineHeight, lineTop });

  return {
    height: `${lineHeight}px`,
    top: lineTop,
  };
}

export default function App() {
  const [line, setLine] = useState<CSSProperties>({});

  useEffect(() => {
    setTimeout(() => {
      const line = measureTypography('typography') as CSSProperties
      setLine(line);
    }, 1000);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
      }}
    >
      <p
        style={{
          fontSize: '16px',
          padding: 10,
          border: '5px solid blue',
          margin: 3,
        }}
        id="typography"
      >
        Typography
      </p>
      {line && (
        <div
          style={{
            position: 'absolute',
            width: '2px',
            background: 'red',
            ...line,
          }}
        >
          {}
        </div>
      )}
    </div>
  );
}
