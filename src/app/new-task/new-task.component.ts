import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
 title = new FormControl('')
 isValidTitle2 = false;

 tareaFrom = new FormGroup(
   {
    title: new FormControl(['']),
    category: new FormControl(''),
    description: new FormControl(''),
   }
 )
 taresForm2 = this.fb.group({
   title: ['', [Validators.required, Validators.minLength(3)]],
   category: ['', [Validators.required]],
   description: ['', [Validators.required]]
 })
  constructor(
    private fb : FormBuilder,
  ) { }

  ngOnInit(): void {
   
    this.taresForm2.get('description').setValue('Hola que tal estas')

  }

  get isValidTitle(): boolean {
    return this.taresForm2.get('title').invalid;
  }
  get isValid() {
    return this.isValidTitle2;
  }
  send() {
    console.log('send')

    if(this.taresForm2.value) {
      console.log(this.taresForm2.value)
    }
  }
}
