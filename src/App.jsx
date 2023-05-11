import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/layout/Header';
import Topbar from './components/layout/Topbar';
function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Header></Header>
    </div>
  );
}

export default App;
