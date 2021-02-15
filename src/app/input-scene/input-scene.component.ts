import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-input-scene',
  templateUrl: './input-scene.component.html',
  styleUrls: ['./input-scene.component.scss'],
})
export class InputSceneComponent implements OnInit {
  @ViewChild('input') input;
  constructor(
    private calculatorService: CalculatorService,
    private zone: NgZone
  ) {}

  ngOnInit(): void {}

  setValue(value) {
    this.zone.runOutsideAngular(() => {
      if (isNaN(value)) {
        value = 0;
      } else if (value < 0) {
        value = 1;
      } else {
        value = Math.round(value);
      }
      this.calculatorService.setValue(value);
    });
  }
}
