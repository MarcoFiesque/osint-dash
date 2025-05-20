import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpInspectorComponent } from './ip-inspector.component';

describe('IpInspectorComponent', () => {
  let component: IpInspectorComponent;
  let fixture: ComponentFixture<IpInspectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpInspectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
