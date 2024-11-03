import AboutUs from "./_components/AboutUs";
import OurStory from "./_components/OurStory";

export const metadata = {
  title: "Giới thiệu - Mindmap Flow",
};

export default function AboutPage() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <AboutUs />
      <OurStory />
    </div>
  );
}
