import { useState, useEffect, useRef } from "react";
import { COLORS, DAY_COLORS, DAYS } from "./data";
import { buildPrompt, SYSTEM_PROMPT } from "./prompt";
import "./app.css";

const STORAGE_KEY = "sys-challenge-answers";
const PLAN_STORAGE_KEY = "sys-challenge-plan";

function getInitialDay() {
  const params = new URLSearchParams(window.location.search);
  const d = parseInt(params.get("day"));
  if (d >= 1 && d <= 5) return d - 1;
  return 0;
}

function loadAnswers() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch { return {}; }
}

function loadPlan() {
  try {
    return localStorage.getItem(PLAN_STORAGE_KEY) || null;
  } catch { return null; }
}

// --- Input Components ---

function MultiSelect({ options, value = [], onChange }) {
  const toggle = (opt) => {
    if (value.includes(opt)) onChange(value.filter(v => v !== opt));
    else onChange([...value, opt]);
  };
  return (
    <div className="chips">
      {options.map(opt => (
        <button key={opt} className={`chip ${value.includes(opt) ? "selected" : ""}`} onClick={() => toggle(opt)}>
          {value.includes(opt) ? "✓ " : ""}{opt}
        </button>
      ))}
    </div>
  );
}

function SelectInput({ options, value, onChange }) {
  return (
    <div className="radio-options">
      {options.map(opt => (
        <button key={opt} className={`radio-option ${value === opt ? "selected" : ""}`} onClick={() => onChange(opt)}>
          {value === opt ? "\u25CF " : "\u25CB "}{opt}
        </button>
      ))}
    </div>
  );
}

function TextInput({ value, onChange, placeholder }) {
  return <input type="text" className="text-input" value={value || ""} onChange={e => onChange(e.target.value)} placeholder={placeholder} />;
}

function TextArea({ value, onChange, placeholder }) {
  return <textarea className="textarea-input" value={value || ""} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={4} />;
}

function QuestionBlock({ q, value, onChange }) {
  return (
    <div className="question">
      <label>{q.label}</label>
      {q.type === "multi" && <MultiSelect options={q.options} value={value || []} onChange={onChange} />}
      {q.type === "select" && <SelectInput options={q.options} value={value || ""} onChange={onChange} />}
      {q.type === "text" && <TextInput value={value} onChange={onChange} placeholder={q.placeholder} />}
      {q.type === "textarea" && <TextArea value={value} onChange={onChange} placeholder={q.placeholder} />}
    </div>
  );
}

// --- Progress Dots ---

function ProgressDots({ currentDay, onDayClick, answers }) {
  return (
    <div className="progress-dots">
      {DAYS.map((d, i) => {
        const dayQs = d.sections.flatMap(s => s.questions.map(q => answers[q.id]));
        const hasAnswers = dayQs.some(a => a && (Array.isArray(a) ? a.length > 0 : String(a).length > 0));
        const isCurrent = currentDay === i;
        return (
          <button
            key={i}
            onClick={() => onDayClick(i)}
            className={`progress-dot ${isCurrent ? "current" : ""} ${hasAnswers ? "completed" : ""}`}
            style={{
              borderColor: isCurrent ? DAY_COLORS[i] : undefined,
              backgroundColor: hasAnswers ? DAY_COLORS[i] : isCurrent ? `${DAY_COLORS[i]}20` : undefined,
              color: hasAnswers ? "#fff" : isCurrent ? DAY_COLORS[i] : undefined,
            }}
          >
            {d.num}
          </button>
        );
      })}
    </div>
  );
}

// --- Plan Display ---

function formatPlan(text) {
  return text
    .replace(/## (.*)/g, `<h3 class="plan-h3">$1</h3>`)
    .replace(/### (.*)/g, `<h4 class="plan-h4">$1</h4>`)
    .replace(/\*\*(.*?)\*\*/g, `<strong>$1</strong>`)
    .replace(/^- (.*)/gm, `<div class="plan-list-item">$1</div>`);
}

function PlanDisplay({ plan }) {
  if (!plan) return null;
  return (
    <div className="plan-card">
      <div className="plan-header">
        <div className="plan-label">Your Personalised Plan</div>
        <h2>Sort Your Socials</h2>
        <p className="plan-subtitle">Generated just for you based on your challenge answers</p>
      </div>
      <div className="plan-content" dangerouslySetInnerHTML={{ __html: formatPlan(plan) }} />
      <div className="plan-cta">
        <p>Want ongoing support to actually stick to this plan?</p>
        <p className="plan-cta-highlight">The No Grey Suits Club launches in June. Stay tuned.</p>
      </div>
    </div>
  );
}

// --- Main App ---

export default function App() {
  const [answers, setAnswers] = useState(loadAnswers);
  const [currentDay, setCurrentDay] = useState(getInitialDay);
  const [view, setView] = useState("challenge");
  const [plan, setPlan] = useState(loadPlan);
  const [loadingMsg, setLoadingMsg] = useState("");
  const topRef = useRef(null);

  // Save answers whenever they change
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(answers)); } catch {}
  }, [answers]);

  const updateAnswer = (id, val) => setAnswers(prev => ({ ...prev, [id]: val }));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToDay = (dayIndex) => {
    setCurrentDay(dayIndex);
    setView("challenge");
    // Update URL without reload
    const url = new URL(window.location);
    url.searchParams.set("day", dayIndex + 1);
    window.history.pushState({}, "", url);
    scrollToTop();
  };

  const generatePlan = async () => {
    setView("generating");
    const msgs = [
      "Sifting through your answers...",
      "Building something just for you...",
      "Making it actually useful...",
      "Almost there...",
    ];
    let i = 0;
    setLoadingMsg(msgs[0]);
    const interval = setInterval(() => {
      i++;
      if (i < msgs.length) setLoadingMsg(msgs[i]);
    }, 4000);

    try {
      const response = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: buildPrompt(answers),
          systemPrompt: SYSTEM_PROMPT,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Generation failed");
      }

      setPlan(data.plan);
      try { localStorage.setItem(PLAN_STORAGE_KEY, data.plan); } catch {}
      setView("plan");
    } catch (e) {
      console.error("Generation failed:", e);
      setPlan("Something went wrong generating your plan. Give it another go - sometimes these things just need a second try.");
      setView("plan");
    } finally {
      clearInterval(interval);
    }
  };

  // Handle browser back/forward
  useEffect(() => {
    const onPop = () => {
      const params = new URLSearchParams(window.location.search);
      const d = parseInt(params.get("day"));
      if (d >= 1 && d <= 5) {
        setCurrentDay(d - 1);
        setView("challenge");
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const day = DAYS[currentDay];
  const dayColor = DAY_COLORS[currentDay];
  const isLastDay = currentDay === 4;

  const totalQs = DAYS.flatMap(d => d.sections.flatMap(s => s.questions)).length;
  const answeredQs = Object.values(answers).filter(a => a && (Array.isArray(a) ? a.length > 0 : String(a).length > 0)).length;

  return (
    <div className="app">
      <div ref={topRef} />

      <header className="header">
        <div className="header-brand">No Grey Suits</div>
        <h1>Sort Your Socials</h1>
        {view === "challenge" && (
          <ProgressDots currentDay={currentDay} onDayClick={goToDay} answers={answers} />
        )}
        {view === "plan" && (
          <p className="header-sub">{"✨"} Your plan is ready</p>
        )}
      </header>

      <div className="container">

        {/* Challenge View */}
        {view === "challenge" && (
          <>
            <div className="day-header" style={{ background: `linear-gradient(135deg, ${dayColor}18, ${dayColor}08)`, borderLeftColor: dayColor }}>
              <div className="day-label" style={{ color: dayColor }}>Day {day.num}</div>
              <h2>{day.title}</h2>
              <p>{day.subtitle}</p>
            </div>

            {day.sections.map((section, si) => (
              <div key={si} className="section">
                <h3>{section.heading}</h3>
                {section.description && <p className="section-desc">{section.description}</p>}
                {section.questions.map(q => (
                  <QuestionBlock key={q.id} q={q} value={answers[q.id]} onChange={val => updateAnswer(q.id, val)} />
                ))}
              </div>
            ))}

            <div className="nav-buttons">
              {currentDay > 0 && (
                <button className="btn btn-secondary" onClick={() => goToDay(currentDay - 1)}>
                  {"←"} Day {currentDay}
                </button>
              )}
              <div style={{ flex: 1 }} />
              {!isLastDay ? (
                <button className="btn btn-primary" style={{ backgroundColor: dayColor, boxShadow: `0 4px 16px ${dayColor}40` }} onClick={() => goToDay(currentDay + 1)}>
                  Day {currentDay + 2} {"→"}
                </button>
              ) : (
                <button className="btn-generate" onClick={generatePlan}>
                  {"✨"} Generate My Plan
                </button>
              )}
            </div>

            <div className="progress-counter">
              {answeredQs} of {totalQs} questions answered · Your progress saves automatically
            </div>
          </>
        )}

        {/* Generating */}
        {view === "generating" && (
          <div className="loading-view">
            <div className="spinner" />
            <h3>{loadingMsg}</h3>
            <p>This takes about 15-20 seconds. Worth the wait, promise.</p>
          </div>
        )}

        {/* Plan */}
        {view === "plan" && (
          <>
            <PlanDisplay plan={plan} />
            <div className="plan-actions">
              <button className="btn btn-secondary" onClick={() => setView("challenge")}>
                {"←"} Back to answers
              </button>
              <button className="btn btn-regen" onClick={generatePlan}>
                Regenerate plan
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
