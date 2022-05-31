import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePostsButtonComponent } from './more-posts-button.component';

describe('MorePostsButtonComponent', () => {
  let component: MorePostsButtonComponent;
  let fixture: ComponentFixture<MorePostsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorePostsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorePostsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
