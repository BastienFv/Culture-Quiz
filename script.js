const questions = [
    {
      question:
        "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
      answers: [
        "Darth Vader",
        "Anakin Skywalker",
        "Les deux réponse",
        "Aucune réponse",
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
      answers: ["1967", "1974", "1962", "1980"],
      correctAnswerIndex: 0,
    },
    {
      question:
        'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
      answers: ["Zelda", "Ganon", "Tom", "Link"],
      correctAnswerIndex: 3,
    },
    {
      question:
        "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
      answers: ["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"],
      correctAnswerIndex: 2,
    },
];

document.addEventListener("DOMContentLoaded", () => {
  // Récupération des éléments du DOM
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const scoreElement = document.getElementById("score");

  // Initialisation des variables
  let currentQuestionIndex = 0;
  let score = 0;

  // Fonction pour afficher un élément
  function displayElement(element, content) {
    element.textContent = content;
  }

  // Fonction pour créer et ajouter un élément li à la liste des réponses
  function createAnswerElement(answer, index, question) {
    const li = document.createElement("li");
    li.classList.add("answer");
    li.textContent = answer;

    li.addEventListener("click", () => handleAnswerClick(index, question));

    return li;
  }

  // Fonction pour gérer le clic sur une réponse
  function handleAnswerClick(index, question) {
    if (index === question.correctAnswerIndex) {
      score++;
      displayElement(scoreElement, score);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      showNextQuestion();
    } else {
      showEndMessage();
    }
  }

  // Fonction pour afficher le message de fin
  function showEndMessage() {
    displayElement(
      questionElement,
      `Il n'y a plus de questions, merci d'avoir participé. Vous avez obtenu ${score} points sur ${questions.length} !`
    );
    answersElement.innerHTML = "";
  }

  // Fonction pour afficher la question suivante
  function showNextQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    displayElement(questionElement, currentQuestion.question);

    answersElement.innerHTML = "";
    currentQuestion.answers.forEach((answer, index) => {
      const li = createAnswerElement(answer, index, currentQuestion);
      answersElement.appendChild(li);
    });
  }

  // Affichage de la première question
  showNextQuestion();
  
});
