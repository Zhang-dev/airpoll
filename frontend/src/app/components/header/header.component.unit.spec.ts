import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from 'src/app/material/material.module';
import { HeaderComponent } from './header.component';

describe('SidenavListComponent - onToggleSidenav', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [AngularMaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should raise sidenavToggle event',  () => {
    let spy = spyOn(component.sidenavToggle, 'emit');

    component.onToggleSidenav();

    expect(spy).toHaveBeenCalled();
  });
});
