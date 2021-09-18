import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderMenuComponent } from './render-menu.component';

describe('RenderMenuComponent', () => {
  let component: RenderMenuComponent;
  let fixture: ComponentFixture<RenderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
