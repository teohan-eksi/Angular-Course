import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'app-add-item',
    templateUrl: 'add-item.component.html'
})

export class AddItemComponent{
    newServerName = '';
    newServerContent = '';
    @Output() serverElements = new EventEmitter<{type: string, name: string, content: string}>();
       
    onAddServer() {
    this.serverElements.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}