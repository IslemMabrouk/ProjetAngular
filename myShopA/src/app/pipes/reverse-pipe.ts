import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe'
})
export class ReversePipePipe implements PipeTransform {

  transform(ch:string) : string {
    let result = '';
    // Parcours de la chaine depuis la fin vers le début
    for (let i = ch.length-1; i >= 0; i--) {
      result += ch[i];
    }
    return result;
  }

}
