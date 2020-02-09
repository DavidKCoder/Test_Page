import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import MyBlock from "./components/MyBlock/MyBlock";
import Footer from "./components/Footer/Footer";
import { Route, BrowserRouter} from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route path="/about" component={Slider} />
        <Route path="/about" component={MyBlock} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
