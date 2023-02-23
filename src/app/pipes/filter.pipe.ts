import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : any[], filterString:string, propName:string):any {
    const result:any =[];
    if(!value || filterString === '' || propName === ''){
      return value;
    }
    // filter value with ForEach loop. 
    value.forEach((a :any)=>{
      // filter value here
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    })
    return result;

  };
}
