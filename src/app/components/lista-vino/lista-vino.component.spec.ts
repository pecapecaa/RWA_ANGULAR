import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVinoComponent } from './lista-vino.component';

describe('ListaVinoComponent', () => {
  let component: ListaVinoComponent;
  let fixture: ComponentFixture<ListaVinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
