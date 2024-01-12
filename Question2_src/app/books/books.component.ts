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
  public books=["Angular book","React book","Node book","Express book","Java book","AI book","JDBC book","Servlet book","JSP book","MongoDb book"];

}
