import React from 'react';
//import logo from './logo.svg';
import './App.css';
function Welcome(props: { hello: string }) {
  return <h1>Hello, {props.hello}</h1>;
}
function App() {
  return (
    <div>

 <Welcome hello="hari"/>
      <Welcome hello="Cahal" />
      <Welcome hello="Edite" />
    </div>
  );
}

export default App;
