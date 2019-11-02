import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-percentage-chart',
  templateUrl: './percentage-chart.component.html',
  styleUrls: ['./percentage-chart.component.scss']
})
export class PercentageChartComponent {
  @Input() size = '30px';
  @Input() value = 80;
  @Input() strokeColor = '#03A9F4';
  @Input() strokeWidth = 4.5;
  @Input() fontSize = 11;
  @Input() margin = '0 15px 0 0';
}
