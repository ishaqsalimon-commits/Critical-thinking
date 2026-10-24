import { useState } from 'react'
import './App.css'

const questions = [
{
question: 'All researchers examine evidence. Maya is a researcher. What follows?',
options: [
'Maya examines evidence',
'Maya is a scientist',
'Maya always reaches the right conclusion',
'There is not enough information',
],
answer: 0,
explanation:
'If all researchers examine evidence and Maya is a researcher, then Maya examines evidence.',
},
{
question: 'A shop sells more products after running an advert. What can we conclude?',
options: [
'The advert definitely caused the increase',
'The products must be cheaper',
'Sales increased, but more evidence is needed to establish the cause',
'The advert had no effect',
],
answer: 2,
explanation:
'The timing suggests a possible link, but other factors may have influenced sales.',
},
{
question: 'What is the best way to assess a surprising claim?',
options: [
'Believe it if many people share it',
'Look for reliable evidence and independent sources',
'Trust the most confident speaker',
'Ignore evidence that disagrees',
],
answer: 1,
explanation:
'Reliable evidence and independent verification help us assess claims fairly.',
},
]

const skills = [
{
number: '01',
icon: '◈',
title: 'Analytical thinking',
description: 'Break complex ideas into smaller, understandable parts.',
color: 'lavender',
},
{
number: '02',
icon: '⌘',
title: 'Logical reasoning',
description: 'Connect ideas and identify whether conclusions follow.',
color: 'mint',
},
{
number: '03',
icon: '◎',
title: 'Evaluate evidence',
description: 'Separate reliable information from assumptions and bias.',
color: 'peach',
},
{
number: '04',
icon: '✳',
title: 'Creative thinking',
description: 'Explore different perspectives and discover new solutions.',
color: 'blue',
},
]

function App() {
const [currentQuestion, setCurrentQuestion] = useState(0)
const [selectedAnswer, setSelectedAnswer] = useState(null)
const [score, setScore] = useState(0)
const [finished, setFinished] = useState(false)

const question = questions[currentQuestion]

function answerQuestion(index) {
if (selectedAnswer !== null) return

setSelectedAnswer(index)

if (index === question.answer) {
  setScore((previous) => previous + 1)
}

}

function nextQuestion() {
if (currentQuestion < questions.length - 1) {
setCurrentQuestion((previous) => previous + 1)
setSelectedAnswer(null)
} else {
setFinished(true)
}
}

function restartQuiz() {
setCurrentQuestion(0)
setSelectedAnswer(null)
setScore(0)
setFinished(false)
}

return (
<main className="app-shell">
<aside className="sidebar">
<a className="brand" href="#home">
<span className="brand-mark">C</span>
<span>clear<span className="brand-light">mind</span></span>
</a>

    <p className="nav-label">LEARN</p>
    <a className="nav-link active" href="#home"><span>⌂</span> Overview</a>
    <a className="nav-link" href="#skills"><span>◇</span> Thinking skills</a>
    <a className="nav-link" href="#practice"><span>✳</span> Daily practice</a>

    <div className="sidebar-bottom">
      <div className="sidebar-note">
        <span className="note-icon">✦</span>
        <h3>Stay curious.</h3>
        <p>Good questions lead to better thinking.</p>
      </div>
      <p className="sidebar-footer">A LITTLE PROGRESS, EVERY DAY.</p>
    </div>
  </aside>

  <section className="main-content" id="home">
    <header className="topbar">
      <span className="breadcrumb">Learning space <span>/</span> Overview</span>
      <span className="date-chip"><span className="status-dot" /> YOUR SPACE TO GROW</span>
    </header>

    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow"><span>✳</span> YOUR THINKING JOURNEY STARTS HERE</p>
        <h1>Curiosity is the beginning of <em>understanding.</em></h1>
        <p className="hero-description">
          Train your mind to ask better questions, think more clearly,
          and see the world from a different perspective.
        </p>
        <a className="primary-button" href="#practice">Start today's practice <span>↗</span></a>
        <div className="hero-caption"><span>✦</span> Small steps. Sharper thinking.</div>
      </div>

      <div className="hero-art" aria-label="Abstract illustration of a curious mind">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-sun">✳</div>
        <div className="art-card card-top"><span>IDEAS</span><b>↗</b></div>
        <div className="art-center">
          <span className="art-spark">✦</span>
          <span className="art-question">?</span>
        </div>
        <div className="art-card card-bottom"><b>◉</b><span>NEW PERSPECTIVES</span></div>
        <span className="floating-dot dot-one" />
        <span className="floating-dot dot-two" />
        <span className="floating-dot dot-three" />
      </div>
    </section>

    <section className="stats-row" aria-label="Learning overview">
      <div className="stat-item">
        <span className="stat-icon lavender">◈</span>
        <div><strong>4</strong><span>Core thinking skills</span></div>
      </div>
      <div className="stat-item">
        <span className="stat-icon mint">✓</span>
        <div><strong>3</strong><span>Practice questions</span></div>
      </div>
      <div className="stat-item">
        <span className="stat-icon peach">↗</span>
        <div><strong>{score}</strong><span>Correct this session</span></div>
      </div>
      <div className="stat-message"><span>✦</span> Progress over perfection.</div>
    </section>

    <section className="skills-section" id="skills">
      <div className="section-heading">
        <div>
          <p className="eyebrow">BUILD YOUR FOUNDATION</p>
          <h2>Four ways to think better<span>.</span></h2>
        </div>
        <span className="section-aside">THE ESSENTIALS · 01—04</span>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.number}>
            <div className={`skill-icon ${skill.color}`}>{skill.icon}</div>
            <span className="skill-number">{skill.number}</span>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <a href="#practice" aria-label={`Practice ${skill.title}`}>Explore skill <span>↗</span></a>
          </article>
        ))}
      </div>
    </section>

    <section className="practice-section" id="practice">
      <div className="practice-intro">
        <p className="eyebrow">A MOMENT TO THINK</p>
        <h2>Put your reasoning<br />to the test<span>.</span></h2>
        <p>Take your time. Think it through. The goal isn't just to get it right—it's to understand why.</p>
        <div className="practice-meta"><span>◷</span> 2 MINUTES <span className="meta-divider">·</span> {questions.length} QUESTIONS</div>
      </div>

      <div className="quiz-card">
        {finished ? (
          <div className="quiz-finished">
            <div className="result-icon">✦</div>
            <p className="eyebrow">PRACTICE COMPLETE</p>
            <h3>{score === questions.length ? 'Brilliant thinking!' : 'Every question teaches you something.'}</h3>
            <p>You answered {score} out of {questions.length} questions correctly.</p>
            <button className="quiz-next" onClick={restartQuiz}>Try again <span>↻</span></button>
          </div>
        ) : (
          <>
            <div className="quiz-topline">
              <span>THINKING EXERCISE</span>
              <span>{String(currentQuestion + 1).padStart(2, '0')} <span className="quiz-muted">/ {String(questions.length).padStart(2, '0')}</span></span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
            </div>
            <h3>{question.question}</h3>
            <div className="answer-list">
              {question.options.map((option, index) => {
                let stateClass = ''
                if (selectedAnswer !== null && index === question.answer) stateClass = ' correct'
                else if (selectedAnswer === index) stateClass = ' incorrect'

                return (
                  <button
                    className={`answer-option${stateClass}`}
                    key={option}
                    onClick={() => answerQuestion(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
                    <span>{option}</span>
                    {selectedAnswer !== null && index === question.answer && <span className="answer-check">✓</span>}
                    {selectedAnswer === index && index !== question.answer && <span className="answer-check">×</span>}
                  </button>
                )
              })}
            </div>
            {selectedAnswer !== null && (
              <div className="answer-feedback" role="status">
                <strong>{selectedAnswer === question.answer ? 'Exactly right!' : 'Good attempt—keep learning.'}</strong>
                <p>{question.explanation}</p>
              </div>
            )}
            <div className="quiz-footer">
              <span>{selectedAnswer === null ? 'Choose the best answer' : `Score: ${score} / ${questions.length}`}</span>
              <button className="quiz-next" onClick={nextQuestion} disabled={selectedAnswer === null}>
                {currentQuestion === questions.length - 1 ? 'See results' : 'Next question'} <span>→</span>
              </button>
            </div>
          </>
        )}
      </div>
    </section>

    <footer className="page-footer"><span>clearmind © 2026</span><span>THINK DEEPLY. LIVE CURIOUSLY. <span className="footer-star">✳</span></span></footer>
  </section>
</main>

)
}

export default App
