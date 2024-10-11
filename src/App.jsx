import "./App.css";
import AsideNav from "./components/AsideNav/AsideNav";
import Projects from "./page/Projects/Projects";

const App = () => {
  return (
    <div className="app">
      <AsideNav />
      <Projects />
    </div>
  );
};

export default App;
