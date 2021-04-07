import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitformComponent } from './initform.component';

describe('InitformComponent', () => {
  let component: InitformComponent;
  let fixture: ComponentFixture<InitformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
