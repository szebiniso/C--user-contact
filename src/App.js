
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import List from "./components/ContactList/List";
import store from "./components/redux/store";
import Item from "./components/ContactDetails/Item";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/item/:id" element={<Item />} />
        <Route path="/" element={<List />} />
      </Routes>
    </Provider>
  );
}

export default App;