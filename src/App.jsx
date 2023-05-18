import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/layout/Header";
import Topbar from "./components/layout/Topbar";
import UserHome from "./components/pages/UserHome";
function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Header></Header>
      <UserHome></UserHome>
    </div>
  );
}

export default App;
