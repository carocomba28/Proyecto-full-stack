import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {
  newNoteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private notesService: NotesService, private router: Router) {}

  ngOnInit(): void {
    this.newNoteForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    const newNote = this.newNoteForm.value;
    this.notesService.saveNote(newNote).subscribe(() => {
      this.router.navigate(['/all-notes']);
    });
  }
}
