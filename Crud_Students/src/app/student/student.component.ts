import { Component, OnInit } from '@angular/core';
import { Students1Service } from '../services/students1.service'; 

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: any[] = []; 

  constructor(private studentService: Students1Service) {}

  ngOnInit() {
   
    this.studentService.getStudents().subscribe(
      (data: any[]) => {
        this.students = data;
      }
    );
  }
}
