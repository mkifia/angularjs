$(function () {
	$('#textfield').keyup(function (e) {
		$("#nom1").text($("#"+this.id).val());
	});
});
