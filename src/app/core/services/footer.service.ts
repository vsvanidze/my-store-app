import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { footerLinksInterface } from 'src/app/core/interface/footerLinksInterface';
import { socialMediaInterface } from 'src/app/core/interface/socialMediaInterface';
import { footerLinksData } from 'src/app/core/constants/footerLinksData';
import { socialIconsData } from 'src/app/core/constants/socialIconsData';

@Injectable({
    providedIn: 'root'
})

export class FooterService {

    footerLinksData: footerLinksInterface = footerLinksData;
    socialIconsData: socialMediaInterface = socialIconsData;

    public footerLinksData$ = of(this.footerLinksData).pipe(delay(700));
    public footerSocialIcons$ = of(this.socialIconsData).pipe(delay(700));

}