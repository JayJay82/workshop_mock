import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnloadingListComponent } from './unloading-list.component';

describe('UnloadingListComponent', () => {
  let component: UnloadingListComponent;
  let fixture: ComponentFixture<UnloadingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnloadingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnloadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
