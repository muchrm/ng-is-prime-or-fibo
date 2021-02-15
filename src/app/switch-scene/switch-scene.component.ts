import { Component, NgZone, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { QuestionType } from '../enum';

@Component({
  selector: 'app-switch-scene',
  templateUrl: './switch-scene.component.html',
  styleUrls: ['./switch-scene.component.scss'],
})
export class SwitchSceneComponent implements OnInit {
  dropdownList = [
    { value: QuestionType.IsPrime, text: 'IsPrime' },
    { value: QuestionType.IsFibanacci, text: 'IsFibanacci' },
  ];
  model = QuestionType.IsPrime;
  constructor(
    private calculatorService: CalculatorService,
    private zone: NgZone
  ) {}

  ngOnInit(): void {}

  onQuestionTypeChange(questionType: QuestionType) {
    this.zone.runOutsideAngular(() => {
      this.calculatorService.changeType(questionType);
    });
  }
}
