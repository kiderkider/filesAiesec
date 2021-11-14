import Footer from "../Components/Footer";
import LEWA from "../Components/LEWA";
import NavBar from "../Components/Navbar";
import OfficesW from "../Components/OfficesW";
import OurOffices from "../Components/OurOffices";

const Offices = () => {
  return (
    <>
      <NavBar />
      <OfficesW />
      <OurOffices />
      <h1 style={{ textAlign: "center" }}>Want to join</h1>
      <LEWA />
      <Footer />
    </>
  );
};
export default Offices;
