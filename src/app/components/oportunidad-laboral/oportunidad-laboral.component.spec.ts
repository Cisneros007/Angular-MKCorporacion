import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunidadLaboralComponent } from './oportunidad-laboral.component';

describe('OportunidadLaboralComponent', () => {
  let component: OportunidadLaboralComponent;
  let fixture: ComponentFixture<OportunidadLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OportunidadLaboralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OportunidadLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
