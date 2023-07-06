import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD OPERATIONS USING ARRAY';

  employees = [
    {
      name: "Surender Singh",
      designation: "Lead"
    },
    {
      name: "Dhirendra Singh",
      designation: "Senior Developer"
    }, {
      name: "Shubham Singh",
      designation: "Developer"
    }
  ];

  formObject: any = {};

  addData() {
    this.employees.push(this.formObject);
    console.log(this.formObject);
    this.formObject = {};
  }

  deleteData(i: number) {
    this.employees.splice(i, 1);
    console.log(i);

  }


  updateData(i: number) {

  }
}
