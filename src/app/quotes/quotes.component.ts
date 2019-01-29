import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes= [
    new Quotes(1,'The future belongs to those who prepare for it today.','Malcolm x',new Date(2018,3,14) ),
    new Quotes(2,'Stay hungry, stay foolish.','Steve Jobs ',new Date(2018,6,9),), 
    new Quotes(3, 'A great man is always willing to be little.','Ralph Waldo Emergon',new Date(2018,1,12) ,),
    new Quotes(4, 'If you judge people, you have no time to love them.','Mather Teresa',new Date(2018,0,18) ),
    new Quotes(5, 'Good friends, good books, and a sleepy conscience: this is the ideal life.',' Mark Twain',new Date(2018,2,14)),
    new Quotes(6, 'If you work hard and meet your responsibilities, you can get ahead, no matter where you come from, what you look like or who you love. ','Barack Obama',new Date(2018,3,14),),
  
  ]
  
  addNewGoal(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}


  deletequotes(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
        this.quotes.splice(index,1);
        }
        }


  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}


  constructor() { }

  ngOnInit() {
  }

}
