import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeRequestsComponent } from './cake-requests.component';

describe('CakeRequestsComponent', () => {
  let component: CakeRequestsComponent;
  let fixture: ComponentFixture<CakeRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakeRequestsComponent]
    });
    fixture = TestBed.createComponent(CakeRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
