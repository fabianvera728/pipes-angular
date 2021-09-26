import { Component } from '@angular/core';
import { registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';


registerLocaleData(localeEs);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes-App';
}
