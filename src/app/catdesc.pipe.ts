import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catdesc'
})
export class CatdescPipe implements PipeTransform {

  maLimit : number;

  transform(value: string, limit ?: number): any {
    if(!value){
      return null;
    }

    this.maLimit = limit ? limit : 30;

    return value.substr(0 , this.maLimit) + "...";

  }

}
