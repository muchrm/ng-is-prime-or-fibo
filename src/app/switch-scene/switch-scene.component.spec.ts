import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../calculator.service';

import { SwitchSceneComponent } from './switch-scene.component';

describe('SwitchSceneComponent', () => {
  let component: SwitchSceneComponent;
  let fixture: ComponentFixture<SwitchSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchSceneComponent ],
      imports:[FormsModule],
      providers:[{provide:CalculatorService,useValue:{}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
