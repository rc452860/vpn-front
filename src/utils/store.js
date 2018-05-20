export function put(key,value){
  localStorage.setItem(key,value);
}

export function get(key){
  return localStorage.getItem(key);
}

export const KEY = {
  TOKEN:'TOKEN',
}
