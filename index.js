// Fonction qui charge les cours
function loadCourses({ image, title, price }) {
    // Création d'un élément div pour chaque carte de cours
    const coursecard = document.createElement('div')
    // Ajout de la classe "col-4 p-3" à l'élément div
    coursecard.setAttribute('class', 'col-4 p-3')

    // Création d'un élément img pour l'image du cours
    const courseimage = document.createElement('img')
    // Définition de la source de l'image du cours
    courseimage.src = image

    // Création d'un élément div pour contenir l'image du cours
    const courseimagecontainer = document.createElement('div')
    // Ajout de la classe "course-image-wrapper" à l'élément div
    courseimagecontainer.setAttribute('class', 'course-image-wrapper')
    // Ajout de l'image du cours à l'élément div qui la contient
    courseimagecontainer.append(courseimage)

    // Ajout de l'élément div qui contient l'image du cours à la carte de cours
    coursecard.appendChild(courseimagecontainer)

    // Création d'un élément h5 pour le titre du cours
    const coursetitle = document.createElement('h5')
    // Ajout de la classe "mt-2 text-center" à l'élément h5
    coursetitle.setAttribute('class', 'mt-2 text-center')
    // Définition du texte du titre du cours
    coursetitle.innerText = title
    // Ajout du titre du cours à la carte de cours
    coursecard.appendChild(coursetitle)

    // Création d'un élément span pour le prix du cours
    const courseprice = document.createElement('span')
    // Ajout de la classe "d-block text-center" à l'élément span
    courseprice.setAttribute('class', 'd-block text-center')
    // Définition du texte du prix du cours
    courseprice.innerText = price
    // Ajout du prix du cours à la carte de cours
    coursecard.appendChild(courseprice)

    // Ajout de la carte de cours à la section qui contient les cartes de cours
    document.querySelector("#courses-container .row").append(coursecard)
}

// Tableau des cours sélectionnés
const selectedCourses = [];

// Boucle qui itère trois fois
for (let i = 0; i < 3; i++) {
    // Sélection d'un cours au hasard dans la liste de tous les cours
    let course = courses[Math.floor(Math.random() * courses.length)]

    // Vérification que le cours sélectionné n'a pas déjà été ajouté au tableau des cours sélectionnés
    while (selectedCourses.includes(course)) {
        course = courses[Math.floor(Math.random() * courses.length)]
    }

    // Ajout du cours sélectionné au tableau des cours sélectionnés
    selectedCourses.push(course)

    // Chargement du cours sélectionné
    loadCourses(course)
}
