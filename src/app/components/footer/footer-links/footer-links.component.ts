import { Component, Input } from '@angular/core';
import { footerLinksInterface } from 'src/app/core/interface/footerLinksInterface';
import { requestStatus } from 'src/app/core/models/status.enum';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.scss']
})

export class FooterLinksComponent {

  requestStatus = requestStatus;

  @Input() footerLinks!: footerLinksInterface;

}
