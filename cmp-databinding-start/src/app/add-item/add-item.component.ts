import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";


@Component({
    selector: 'app-add-item',
    templateUrl: 'add-item.component.html'
})

export class AddItemComponent{
    newServerName = '';
    newServerContent = '';
    @Output() serverElements = new EventEmitter<{type: string, name: string, content: string}>();
      
    @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

    onAddServer(nameInput: HTMLInputElement){
    this.serverElements.emit({
      type: 'server',
      //got with local reference in the template
      name: nameInput.value,
      //got with ViewChild
      content: this.serverContentInput.nativeElement.value 
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