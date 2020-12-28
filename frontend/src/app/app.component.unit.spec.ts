import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { AngularMaterialModule } from './material/material.module';

describe('AppComponent - onResize', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AngularMaterialModule, BrowserAnimationsModule],
      declarations: [AppComponent, SidenavListComponent, HeaderComponent],
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
