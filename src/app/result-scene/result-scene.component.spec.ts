import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { CalculatorService } from '../calculator.service';

import { ResultSceneComponent } from './result-scene.component';

describe('ResultSceneComponent', () => {
  let component: ResultSceneComponent;
  let fixture: ComponentFixture<ResultSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultSceneComponent ],
      providers:[{provide:CalculatorService,useValue:{result$:new BehaviorSubject<boolean>(false)}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
