import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

function App() {
  return (
    <div className="mt-3">
      <Home />
      <Sidebar />
      <Player />
    </div>
  );
}

export default App;
