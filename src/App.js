import React from "react";
import Form1 from "./components/Form1";
import Form2 from './components/Form2';

const jen = {
  name: 'jen',
  age: 31,
  parents: {
    mom: 'tina',
    dad: 'fred'
  },
  sibs: {
    sis: 'elsa',
    bro: 'ian'
  }
}

const Abner = {
  name: "Abner",
  phrase: "Ability",
  jab: {
    name: "Poke",
    stages: 1,
    endType: "standard",
    desc: "Pokes opponent in eye",
  },
};

const Beorn = {
  name: "Beorn",
  phrase: "Berserk",
  jab: {
    name: "Head Butt",
    stages: 3,
    endType: "infinite",
    desc: "on third head butt, Beorn jams his head into opponent and thrashes around",
  },
};

function App() {
  return (
    <>
      <Form1 obj={Abner} />
      <hr />
      <Form1 obj={Beorn} />
      <hr />
      <Form1 />
      <hr />
      <Form2 person={jen} />
    </>
  );
}

export default App;
