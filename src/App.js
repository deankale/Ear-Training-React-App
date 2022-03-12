import logo from "./kdlogodark.svg";
import EarTraining from "./components/EarTraining";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <EarTraining />
    </div>
  );
};

export default App;
