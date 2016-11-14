import { Routes, RouterModule } from '@angular/router';
import { CoderagaComponent } from './coderaga.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

 const APP_ROUTES: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: CoderagaComponent },
 { path: 'kartikjagdale', component: PortfolioComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);