import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'viewPasswordPipe'})
export class ViewPasswordPipe implements PipeTransform {
  transform(password: String,state:Boolean): String {
    return state?password:"*".repeat(password.length);
  }
}