import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Tarea } from '../interfaces/task.interface';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  title = 'Lista de tareas';
  tareas: Tarea[] = [];
  textSearch = '';

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe(
      tasks => {
        this.tareas = tasks;
      },
      error => {
        console.log('error', error)
      }
    )

  }
  get search(): Tarea[] {
/*     return this.tareas.filter( function (tarea) {
      return tarea.title.toLocaleLowerCase().includes(this.textSearch.toLocaleLowerCase())
    } ); */
    return this.tareas.filter( tarea => tarea.title.toLocaleLowerCase().includes(this.textSearch.toLocaleLowerCase()));
  }
  doneTarea(id: number) {
    this.tareas.map(tarea => {
      if( tarea.id === id) {
        tarea.state = !tarea.state;
      }
    })
    
  }
  delete(id: number){
    for( let i = this.tareas.length -1; i>= 0; i--) {
      if(this.tareas[i].id === id) {
        this.tareas.splice(i ,1);
      }
    }
  }
}
