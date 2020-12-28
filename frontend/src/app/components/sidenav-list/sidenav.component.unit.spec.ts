import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from 'src/app/material/material.module';
import { SidenavListComponent } from './sidenav-list.component';

describe('SidenavListComponent - onSidenavClosed', () => {
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

  it('should raise sidenavClose event',  () => {
    let spy = spyOn(component.sidenavClose, 'emit');

    component.onSidenavClose();

    expect(spy).toHaveBeenCalled();
    spy.calls.reset();
  });
});
