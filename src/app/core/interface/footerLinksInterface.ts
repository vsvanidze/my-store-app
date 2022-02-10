export interface footerLinksInterface {
    status: string;
    links: Array<linksInterface>
}

interface linksInterface {
    title: string,
    titleRout: String,
    subLinks: Array<subLinksInterface>
}

interface subLinksInterface {
    subLinkTitle: string,
    subLinkRout: string
}