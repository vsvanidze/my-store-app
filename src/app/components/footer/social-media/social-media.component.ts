import { Component, Input } from '@angular/core';
import { socialMediaInterface } from 'src/app/core/interface/socialMediaInterface';
import { requestStatus } from 'src/app/core/models/status.enum';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})

export class SocialMediaComponent {

  requestStatus = requestStatus;

  @Input() socialMedia!: socialMediaInterface;

}
