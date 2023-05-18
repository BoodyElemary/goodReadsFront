import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/layout/Header";
import Topbar from "./components/layout/Topbar";
import BodyContainer from "./components/layout/BodyContainer";
function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Header></Header>
      <BodyContainer></BodyContainer>
    </div>
  );
}

export default App;
