import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatListItem } from '@angular/material/list';
import { By } from '@angular/platform-browser';
import { AngularMaterialModule } from 'src/app/material/material.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [AngularMaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have mat-icon menu', () => {
    let icons = fixture.debugElement.queryAll(By.directive(MatIcon));
    let index = icons.findIndex(de => de.nativeElement.innerText== 'menu');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have mat-icon air', () => {
    let icons = fixture.debugElement.queryAll(By.directive(MatIcon));
    let index = icons.findIndex(de => de.nativeElement.innerText== 'air');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have route link /dashboard', () => {
    let linksEls = fixture.debugElement.queryAll(By.css('a'));
    let index = linksEls.findIndex(de => de.attributes['routerLink'] == '/dashboard');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have route link /measurements', () => {
    let linksEls = fixture.debugElement.queryAll(By.css('a'));
    let index = linksEls.findIndex(de => de.attributes['routerLink'] == '/measurements');
    expect(index).toBeGreaterThan(-1);
  });
});
