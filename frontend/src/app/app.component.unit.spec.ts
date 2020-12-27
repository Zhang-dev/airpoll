import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent - onResize', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should set opened to false if window's innerWidth is less than 768`, () => {
    const resizeEvent = {target: {innerWidth: 767}}

    component.onResize(resizeEvent);

    expect(component.opened).toBeFalse();
    component.opened = true;
  });

  it(`should set opened to true if window's innerWidth is greater than 768`, () => {
    const resizeEvent = {target: {innerWidth: 769}}

    component.onResize(resizeEvent);

    expect(component.opened).toBeTrue();
  });
});
