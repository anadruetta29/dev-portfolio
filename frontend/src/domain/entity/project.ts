export class Project {

    public title: string;
    public description: string;
    public technologies: string[];
    public githubLink: string;
    public year: string;

    constructor(
        title: string,
        description: string,
        technologies: string[],
        githubLink: string,
        year: string,
    ) {
        this.title = title;
        this.description = description;
        this.technologies = technologies;
        this.githubLink = githubLink;
        this.year = year;
    }

    public static fromObject(object: { [key: string]: any }): Project | null {
        if (!object) return null;

        const {
            title,
            description,
            technologies,
            githubLink,
            year
        } = object;

        return new Project(title, description, technologies, githubLink, year);
    }
}
