// Select color input
// Select size input


function makeGrid() {
// Your code goes here!
var table = document.getElementById('pixel_canvas');
var tableHtml = ''

var gridRow = $('#input_height').val();
var gridColumn = $('#input_width').val();

for (var i=0; i<gridRow; i++){
	tableHtml += '<tr> ';	
	for (var j=0; j<gridColumn; j++){
		tableHtml += '<td onclick="setColor(this)"> </td>';	
	}
	tableHtml += '</tr>';
}

table.innerHTML = tableHtml;

}

function setColor(cell){	
	var color = $('#colorPicker').val();
	cell.style.backgroundColor = color;
	
}

