import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-result-scene',
  templateUrl: './result-scene.component.html',
  styleUrls: ['./result-scene.component.scss'],
})
export class ResultSceneComponent implements OnInit {
  result$ = this.calculatorService.result$.pipe(
    map((result) => (result ? 'True' : 'False'))
  );
  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {}
}
