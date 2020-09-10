import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.scss']
})
export class ToDoListComponentComponent implements OnInit {
  @Input('listOfTask') listOfTask : any[] = [];
  doneTask : any[] = [];
  constructor(
   ) { 
    console.log(this.listOfTask)
   }

  ngOnInit() {
  }

  addTodoneList(ev , index){
    let task = this.listOfTask[index]
    this.doneTask.push(task);
    this.listOfTask.splice(index , 1);
  }

  notDone(ev){
     this.listOfTask.push(ev);
  }
}
