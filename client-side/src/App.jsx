import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.jsx";
import store from "./store"

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
