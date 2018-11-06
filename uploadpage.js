
//const announcementsList = document.querySelector('#announcements-list');
const form = document.querySelector('#uploadForm');
//createElement and render announcements
function renderAnnouncements(doc){
	let li = document.createElement('li');
	let churchSel = document.createElement('span');
	//let dioceseSel = document.createElement('span');
	//let dinarySel = document.createElement('span');
	//let title = document.createElement('span');
	let subject = document.createElement('span');
	let myFile = document.createElement('span');
	
	li.setAttribute('data-id',doc.id);
	churchSel.textContent = doc.data().churchSel;
	//dioceseSel.textContent = doc.data().dioceseSel;
	//dinarySel.textContent = doc.data().dinarySel;
	//title.textContent = doc.data().title;
	subject.textContent = doc.data().subject;
	myFile.textContent = doc.data().myFile;
	
	li.appendChild(churchSel);
	//li.appendChild(dioceseSel);
	//li.appendChild(dinarySel);
	//li.appendChild(title);
	li.appendChild(subject);
	//li.appendChild(myFile);
	
	//announcementsList.appendChild(li);
	
}
db.collection('announcements').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderAnnouncements(doc);
	})
});
var x = new Date().toDateString();

//saving data
form.addEventListener('submit', (e) =>{
	e.preventDefault();
	db.collection('announcements').add({
		churchSel: form.churchSel.value,
		//dioceseSel: form.dioceseSel.value,
		//dinarySel: form.dinarySel.value,
		//title: form.title.value,
		subject: form.subject.value,
		//myFile: form.myFile.value
	});
	form.churchSel.value = '';
	//form.dioceseSel.value = '';
	//form.dinarySel.value = '';
	//form.title.value = '';
	form.subject.value = '';
	//form.myFile.value = '';
	
})

	