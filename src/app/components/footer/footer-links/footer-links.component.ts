import { Component } from '@angular/core';
import { footerLinksList, FooterLinksService } from 'src/app/core/services/footerLinks.service';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.scss'],
  providers: [FooterLinksService]
})

export class FooterLinksComponent{

  footerLinks: footerLinksList;
  
  constructor(footerLinksService: FooterLinksService) {
    this.footerLinks = footerLinksService.getFooterLinks();
   }

}
