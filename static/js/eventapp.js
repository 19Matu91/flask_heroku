$( document ).ready(function() {
	$("#ok_sing_up").click(function(e){
		e.preventDefault();
		var nickname = $("#nick_name_sing_up").val();
		if(nickname != ''){
			location.href = "login.html";
		}else{
			alert("Introduce");
		}
	});
});