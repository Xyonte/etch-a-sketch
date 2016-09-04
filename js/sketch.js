var gridSize = 16;

$(document).ready(function(){
	makeGrid(gridSize ,gridSize);
	$block = $('.block');
	$block.hover(function(){
		$(this).css("background-color", "red");
	});
});

function selectGrid() {
	gridSize = prompt("How large would you like the dimensions to be?");
	$(".gridTable").empty();
	makeGrid( gridSize, gridSize);
	$block.hover(function(){
		$(this).css("background-color", "red");
	});
}

function makeGrid(gridHeight, gridWidth) {
	var row = 0;
	for(var i = 0; i < gridHeight; i++) {
		$('.gridTable').append("<TR>");
		for (var j=0; j<gridWidth; j++) {
			$('.gridTable').append("<td><div class='block'></div></td>");
		}
		$('.gridTable').append("</TR>");
		row+=1;
	}
	$block = $('.block');
	$block.hover(function(){
		$(this).css("background-color", "red");
	});
	
	return 0;
}
