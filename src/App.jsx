import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/AboutMe/About";
import "./Index.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </>
  );
};

export default App;
