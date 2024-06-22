import "./App.css";
import Footer from "./components/footer/Footer";
import Banner from "./components/appdownloadbanner/Banner";
import NavigationBar from "./components/navigationbar/NavigationBar";
import Home from "./pages/Home";
import TableBooking from "./pages/TableBooking/TableBooking";
import Myprofile from "./pages/Myprofile/Myprofile";

function App() {
  return (
    <>
      <NavigationBar />
      {/* <Home /> */}
      {/* <TableBooking /> */}
      <Myprofile />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
