// Stockage des parties de citations

var templateUnDebut = ["Qu'est-ce que l'Homme, ", "Que reste-il de notre existence, ", "Que peut créer notre carcasse, "],
  templateUnMilieu = ["ce fardeau antédiluvien, ", "cette cinquième roue de carrosse, ", "cette immondice millénaire"],
  templateUnFin = ["si ce n'est une perte de temps inestimable ?", "si ce n'est un tas de chair en putréfaction ?", "si ce n'est qu'une disgrace pour la nature ?"];

var templateDeuxDebut = ["Notre avenir", "L'Homme", "Notre héritage"],
  templateDeuxMilieu = ["n'est qu'un fardeau, ", "est terrasé par sa propre inutilité, ", "se dirige droit dans le gouffre, "],
  templateDeuxFin = ["nous devons y mettre fin.", "la sentence est irrévocable.", "nous sommes damnés !"];

// Fonction lancée par le bouton "Débute de la fin"
function genererCitation() {

  // On récupère le template choisie
  selectionTemplate.addEventListener("change", function() {
    var selectionTemplate = document.getElementById("selectionTemplate");
  });

  // On récupère le nb. de citations désiré
  var inputs = document.querySelectorAll('input[type=radio]:checked'),
    inputsLength = inputs.length;
  for (var i = 0; i < inputsLength; i++) {
    var nbCitations = inputs[i].value;
  }

  // Fonction pour récupérer un chiffre aléatoire à partir du nb. de valeurs possibles pour chaque partie des citations
  function aleatoire(array) {
    return array[Math.floor(Math.random() * array.length)]
  };

  // Fonction pour générer les citations et remplir le bloc blocCitation
  function createBlockquote() {
    for (var y = 0; y < nbCitations; y++) {
      var blocCitation = document.getElementById("blocCitation"),
        blockquoteCitation = document.createElement("blockquote"),
        paragrapheCitation = document.createElement("p");

      paragrapheCitation.id = "citation" + y;

      blocCitation.appendChild(blockquoteCitation);
      blockquoteCitation.appendChild(paragrapheCitation);

      if (selectionTemplate.selectedIndex === 0) {
        document.getElementById("citation" + y).innerHTML = aleatoire(templateUnDebut) + " " + aleatoire(templateUnMilieu) + " " + aleatoire(templateUnFin);
      } else if (selectionTemplate.selectedIndex === 1) {
        document.getElementById("citation" + y).innerHTML = aleatoire(templateDeuxDebut) + " " + aleatoire(templateDeuxMilieu) + " " + aleatoire(templateDeuxFin);
      }
    }
  };

  // On lance la fonction
  createBlockquote();

  // Gestion de l'affichage des boutons
  document.getElementById("genererCitation").style.display = "none";
  document.getElementById("effacerCitation").style.display = "block";
  document.getElementById("recommencerCitation").style.display = "block";
};

// Fonction pour effacer les citations et réafficher le bouton de départ
function effacerCitation() {
  document.getElementById("genererCitation").style.display = "block";
  document.getElementById("effacerCitation").style.display = "none";
  document.getElementById("recommencerCitation").style.display = "none";

  var supprCitation = document.querySelectorAll("#blocCitation blockquote")
  for (var u = 0, r = supprCitation.length; u < r; u++) {
    blocCitation.removeChild(supprCitation[u]);
  }
};
