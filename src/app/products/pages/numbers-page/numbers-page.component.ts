import { Component } from '@angular/core';

import {PanelModule} from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { DecimalPipe, CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [PanelModule, CardModule, DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {

  public totalSales: number = 23454873957.4134;
  public percent: number = 0.4536;
}
