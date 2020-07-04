 $(document).ready(function() {
    //$(".col-6:odd").css("z-index", "-1");
	//$(".col-6:even").css("z-index", "0");
	//$("#welcome").css("z-index", "1");
  }); 




 function swap(sect,nextSect,transaction) {
	 this.sect = sect;
	 this.nextSect = nextSect;
	 this.transaction = transaction;

	 
	 if(sect == wbtn){
		wbtn.style.marginTop="-9999px";
		getPin.style.marginTop="-5%";
		var cancel = nextSect.getElementsByClassName("cancel");
	 for(let i in cancel){
		 cancel[i].addClass="shake"
	 }
	}
	if(sect == welcome){
		nextSect.getElementsByTagName("header")[0].classList.add("fadeIn");
		sect.style.zIndex = "0";
		nextSect.style.zIndex = "1";
		var cancel = nextSect.getElementsByClassName("cancel");
	 for(let i in cancel){
		 cancel[i].addClass="shake"
	 }
		}
		
		sect.style.zIndex = "0";
		nextSect.style.zIndex = "1";
		var cancel = nextSect.getElementsByClassName("cancel");
	 for(let i in cancel){
 cancel[i].addClass="shake"}
	
	
	/*else if(transaction){
		let btns = nextSect.getElementsByTagName("a");
		nextSect.style.zIndex = "1";
		console.log(nextSect==selectAccount)//.getElementById("airtimeAmt"));
			for(let i in btns){
		btns[i].addEventListener("click",fn=function(){ swap(nextSect, transaction); },false)};
		
			for(let j in btns){
				//btns[j].style.color="red";
			btns[j].removeEventListener("click", fn ,false)}
		
		
		/* setTimeout(function(){
			//let btns = nextSect.getElementsByTagName("a");
			for(let j in btns){
				btns[j].style.color="red";
			btns[j].removeEventListener("click", fn ,false)}
	}},200); */
			//sect.style.zIndex = "0";
		
	//}
	
		
		
	};



  