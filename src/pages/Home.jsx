import BarberBanner from "../components/Banner/Banner";
import OurStory from "./OurStory";
import OurServices from "./OurServices";
import WhyChoose from "./Benefits";
import TestimonialSection from "./TestimonialSection";
import ServicePlans from "./OurPlan";
import GallerySection from "./Ourgallery";
import OurStaff from "./OurStaff";
import OurLocation from "./Ourlocation";
import ContactUs from "./ContactUs";


const Home = () => {
  return (
    <div>

      
      <main>
      <div id="home"><BarberBanner/></div>
        <div id="aboutus"><OurStory/></div>
        <div id="ourservice"><OurServices/></div>
        
        <WhyChoose/>
        <TestimonialSection/>
        <ServicePlans/>
        <div id="ourgallery"><GallerySection/></div>
        
        <OurStaff/>
        <OurLocation/>
        <div id="contact-us">
  <ContactUs />
</div>

      </main>
      

    </div>
  );
};

export default Home;
