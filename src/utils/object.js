// export const prop = (...arr) => obj => arr.reduce((acc, v) => acc && acc.hasOwnProperty(v) ? acc[v] : undefined, obj)
export function prop(...arr){
  return function(obj){
    return arr.reduce(function(acc,v){
      if(acc && acc.hasOwnProperty(v)){
        return acc[v];
      }else{
        return undefined;
      }
    },obj);
  }
}

