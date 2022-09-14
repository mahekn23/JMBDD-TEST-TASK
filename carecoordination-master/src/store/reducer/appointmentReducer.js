import axios from "axios";
import { get } from "lodash";


const getDataFromDB = () => {
  let urladd = "http://localhost:9000/fetch";
  axios.get(urladd)
    .then(res => {
      console.log(JSON.parse(JSON.stringify(res.data)));
      return JSON.parse(JSON.stringify(res.data));
    })
    .catch(err => {
      console.log(err);
    });
};

let initialState = getDataFromDB() || [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_APPOINTMENT":
      state = [...state, action.payload];
      let urladd = "http://localhost:9000/create";
      axios.post(urladd, action.payload.data)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
      return state;
    default:
      return state;
  }
};

export default reducer;








