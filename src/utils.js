

const utils = {
  range(num) {
    let array = [];
    for(let i = 0; i < num; i++){
      array.push(i);
    }
    return array;
  },

  capitalize(str){
    return str && str.charAt(0).toUpperCase() + str.substring(1);
  },

  includes(obj, search){
    if (typeof obj === 'number'){
      obj = obj.toString();
    }
    return obj.indexOf(search) !== -1;

  },

  values(obj){
    return Object.keys(obj).map(function (key) {return obj[key]; });
  }


};

export default utils;
