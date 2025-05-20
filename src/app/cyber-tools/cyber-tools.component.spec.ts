import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberToolsComponent } from './cyber-tools.component';

describe('CyberToolsComponent', () => {
  let component: CyberToolsComponent;
  let fixture: ComponentFixture<CyberToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
