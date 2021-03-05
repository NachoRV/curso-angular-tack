import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from 'src/app/home/home.component';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() task: Tarea;
  @Input() i: number;
  @Output() doneTarea = new EventEmitter<number>();
  @Output() deleteTarea = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  done(): void {
  /*   console.log(this.task.id) */
    this.doneTarea.emit(this.task.id);
  }
  delete(): void {
    this.deleteTarea.emit(this.task.id);
  }

}
