import Skills from "../../../resources/logos.json";

export interface SkillsType {
    mongodb?: string;
    jenkins?: string;
    restapi?: string;
    swift?: string;
    react?: string;
    python?: string;
    groovy?: string;
    firebase?: string;
    java?: string;
    github?: string;
    vue?: string;
    node?: string;
    graphql?: string;
    typescript?: string;
    docker?: string;
    javascript?: string;
    [key: string]: string | undefined;
}

const getSkills = () => {
    const skillset: SkillsType = {};
    for (let key in Skills) {
        key = key.toString();
        skillset[key] = (Skills as Record<string, string>)[key].toString();
    }
    return skillset;
};

export default getSkills;