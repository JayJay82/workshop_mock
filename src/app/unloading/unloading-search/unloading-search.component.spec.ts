import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnloadingSearchComponent } from './unloading-search.component';

describe('UnloadingSearchComponent', () => {
  let component: UnloadingSearchComponent;
  let fixture: ComponentFixture<UnloadingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnloadingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnloadingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
