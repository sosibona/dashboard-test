import React from "react";
import Profile from "./Profile";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Profile />
    </Provider>
  );
}

export default App;
