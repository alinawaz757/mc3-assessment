import { baseURL } from "../utils/config";
import { FETCH_PEOPLE, FETCH_PEOPLE_STARTED } from "../utils/constants";

export const fetchPeople = (query) => async (dispatch) => {
  let url = baseURL;
  dispatch({ type: FETCH_PEOPLE_STARTED });
  if (query) {
    url = url + query;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: FETCH_PEOPLE, payload: data?.results });
  } catch (e) {
    console.log("🚀 ~ e:", e);
    dispatch({ type: FETCH_PEOPLE, error: true });
  }
};
