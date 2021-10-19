
import Cleave from 'cleave.js';

//age only positive numbers

var cleave = new Cleave('.demoinput', {
  blocks: [2, 2, 2, 3, 2]
});

//BE
var phone = new Cleave('.input-phone', {
  phone: true,
  phoneRegionCode: 'be'
});

//DD-MM-YYYY
var date = new Cleave('.input-date', {
  date: true,
  delimiter: '-',
  datePattern: ['DD', 'MM', 'YYYY']
});

//STUDENT-
var name = new Cleave('.input-name', {
  prefix: 'STUDENT',
  delimeter: '-',
  blocks: [6, 4, 4, 4],
  uppercase: true
})

//xx.xx.xx-xxx.xx
var rrn = new Cleave('.input-rrn', {
  delimeters: ['.', '.', '-', '.'],
  blocks: [2, 2, 2, 3, 2],
  numeral: true
})
