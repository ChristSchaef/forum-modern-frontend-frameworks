import { Routes } from '@angular/router';
import { ClubComponent } from './clubs/club/club.component';
import { ClubsComponent } from './clubs/clubs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { RegisterComponent } from './register/register.component';
import { ClubBookComponent } from './clubs/club/club-book/club-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClubBooksComponent } from './clubs/club/club-books/club-books.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'clubs', component: ClubsComponent },
  { path: 'clubs/:clubId', component: ClubComponent,
    children: [
      { path: 'books', component: ClubBooksComponent },
      { path: 'books/:bookId', component: ClubBookComponent },
    ]
  },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: PageNotFoundComponent },
];
