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
		var splt = x.split('aihe\ ');
		list.innerHTML = "";
				for (var i = 1; i < splt.length; i++) {
						list.innerHTML += '<br>> '+splt[i];
				}
		});
};

var val = document.getElementById('msgVal'),
	btn = document.getElementById('msgSend'),
	list = document.getElementById('list');

btn.addEventListener("click", ()=>{
	ajax_send('get', "./send.php?msg", val.value);
	val.value = "";
});

lupdate();
