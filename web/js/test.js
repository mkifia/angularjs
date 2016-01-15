$(function () {
	$('#textfield').keyup(function (e) {
		console.log($("#"+this.id).val());
		$("#nom1").text($("#"+this.id).val());
	});
});
