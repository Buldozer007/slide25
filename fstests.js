var fs = require('fs');

var obj = 
{
	'first_name':'Vardan',
	'last_name' : 'Hovsepyan',
	'age' : 13,
	'tumo_student' : true
}

var objString = JSON.stringify(obj, null ,4);

fs.writeFileSync('obj.json' , 'var obj = ' + objString);
