import Footer from "../Components/Footer";
import LEWA from "../Components/LEWA";
import NavBar from "../Components/Navbar";
import OurEvent from "../Components/OurEvent";
import OurPartner from "../Components/OurPartner";
import BlogCreator from "../Components/BlogCreatorComponent/BlogCreator";
import aiesecLogo from "/src/Images/aiesecLogo.svg";
import { useState } from "react";
const OurBlog0 = () => {
  const [blogPage, setBlogPage] = useState();
  const blogCreatorDatas = [
    {
      key: 0,
      main_image: aiesecLogo,
      title_information: "cultural informational picture",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      thumbnail: aiesecLogo
    },
    {
      key: 1,
      main_image: aiesecLogo,
      title_information: "cultural informational picture",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      thumbnail: aiesecLogo
    }
  ];
  return (
    <>
      <NavBar />
      <BlogCreator />
      <OurEvent />
      <OurPartner />
      <LEWA />
      <Footer />
    </>
  );
};

export default OurBlog0;
