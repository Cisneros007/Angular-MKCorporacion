import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalMtpeComponent } from './portal-mtpe.component';

describe('PortalMtpeComponent', () => {
  let component: PortalMtpeComponent;
  let fixture: ComponentFixture<PortalMtpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalMtpeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalMtpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
