import { Component } from '@angular/core';
import { Quote } from './quote';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuotesApp';


  quotes:Quote[] = [
    new Quote('Cate','Watch finding Nemo' ,'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Quote('Monic','Buy Cookies' ,'Find an online version and watch merlin find his son',new Date(2020,3,14))
    
  ];

 
 constructor(){
 }

}
