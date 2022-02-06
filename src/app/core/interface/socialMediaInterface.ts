export interface socialMediaInterface {
    status: string;
    title: string;
    number: string;
    socialLinks: Array<socialLinksInterface>;
}

interface socialLinksInterface {
    name: string,
    icon: string,
    url?: string
}