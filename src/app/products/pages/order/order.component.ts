import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Color, Hero } from '../../interfaces/hero.interface';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { TitleCasePipe } from '@angular/common';
import { SortByPipe } from '../../pipes/sort-by.pipe';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [PanelModule, ToggleCasePipe, ToolbarModule, ButtonModule, TableModule, CanFlyPipe, TitleCasePipe, SortByPipe],
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    },
    {
      name: 'Wonder woman',
      canFly: false,
      color: Color.red
    }
  ]

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}
