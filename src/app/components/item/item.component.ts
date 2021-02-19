import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from 'src/app/home/home.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() task: Tarea;
  @Input() i: number;

  constructor() { }

  ngOnInit(): void {
  }

}
