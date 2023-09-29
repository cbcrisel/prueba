import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarImagenComponent } from './buscar-imagen.component';
import { HttpClientModule } from '@angular/common/http';

describe('BuscarImagenComponent', () => {
  let component: BuscarImagenComponent;
  let fixture: ComponentFixture<BuscarImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [BuscarImagenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
