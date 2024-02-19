package com.gestionnotas.notes.app.service.ServiceNoteImpl;

import com.gestionnotas.notes.app.entities.NoteEntity;
import com.gestionnotas.notes.app.models.Note;
import com.gestionnotas.notes.app.repositories.jpa.JpaRepositoryNote;
import com.gestionnotas.notes.app.service.ServiceNote;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceNoteImpl implements ServiceNote {
    @Autowired
    private JpaRepositoryNote jpaRepositoryNote;

    @Autowired
    private ModelMapper modelMapper;
    @Override
    public Note saveNote(Note note) {
        NoteEntity noteEntity = modelMapper.map(note, NoteEntity.class);
        return modelMapper.map(jpaRepositoryNote.save(noteEntity), Note.class);
    }

    @Override
    public Note updateNote(Long id, Note note) {
        NoteEntity noteEntity = jpaRepositoryNote.getReferenceById(id);
        noteEntity.setTitle(note.getTitle());
        noteEntity.setArchived(note.isArchived());
        noteEntity.setCategory(note.getCategory());
        noteEntity.setDescription(note.getDescription());
        return modelMapper.map(jpaRepositoryNote.save(noteEntity), Note.class);
    }

    @Override
    public void deleteNote(Long id) {
        if (jpaRepositoryNote.existsById(id)) {
            jpaRepositoryNote.deleteById(id);
        } else {
            throw new IllegalArgumentException("Note with ID " + id + " don't exist");
        }
    }

    @Override
    public Note[] getNotesByCategory(String category) {
        List<NoteEntity> noteEntities = jpaRepositoryNote.findByCategory(category);
        return noteEntities.stream().map(noteEntity -> modelMapper.map(noteEntity, Note.class)).toArray(Note[]::new);
    }

    @Override
    public Note updateArchived(Long id) {
        if (jpaRepositoryNote.existsById(id)) {
            NoteEntity noteEntity = jpaRepositoryNote.getReferenceById(id);
            boolean updatedArchived = !noteEntity.isArchived();
            noteEntity.setArchived(updatedArchived);
            return modelMapper.map(jpaRepositoryNote.save(noteEntity), Note.class);
        } else {
            throw new IllegalArgumentException("Note with ID " + id + " don't exist");
        }
    }

    @Override
    public Note[] listNotes(boolean archived) {
        List<NoteEntity> noteEntities = jpaRepositoryNote.findAllByArchived(archived);
        return noteEntities.stream().map(noteEntity -> modelMapper.map(noteEntity, Note.class)).toArray(Note[]::new);
    }

    @Override
    public Note[] getAllNotes() {
        List<NoteEntity> noteEntities = jpaRepositoryNote.findAll();
        return noteEntities.stream().map(noteEntity -> modelMapper.map(noteEntity, Note.class)).toArray(Note[]::new);
    }

    @Override
    public Note getNoteById(Long id) {
        if (jpaRepositoryNote.existsById(id)) {
            NoteEntity noteEntity = jpaRepositoryNote.getReferenceById(id);
            return modelMapper.map(noteEntity, Note.class);
        } else {
            throw new IllegalArgumentException("Note with ID " + id + " don't exist");
        }
    }
}
