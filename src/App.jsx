import "./App.css";
import AsideNav from "./components/AsideNav/AsideNav";
import Projects from "./page/Projects/Projects";

const App = () => {
  return (
    <div className="app">
      <AsideNav />
      <Projects />
      <img src="/logo.png" alt="the power university" className="logo"/>
    </div>
  );
};

export default App;
