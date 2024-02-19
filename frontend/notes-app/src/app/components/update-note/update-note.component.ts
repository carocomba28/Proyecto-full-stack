import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/Note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css'],
})
export class UpdateNoteComponent {
  noteForm!: FormGroup;
  noteId: number = 0;
  note: Note;

  constructor(private formBuilder: FormBuilder, private notesService: NotesService, private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.noteId = +id;
    }
    this.note = new Note();
  }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      title: '',
      description: '',
      category: '',
      archived: false
    });
  
    this.notesService.getNote(this.noteId).subscribe((note) => {
      this.note = note;
      this.noteForm.patchValue(note);
    });
  }

  onSubmit(): void {
    const updatedNote = this.noteForm.value;
    updatedNote.id = this.note.id;
    this.notesService.updateNote(updatedNote).subscribe(() => {
      this.router.navigate(['/all-notes']);
    });
  }
}
