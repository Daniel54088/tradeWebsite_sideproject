//根據物件內的true或false來判定要塞入哪個className
export function cx(obj){
  return Object.keys(obj).filter(function(key){
    return obj[key];
  }).join(' ');
}
