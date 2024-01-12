import { Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';

export const routes: Routes = [
    { path: 'books', component: BooksComponent },
    { path: 'technologies', component: TechnologiesComponent }
];
