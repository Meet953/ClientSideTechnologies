"use strict";
var $ = function (id) {
    return document.getElementById(id);
};



window.onload = function () {
    $("calculate").onclick = processEntry;
};

var processEntry = function(){
	
	var income = parseFloat( $("income").value );
	var tax = parseFloat( $("tax").value );
	
};