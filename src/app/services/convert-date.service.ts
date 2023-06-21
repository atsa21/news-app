import { Injectable } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';

registerLocaleData(localeUk, 'uk-UA');

@Injectable({
  providedIn: 'root'
})
export class ConvertDateService {

  constructor( private datePipe: DatePipe ) {}

  getConvertedDate(dataToConvert: string): string {
    const date = new Date(dataToConvert);
    return this.datePipe.transform(date, 'mediumDate', '', 'uk-UA') as string;
  }
}
