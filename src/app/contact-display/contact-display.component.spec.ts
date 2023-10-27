import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ContactDisplayComponent } from './contact-display.component';

describe('ContactDisplayComponent', () => {
  let component: ContactDisplayComponent;
  let fixture: ComponentFixture<ContactDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDisplayComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(ContactDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Friend Me" in h1', waitForAsync(() => {
    const fixture = TestBed.createComponent(ContactDisplayComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Friend Me');
  }));

  it('tagline in h2', waitForAsync(() => {
    const fixture = TestBed.createComponent(ContactDisplayComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(
      'The new way to find people'
    );
  }));
});
