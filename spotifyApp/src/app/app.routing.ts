import {Routes, RouterModule} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

const App_routes: Routes =[
  { path: '', component: NavbarComponent },
  { path: 'about', component: AboutComponent},
  { path: '', component: SearchComponent}
];

export const routing = RouterModule.forRoot(App_routes);
