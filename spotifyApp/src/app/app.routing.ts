import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { CreditComponent } from './components/credit/credit.component';
import { AlbumComponent } from './components/album/album.component';

const App_routes: Routes =[
  { path: 'about', component: AboutComponent},
  { path: '', component: SearchComponent},
  { path: 'artist/:id', component: ArtistComponent},
  { path: 'credit', component: CreditComponent},
  { path: 'album/:id', component: AlbumComponent}
];

export const routing = RouterModule.forRoot(App_routes);
