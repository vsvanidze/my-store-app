import { Component } from '@angular/core';
import { socialMediaList, SocialMediaService } from 'src/app/core/services/socialMedia.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
  providers: [SocialMediaService]
})

export class SocialMediaComponent {

  socialMedia: socialMediaList;
  
  constructor(socialMediaService: SocialMediaService) {
    this.socialMedia= socialMediaService.getSocialMedia();
  }


}
