// Déclarez une variable nommée "form" et assignez-lui la valeur de l'élément ayant l'id "sign-up-form"
const form = document.getElementById("sign-up-form")

// Ajoutez un écouteur d'événement pour l'événement "submit" sur l'élément form
form.addEventListener("submit", function (e) {
  // Empêchez l'action par défaut (soumettre le formulaire) de se produire
  e.preventDefault();

  // Déclarez des variables pour chaque valeur de champ de formulaire
  const username = document.getElementById("username").value,
      email = document.getElementById("email").value,
      password = document.getElementById("password").value,
      confirm_password = document.getElementById("confirm-password").value;

  // Vérifiez si le nom d'utilisateur est vide ou s'il a moins de 3 caractères ou plus de 25 caractères
  if (username == '' || username.length < 3 || username.length > 25) {
      alert('Username est invalid !')
      return
  }

  // Déclarez une expression régulière pour valider les adresses email
  const emailregex = /^(\w[^\s]{2,100})@(\w[^\s]{2,100})\.(com)$/

  // Vérifiez si le champ email est vide ou s'il ne correspond pas à l'expression régulière
  if (email == "" || !emailregex.test(email)) {
      alert('Email est invalid !')
      return
  }

  // Déclarez des expressions régulières pour vérifier la présence de certains caractères dans le mot de passe
  var containsDigits = /[0-9]/.test(password)
  var containsUpper = /[A-Z]/.test(password)
  var containsLower = /[a-z]/.test(password)
  var containsSpecialChars = /[!@#$%^&*]/.test(password)

  // Vérifiez si le mot de passe ne contient pas au moins un chiffre, une lettre majuscule, une lettre minuscule et un caractère spécial
  if (!containsDigits || !containsUpper || !containsLower || !containsSpecialChars){
      alert('Le mot de passe est invalid !')
      return
  }

  // Vérifiez si le champ de confirmation de mot de passe ne correspond pas au champ mot de passe
  if (confirm_password != password){
      alert('Le confirmation du password est invalid !')
      return
  }
  
  // Si tous les contrôles de validation réussissent, accédez à la page "index.html"
  window.location.href="index.html"
})
