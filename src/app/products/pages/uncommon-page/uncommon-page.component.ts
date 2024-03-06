import { Component } from '@angular/core';

import {PanelModule} from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, NgFor, NgIf, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [PanelModule, CardModule, FieldsetModule, ButtonModule, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, NgFor, NgIf, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Nuru Mero';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient() {
    this.name = 'Nuruka Merosa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia', 'Raven'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient() {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Nuru, Mero',
    age: 23,
    address: 'Somewhere in America'
  }

  // Async Pipe
  public myObservableTimer = interval(1000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa. ');
      console.log('Tenemos data en la promesa.');
    }, 3500);
  })
}
