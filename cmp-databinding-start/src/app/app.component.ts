import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  serverElementsArray = [];

  getServerElements(serverElems){
    this.serverElementsArray.push(serverElems);
  }

  constructor(){
    console.log("app component constructor run");
  }

  //use for reacting to changes
  ngOnChanges(changes: SimpleChanges){
    console.log("app component " + changes); 
  }

  ngOnInit(){
    console.log("app component init"); 
  }

  ngDoCheck(){
    console.log("app component DoCheck");
  }

  ngAfterContentInit(){
    console.log("app component AfterContentInit");
  }

  //elements are in the DOM and rendered at this point.
  ngAfterViewInit(){
    console.log("app component AfterViewInit");
  }

  ngOnDestroy(){
    console.log("app component onDestroy");
  }

}
