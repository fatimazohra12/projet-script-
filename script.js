// Sélection de la div de classe "content2"
var content2 = document.querySelector('.content2');

// Fonction de création de cours
function creationCours(image, titre, prix) {
    // Création d'un élément div pour la carte de cours
    let div = document.createElement('div');
    // Ajout de la classe "card col-3 me-2 mb-2" à l'élément div
    div.setAttribute('class', 'card col-3 me-2 mb-2');
    // Création d'un élément img pour l'image du cours
    let img = document.createElement('img');
    // Définition de la source de l'image du cours
    img.src = image;

    // Création d'un élément p pour le titre du cours
    let p = document.createElement('p');
    // Ajout de la classe "card-title" à l'élément p
    p.setAttribute('class', 'card-title');
    // Création d'un noeud de texte pour le contenu du titre du cours
    let contenu = document.createTextNode(titre);
    // Ajout du contenu du titre du cours à l'élément p
    p.appendChild(contenu);

    // Création d'un élément span pour le prix du cours
    let span = document.createElement('span');
    // Ajout de la classe "card-text" à l'élément span
    span.setAttribute('class', 'card-text');
    // Ajout du prix du cours à l'élément span
    span.appendChild(document.createTextNode(prix + '$'));

    // Ajout de l'image du cours, du titre et du prix à la carte de cours
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    // Ajout de la carte de cours à la div de classe "content2"
    content2.append(div)
}

// Parcours de la liste de cours
courses.forEach((el) => {
    // Création de chaque cours
    creationCours(el.image, el.title, el.price);
})

// Récupération de l'élément de formulaire de recherche
const searchinput = document.getElementById("search")

// Ajout d'un écouteur d'événement "keyup" à l'élément de recherche
searchinput.addEventListener("keyup", function (e) {
    // Récupération de la valeur saisie dans le formulaire de recherche
    const value = e.target.value

    // Suppression de tout le contenu de la div de classe "content2"
    content2.innerHTML = ''

    // Filtrage des cours qui correspondent à la valeur saisie dans le formulaire de recherche
    courses.filter(el => {
        return el.title.toLowerCase().includes(value.toLowerCase())
    })
    // Parcours des cours filtrés
    .forEach((el) => {
        // Création de chaque cours filtré
        creationCours(el.image, el.title, el.price);
    })
})

// Récupération de l'élément de filtre de prix
const pricefilter = document.getElementById("price-filter")

// Ajout d'un écouteur d'événement "change" (changement de valeur) à l'élément de filtre de prix
pricefilter.addEventListener("change", function (e) {
    // Récupération de la valeur sélectionnée dans le filtre de prix
    const value = parseFloat(e.target.value)

    // Suppression de tout le contenu de la div de classe "content2"
    content2.innerHTML = ''

    // Mise à jour de la valeur sélectionnée dans le filtre de prix
    document.querySelector('.selected-price').innerHTML = value.toString()

    // Filtrage des cours qui ont un prix supérieur ou égal à la valeur sélectionnée dans le filtre de prix
    courses.filter(el => {
        return el.price >= value
    })
    // Parcours des cours filtrés
    .forEach((el) => {
        // Création de chaque cours filtré
        creationCours(el.image, el.title, el.price)
    })
})

// Récupération de tous les éléments de catégorie
document.querySelectorAll('.category-item').forEach(function (category) {
    // Ajout d'un écouteur d'événement "click" à chaque élément de catégorie
    category.addEventListener('click', function (e) {
        // Annulation de l'action par défaut de l'événement "click" (navigation vers une autre page)
        e.preventDefault()

        // Récupération du nom de la catégorie sélectionnée
        const categoryname = category.dataset.value
        // Suppression de tout le contenu de la div de classe "content2"
        content2.innerHTML = ''

        // Filtrage des cours qui appartiennent à la catégorie sélectionnée
        courses.filter(el => {
            if (categoryname == 'all') return true
            return el.category.toLowerCase() == categoryname.toLowerCase()
        })
        // Parcours des cours filtrés
        .forEach((el) => {
            // Création de chaque cours filtré
            creationCours(el.image, el.title, el.price)
        })
    })
})