import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent 
{
     public technologies=["Angular","React","Vue","Node","Express","MongoDB","Java","Spring","Hibernate","JSP","Servlets","JDBC"];     
}
