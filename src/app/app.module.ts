import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatDividerModule, MatProgressBarModule, MatListModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactIconComponent } from './shared/contact-icon/contact-icon.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDescriptionComponent } from './courses-description/courses-description.component';
import { ForumComponent } from './forum/forum.component';
import { CoursePreviewComponent } from './course-preview/course-preview.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CourseCategoryComponent } from './courses/course-category/course-category.component';
import { AllCoursesComponent } from './courses/all-courses/all-courses.component';
import { PreviewContentComponent } from './course-preview/preview-content/preview-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'course-preview', pathMatch: 'full' },
  { path: 'preview-content',  component: PreviewContentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactIconComponent,
    LoginComponent,
    UserDashboardComponent,
    CoursesComponent,
    CoursesDescriptionComponent,
    ForumComponent,
    CoursePreviewComponent,
    ContactComponent,
    AboutComponent,
    CategoriesComponent,
    CourseCategoryComponent,
    AllCoursesComponent,
    PreviewContentComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    NgbModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatSidenavModule, 
    MatDividerModule, 
    MatProgressBarModule, 
    MatListModule, 
    MatIconModule, 
    MatToolbarModule, 
    YoutubePlayerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
