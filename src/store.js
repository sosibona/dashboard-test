import { createStore } from "redux";
import userReducer from "./user/user.reducer";

const store = createStore(userReducer);

export default store;
