import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TerminalServiceComponent} from './terminal-service.component';

describe('TerminalServiceComponent', () => {
  let component: TerminalServiceComponent;
  let fixture: ComponentFixture<TerminalServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TerminalServiceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
