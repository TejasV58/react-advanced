export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: [...state.people, action.payload],
      isModal: true,
      modalContent: "Item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      people: [...state.people],
      isModal: true,
      modalContent: "Please Enter A value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModal: false,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
};