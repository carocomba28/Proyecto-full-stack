import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesByCategoryComponent } from './notes-by-category.component';

describe('NotesByCategoryComponent', () => {
  let component: NotesByCategoryComponent;
  let fixture: ComponentFixture<NotesByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesByCategoryComponent]
    });
    fixture = TestBed.createComponent(NotesByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
