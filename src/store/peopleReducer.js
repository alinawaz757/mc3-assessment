import { FETCH_PEOPLE, FETCH_PEOPLE_STARTED } from "../utils/constants";

const initialState = { people: [], loading: false };
export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_STARTED:
      return { ...state, loading: true };
    case FETCH_PEOPLE:
      if (action?.error) return { ...state, loading: false };
      return { ...state, people: action?.payload || [], loading: false };
    default:
      return state;
  }
};
