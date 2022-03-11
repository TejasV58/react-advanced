import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import {reducer} from "./reducer"
// reducer function

const defaultState = {
  people: [],
  isModal: false,
  modalContent: "",
};

const Index = () => {

   const [name, setName] = useState("");
   const [state, dispatch] = useReducer(reducer, defaultState);

  const removeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const person = {id:new Date().getTime().toString(),name}
      dispatch({ type: "ADD_ITEM" ,payload:person});
      setName("");
    }
    else {
      dispatch({ type: "NO_VALUE" });
    }
  };


  return <>
    {state.isModal && (
      <Modal removeModal={removeModal} modalContent={state.modalContent} />
      )}
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value) }/>
      </div>
      <button type="submit">Add item</button>
    </form>
    { state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button onClick={() => {
              dispatch({ type: "REMOVE_ITEM", payload: person.id });
              
            }}>remove</button>
          </div>
        )
    })}
  </>;
};

export default Index;
