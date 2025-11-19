//your JS code here. If required.
const nameinput = document.querySelector("#nameinput");
const emailinput = document.querySelector("#emailinput");
const phoneinput = document.querySelector("#phoneinput");
function namevalidate(event) {
	const data = event.target.value;
	//console.log(data);
	 const regex = /^[A-Za-z]{3,}$/;
  if(regex.test(data)==true){
	  nameinput.style.backgroundColor="lightgreen";
  }
	
}
function emailvalidate(event){
	const data = event.target.value;
	console.log(data);
	const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if(regex.test(data)==true){
	  emailinput.style.backgroundColor = "lightgreen";
  }
}
function checkeacharacter(data){
	for(let i=0;i<data.length;i++){
		  if(data[i]<=0 && data[i]>=9){
			  return false;
		  }
	  }
	return true;
}
function phonevalidate(event){
	const data = event.target.value;
	console.log(data);
	
  if(data.length==10 && checkeacharacter(data)==true){
	  
	  phoneinput.style.backgroundColor = "lightgreen";
  }
}

