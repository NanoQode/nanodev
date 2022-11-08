
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import {
  About,
  Blog,
  Ecommerce,
  Hosting,
  Marketing,
  Mobile,
  Notfound,
  SEO,
  Social,
  Softaware,
  Telephony,
  Web,
  Home,
} from "./pages";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webdesign" element={<Web />} />
          <Route path="/social" element={<Social />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/telephony" element={<Telephony />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/about" element={<About />} />
          <Route path="/mobileapp" element={<Mobile />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/software" element={<Softaware />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
