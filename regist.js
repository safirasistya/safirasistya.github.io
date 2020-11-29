function validateForm() {
		var a = document.forms["myForm"]["fname"].value;
		var b = document.forms["myForm"]["fborn"].value;
		var c = document.forms["myForm"]["fpeker"].value;
		var d = document.forms["myForm"]["fdomisili"].value;
		var e = document.forms["myForm"]["fnumber"].value;
		var f = document.forms["myForm"]["femail"].value;
		var g = document.forms["myForm"]["fkel"].value;
		alert("Selamat bergabung dalam komunitas MusicArt!\nNama: "+a+" ("+g+")\nTanggal Lahir: " +b+" Tahun\nPekerjaan: " +c+"\nDomisili: " +d+"\nNo. Telp: " +e+" \nEmail: " +f);
	}