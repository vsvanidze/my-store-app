import { Injectable } from "@angular/core";

export interface socialMediaList {
    status: string;
    title: string;
    number: string;
    socialLinks: Array<{ name: string, icon: string, url?: string }>;
}

@Injectable()

export class SocialMediaService {
    socialMediaData: socialMediaList = {
        status: "ok",
        title: 'title',
        number: 'nn-nn-nn',
        socialLinks: [
            {
                name: "instagram",
                icon: 'assets/images/Icon_instagram.png',
                url: 'https://www.instagram.com',
            },
            {
                name: "whatsapp",
                icon: 'assets/images/Icon_whatsapp.png',
                url: 'https://www.whatsapp.com',
            },
            {
                name: "facebook",
                icon: 'assets/images/Icon_Facebook.png',
                url: 'https://www.facebook.com',
            }
        ]
    }
    getSocialMedia() {
        return this.socialMediaData;
    }
}