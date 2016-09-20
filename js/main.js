/*MAIN JS FILE*/

/*Add class "responsive" to toggle nav on mobile devices*/
function openMenu(){
	var x = document.getElementById("myTopnav");
	console.log();
	if(x.className === "topnav"){
		x.className += " responsive";
	}else{
		x.className = "topnav";
	}
}

/*Open tabcontent*/
function openTab(e, tabName) {
    e.preventDefault();  

    var tabcontent = document.getElementsByClassName("tabcontent");
    var tablinks = document.getElementsByClassName("tablinks");
    
    // hide elements with classname 'tabcontent'.
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Remove class 'active' 
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // show tabcontent + add className "active" to clicked tab
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
}

/*Jquery*/

$(function(){
	/*Show first tabcontent + add class active to first tab*/
	$("#details").css("display","block");
	$("#first-tab").addClass("active");
	/*Image swap*/
	$(".thumb").on('click',function(e){
		e.preventDefault();

        var href = this.href;

        $("#target-img").fadeOut(400, function(){
            $(this).attr('src', href).fadeIn(400);
        });
    })
    /*Increase button*/
    $("#btn-up").on('click', function(e){
        e.preventDefault();

        var $aantal = $(".aantal");
        var currentVal = parseInt($aantal.val());
        if(!isNaN(currentVal) && currentVal >= 0){
            $aantal.val(currentVal + 1);
        }else{
        	$aantal.val(0);
        }
    });
    /*Decrease button*/
    $("#btn-down").on('click', function(e){
        e.preventDefault();

        var $aantal = $(".aantal");
        var currentVal = parseInt($aantal.val());
        if(!isNaN(currentVal) && currentVal == 1 || currentVal > 0 ){
            $aantal.val(currentVal - 1);
        }else{
            $aantal.val(0);
        }
    });
    //Show comment after submit
    $("#btn-submit").on('click', function(e){
        e.preventDefault();

        if($("#melding:has(p)")){
            $(".melding").remove();
            addmelding();
        }else{
            addmelding();
        }                  
    });
    //add comment
    function addmelding(){
        var $aantal = $(".aantal");
        var currentVal = parseInt($aantal.val());
        //Show correct comment
        if(currentVal == 1){
            $("#melding").append("<p class='melding' style='color:green;'>" + currentVal + " item toegevoegd aan winkelwagen</p>").hide().show();
        }else if(currentVal == 0 || currentVal < 0 || isNaN(currentVal)){
            $("#melding").append("<p class='melding' style='color:red;'>Selecteer aantal</p>").hide().show();
        }else{
            $("#melding").append("<p class='melding' style='color:green;'>" + currentVal + " items toegevoegd aan winkelwagen</p>").hide().show();
        }   
    }
});