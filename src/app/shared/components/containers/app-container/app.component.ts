import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'bed-custom',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/bed.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'calendar-custom',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/calendar.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'money-custom',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/money.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'arrow-calendar-custom',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/calendar-arrowed.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'moon-custom',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/moon.svg')
    );
  }

}
