import { Component } from '@angular/core';
import { requestStatus } from 'src/app/core/models/status.enum';
import { FooterService } from 'src/app/core/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  requestStatus = requestStatus;

  constructor(public readonly footerService: FooterService) {
  }

}
