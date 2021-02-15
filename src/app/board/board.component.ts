import {Component, OnInit} from '@angular/core';
import {Story} from '../item/model/story.model';
import {Priority} from '../item/model/Priority.enum';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  todo: Story[] = [
    {deadLine: new Date(), description: 'foo', priority: Priority.High, title: 'first Todo'},
    {deadLine: new Date(), description: 'foo', priority: Priority.High, title: 'second Todo'},
    {deadLine: new Date(), description: 'foo', priority: Priority.High, title: 'third Todo'}
  ];
  inProgress: Story[] = [
    {deadLine: new Date(), description: 'foo', priority: Priority.High, title: 'first Progress'},
    {deadLine: new Date(), description: 'foo', priority: Priority.High, title: 'second Progress'},
    {deadLine: new Date(), description: 'foo', priority: Priority.High, title: 'third Progress'}
  ];
  done: Story[] = [
    {deadLine: new Date(), description: 'foo', priority: Priority.High, title: 'first done'},
    {deadLine: new Date(), description: 'foo', priority: Priority.High, title: 'second done'},
    {deadLine: new Date(), description: 'foo', priority: Priority.High, title: 'third done'}
  ];

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  print(){
    console.log("todo");
    console.table(this.todo);
    console.log("inProgress");
    console.table(this.inProgress);
    console.log("done");
    console.table(this.done);
  }

}
