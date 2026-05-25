//Basic setup

//nested routes

//dynamic routes

//usenavigate

//404 page
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import Product from "./pages/Product";

import {Routes,Route} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";



const App=()=>{
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product" element={<Product/>}>
          <Route path="men" element={<Men/>} />
          <Route path="women" element={<Women/>} />
        </Route>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:id" element={<CourseDetail/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App