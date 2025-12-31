import NavigationDots from "../../components/atoms/navigation-dots/navigation-dots";
import AbouteMeSection from "../../components/sections/about-me/aboute-me";
import ContactSection from "../../components/sections/contact/contact";
import FooterSection from "../../components/sections/footer/footer";
import HomeSection from "../../components/sections/home/home";
import ProjectsSection from "../../components/sections/projects/projects";
import SkillsSection from "../../components/sections/skills/skills";
import Layout from "../../layout/layout";
import ViewModel from "./viewmodel";

export default function HomeRoute() {
    const { 
        activeSection,
        onClickOnSendEmail,
        next,
        prev,
        isFading,
        current,
        currentYear
    } = ViewModel();

    return (
        <Layout withHeader={true}>
            <NavigationDots activeSection={activeSection} />

            <HomeSection id="home" />

            <AbouteMeSection id="about-me" />
        
            <SkillsSection id="skills" />

            <ProjectsSection 
                id="projects" 
                next={next}     
                prev={prev} 
                isFading={isFading}  
                current={current}   
            />

            <ContactSection id="contact" onClickOnSendEmail={onClickOnSendEmail}/>

            <FooterSection year={currentYear} />
        </Layout>
    );
}
