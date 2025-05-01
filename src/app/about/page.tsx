import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DynamEye Website",
  description: "This is the about page of the DynamEye website.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="The DynamEye team brings together expertise in AI, design, healthcare, and market 
        strategy from the University of Washington. Our core team includes MSTI, MBA, and HCDE students with 
        diverse backgrounds in software development, UX research, pricing, and product management. We are 
        supported by advisors including ophthalmologists, AI engineers, and experienced mentors from Microsoft 
        and the startup ecosystem. This interdisciplinary collaboration allows us to design and deliver an 
        affordable, user-centered vision-assistive device that addresses both clinical needs and market viability. 
        Our team's passion for accessibility and real-world impact drives every step of our development and 
        go-to-market strategy."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
