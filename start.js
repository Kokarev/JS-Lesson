/*
 *
 */

function myAlert() {
 	alert ("Hello World");
 } 


function over() {
 	console.log ('over');
 } 


function out() {
 	console.log ('out');
 } 

function mclick(obj) {
 	console.log ('click');
 	obj.style.color="green";
 } 


function changeColor(obj) {
	var c = Math.floor (Math.random() * 65000);
	obj.style.color = "#" + c.toString(16);
 	console.log ('color #' + c.toString(16));	
}