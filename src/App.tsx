import { useState } from "react";
import { subjects, schedule, subjectColors, colorMap } from "./data";

type Tab = "overview" | "calendar" | "subjects" | "daily";

const totalChapters = subjects.reduce((a, s) => a + s.totalChapters, 0);

// Group schedule by day
const scheduleByDay: Record<number, typeof schedule> = {};
for (const entry of schedule) {
  if (!scheduleByDay[entry.day]) scheduleByDay[entry.day] = [];
  scheduleByDay[entry.day].push(entry);
}

// Tips per subject
const subjectTips: Record<string, string[]> = {
  history: ["Make a ruler timeline chart", "Use NCERT Class 6–12 History", "Focus on dates & important events", "Solve PYQs after each chapter"],
  geography: ["Practice map daily", "Himalayan vs Peninsular rivers", "Remember states & capitals", "Physical + Indian + World geo"],
  polity: ["Make Article-number flashcards", "M. Laxmikanth is the Bible", "Understand Parliament process", "Constitutional bodies chart"],
  economics: ["Formula sheet is a must", "Remember RBI Governor & rates", "Budget & GST terms important", "Current schemes with dates"],
  biology: ["NCERT Class 8–10", "Draw system diagrams", "Disease-causing organisms list", "Hormones & their functions"],
  physics: ["Laws & formulae first", "Inventions & inventors list", "Electricity + Magnetism heavy", "Unit conversions important"],
  chemistry: ["Chemical names & formulas", "Periodic table trends", "Acids, Bases, Salts - numericals", "Everyday chemistry examples"],
};

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  // For calendar: get subject of a day
  const getDaySubject = (day: number) => {
    const entries = scheduleByDay[day];
    if (!entries || entries.length === 0) return "revision";
    return entries[0].subjectId;
  };

  // subject filter applied inline in render

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white font-sans">
      {/* ── HEADER ── */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-blue-600/10 to-purple-600/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-10 pb-6 text-center">
          {/* badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            🏆 SSC General Knowledge — 60-Day Master Plan
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-3">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              60-Day GK
            </span>{" "}
            <span className="text-white">Study Schedule</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-6">
            Complete all <strong className="text-yellow-300">{totalChapters} chapters</strong> across{" "}
            <strong className="text-yellow-300">7 subjects</strong> in 60 days ·{" "}
            <strong className="text-yellow-300">3–4 hrs/day</strong>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-7">
            {[
              { label: "Total Days", value: "60", icon: "📅" },
              { label: "Total Chapters", value: totalChapters, icon: "📚" },
              { label: "Subjects", value: "7", icon: "🎯" },
              { label: "Daily Hours", value: "3–4", icon: "⏰" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-2xl font-black text-yellow-300">{s.value}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {(
              [
                { id: "overview", label: "📋 Overview", },
                { id: "calendar", label: "📅 Day Calendar" },
                { id: "subjects", label: "📚 Subjects" },
                { id: "daily", label: "⏱️ Daily Routine" },
              ] as { id: Tab; label: string }[]
            ).map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeTab === t.id
                    ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30 scale-105"
                    : "bg-white/10 text-slate-300 hover:bg-white/20"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="max-w-7xl mx-auto px-4 pb-20 pt-4">

        {/* ══════════════════════════════════════════ */}
        {/* OVERVIEW TAB */}
        {/* ══════════════════════════════════════════ */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Subject Phase Cards */}
            <h2 className="text-center text-slate-400 text-sm tracking-widest uppercase mb-2">
              — Phase-wise Breakdown —
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {subjects.map((s) => (
                <div
                  key={s.id}
                  className={`rounded-2xl border ${s.border} overflow-hidden shadow-xl hover:scale-[1.02] transition-all cursor-pointer`}
                  onClick={() => { setSelectedSubject(s.id); setActiveTab("subjects"); }}
                >
                  {/* Card header */}
                  <div className={`bg-gradient-to-r ${s.gradient} p-5`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-4xl">{s.icon}</span>
                      <span className="bg-black/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {s.days}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-white">{s.title}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{s.totalChapters} chapters</p>
                  </div>
                  {/* Chapter list preview */}
                  <div className={`${s.lightBg} p-4 space-y-1.5`}>
                    {s.chapters.slice(0, 5).map((ch, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className={`w-5 h-5 rounded-full ${s.badge} text-white text-xs flex items-center justify-center font-bold shrink-0`}>
                          {i + 1}
                        </span>
                        <span className={`text-xs font-medium ${s.textColor}`}>{ch}</span>
                      </div>
                    ))}
                    {s.chapters.length > 5 && (
                      <p className={`text-xs ${s.textColor} font-semibold pl-7 pt-1`}>
                        + {s.chapters.length - 5} more chapters →
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Revision card */}
              <div className="rounded-2xl border border-yellow-400 overflow-hidden shadow-xl">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl">🔁</span>
                    <span className="bg-black/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">Day 60</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">REVISION</h3>
                  <p className="text-white/70 text-sm mt-0.5">Final Day</p>
                </div>
                <div className="bg-yellow-50 p-4 space-y-1.5">
                  {["Full Syllabus Rapid Revision", "All Notes & Flashcards", "3 Full Mock Tests", "Error Analysis", "Last-minute GK facts"].map((ch, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-yellow-500 text-white text-xs flex items-center justify-center font-bold shrink-0">✓</span>
                      <span className="text-xs font-medium text-yellow-700">{ch}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 60-Day Visual Map */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-1 text-center">📅 Visual 60-Day Roadmap</h3>
              <p className="text-slate-500 text-xs text-center mb-5">Each tile = one day · Color = subject</p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {Array.from({ length: 60 }, (_, i) => {
                  const day = i + 1;
                  const subId = getDaySubject(day);
                  const bgColor = subjectColors[subId] || "bg-slate-600";
                  const entries = scheduleByDay[day] || [];
                  // label unused - day number shown instead
                  return (
                    <button
                      key={day}
                      title={`Day ${day}: ${entries.map(e => e.chapter).join(", ")}`}
                      onClick={() => { setSelectedDay(day); setActiveTab("calendar"); }}
                      className={`w-9 h-9 md:w-10 md:h-10 ${bgColor} rounded-lg flex items-center justify-center text-white font-black text-xs shadow hover:scale-110 transition-transform`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
              {/* Legend */}
              <div className="flex flex-wrap justify-center gap-3 mt-5">
                {subjects.map((s) => (
                  <div key={s.id} className="flex items-center gap-1.5 text-xs">
                    <div className={`w-4 h-4 rounded ${s.badge}`} />
                    <span className="text-slate-400">{s.title} ({s.days})</span>
                  </div>
                ))}
                <div className="flex items-center gap-1.5 text-xs">
                  <div className="w-4 h-4 rounded bg-yellow-500" />
                  <span className="text-slate-400">REVISION (Day 60)</span>
                </div>
              </div>
            </div>

            {/* Subject Progress Bars */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-5 text-center">📊 Chapter Distribution</h3>
              <div className="space-y-4">
                {subjects.map((s) => {
                  const pct = Math.round((s.totalChapters / totalChapters) * 100);
                  return (
                    <div key={s.id}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-slate-300 font-bold flex items-center gap-2">
                          {s.icon} {s.title}
                        </span>
                        <span className="text-slate-400 text-xs">{s.totalChapters} chapters · {s.days}</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-5 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${s.gradient} h-5 rounded-full flex items-center justify-end pr-2`}
                          style={{ width: `${Math.max(pct * 1.8, 8)}%` }}
                        >
                          <span className="text-white text-xs font-bold">{s.totalChapters}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════ */}
        {/* CALENDAR TAB */}
        {/* ══════════════════════════════════════════ */}
        {activeTab === "calendar" && (
          <div className="space-y-5">
            <h2 className="text-center text-white font-black text-2xl mb-1">📅 Day-by-Day Chapter Schedule</h2>
            <p className="text-center text-slate-400 text-sm mb-4">Click a day to highlight it</p>

            {/* Days grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 60 }, (_, i) => {
                const day = i + 1;
                const entries = scheduleByDay[day] || [];
                const subId = entries[0]?.subjectId || "revision";
                const cm = colorMap[subId] || colorMap.revision;
                const isSelected = selectedDay === day;

                return (
                  <div
                    key={day}
                    onClick={() => setSelectedDay(isSelected ? null : day)}
                    className={`rounded-2xl border-2 ${cm.border} ${cm.light} cursor-pointer transition-all hover:scale-[1.02] ${isSelected ? "ring-2 ring-white/60 scale-[1.02]" : ""}`}
                  >
                    {/* Header */}
                    <div className={`flex items-center justify-between px-4 py-2.5 bg-gradient-to-r ${entries[0]?.gradient || "from-yellow-400 to-orange-400"} rounded-t-xl`}>
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 bg-black/20 rounded-full flex items-center justify-center text-white font-black text-xs">
                          {day}
                        </span>
                        <span className="text-white font-bold text-sm">{entries[0]?.icon || "🔁"} {entries[0]?.subject || "REVISION"}</span>
                      </div>
                      <span className="text-white/70 text-xs">Day {day}</span>
                    </div>
                    {/* Chapters */}
                    <div className="px-4 py-3 space-y-1.5">
                      {entries.map((e, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className={`w-5 h-5 ${cm.bg} text-white text-xs rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5`}>
                            {e.chapterNo}
                          </span>
                          <span className="text-slate-200 text-xs font-medium leading-relaxed">{e.chapter}</span>
                        </div>
                      ))}
                      {entries.length === 0 && (
                        <div className="text-slate-400 text-xs italic">Full Revision + Mock Tests</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════ */}
        {/* SUBJECTS TAB */}
        {/* ══════════════════════════════════════════ */}
        {activeTab === "subjects" && (
          <div className="space-y-6">
            {/* Subject Selector */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedSubject(null)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${!selectedSubject ? "bg-white text-slate-900" : "bg-white/10 text-slate-300 hover:bg-white/20"}`}
              >
                ALL
              </button>
              {subjects.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSubject(selectedSubject === s.id ? null : s.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${selectedSubject === s.id ? `${s.badge} text-white` : "bg-white/10 text-slate-300 hover:bg-white/20"}`}
                >
                  {s.icon} {s.title}
                </button>
              ))}
            </div>

            {/* Subject Detailed Cards */}
            {(selectedSubject ? subjects.filter((s) => s.id === selectedSubject) : subjects).map((s) => (
              <div key={s.id} className={`rounded-2xl border-2 ${s.border} overflow-hidden shadow-2xl`}>
                {/* Subject Header */}
                <div className={`bg-gradient-to-r ${s.gradient} p-5 md:p-6`}>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{s.icon}</span>
                      <div>
                        <h3 className="text-3xl font-black text-white">{s.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="bg-black/20 text-white text-xs font-bold px-3 py-1 rounded-full">{s.days}</span>
                          <span className="bg-black/20 text-white text-xs font-bold px-3 py-1 rounded-full">{s.totalChapters} Chapters</span>
                          <span className="bg-black/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                            ~{Math.ceil(s.totalChapters / (s.dayRange[1] - s.dayRange[0] + 1))} ch/day
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Tips */}
                    <div className="bg-black/20 rounded-xl p-3 max-w-xs">
                      <p className="text-white/80 text-xs font-bold mb-1.5">💡 Study Tips</p>
                      <ul className="space-y-1">
                        {(subjectTips[s.id] || []).map((tip, i) => (
                          <li key={i} className="text-white/70 text-xs flex items-start gap-1.5">
                            <span className="text-yellow-300 mt-0.5 shrink-0">→</span>{tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* All Chapters */}
                <div className={`${s.lightBg} p-5`}>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {s.chapters.map((ch, i) => {
                      // Find which day this chapter falls on
                      const entry = schedule.find((e) => e.subjectId === s.id && e.chapterNo === i + 1);
                      return (
                        <div key={i} className="bg-white rounded-xl p-3 shadow-sm flex items-start gap-3">
                          <span className={`w-7 h-7 ${s.badge} text-white text-xs rounded-lg flex items-center justify-center font-black shrink-0`}>
                            {i + 1}
                          </span>
                          <div>
                            <p className={`font-semibold text-xs md:text-sm ${s.textColor}`}>{ch}</p>
                            {entry && (
                              <p className="text-slate-400 text-xs mt-0.5">📅 Day {entry.day}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ══════════════════════════════════════════ */}
        {/* DAILY ROUTINE TAB */}
        {/* ══════════════════════════════════════════ */}
        {activeTab === "daily" && (
          <div className="space-y-6">
            <h2 className="text-center text-white font-black text-2xl">⏱️ Daily Study Routine</h2>
            <p className="text-center text-slate-400 text-sm mb-2">Follow this structure every single day for 60 days</p>

            {/* Session blocks */}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { session: "Session 1", time: "1 – 1.5 hrs", task: "Theory — Study Today's Chapter(s)", icon: "📖", note: "Use NCERT + short notes", color: "from-blue-600 to-indigo-500" },
                { session: "Break", time: "15 min", task: "Short Break · Stretch · Hydrate", icon: "☕", note: "No phone scrolling!", color: "from-slate-600 to-slate-700" },
                { session: "Session 2", time: "1 – 1.5 hrs", task: "MCQ Practice — 50–60 Questions", icon: "✏️", note: "Testbook / Adda247 / PYQs", color: "from-green-600 to-emerald-500" },
                { session: "Break", time: "10 min", task: "Rest", icon: "😌", note: "Eyes off screen", color: "from-slate-600 to-slate-700" },
                { session: "Session 3", time: "30 – 45 min", task: "Revision — Yesterday's Topic", icon: "🔁", note: "Quick re-read + flashcards", color: "from-amber-600 to-orange-500" },
                { session: "Session 4", time: "20 – 30 min", task: "Current Affairs / Static GK", icon: "📰", note: "Newspaper or GKToday app", color: "from-purple-600 to-violet-500" },
              ].map((s, i) => (
                <div key={i} className={`bg-gradient-to-r ${s.color} rounded-2xl p-5 flex items-start gap-4 shadow-xl`}>
                  <div className="text-4xl">{s.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <span className="text-white font-black text-lg">{s.session}</span>
                      <span className="bg-black/20 text-white text-xs px-3 py-0.5 rounded-full font-semibold">{s.time}</span>
                    </div>
                    <p className="text-white font-semibold text-sm">{s.task}</p>
                    <p className="text-white/60 text-xs mt-1 italic">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Weekly */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl text-center mb-5">📆 Weekly Study Structure</h3>
              <div className="grid grid-cols-7 gap-2 text-center">
                {[
                  { day: "Mon", type: "new", label: "New Chapters + MCQs" },
                  { day: "Tue", type: "new", label: "New Chapters + MCQs" },
                  { day: "Wed", type: "new", label: "New Chapters + MCQs" },
                  { day: "Thu", type: "new", label: "New Chapters + MCQs" },
                  { day: "Fri", type: "new", label: "New Chapters + MCQs" },
                  { day: "Sat", type: "practice", label: "PYQs + Weak Topics" },
                  { day: "Sun", type: "revision", label: "Full Week Revision" },
                ].map((d) => (
                  <div
                    key={d.day}
                    className={`rounded-xl p-2 md:p-3 ${
                      d.type === "new"
                        ? "bg-blue-500/20 border border-blue-400/30"
                        : d.type === "practice"
                        ? "bg-amber-500/20 border border-amber-400/30"
                        : "bg-green-500/20 border border-green-400/30"
                    }`}
                  >
                    <p className="font-black text-white text-sm md:text-base">{d.day}</p>
                    <p className="text-slate-400 text-xs mt-1 leading-tight hidden md:block">{d.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Do's Don'ts */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-900/30 border border-green-500/30 rounded-2xl p-5">
                <h3 className="text-green-300 font-black text-lg mb-3">✅ DO's</h3>
                <ul className="space-y-2">
                  {[
                    "Study at the same time every day",
                    "Solve minimum 50 MCQs every day",
                    "Make one-page notes per topic",
                    "Read newspaper 20 min daily",
                    "Sleep 7–8 hours (memory consolidation)",
                    "Review previous day's chapters (15 min)",
                    "Solve last 10 years SSC PYQs",
                    "Take full mock test every Sunday",
                  ].map((d, i) => (
                    <li key={i} className="text-green-100 text-sm flex items-start gap-2">
                      <span className="text-green-400 shrink-0 mt-0.5">→</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-5">
                <h3 className="text-red-300 font-black text-lg mb-3">❌ DON'Ts</h3>
                <ul className="space-y-2">
                  {[
                    "Don't skip MCQ practice — ever",
                    "Don't study 8+ hrs without breaks",
                    "Don't ignore weak topics",
                    "Don't start new topics on Day 59–60",
                    "Don't rely on a single source only",
                    "Don't skip Static GK — easy marks!",
                    "Don't ignore Current Affairs",
                    "Don't study without making notes",
                  ].map((d, i) => (
                    <li key={i} className="text-red-100 text-sm flex items-start gap-2">
                      <span className="text-red-400 shrink-0 mt-0.5">→</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl text-center mb-4">📚 Best Resources</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    cat: "Books", icon: "📖",
                    items: ["NCERT Class 6–12 (All subjects)", "Lucent's General Knowledge", "M. Laxmikanth – Polity", "Spectrum Modern History"],
                    color: "text-blue-300",
                  },
                  {
                    cat: "Online / Apps", icon: "💻",
                    items: ["Testbook / Adda247 App", "StudyIQ / Unacademy YouTube", "GKToday.in Website", "SSC Adda247 Mock Tests"],
                    color: "text-green-300",
                  },
                  {
                    cat: "Practice", icon: "✏️",
                    items: ["Last 10 Yrs SSC PYQs", "Chapter-wise MCQ Books", "25 Qs topic test daily", "Full Mock every Sunday"],
                    color: "text-amber-300",
                  },
                ].map((r) => (
                  <div key={r.cat} className="bg-white/5 rounded-xl p-4">
                    <h4 className={`font-black mb-2 text-base ${r.color}`}>{r.icon} {r.cat}</h4>
                    <ul className="space-y-1.5">
                      {r.items.map((item) => (
                        <li key={item} className="text-slate-300 text-xs flex items-start gap-2">
                          <span className="text-amber-400 mt-0.5 shrink-0">•</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Motivation Banner */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-7 text-center shadow-2xl">
              <div className="text-5xl mb-3">🔥</div>
              <h3 className="text-white font-black text-2xl mb-2">Stay Consistent for 60 Days!</h3>
              <p className="text-orange-100 text-sm max-w-xl mx-auto">
                "Success is the sum of small efforts repeated day in and day out."<br />
                Just 3–4 focused hours daily for 60 days will cover every single chapter. <strong>Don't break the chain!</strong>
              </p>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-5 text-center text-slate-500 text-xs">
        <p>🏆 SSC GK 60-Day Plan · {totalChapters} Chapters · 7 Subjects · 3–4 hrs/day</p>
        <p className="mt-1">History · Geography · Polity · Economics · Biology · Physics · Chemistry</p>
      </footer>
    </div>
  );
}
