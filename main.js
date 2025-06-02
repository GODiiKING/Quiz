const Data = [
    {
      question: "Which of the following is a common type of cybercrime?",
      a: "Phishing ",
      b: "Blogging",
      c: "Software updates",
      d: "Online gaming",
      correct: "a",
    },
    {
      question: "Why are companies vulnerable to cybercrime?",
      a: "They have no data",
      b: "Their employees are always hackers",
      c: "They use the internet and store sensitive data",
      d: "They don’t allow internet access",
      correct: "c",
    },
    {
      question: "What can happen if your personal data is stolen?",
      a: "You get free internet",
      b: "Your identity can be misused",
      c: "Your screen turns black",
      d: "our battery dies",
      correct: "b",
    },
    {
      question: "Which network protocol is often used to access the Dark Web?",
      a: "HTTP",
      b: "FTP",
      c: "Tor",
      d: "SMTP",
      correct: "c",
    },
    {
      question: "What does VPN stand for?",
      a: "Virtual Private Network",
      b: "Very Personal Network",
      c: "Video Processing Node",
      d: "Verified Public Network",
      correct: "a",
    },
  ];
  const grabId = (idName) => {
    const ElementId = document.getElementById(idName);
    if (ElementId) return ElementId;
    throw new Error(`cannot find the id ${idName}`);
  };
  const option1 = grabId("option1");
  const option2 = grabId("option2");
  const option3 = grabId("option3");
  const option4 = grabId("option4");
  let nextBtn = grabId("btn-next");
  let prevBtn = grabId("btn-prev");
  const quiz = grabId("quiz");
  const question = document.querySelector("h3");
  const answers = document.querySelectorAll(".answer");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  function loadQuiz() {
    unCheckAnswer();
    let nextOption = Data[currentQuiz];
    question.innerText = nextOption.question;
    option1.innerText = nextOption.a;
    option2.innerText = nextOption.b;
    option3.innerText = nextOption.c;
    option4.innerText = nextOption.d;
    nextBtn.addEventListener("click", nextQuestion);
    prevBtn.addEventListener("click", PreviousQuestion);
  }
  function nextQuestion() {
    const answer = getValue();
    if (answer) {
      if (answer === Data[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      if (currentQuiz < Data.length) {
        loadQuiz();
      } else if (score === Data.length) {
        quiz.innerHTML = `<h1> Congratulations 👏👏 <br/>You scored ${score}/${Data.length}</h1>`;
      } else {
        quiz.innerHTML = `<h1> You scored ${score}/${Data.length}`;
      }
    }
  }
  
  function PreviousQuestion() {
    if (currentQuiz.valueOf() === 0) {
      alert("Can't go back anymore");
    } else {
      initialQuiz--;
      loadQuiz();
    }
  }
  
  function getValue() {
    let value = undefined;
    answers.forEach((answer) => {
      if (answer.checked) {
        value = answer.id;
      }
    });
    return value;
  }
  
  function unCheckAnswer() {
    answers.forEach((answer) => {
      answer.checked = false;
    });
  }