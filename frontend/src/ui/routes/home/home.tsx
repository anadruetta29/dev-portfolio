import NavigationDots from "../../components/atoms/navigation-dots/navigation-dots";
import AbouteMeSection from "../../components/sections/about-me/aboute-me";
import ContactSection from "../../components/sections/contact/contact";
import FooterSection from "../../components/sections/footer/footer";
import ProjectsSection from "../../components/sections/projects/projects";
import SkillsSection from "../../components/sections/skills/skills";
import Layout from "../../layout/layout";
import ViewModel from "./viewmodel";

export default function HomeRoute() {
    const { 
        activeSection,
        next,
        prev,
        isFading,
        current,
        currentYear
    } = ViewModel();

    return (
        <Layout withHeader={true}>
            <NavigationDots activeSection={activeSection} />

            <AbouteMeSection id="about-me" />
            
            <ProjectsSection 
                id="projects" 
                next={next}     
                prev={prev} 
                isFading={isFading}  
                current={current}   
            />
        
            <SkillsSection id="skills" />


            <ContactSection id="contact" />

            <FooterSection year={currentYear} />
        </Layout>
    );
}
