import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorService } from '../calculator.service';
import { InputSceneComponent } from './input-scene.component';

describe('InputSceneComponent', () => {
  let component: InputSceneComponent;
  let fixture: ComponentFixture<InputSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSceneComponent ],
      providers:[{provide:CalculatorService,useValue:{}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
