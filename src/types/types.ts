export interface ISkills {
    id: number;
    title: string;
    icon: string;
}

type Links = {
    type: "normal" | "danger" | "success" | "info" | "warning";
    link: string;
    icon: string;
    text: string;
}

export interface IProjects {
    title: string;
    description: string;
    icon: string;
    links: null | Links[]
}