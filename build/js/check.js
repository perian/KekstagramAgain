'use strict'
var boolean = true;
var number = 1;
var array = [];
var sum = 0;
var i = 0;
var square = 0;

function getMessage(a, b) {
  if (typeof a === typeof true) {
    if (a) {
      return ("Переданное GIF-изображение анимировано и содержит "  + b + " кадров");
    }
    else {
      return "Переданное GIF-изображение не анимировано";
    }
  }

  else if (typeof a === typeof number) {
    return ("Переданное SVG-изображение содержит " + a + " объектов и " + (b * 4) + " атрибутов");
  }

  else if (typeof a && typeof b === typeof array) {
    for (i = 0; i < a.length; i++) {
      square += a[i] * b[i];
    }
    return ("Общая площадь артефактов сжатия: " + square + " пикселей");
  }

  else (typeof a === typeof array)
    for (i = 0; i < a.length; i++) {
      sum += a[i];
    }
    return ("Количество красных точек во всех строчках изображения: " + sum);
}
