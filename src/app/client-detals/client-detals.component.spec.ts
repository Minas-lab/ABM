import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetalsComponent } from './client-detals.component';

describe('ClientDetalsComponent', () => {
  let component: ClientDetalsComponent;
  let fixture: ComponentFixture<ClientDetalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
