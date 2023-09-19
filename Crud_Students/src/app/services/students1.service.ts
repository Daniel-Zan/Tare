import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Students1Service {

  constructor( private clientHttp : HttpClient ) { 

  }

  getStudents (){
   return this.clientHttp.get ('http://localhost:3306')
  }
   createStudent(studentData: any) {
     return this.clientHttp.post('http://localhost:3306', studentData)
  }
   updateStudent( updatedData: any) {
     return this.clientHttp.put(`http://localhost:3306`, updatedData)
   }
   deleteStudent() {
    return this.clientHttp.delete('http://localhost:3306')
  }
   
}
