import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedreseravationComponent } from './savedreseravation.component';

describe('SavedreseravationComponent', () => {
  let component: SavedreseravationComponent;
  let fixture: ComponentFixture<SavedreseravationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedreseravationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedreseravationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
