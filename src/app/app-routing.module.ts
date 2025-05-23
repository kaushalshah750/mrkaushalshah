import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { ProjectsComponent } from './shared/projects/projects.component';
import { ExperienceComponent } from './shared/experience/experience.component';
import { ServicesComponent } from './shared/services/services.component';
import { BlogsComponent } from './shared/blogs/blogs.component';
import { BlogDetailComponent } from './shared/blogs/blog-detail/blog-detail.component';
import { ProjectDetailComponent } from './shared/projects/project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projects/:projectId',
    component: ProjectDetailComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent,
  },
  {
    path: 'blog/:title',
    component: BlogDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
