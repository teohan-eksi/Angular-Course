import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature: string = 'recipes'

  //manage header menu
  onNavigate(feature){
    this.loadedFeature = feature;
  }
}
