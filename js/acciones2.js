// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#sonar').tap(function(){
			navigator.notification.beep(2);
		}); //sonar
		$('#vibrar').tap(function() {
			navigator.notification.vibrate(2000);
		}); //vibrar
	},false); // cierre device ready
}); //cierre del ready
			
