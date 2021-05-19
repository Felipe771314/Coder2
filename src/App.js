import "./App.css";
import { NavBar } from "./components/NavBar/index";
import ItemListContainer from "./components/ItemContainer/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;

