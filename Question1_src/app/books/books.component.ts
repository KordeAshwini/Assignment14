import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent 
{
     public books=["Angular Book","React Book","Vue Book","Node Book","Express Book","MongoDB Book","Java Book","Spring Book","Hibernate Book","JSP Book","Servlets Book","JDBC Book"]
}
