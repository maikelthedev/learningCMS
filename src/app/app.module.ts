import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrandingComponent } from './branding/branding.component';
import { LegendComponent } from './legend/legend.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {UserService} from './user.service';


const routes: Routes = [
  {path: '', redirectTo: 'skills', pathMatch: 'full'},
  {path: 'skills', component: SkillsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandingComponent,
    LegendComponent,
    LatestnewsComponent,
    ProjectsComponent,
    FooterComponent,
    SpinnerComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: LocationStrategy,
  useClass: HashLocationStrategy},
    UserService,
    {provide: 'SERVER_URL', useValue: 'https://www.maikel.uk'}
],
  bootstrap: [AppComponent]
})
export class AppModule {

}
