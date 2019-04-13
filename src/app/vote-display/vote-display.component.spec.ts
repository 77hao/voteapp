import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteDisplayComponent } from './vote-display.component';

describe('VoteDisplayComponent', () => {
  let component: VoteDisplayComponent;
  let fixture: ComponentFixture<VoteDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
