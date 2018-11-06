
  //reference messages collection
var messagesRef = firebase.database().ref('messages');
//listen for form submit
document.getElementById('regForm').addEventListener('submit', submitForm);
//submitting form
function submitForm(e){
  e.preventDefault();
  
  //get values
    //var fullname = getInputVal('fullname');
	//var fullname = document.getElementById("fullname").value;
    //var lastname = getInputVal('lastname');
    //var email = document.getElementById('email').value;
    //var phone = document.getElementById('phone');
    var churchSel = document.getElementById("churchSel").value;
    var dioceseSel = document.getElementById("dioceseSel").value;
	var dinarySel = document.getElementById("dinarySel").value;
	
    //var username = getInputVal('username');
    //var password = document.getElementById('password').value;
	
	console.log(fullname);
	console.log( email , password);
	console.log(churchSel, dioceseSel, dinarySel);
	//save record
	saveRecord(fullname, email, churchSel, dioceseSel, dinarySel, password);
	
}
//save message to firebase
function saveRecord(fullname, email, churchSel, dioceseSel, dinarySel, password){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		fullname: fullname,
		email: email,
		churchSel: churchSel,
		dioceseSel: dioceseSel,
		dinarySel:dinarySel,
		password: password
	});

}

