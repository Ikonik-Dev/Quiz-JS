const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

// todo on selectionne le formulaires
const form = document.querySelector(".quiz-form");

// todo on recupere l'évement du bouton "submit" avec l'ecouteur d'evenement addEventListerner et on fait appel à une fonction pour maintenir le submit
form.addEventListener("submit", handleSubmit);

// todo on créé la fonction de prehension du submit
function handleSubmit(e) {
  // cette fontction prend l'objet d'evenement e
  // cette objeet d'evenement va nous fournir la methode suivant
  // qui conditionne le comportement par defaut de l'envoie de formulaire
  e.preventDefault();

  // todo on recupere les resulats de ce que l'utilisateur à coché
  const results = [];

  // pour cela, on recupere tout les inputs qui ont éé coché
  // nb: je vais prendre tout les input radio qui sont "checked"
  const radioButtons = document.querySelectorAll(
    "input[type = 'radio']:checked"
  );

  // pour chaque inputs (radioButton) qui sont dans radioButtons
  // et de l'index (indexation du taableau -nodeList-)
  radioButtons.forEach((radioButton, index) => {
    // todo on pose une condition
    // si le bouton -radioButton- qui a été cocher et sa valeur -value-
    // est strictement identique a la réponse de l'indexe du tableau
    // de la constante responses alors j'envoie true
    if (radioButton.value === responses[index]) {
      results.push(true);
    }
    // sinon j'envoie false
    else {
      results.push(false);
    }
  });
  // console.log(radioButtons, results);

  // todo on affichee les résultats de 'results'
  showResults(results);
  // todo on cree une fonction pour stylisé le type de reponse
  addColors(results);
}

// todo !(important) 2-on créé la constante titleResults de l'élémént HTML titleResult
const titleResult = document.querySelector(".results h2");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");

// todo !(important) 1-on ecrit la structure de la fonctio result
function showResults(results) {
  // on souhaite savoir le nombre d'erreur
  //  pour cela on filtre les resultats
  const errorsNumber = results.filter((el) => el === false).length;

  // console.log(errorsNumber);

  //  on souhaite afficher differentes phrases selon le nombre d'erreur
  //  pour cea , il sera fait un certain nombre de conditions if(cond) alors (..)
  switch (errorsNumber) {
    case 0:
      titleResult.textContent = `✔️ Bravo, c'est un sans faute ! ✔️`;
      helpResult.textContent = "Quelle culture ...";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>5 / 5</span>";
      markResult.style.display = "block";
      break;
    case 1:
      titleResult.textContent = `✨ Vous y êtes presque ! ✨`;
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>4 / 5</span>";
      markResult.style.display = "block";
      break;
    case 2:
      titleResult.textContent = `✨ Encore un effort ... 👀`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>3 / 5</span>";
      markResult.style.display = "block";
      break;
    case 3:
      titleResult.textContent = `👀 Il reste quelques erreurs. 😭`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>2 / 5</span>";
      markResult.style.display = "block";
      break;
    case 4:
      titleResult.textContent = `😭 Peut mieux faire ! 😭`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>1 / 5</span>";
      markResult.style.display = "block";
      break;
    case 5:
      titleResult.textContent = `👎 Peut mieux faire ! 👎`;
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      markResult.style.display = "block";
      markResult.innerHTML = "Score : <span>0 / 5</span>";
      break;

    default:
      titleResult.textContent = "Wops, cas innatendu.";
  }
}

// TODO afficher et styliser les resultats
// on selectionne le block a colrise dans l'HTML
const questions = document.querySelectorAll(".question-block");

// on appelle la fonction addColors pour determiner la couleur du block
// selon le type de reponse
function addColors(results) {
  results.forEach((response, index) => {
    if (results[index]) {
      questions[index].style.backgroundImage =
        "linear-gradient(to right, #a8ff78, #78ffd6)";
    } else {
      questions[index].style.backgroundImage =
        "linear-gradient(to right, #f5567b, #fd674c)";
    }
  });
}

// TODO donner la possibilité de modifier les réponses
const radioInputs = document.querySelectorAll("input[type='radio']");

radioInputs.forEach((radioInput) =>
  radioInput.addEventListener("input", resetColor)
);

function resetColor(e) {
  // pour obtenir l'index du tableau de question
  // console.log(e.target.getAttribute("name").slice(1) - 1);

  const index = e.target.getAttribute("name").slice(1) - 1;
  const parentQuestionBlock = questions[index];
  // console.log(parentQuestionBlock);

  parentQuestionBlock.style.backgroundColor = "f1f1f1";
  parentQuestionBlock.style.backgroundImage = "none";
}
