import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  // transform(ch:string): string {
  //   return ch.replace(/[aeiouy]/gi, "*");
  // }

  transform(ch: string): string {
    let result = '';
    for (let i = 0; i < ch.length; i++) {
      if (this.verifVoy(ch[i])) {
        result += "*"
      } else {
        result = result + ch[i];
      }
    }

    return result;
  }


  verifVoy(char: string): boolean {
    let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    let isVoy = false;
    for (let i = 0; i < voyelles.length; i++) {
      if (char.toLowerCase() == voyelles[i]) {
        isVoy = true;
        break;
      }
    }
    return isVoy;
  }

}
