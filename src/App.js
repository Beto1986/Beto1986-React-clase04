
import './App.css';
import { useState } from "react";

function App() {

  const [nombre, setNombre] = useState("");
  const [nombreCopiado, setNombreCopiado] = useState("");
  const [Deshabilitado, setDeshabilitado] = useState(true);

  const cargarNombre = (evento) => {
    if (evento.target.value.length === 0) {
      limpiarLeyenda();
      setDeshabilitado(true);
    } else {
      setNombre(evento.target.value);
      setDeshabilitado(false);
    }
  };

  const copiarNombre = () => {
    setNombreCopiado(nombre);
  };

  const limpiarLeyenda = () => {
    setNombre("");
    setNombreCopiado("");
    setDeshabilitado(true);
  };

  return (
    <div className="App">
    <input
      name="nombre"
      onChange={(evento) => cargarNombre(evento)}
      placeholder="Nombre"
      type="text"
      value={nombre}
    />
    <br />
    <button onClick={copiarNombre}> Copiar Nombre </button> <br />
    <input value={nombreCopiado} /> <br />
    <button onClick={limpiarLeyenda} disabled={Deshabilitado}>
      Limpiar Leyenda
    </button>
    <br />
  </div>
  );
}

export default App;


// Otro ejemplo que se hizo en clase.

// import { useState } from "react";
//
//
//function Form() {
//  const [leyenda, setLeyenda] = useState("");
//  const [LeyendaCopiado, setLeyendaCopiado] = useState("");
//  const [disabled, setDisabled] = useState(true);
//
// const cargarLeyenda = (e) => {
//    setLeyenda(e.target.value);
//    if (e.target.value.length === ""){
//      limpiarLeyenda( );
//      setDisabled(true)
//    }else {
//      setLeyenda(e.target.value);
//      setDisabled(false)
//    }
//  };
//
// const copiarLeyenda = () => {
//    setLeyendaCopiado(leyenda);
//  };
//
//  const limpiarLeyenda = () => {
//    setLeyenda(" ");
//    setLeyendaCopiado(" ")
//  }
//
//  return (
//    <div className="App">
//      <input
//        name="leyenda"
//        onChange={(e) => cargarLeyenda(e)}
//        placeholder="Nombre"
//        type="text"
//      />
//     <br />
//      <button onClick={copiarLeyenda} > Mostar leyenda</button> <br />
//      <button onClick={limpiarLeyenda} disabled={disabled}> Limpiar leyenda</button> <br />
//      <input value={LeyendaCopiado} />
//    </div>
//  );
//};
//export default Form;
