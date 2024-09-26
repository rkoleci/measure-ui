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
            padding: 10,
            border: '5px solid blue',
            margin: 3,
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
              border: '5px solid blue',
              margin: 3,
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
