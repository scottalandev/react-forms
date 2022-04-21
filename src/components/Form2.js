import React, { useState } from "react";

const jen = {
  name: "jen",
  age: 31,
  parents: {
    mom: "tina",
    dad: "fred",
  },
  sibs: {
    sis: "elsa",
    bro: "ian",
  },
};

function EditPerson({ person }) {
  const initState = person;
  const [state, setState] = useState(initState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onNestedChange = (e) => {
    const { name, value } = e.target;
    const nestObj = name.split(".")[0];
    const nestProp = name.split(".")[1];
    setState((prev) => ({
      ...prev,
      [nestObj]: {
        ...prev[nestObj],
        [nestProp]: value,
      },
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const output = JSON.stringify(state);
    console.log(output);
  };

  return (
    <>
      <h1>Form 2</h1>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type="text" value={state.name} onChange={onChange} name="name" />
        <br />
        <label>Age</label>
        <input type="text" value={state.age} onChange={onChange} name="age" />
        <br />
        <label>Mom</label>
        <input type="text" value={state.parents.mom} onChange={onNestedChange} name="parents.mom" />
        <br />
        <label>Dad</label>
        <input type="text" value={state.parents.dad} onChange={onNestedChange} name="parents.dad" />
        <br />
        <label>Sis</label>
        <input type="text" value={state.sibs.sis} onChange={onNestedChange} name="sibs.sis" />
        <br />
        <label>Bro</label>
        <input type="text" value={state.sibs.bro} onChange={onNestedChange} name="sibs.bro" />
        <br />
        <button type="submit">Log State</button>
      </form>
    </>
  );
}

function Form2({ person }) {
  return <EditPerson person={person} />;
}

export default Form2;
