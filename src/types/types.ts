export type Project = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    demoUrl?: string;
    codeUrl?: string;
};