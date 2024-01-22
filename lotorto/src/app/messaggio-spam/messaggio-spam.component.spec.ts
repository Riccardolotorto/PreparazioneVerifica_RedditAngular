import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessaggioSpamComponent } from './messaggio-spam.component';

describe('MessaggioSpamComponent', () => {
  let component: MessaggioSpamComponent;
  let fixture: ComponentFixture<MessaggioSpamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessaggioSpamComponent]
    });
    fixture = TestBed.createComponent(MessaggioSpamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
