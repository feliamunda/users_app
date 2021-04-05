import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  datePipe = new DatePipe('en-US')
  
  transform(value:string): string | null {   
    return this.datePipe.transform(value, 'shortDate');
  }

}
