import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote"
import { from } from 'rxjs';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  


  quotes:Quote[] = [
    new Quote('Cate', 'Watch finding Nemo' ,'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Quote('Monic','Buy Cookies' ,'Find an online version and watch merlin find his son',new Date(2020,3,14))
    
  ];

  addNewQuote(Quote){
    let quoteLength = this.quotes.length;
    Quote.id = quoteLength+1;
    Quote.quote = quoteLength+1;
    Quote.completeDate = new Date(Quote.completeDate)
    this.quotes.push(Quote)
  }
  // addNewQuote(Quote){
  //   let quoteLength = this.quotes.length;
  //   Quote.id = quoteLength+1;
  //   Quote.completeDate = new Date(Quote.completeDate);
  //   this.quotes.push(Quote);
  // }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1);
      }
      }
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}

