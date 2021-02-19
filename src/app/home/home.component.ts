import { Component, OnInit } from '@angular/core';

export interface Tarea {
  id: number;
  title: string;
  description: string;
  state: boolean;
  category: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  title = 'Lista de tareas';
  tareas: Tarea[] = [
    {
      id: 1,
      title: 'Ir a la compra',
      description: 'Ir a comprar el pan',
      state: true,
      category: 'Hogar'
    },
    {
      id: 2,
      title: 'Estudiar',
      description: 'Repasar javaScript',
      state: true,
      category: 'Estudiar'
    },
    {
      id: 3,
      title: 'Estudiar Angular',
      description: 'Estudiar Angular, repasar las estructuras de control',
      state: false,
      category: 'Estudiar'
    },
    {
      id: 4,
      title: 'Salir a correr',
      description: 'Estudiar Angular, repasar las estructuras de control',
      state: false,
      category: 'Otros'
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }
}
