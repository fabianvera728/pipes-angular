import { UpperCasePipe } from '@angular/common';
import { NullTemplateVisitor } from '@angular/compiler';
import { Component } from '@angular/core';
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class Body {

    cadenaTest = "HolA mUndo";
    dateTest = new Date(1988, 3, 15);
    numberPi = Math.PI;
    salaryTest:Number = 10000;
    videoTest:string = 'wDjeBNv6ip0';

    stateUpperCase = false;
    stateLowerCase = false;
    stateDecimalPipe = false;
    statePasswordPipe = false;
    stateDate = false; // start with true == shortDate
    statePercentPipe = false;
    stateCurrencyPipe = false;
    statePromisePipe = false;
    stateSlicePipe = false;
    stateJsonPipe = false;
    object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2]}}

    promise = new Promise<string>((resolve) =>
        setTimeout(() => {
            resolve('Time');
        }, 4000)
    );

    get formatDate() { 
        return this.stateDate ? 'shortDate' : 'fullDate'; 
    }
    toggleFormat() {
        this.stateDate = !this.stateDate;
    }
}