import Driver from './Driver';

export default function App() {
  return (
    <>
      <Driver />
      <div
        style={{
          gap: '20px',
        }}
      >
        <p
          style={{
            fontSize: '16px',
            lineHeight: '40px',
            padding: 10,
            border: '5px solid blue',
          }}
          id="typography"
        >
          Typography
        </p>
        <div
          style={{
            margin: '24px',
          }}
        >
          <p
            style={{
              fontSize: '16px',
              padding: 10,
              margin: 3,
              lineHeight: '20px',
              border: '5px solid blue',
            }}
            id="typography-2"
          >
            Typography2
          </p>
        </div>
      </div>
    </>
  );
}
