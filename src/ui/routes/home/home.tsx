import NavigationDots from "../../components/atoms/navigation-dots/navigation-dots";
import AbouteMeSection from "../../components/sections/about-me/aboute-me";
import HomeSection from "../../components/sections/home/home";
import ProjectsSection from "../../components/sections/projects/projects";
import SkillsSection from "../../components/sections/skills/skills";
import Layout from "../../layout/layout";
import ViewModel from "./viewmodel";

export default function HomeRoute() {
    const { activeSection } = ViewModel();

    return (
        <Layout withHeader={true}>
            <NavigationDots activeSection={activeSection} />

            <HomeSection id="home" />

            <AbouteMeSection id="about-me" />
        
            <SkillsSection id="skills" />

            <ProjectsSection id="projects" />

            {/*  <section id="contact">
                <Contact />
            </section> */} 
            
        </Layout>
    );
}
