import "./App.css";
import Footer from "./components/footer/Footer";
import Banner from "./components/appdownloadbanner/Banner";
import NavigationBar from "./components/navigationbar/NavigationBar";
import Home from "./pages/Home";
import TableBooking from "./pages/TableBooking/TableBooking";
import Myprofile from "./pages/Myprofile/Myprofile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tablebooking" element={<TableBooking />} />
        <Route path="/profile" element={<Myprofile />} />
      </Routes>
      <Banner />
      <Footer />
    </>
  );
}

export default App;
