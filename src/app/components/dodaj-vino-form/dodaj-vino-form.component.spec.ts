import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajVinoFormComponent } from './dodaj-vino-form.component';

describe('DodajVinoFormComponent', () => {
  let component: DodajVinoFormComponent;
  let fixture: ComponentFixture<DodajVinoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajVinoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajVinoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
