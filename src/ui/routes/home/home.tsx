import NavigationDots from "../../components/atoms/navigation-dots/navigation-dots";
import AbouteMeSection from "../../components/sections/about-me/aboute-me";
import HomeSection from "../../components/sections/home/home";
import Layout from "../../layout/layout";
import ViewModel from "./viewmodel";

export default function HomeRoute() {
    const { activeSection } = ViewModel();

    return (
        <Layout withHeader={true}>
            <NavigationDots activeSection={activeSection} />

            <HomeSection id="home" />


            <section id="about-me">
                <AbouteMeSection id="about-me" />
            </section>

            {/* <section id="skills">
                <Skills />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="contact">
                <Contact />
            </section> */} 
            
        </Layout>
    );
}
