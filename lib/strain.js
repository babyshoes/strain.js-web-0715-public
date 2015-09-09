'use strict';

var strain = {
  keep: function(array, method){
    var newArray = [];
    array.forEach(function(i) {
       method(i) ? newArray.push(i) : null;
    })
    return newArray;
  },

  discard: function(array, method){
    var newArray = [];
    array.forEach(function(i){
      !method(i) ? newArray.push(i) : null;
    })
    return newArray;
  }
};
