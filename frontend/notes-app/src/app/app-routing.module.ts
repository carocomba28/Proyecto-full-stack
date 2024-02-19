import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { AllNotesComponent } from './components/all-notes/all-notes.component';
import { NotesByCategoryComponent } from './components/notes-by-category/notes-by-category.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/new-note', pathMatch: 'full' },
  { path: 'new-note', component: NewNoteComponent },
  { path: 'all-notes', component: AllNotesComponent },
  { path: 'notes-by-category', component: NotesByCategoryComponent },
  { path: 'update-note/:id', component: UpdateNoteComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/new-note' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
