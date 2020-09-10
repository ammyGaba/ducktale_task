import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {
  @Input() doneList : any[];
  @Output() notDone : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  removeFromList(ev ,index){
   this.notDone.emit(this.doneList[index]);
   this.doneList.splice(index , 1);
  }
}
