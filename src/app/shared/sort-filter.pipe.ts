import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortFilter'
})
export class SortFilterPipe implements PipeTransform {

  transform (
    arr:any[], sortParam: string, filterParam: string, filterParamActicle: string
  ) : any[]
    {
    if (sortParam === undefined && filterParam === '' && filterParamActicle ===''){
      return arr;
    }

    if (!arr) return [];

    if ( sortParam !== undefined){
      switch(sortParam){
        case "id2":
          arr = arr.sort((function (a, b) {
            if ( a.id > b.id){
              return -1;
            }else if(a.id < b.id){
              return 1;
            }else return 0;
          }))
          break;
        case "id1":
          arr = arr.sort((function (a, b) {
            if ( a.id < b.id){
              return -1;
            }else if(a.id > b.id){
              return 1;
            }else return 0;
          }))
          break;
        case "price1": 
          arr = arr.sort((function (a, b) {
            if ( Number(a.price) > Number(b.id)){
              return -1;
            }else if(Number(a.price) < Number(b.id)){
              return 1;
            }else return 0;
          }))
          break;
        case "price2":
          arr = arr.sort((function (a, b) {
            if ( Number(a.price) < Number(b.price)){
              return -1;
            }else if(Number(a.price) > Number(b.price)){
              return 1;
            }else return 0;
          }))
          break;
      }
    }

    // if (filterParam !== ''){
    //   let filter = arr.filter(
    //     ell => ell.name.toLowerCase().indexOf(filterParam.toLowerCase()) === 0);
    //   return filter;
    // }

    // if (filterParamActicle !== ''){
    //   let filter1 = arr.filter(
    //     ell1 => ell1.aricle.toLowerCase().indexOf(filterParam.toLowerCase()) === 0);
    //   return filter1;
    // }

    return arr.filter(function (item) {
      if (item.name.toLowerCase().includes(filterParam.toLowerCase()) === true) {
        return true;
      } else if (item.article.toLowerCase().includes(filterParam.toLowerCase()) === true) {
        return true;
      } else {
        return false
      }
    });


  }

}
