import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarImagenComponent } from './listar-imagen.component';
import { HttpClientModule } from '@angular/common/http';

describe('ListarImagenComponent', () => {
  let component: ListarImagenComponent;
  let fixture: ComponentFixture<ListarImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ListarImagenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
