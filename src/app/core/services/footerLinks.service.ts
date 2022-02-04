import { Injectable } from "@angular/core";

export interface footerLinksList {
    status: string;
    links: Array<{ title: string, titleRout: String, subLinks: Array<{ subLinkTitle: string, subLinkRout: string }> }>

}

@Injectable()

export class FooterLinksService {
    footerLinksData: footerLinksList = {
        status: "ok",
        links: [
            {
                title: 'title',
                titleRout: '#',
                subLinks: [
                    {
                        subLinkTitle: "Item 1",
                        subLinkRout: '#'
                    },
                    {
                        subLinkTitle: "Item 2",
                        subLinkRout: '#'
                    },
                    {
                        subLinkTitle: "Item 3",
                        subLinkRout: '#'
                    },
                    {
                        subLinkTitle: "Item 4",
                        subLinkRout: '#'
                    },
                    {
                        subLinkTitle: "Item 5",
                        subLinkRout: '#'
                    }
                ]
            },
            {
                title: 'title',
                titleRout: '#',
                subLinks: [
                    {
                        subLinkTitle: "Item 1",
                        subLinkRout: '#'
                    },
                    {
                        subLinkTitle: "Item 2",
                        subLinkRout: '#'
                    },
                    {
                        subLinkTitle: "Item 3",
                        subLinkRout: '#'
                    },
                    {
                        subLinkTitle: "Item 4",
                        subLinkRout: '#'
                    },
                    {
                        subLinkTitle: "Item 5",
                        subLinkRout: '#'
                    }
                ]
            },
            {
                title: 'title',
                titleRout: '#',
                subLinks: [
                    {
                        subLinkTitle: "Item 1",
                        subLinkRout: '#'
                    },
                    {
                        subLinkTitle: "Item 2",
                        subLinkRout: '#'
                    },
                    {
                        subLinkTitle: "Item 3",
                        subLinkRout: '#'
                    },
                    {
                        subLinkTitle: "Item 4",
                        subLinkRout: '#'
                    },
                    {
                        subLinkTitle: "Item 5",
                        subLinkRout: '#'
                    }
                ]
            }
        ]
    }

    getFooterLinks() {
        return this.footerLinksData;
    }

}