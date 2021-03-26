function periksa() {
	var satu = document.getElementById("thisSatu").value;
	var dua  = document.getElementById("thisDua").value;
	var tiga = document.getElementById("thisTiga").value;
	var empat = document.getElementById("thisEmpat").value;
	var lima = document.getElementById("thisLima").value;
	var hasil = 0;
	var str = "Anda Salah di nomor ";

	if(satu == "false") {
		hasil++;
	}else {
		str += "1 ";
	}


	if(dua == "false") {
		hasil++;
		
	}else {
		str += "2 ";
	}



	if(tiga == "false") {
		hasil++;
		
	}else {
		str += "3 ";
	}


	if(empat == "true") {
		hasil++;
		
	}else {
		str += "4 ";
	}


	if(lima == "true") {
		hasil++;
		
	}else {
		str += "5 ";
	}

	console.log(hasil);
	document.getElementById("hasil").innerHTML = parseFloat(hasil * 2);
	if(hasil == 5) {
		document.getElementById("check").innerHTML = "Luar Biasaaaaaaaaaaa!";
	}else if(hasil == 0) {
		document.getElementById("check").innerHTML = "Mungkin anda bukan tinggal di Indonesia. :D";
	}
	else {
		document.getElementById("check").innerHTML = str;
	}
}