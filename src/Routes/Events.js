import EventsW from "../Components/EventsW";
import Footer from "../Components/Footer";
import LEWA from "../Components/LEWA";
import NavBar from "../Components/Navbar";
import OurPartner from "../Components/OurPartner";
import Suggest from "../Components/Suggest";
import UpComing from "../Components/UpComing";

const Events = () => {
    return(
        <>
        <NavBar />
        <EventsW />
        <UpComing />
        <Suggest />
        <OurPartner />
        <LEWA />
        <Footer />
        </>
    );
};
export default Events;