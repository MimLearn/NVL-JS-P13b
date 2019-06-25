<script>
/*Queremos realizar una función que detecte palíndromos:
palabras o frases que da igual si las lees de izquierda a derecha, que de derecha a izquierda, vas a entender lo mismo.*/

function detectarPalindromo (palabra) {
	
	i = 0;
	j = palabra.length;
	
	// palabras de longitud impar
	if(palabra.length%2 != 0){
		do {
			if(palabra[i] == palabra[j]) {
				i++;
				j--;
			} else {
				alert("La palabra insertada no es un palíndromo");
				return false;
			}	
		} while (i != j)
	
	return true;		
	
	}
	// palabras de longitud par
	else {
		while (i < palabra.length/2) {
			if(palabra[i] == palabra[j]) {
				i++;
				j--;
			} else {
				alert("La palabra insertada no es un palíndromo");
				return false;
			}	
		}
		
	return true;	
	
	}
	
}

</script>