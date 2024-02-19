import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { AllNotesComponent } from './components/all-notes/all-notes.component';
import { NotesByCategoryComponent } from './components/notes-by-category/notes-by-category.component';
import { HttpClientModule } from "@angular/common/http";
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewNoteComponent,
    AllNotesComponent,
    NotesByCategoryComponent,
    UpdateNoteComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
