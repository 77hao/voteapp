import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSnapComponent } from './vote-snap.component';

describe('VoteSnapComponent', () => {
  let component: VoteSnapComponent;
  let fixture: ComponentFixture<VoteSnapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteSnapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
