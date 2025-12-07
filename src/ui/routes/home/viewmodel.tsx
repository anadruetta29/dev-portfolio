import { useEffect, useState } from "react";

export default function ViewModel() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        function handleScroll() {
        let current = "home";

        const scrollPos = window.scrollY + 200;

        sections.forEach((section) => {
            if (scrollPos >= section.offsetTop) {
            current = section.id;
            }
        });

        setActiveSection(current);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return {
        activeSection,
    };
}
