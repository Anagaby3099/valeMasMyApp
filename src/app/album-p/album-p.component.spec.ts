import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPComponent } from './album-p.component';

describe('AlbumPComponent', () => {
  let component: AlbumPComponent;
  let fixture: ComponentFixture<AlbumPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumPComponent]
    });
    fixture = TestBed.createComponent(AlbumPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
