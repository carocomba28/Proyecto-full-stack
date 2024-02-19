package com.gestionnotas.notes.app.repositories.jpa;

import com.gestionnotas.notes.app.entities.NoteEntity;
import com.gestionnotas.notes.app.models.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JpaRepositoryNote extends JpaRepository<NoteEntity, Long> {
    @Query("SELECT n FROM NoteEntity n WHERE n.category = :category")
    List<NoteEntity> findByCategory(@Param("category") String category);

    @Query("SELECT n FROM NoteEntity n WHERE n.isArchived = :archived")
    List<NoteEntity> findAllByArchived(@Param("archived") boolean archived);

}
