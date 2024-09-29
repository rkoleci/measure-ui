import Driver from './Driver';

export default function App() {
  return (
    <>
      <Driver />
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '10%',
          paddingRight: '10%',
          marginTop: -200,
        }}
      >
        <h1 id="h1" style={{ fontSize: '50px', color: '#DDDEEE' }}>
          Measure UI Typography - Match Figma Design
        </h1>
        <p
          id="p1"
          style={{
            fontSize: '20px',
            color: 'green',
            textAlign: 'center',
            width: 'fit-content',
          }}
        >
          This is a paragraph inside the first section.
        </p>

        <h1 id="h2" style={{ fontSize: '45px', color: '#BBBBBB' }}>
          Additional Heading 1 - Secondary Section
        </h1>
        <p
          id="p2"
          style={{
            fontSize: '18px',
            color: 'blue',
            textAlign: 'center',
            width: 'fit-content',
          }}
        >
          This is another paragraph providing more information for this section.
        </p>

        <h3 id="h3" style={{ fontSize: '35px', color: '#FFBB00' }}>
          Sub Heading 3 - Details Section
        </h3>
     
       
      </div>
    </>
  );
}
