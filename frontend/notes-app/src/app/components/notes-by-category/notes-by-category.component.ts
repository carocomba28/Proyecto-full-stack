import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/models/Note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes-by-category',
  templateUrl: './notes-by-category.component.html',
  styleUrls: ['./notes-by-category.component.css'],
})
export class NotesByCategoryComponent {
  categoryForm!: FormGroup;
  notes: Note[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private notesService: NotesService
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      category: ['', [Validators.required]],
    });
  }

  getNotesByCategory() {
    const category = this.categoryForm.get('category')?.value;
    this.notesService.getNotesByCategory(category).subscribe((notes) => {
      this.notes = notes;
    });
  }

  archivedUnarchived(id: number) {
    this.notesService.archiveOrUnarchiveNote(id).subscribe((response) => {
      this.getNotesByCategory();
    });
  }

  deleteNote(id: number) {
    this.notesService.deleteNote(id).subscribe((response) => {
      this.getNotesByCategory();
    });
  }
}
