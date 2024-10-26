import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AmercianfootbalComponent } from './amercianfootbal/amercianfootbal.component';
import { BasketballComponent } from './basketball/basketball.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IcehockeyComponent } from './icehockey/icehockey.component';
import { VolleyballComponent } from './volleyball/volleyball.component';
import { LacrosseComponent } from './lacrosse/lacrosse.component';
import { CricketComponent } from './cricket/cricket.component';
import { HoodiesComponent } from './hoodies/hoodies.component';
import { PoloComponent } from './polo/polo.component';
import { SoftballComponent } from './softball/softball.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
  { path: 'amercianfootbal', component: AmercianfootbalComponent },
  { path: 'basketball', component: BasketballComponent},
  { path: 'icehockey', component: IcehockeyComponent},
  { path: 'volleyball', component: VolleyballComponent},
  { path: 'lacrosse', component: LacrosseComponent},
  { path: 'cricket', component: CricketComponent},
  { path: 'hoodies', component: HoodiesComponent},
  { path: 'polo', component: PoloComponent},
  { path: 'softball', component: SoftballComponent},
  { path: '**', component: PagenotfoundComponent }
];
