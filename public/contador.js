var anioFinal = 2016 //Variables de finalizacion
var mesFinal = 10
var diaFinal = 29

mesFinal -= 1
function faltan() {

	fechaFinal = new Date(anioFinal,mesFinal,diaFinal)
	fechaActual = new Date()

	diferencia = fechaFinal - fechaActual
	diferenciaSegundos = diferencia /1000
	diferenciaMinutos = diferenciaSegundos/60
	diferenciaHoras = diferenciaMinutos/60
	diferenciaDias = diferenciaHoras/24

	diferenciaHoras2 = parseInt(diferenciaHoras) - (parseInt(diferenciaDias) *24)
	diferenciaMinutos2 = parseInt(diferenciaMinutos) - (parseInt(diferenciaHoras) * 60)
	diferenciaSegundos2 = parseInt(diferenciaSegundos) - (parseInt(diferenciaMinutos) * 60)
	diferenciaDias = parseInt(diferenciaDias)
	
	if (diferenciaDias < 10 && diferenciaDias > -1) { 
		diferenciaDias = "0" + diferenciaDias
	}
	
	if(diferenciaHoras2 < 10 && diferenciaHoras2 > -1) { 
		diferenciaHoras2 = "0" + diferenciaHoras2
	}
	
	if(diferenciaMinutos2 < 10 && diferenciaMinutos2 > -1) { 
		diferenciaMinutos2 = "0" + diferenciaMinutos2
	}
	
	if(diferenciaSegundos2 < 10 && diferenciaSegundos2 > -1) { 
		diferenciaSegundos2 = "0" + diferenciaSegundos2
	}
	
	if(diferenciaDias <= 0 && diferenciaHoras2<= 0 && diferenciaMinutos2 <= 0 && diferenciaSegundos2 <= 0) {
		diferenciaDias = 0
		diferenciaHoras2 = 0
		diferenciaMinutos2 = 0
		diferenciaSegundos2 = 0

		document.getElementById('day').innerHTML = diferenciaDias;
		document.getElementById('hour').innerHTML = diferenciaHoras2;
		document.getElementById('min').innerHTML = diferenciaMinutos2;
		document.getElementById('sec').innerHTML = diferenciaSegundos2;

	} else {
		document.getElementById('day').innerHTML = diferenciaDias;
		document.getElementById('hour').innerHTML = diferenciaHoras2;
		document.getElementById('min').innerHTML = diferenciaMinutos2;
		document.getElementById('sec').innerHTML = diferenciaSegundos2;


		setTimeout('faltan()',1000);
	}
}