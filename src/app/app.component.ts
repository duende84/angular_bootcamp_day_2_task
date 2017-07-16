import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Bootcamp Day 2 - Task';
  author:string = 'Andres Diaz';
  packages:string[] = [
    "@angular/animations ^4.0.0",
    "@angular/common ^4.0.0",
    "@angular/compiler ^4.0.0",
    "@angular/core ^4.0.0",
    "@angular/forms ^4.0.0",
    "@angular/http ^4.0.0",
    "@angular/platform-browser ^4.0.0",
    "@angular/platform-browser-dynamic ^4.0.0",
    "@angular/router ^4.0.0",
    "core-js ^2.4.1",
    "rxjs ^5.1.0",
    "zone.js ^0.8.4",
    "@angular/cli 1.2.0",
    "@angular/compiler-cli ^4.0.0",
    "@angular/language-service ^4.0.0",
    "@types/jasmine ~2.5.53",
    "@types/jasminewd2 ~2.0.2",
    "@types/node ~6.0.60",
    "codelyzer ~3.0.1",
    "jasmine-core ~2.6.2",
    "jasmine-spec-reporter ~4.1.0",
    "karma ~1.7.0",
    "karma-chrome-launcher ~2.1.1",
    "karma-cli ~1.0.1",
    "karma-coverage-istanbul-reporter ^1.2.1",
    "karma-jasmine ~1.1.0",
    "karma-jasmine-html-reporter ^0.2.2",
    "protractor ~5.1.2",
    "ts-node ~3.0.4",
    "tslint ~5.3.2",
    "typescript ~2.3.3"
  ]
}
