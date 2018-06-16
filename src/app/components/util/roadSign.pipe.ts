import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'roadSignFilter'})
export class RoadSignPipe implements PipeTransform {
  transform(items: string[], filter: string): string[] {

    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.toLowerCase().includes(filter.toLowerCase()))

  }
}
