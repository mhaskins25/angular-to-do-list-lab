import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], keyword?: string): any[] {
    return value.filter((item)=>item.task.includes(keyword));
  }

}
