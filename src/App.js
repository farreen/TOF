import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/common/navigation-bar";
import CarouselFeatured from "./components/home/carousel-featured";
import TalesOfStartups from "./components/home/tales-of-startups";
import Footer from "./components/common/footer";
import { useEffect } from "react";
import { AOS } from "aos";

function App({ children }) {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1200,
  //   });
  // }, []);
  return (
    <>
      <div className="App">{children}</div>
    </>
  );
}

export default App;
