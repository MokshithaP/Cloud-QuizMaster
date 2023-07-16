
import React, { useState } from 'react';
import Certificate from './Certificate';
import './index.css';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [showResult, setShowResult] = useState(false);

  const quizData = [
    {
      question: 'Question 1:What is Cloud Computing?',
      options: ['Cloud Computing means providing services like storage, servers, database, networking, etc', 'Cloud Computing means storing data in a database', 'Cloud Computing is a tool used to create an application', 'None of the mentioned'],
      answer: 'Cloud Computing means providing services like storage, servers, database, networking, etc',
    },
    {
      question: 'Who is the father of cloud computing?',
      options: ['Sharon B. Codd', 'Edgar Frank Codd', 'J.C.R. Licklider', 'Charles Bachman'],
      answer: 'J.C.R. Licklider',
    },
     {
      question: 'Which of the following are the features of cloud computing?',
      options: ['Security', ' Availability', 'Large Network Access', 'All of the mentioned'],
      answer: 'All of the mentioned',
    },
     {
      question: 'Which of the following is a type of cloud computing service?',
      options: ['Service-as-a-Software (SaaS)', 'Software-and-a-Server (SaaS)', ' Software-as-a-Service (SaaS)', 'Software-as-a-Server (SaaS)'],
      answer: 'Software-as-a-Service (SaaS)',
    },
     {
      question: 'Which of the following is the application of cloud computing?',
      options: ['Adobe', 'Paypal', 'Google G Suite', 'All of the above'],
      answer: 'All of the above',
    },
    {
      question: 'Which of the following is an example of the cloud?',
      options: ['Amazon Web Services (AWS)', 'Dropbox', 'Cisco WebEx', 'All of the above'],
      answer: 'All of the above',
    },
   
   
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const currentQuizQuestion = quizData[currentQuestion];

    if (selectedOption === currentQuizQuestion.answer) {
      setScore(score + 1);
    }

    setSelectedOption('');
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };
  const handleNameChange = (event) => {
    setStudentName(event.target.value);
  };

  const handleSubmit = () => {
    setStudentName('John Doe');
    setScore(score);
    setSubmitted(true);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setSubmitted(false);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div class="quizapp">
      <h1 id="h">CC Quiz</h1>
      {!showResult ? (
        <div class="final-results">
          {/* <h1 id="h">CC Quiz</h1> */}
          <h2 id="questiontxt">{quizData[currentQuestion].question}</h2>
          <ul>
            {quizData[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      ) : (
        <div class="no-cert">
          <h2>Quiz Result</h2>
          <p>Your Score: {score}</p>
          {submitted? (
            <div>
              {score>0?(
                <div>
                <label htmlFor="studentName">Enter your name:</label>
                <input
                  type="text"
                  id="studentName"
                  value={studentName}
                  onChange={handleNameChange}
                />
              <Certificate studentName={studentName} score={score} />
              </div>
              ):(<p>no certificate</p>)}
              <button onClick={handleRestartQuiz}>Restart</button>
            </div>
          ) : (
           
            <button onClick={handleSubmit}>Submit Quiz</button>
           
          )}
        </div>
      )}
    </div>
  );
};

export default QuizApp;
