import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionLinesComponent } from './action-lines.component';

describe('ActionLinesComponent', () => {
  let component: ActionLinesComponent;
  let fixture: ComponentFixture<ActionLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
