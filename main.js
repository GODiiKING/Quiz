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
    {
      question: "How can you check if a website is secure?",
      a: "It has “http” in the URL",
      b: "It has “https” and a padlock icon",
      c: "The page loads slowly",
      d: "It contains many ads",
      correct: "b",
    },
    {
      question: "What is a DDoS attack?",
      a: "A method to speed up your network",
      b: "Overloads a website with traffic",
      c: "A type of phishing attack",
      d: "A password cracking technique",
      correct: "b",
    },
    {
      question: "Which of these is a strong password?",
      a: "123456",
      b: "Password",
      c: "S7&xP!9bL#2q",
      d: "yourname",
      correct: "c",
    },
    {
      question: "What is encryption?",
      a: "A way to scramble data",
      b: "A software update",
      c: "A type of cyber attack",
      d: "A social media platform",
      correct: "a",
    },
    {
      question: "What does “anonymity” on the Dark Web mean?",
      a: "You have a username and profile picture",
      b: "Your identity and location are hidden",
      c: "You have to pay money to join",
      d: "You can only browse websites without logging in",
      correct: "b",
    },
    {
      question: "What is a “zero-day” vulnerability?",
      a: "A bug already fixed",
      b: "A software flaw ",
      c: "A virus that lasts only one day",
      d: "A backup file",
      correct: "b",
    },
    {
      question: "What is a “backdoor” in cybersecurity?",
      a: "bypass authentication",
      b: "A new software update",
      c: "A firewall setting",
      d: "A social engineering technique",
      correct: "a",
    },
    {
      question: "What is “White Hats” hacker?",
      a: "To perform illegal activities",
      b: "improve security by ethical hacking",
      c: "To sell stolen data",
      d: "To spread malware",
      correct: "b",
    },
    // {
    //   question: "",
    //   a: "",
    //   b: "",
    //   c: "",
    //   d: "",
    //   correct: "",
    // },
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