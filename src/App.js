import './App.css';
import BoxFunction from './heroes/classes/BoxHeroes';
import BoxClasses from './heroes/functional/BoxHeroes';

function App() {
  return (
    <>
      <section style={{display: "flex", flexDirection: "column"}}>
        <h1 style={{ textAlign: "center" }}>Componentes Funcionales</h1>
        <BoxFunction />
      </section>
      <section style={{display: "flex", flexDirection: "column"}}>
        <h1 style={{ textAlign: "center" }}>Componentes de clases</h1>
        <BoxClasses />
      </section>
    </>
  );
}

export default App;
