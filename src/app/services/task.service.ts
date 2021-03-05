import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { filter, map } from 'rxjs/operators';
import { Tarea } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  isLogin = false;

  constructor(
    private http: HttpClient,
  ) { }

  getTasks(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(environment.api);
/*     .pipe(
      filter( (task: Tarea) => {
        console.log(task)
        return task.category === 'Estudiar'
      })
    ); */
  }

  getTaskById(id): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${environment.api}/${id}`);
  }

  newTask(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(environment.api, tarea)
  }
  getIsAuth(): boolean {
    return this.isLogin;
  }
}
