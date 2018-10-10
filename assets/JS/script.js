document.getElementById("submit").addEventListener("click", function () { //fonction après le click sur Valider

var shoeSize = document.getElementById('shoeSize').value;//recupère l'id du premier nombre dans le formulaire
var yearOfBirth = document.getElementById('yearOfBirth').value;//recupère l'id du deuxième nombre dans le formulaire
var regexDecimal = /^[0-9]+$/;//déclare le regex//

if (regexDecimal.test(shoeSize) && shoeSize >= 10 && shoeSize <= 80 && regexDecimal.test(yearOfBirth) && yearOfBirth > 1900 && yearOfBirth <= 2018) { //création des conditions par rapport au regex et limation année de naissance
    var result = ((((shoeSize * 2) + 5) * 50) - yearOfBirth) + 1766;//déclaration de la variable résultat
      alert(result); //affichage du résultat
    }
  else {
    alert("Mauvaise saisie. Votre pointure doit être comprise entre 10 et 80. Votre annnée de naissance entre 1900 et 2018");
  }
})
