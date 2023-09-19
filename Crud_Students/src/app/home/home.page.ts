import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Students1Service } from '../services/students1.service'; 


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  mamadaymedia : {} | undefined
  constructor(private services: Students1Service) {}

  ngOnInit(){
    this.services.getStudents().subscribe((response)=>{
      this.mamadaymedia=response
    })
  
  }
}
