var ajax_send = (t, url, msg) => {
	const request = new XMLHttpRequest();
	request.open(t, url+'='+msg);
	request.send();
},
ajax_read = (t, url, f) => {
	const request = new XMLHttpRequest();
	request.onload = () => {
		try {
			resObj = request.responseText;
		} catch (e) {
			resObj = 'Could not parse '+request.responseText;
		}
		if(resObj){
			f(resObj);
		}
	}
	request.open(t, url);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send();
},
lupdate = () => {
	ajax_read('get', "./read.php", (x)=>{
		list.innerHTML = "";
		list.innerHTML += x;
	});
};

var val = document.getElementById('msgVal'), 
	btn = document.getElementById('msgSend'),
	topic = document.getElementById('msgTopic'),
	list = document.getElementById('list'),
	topic = topic.value;

btn.addEventListener("click", ()=>{
	ajax_send('get', `./send.php?topic=${topic}&msg=${val.value}`);
	val.value = "";
});

lupdate();
