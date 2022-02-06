import { Component, Input } from '@angular/core';
import { FooterService } from 'src/app/core/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  @Input() copyrightYear: number = 2020;

  constructor(public readonly footerService: FooterService) {
  }

}
