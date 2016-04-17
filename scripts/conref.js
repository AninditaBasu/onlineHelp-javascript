/*
This part of the code is for conrefs within the same file.
For each block of reusable content, give an ID to the content and give a calling class,
like this:
$("#reusable1" ).clone().appendTo( ".caller1" );
$("#reusable2" ).clone().appendTo( ".caller2" );
$("#reusable3" ).clone().appendTo( ".caller3" );
And then, wherever the content needs to be reused, use the #ID with an empty block element of the same type
as that which contains the content.
*/
$(document).ready(function(){
  $("#reusable" ).clone().appendTo( ".caller" );
  });
  /*
This part of the code is for when entire files are called.
For each file being called, give a #ID here, like this:
$('#mydiv1').load('referenced_content1.html');
$('#mydiv2').load('referenced_content2.html');
$('#mydiv3').load('referenced_content3.html');
And then, in the calling file, use the #ID with an empty <p> or <div> tag.
*/
jQuery(function($){
	$('#mydiv1').load('referenced_content.html');
});