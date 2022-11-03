import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import Web from "./pages/Web";
import Notfound from "./pages/Notfound";
import Mobile from "./pages/Mobile";
import Softaware from "./pages/Softaware";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webdesign" element={<Web />} />
          <Route path="/mobileapp" element={<Mobile />} />
          <Route path="/software" element={<Softaware />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
