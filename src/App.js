import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import ResearchDetails from "./components/researchDetails";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <ResearchDetails />
      <Footer />
    </div>
  );
}

export default App;
