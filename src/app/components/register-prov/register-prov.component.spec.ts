import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProvComponent } from './register-prov.component';

describe('RegisterProvComponent', () => {
  let component: RegisterProvComponent;
  let fixture: ComponentFixture<RegisterProvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
