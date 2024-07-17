import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import Blog from "./pages/Blog";
import Sermon from "./pages/Sermon";
import About from "./pages/Aboutus";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Homepage/>} />
            <Route path="Homepage" element={<Homepage/>} />
            <Route path="Aboutus" element={<About/>} />
            <Route path="Sermon" element={<Sermon/>} />
            <Route path="Blog" element={<Blog/>} />
            <Route path="Donation" element={<Donation/>} />
            <Route path="Contact" element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>

      <br></br>
      <br></br>
      <br></br>
    </div>
    
  );
}

export default App;
