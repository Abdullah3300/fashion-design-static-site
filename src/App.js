import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Drapings from "./pages/Drapings";
import Home from "./pages/Home";
import Header from "./components/header";
import Boards from "./pages/Boards";
import Illustrations from "./pages/Illustrations";
import Shoot from "./pages/Shoot";
import Sketches from "./pages/Sketches";
import Creations from "./pages/Creations";
import FabricSwatches from "./pages/FabricSwatches";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/drapings" element={<Drapings />} />
        <Route path="/shoot" element={<Shoot />} />
        <Route path="/sketches" element={<Sketches />} />
        <Route path="/creations" element={<Creations />} />
        <Route path="/fabric-swatches" element={<FabricSwatches />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
