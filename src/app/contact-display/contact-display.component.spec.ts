import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ContactDisplayComponent } from './contact-display.component';

describe('ContactDisplayComponent', () => {
  let component: ContactDisplayComponent;
  let fixture: ComponentFixture<ContactDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDisplayComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(ContactDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
