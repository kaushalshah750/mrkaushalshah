import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotingSystemComponent } from './pages/case-studies/voting-system/voting-system.component'; // Import check kar lena
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  // Home Page
  { path: '', component: HomeComponent },
  
  // Case Study Page (SEO friendly URL)
  { path: 'case-studies/secure-voting-system', component: VotingSystemComponent },

  // Koi galat URL dale toh Home pe bhejo
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    scrollPositionRestoration: 'enabled', // Page change hone pe top pe le aayega
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }