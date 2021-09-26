import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'videopipe'
})
export class SafeDOMPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer) { }

  transform(value: any, url: any): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}