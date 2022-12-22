import { Component } from '@angular/core';

interface Student {
  id: Number;
  name: String;
  delete: String;
  email: String;
  gender: String;
}

const studentData: Student[] = [
  {
    id: 1,
    name: 'Hemant Borse',
    email: 'hemantwork24@gmail.com',
    gender: 'M',
    delete: ' ',
  },
  {
    id: 2,
    name: 'Hemant Borse',
    email: 'email@gmail.com',
    gender: 'He',
    delete: ' ',
  },
  {
    id: 3,
    name: 'Hemant Borse',
    email: 'email@gmail.com',
    gender:  'M',
    delete: ' ',
  },
  {
    id: 4,
    name: 'Hemant Borse',
    email: 'email@gmail.com',
    gender:  'M',
    delete: ' ',
  },
  {
    id: 5,
    name: 'Hemant Borse',
    email: 'email@gmail.com',
    gender:  'M',
    delete: ' ',
  },
  {
    id: 6,
    name: 'Heamant borse',
    email: 'email@gmail.com',
    gender:  'M',
    delete: ' ',
  },
  {
    id: 7,
    name: 'hemant borse',
    email: 'email@gmail.com',
    gender:  'M',
    delete: ' ',
  },
  {
    id: 8,
    name: 'hemant borse',
    email: 'email@gmail.com',
    gender:  'M',
    delete: ' ',
  },
  {
    id: 9,
    name: 'hemant',
    email: 'email@gmail.com',
    gender: 'M',
    delete: ' ',
  },
  {
    id: 10,
    name: 'borse',
    email: 'email@gmail.com',
    gender: 'M',
    delete: ' ',
  },
];

@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css'],
})
export class MytableComponent {
  constructor() {}

  students: Student[] = studentData;
  displayedColumns: string[] = ['id', 'name', 'email', 'delete'];
  dataSource = this.students;

  removeRow(id: Number) {
    let yes:Boolean = confirm("Do you want to delete this entry?");
    if(yes) {
      this.dataSource = this.dataSource.filter((u) => u.id !== id);
      alert("Entry was deleted");
    }
    else {
      alert("Entry is not deleted");
    }
  }
}