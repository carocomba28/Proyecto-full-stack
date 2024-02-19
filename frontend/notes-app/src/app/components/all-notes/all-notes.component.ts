import { Component } from '@angular/core';
import { Note } from 'src/app/models/Note';
import { NotesService } from 'src/app/services/notes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css'],
})
export class AllNotesComponent {
  notes: Note[] = [];
  
  totalNotes: number = 0;

  constructor(private notesService: NotesService) {
    this.getNotes();
  }

  getNotes(): void {
    this.notesService.getNotes().subscribe((data) => {
      console.log(data);
      this.notes = data;
    });
  }

  archivedUnarchived(id: number) {
    this.notesService.archiveOrUnarchiveNote(id).subscribe((response) => {
      this.getNotes();
    });
  }

  deleteNote(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la nota',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.notesService.deleteNote(id).subscribe((response) => {
          this.getNotes();
          Swal.fire('Eliminado', 'La nota ha sido eliminada', 'success');
        });
      }
    });
  }

  listUnarchivedNotes() {
    this.notesService.getUnarchivedNotes().subscribe((data) => {
      this.notes = data;
      this.totalNotes = data.length;
    });
  }

  listArchivedNotes() {
    this.notesService.getArchivedNotes().subscribe((data) => {
      this.notes = data;
      this.totalNotes = data.length;
    });
  }

  listAllNotes() {
    this.getNotes();
  }
}
