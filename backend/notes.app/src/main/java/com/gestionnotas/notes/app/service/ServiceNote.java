package com.gestionnotas.notes.app.service;

import com.gestionnotas.notes.app.models.Note;
import org.springframework.stereotype.Service;

@Service
public interface ServiceNote {
    Note saveNote (Note note);
    Note updateNote (Long id, Note note);
    void deleteNote (Long id);
    Note[] getNotesByCategory (String category);
    Note updateArchived (Long id);
    Note[] listNotes (boolean archived);
    Note[] getAllNotes ();

    Note getNoteById (Long id);
}
