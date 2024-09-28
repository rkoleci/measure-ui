import Driver from './Driver';

export default function App() {
  return (
   <>
   <Driver />
   <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '10%', paddingRight: '10%',  marginTop: -200, }}>
     <h1 id='h1' style={{ fontSize: '50px', color: '#DDDEEE' }}>Measure UI Typography - Match Figma Design</h1>
        <p id='p1' style={{ fontSize: '20px', color: 'green', textAlign: 'center', width: 'fit-content'  }}>
          This is a paragraph inside the first section.
        </p>

    </div>
   </>
  );
}
