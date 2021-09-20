import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumWebComponent } from './forum-web.component';

describe('ForumWebComponent', () => {
  let component: ForumWebComponent;
  let fixture: ComponentFixture<ForumWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
