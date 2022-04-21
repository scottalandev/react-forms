import React, { useState } from "react";

function TextInput({ item, label, value, oC }) {
  return (
    <div>
      <label htmlFor={item} value={{ item }}>
        {label}
      </label>
      <input type="text" id={item} name={item} value={value} onChange={oC} />
      <br />
    </div>
  );
}

function TextAreaSglInput({ item, label, value, oC }) {
  return (
    <div className={`areaInput areaSglInput`}>
      <label htmlFor={item}>{label}</label>
      <textarea id={item} name={item} value={value} onChange={oC}></textarea>
      <br />
    </div>
  );
}

const emptyObj = {
  name: "",
  phrase: "",
  jab: {
    name: "",
    stages: 1,
    endType: "standard",
    desc: "",
  },
};

function Form1({ obj }) {
  function getInit() {
    return obj ? obj : emptyObj;
  }

  const initialState = () => getInit();

  const [stateObj, setStateObj] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setStateObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onNestedChange = (e) => {
    const { name, value } = e.target;
    const nestObj = name.split(".")[0];
    const nestProp = name.split(".")[1];
    setStateObj((prev) => ({
      ...prev,
      [nestObj]: {
        ...prev[nestObj],
        [nestProp]: value,
      },
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const output = JSON.stringify(stateObj);
    console.log(output);
  };

  return (
    <div>
      <h1>Form 1</h1>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type="text" value={stateObj.name} onChange={onChange} name="name" />

        <label>Phrase</label>
        <input type="text" value={stateObj.phrase} onChange={onChange} name="phrase" />
        <h5>Neutral (Jab) Attack</h5>
        <TextInput item="jab.name" label="Name" value={stateObj.jab.name} oC={onNestedChange} />
        <label htmlFor="jab.stages"># of Stages</label>
        <select id="jab.stages" value={stateObj.jab.stages} name="jab.stages" onChange={onNestedChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <label htmlFor="jab.endType">Jab Combo End Type</label>
        <select id="jab.endType" value={stateObj.jab.endType} name="jab.endType" onChange={onNestedChange}>
          <option value="standard">Standard</option>
          <option value="choosable">Choosable</option>
          <option value="infinite">Infinite</option>
        </select>
        <br />
        <TextAreaSglInput item="jab.desc" label="Description" value={stateObj.jab.desc} oC={onNestedChange} />
        <br />
        <button type="submit">Log State</button>
      </form>
    </div>
  );
}

export default Form1;
