/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EraserComponent } from './eraser.component';

describe('EraserComponent', () => {
  let component: EraserComponent;
  let fixture: ComponentFixture<EraserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EraserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EraserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
