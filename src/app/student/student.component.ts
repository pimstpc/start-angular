import { Component } from '@angular/core';
@Component({
  selector: 'my-student',
  templateUrl: './student.component.html',
})
export class StudentComponent {
  firstName: string = 'pp';
  lastName: string = 'kk';
  gender: string = 'female';
  age: number = 25;
}
