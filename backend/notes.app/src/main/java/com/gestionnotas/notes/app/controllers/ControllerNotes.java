package com.gestionnotas.notes.app.controllers;

import com.gestionnotas.notes.app.entities.NoteEntity;
import com.gestionnotas.notes.app.models.Note;
import com.gestionnotas.notes.app.service.ServiceNote;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/notes")
public class ControllerNotes {
    @Autowired
    private ServiceNote serviceNote;
    @Autowired
    private ModelMapper modelMapper;

    @PostMapping("/saveNote")
    public ResponseEntity<Note> saveNote(@RequestBody @Valid Note note){
        Note savedNote = serviceNote.saveNote(note);
        return new ResponseEntity<>(savedNote, HttpStatus.CREATED);
    }

    @PutMapping("/updateNote")
    public ResponseEntity<Note> updateNote(Long id, @RequestBody @Valid Note note){
        Note updatedNote = serviceNote.updateNote(id, note);
        return new ResponseEntity<>(updatedNote, HttpStatus.OK);
    }

    @DeleteMapping("/deleteNote")
    public ResponseEntity<Note> deleteNote(Long id){
        serviceNote.deleteNote(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/getNotesByCategory")
    public ResponseEntity<Note[]> getNotesByCategory(String category){
        Note[] notes = serviceNote.getNotesByCategory(category);
        return new ResponseEntity<>(notes, HttpStatus.OK);
    }

    @PutMapping("/archiveNote")
    public ResponseEntity<Note> archiveNote(Long id){
        Note note = serviceNote.updateArchived(id);
        return new ResponseEntity<>(note, HttpStatus.OK);
    }

    @GetMapping("/listNotes")
    public ResponseEntity<Note[]> listNotes(boolean archived){
        Note[] notes = serviceNote.listNotes(archived);
        return new ResponseEntity<>(notes, HttpStatus.OK);
    }

    @GetMapping("/getAllNotes")
    public ResponseEntity<Note[]> getAllNotes(){
        Note[] notes = serviceNote.getAllNotes();
        return new ResponseEntity<>(notes, HttpStatus.OK);
    }

    @GetMapping("/getNoteById")
    public ResponseEntity<Note> getNoteById(Long id){
        Note note = serviceNote.getNoteById(id);
        return new ResponseEntity<>(note, HttpStatus.OK);
    }
}
