import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propertyName: string): any {
    //value param represents an array of elements. In this case, an array of servers.
    //filterString params is a string to filter the array. In this case, the status of the server.
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      //The startsWith allow us to filter by the begining of the status wording without typing the whole word.
      if (item[propertyName].startsWith(filterString)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
