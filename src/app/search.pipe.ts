import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(adatok:any[], keresendo:string, keresMezo:string): any {
    if (!adatok) return null;
    if (keresendo=="" || !keresendo) return adatok
    // Itt vmi baj van
    if (keresMezo=="") 
      return adatok.filter(
        (elem)=> {
          console.log(typeof(JSON.stringify(elem)))
          return JSON.stringify(elem).includes(keresendo.toLowerCase())
        }
      )  
    // Ez szöveges adatokra mükszik, számra nem  
    return adatok.filter(
      (elem)=> elem[keresMezo].toLowerCase().includes(keresendo.toLowerCase())
    )
  }

}
