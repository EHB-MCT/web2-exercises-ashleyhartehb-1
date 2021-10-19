var Cleave = require('cleave.js');
require('cleave.js/dist/addons/cleave-phone.be');

//age only positive numbers

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
});