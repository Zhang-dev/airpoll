import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatListItem } from '@angular/material/list';
import { By } from '@angular/platform-browser';
import { AngularMaterialModule } from 'src/app/material/material.module';

import { SidenavListComponent } from './sidenav-list.component';

describe('SidenavListComponent', () => {
  let component: SidenavListComponent;
  let fixture: ComponentFixture<SidenavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavListComponent],
      imports: [AngularMaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have route link /dashboard', () => {
    let linksEls = fixture.debugElement.queryAll(By.directive(MatListItem));
    let index = linksEls.findIndex(de => de.attributes['routerLink'] == '/dashboard');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have route link /measurements', () => {
    let linksEls = fixture.debugElement.queryAll(By.directive(MatListItem));
    let index = linksEls.findIndex(de => de.attributes['routerLink'] == '/measurements');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have mat-icon home', () => {
    let icons = fixture.debugElement.queryAll(By.directive(MatIcon));
    let index = icons.findIndex(de => de.nativeElement.innerText== 'home');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have mat-icon air', () => {
    let icons = fixture.debugElement.queryAll(By.directive(MatIcon));
    let index = icons.findIndex(de => de.nativeElement.innerText== 'air');
    expect(index).toBeGreaterThan(-1);
  });

  it('should call onSidenavClosed when it has been clicked', () => {
    let spy = spyOn(component, 'onSidenavClose');
    let linksEl =fixture.debugElement.query(By.directive(MatListItem));

    linksEl.triggerEventHandler('click', null)

    expect(spy).toHaveBeenCalled();
  });
});
