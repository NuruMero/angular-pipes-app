import { Component } from '@angular/core';

import {PanelModule} from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';

import { UpperCasePipe , LowerCasePipe , TitleCasePipe, DatePipe} from '@angular/common';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData( localeEs);
import localeFrCA from '@angular/common/locales/fr-CA';
registerLocaleData( localeFrCA);

@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [PanelModule, CardModule, UpperCasePipe , LowerCasePipe , TitleCasePipe, DatePipe],
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'mero merito merorrow';
  public nameUpper: string = 'MERO MERITO MERORROW';
  public fullName: string = 'meRo MErIto merORRoW';

  public customDate: Date = new Date();
}
