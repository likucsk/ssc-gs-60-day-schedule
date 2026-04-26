export const subjects = [
  {
    id: "history",
    title: "HISTORY",
    icon: "🏛️",
    color: "amber",
    gradient: "from-amber-500 to-orange-500",
    lightBg: "bg-amber-50",
    border: "border-amber-400",
    badge: "bg-amber-500",
    textColor: "text-amber-600",
    accentText: "text-amber-400",
    totalChapters: 27,
    days: "Day 1 – 18",
    dayRange: [1, 18],
    chapters: [
      "Stone Age",
      "Indus Valley Civilization",
      "Vedic Age",
      "Buddhism and Jainism",
      "Mahajanpadas and Magdha",
      "Mauryan Empire",
      "Post Mauryan Empire",
      "Sangam Age",
      "Gupta Era",
      "Post – Gupta Era",
      "Cholas and Tripartite Struggle",
      "Invasion of Islam",
      "Delhi Sultanate (Part-01 & 02)",
      "Vijaynagar Empire & Bahmani Kingdom",
      "Mughal Empire (Part -1 & 02)",
      "Aurangzeb and Later Mughals",
      "Bhakti & Sufi Movements",
      "Marathas",
      "Advent of Europeans",
      "Socio Religious Reform Movements",
      "Revolt of 1857",
      "Indian National Congress INC",
      "Partition of Bengal",
      "Gandhian Era",
      "Bhagat Singh and Revolutionary Activities",
      "Civil Disobedience Movement",
      "Quit India Movement",
    ],
  },
  {
    id: "geography",
    title: "GEOGRAPHY",
    icon: "🌍",
    color: "green",
    gradient: "from-green-500 to-emerald-500",
    lightBg: "bg-green-50",
    border: "border-green-400",
    badge: "bg-green-600",
    textColor: "text-green-700",
    accentText: "text-green-400",
    totalChapters: 25,
    days: "Day 19 – 34",
    dayRange: [19, 34],
    chapters: [
      "Solar System",
      "Latitude & Longitude",
      "Earth's Interior & Plate Tectonics",
      "Continent & Ocean",
      "Rock & Volcano",
      "Geomorphology",
      "Landforms",
      "Atmosphere",
      "Condensation & Precipitation",
      "Winds",
      "Cyclone & Ocean",
      "India & Its Location",
      "Himalayas",
      "Peninsular Plateau",
      "Plains & Island",
      "Himalayan River System",
      "Peninsular River System",
      "Dams Lake & Waterfall",
      "Forest & Grassland",
      "Soil",
      "Agriculture",
      "Minerals",
      "Transport",
      "World Map",
      "Human Geography",
    ],
  },
  {
    id: "polity",
    title: "POLITY",
    icon: "⚖️",
    color: "blue",
    gradient: "from-blue-600 to-indigo-500",
    lightBg: "bg-blue-50",
    border: "border-blue-400",
    badge: "bg-blue-600",
    textColor: "text-blue-700",
    accentText: "text-blue-400",
    totalChapters: 14,
    days: "Day 35 – 42",
    dayRange: [35, 42],
    chapters: [
      "Making of Constitution",
      "Salient Features of Constitution",
      "Preamble",
      "Part 1 and 2 of Constitution",
      "Fundamental Rights",
      "DPSP and Fundamental Duties",
      "President and Vice-President",
      "PM & CoM",
      "Parliament – Part -1",
      "State Legislature",
      "Courts",
      "Local Bodies",
      "Constitutional and Non-Constitutional Bodies",
      "Emergency, Amendments & Inter State Relations",
    ],
  },
  {
    id: "economics",
    title: "ECONOMICS",
    icon: "📊",
    color: "purple",
    gradient: "from-purple-600 to-violet-500",
    lightBg: "bg-purple-50",
    border: "border-purple-400",
    badge: "bg-purple-600",
    textColor: "text-purple-700",
    accentText: "text-purple-400",
    totalChapters: 10,
    days: "Day 43 – 47",
    dayRange: [43, 47],
    chapters: [
      "Basics of Economics",
      "Microeconomics",
      "Inflation and Unemployment",
      "National Income",
      "Budget & Taxation",
      "Money & Banking",
      "Banking System",
      "Balance of Payments",
      "Poverty",
      "Five Year Plan",
    ],
  },
  {
    id: "biology",
    title: "BIOLOGY",
    icon: "🧬",
    color: "teal",
    gradient: "from-teal-500 to-cyan-500",
    lightBg: "bg-teal-50",
    border: "border-teal-400",
    badge: "bg-teal-600",
    textColor: "text-teal-700",
    accentText: "text-teal-400",
    totalChapters: 13,
    days: "Day 48 – 52",
    dayRange: [48, 52],
    chapters: [
      "Cell",
      "Plant Tissue",
      "Animal Tissue",
      "Plant Kingdom",
      "Animal Kingdom",
      "Nervous System",
      "Hormones & Movements",
      "Reproduction",
      "Digestive & Respiratory",
      "Circulatory & Excretory",
      "Diseases",
      "Nutrition",
      "Genetics & Skeletal",
    ],
  },
  {
    id: "physics",
    title: "PHYSICS",
    icon: "⚡",
    color: "red",
    gradient: "from-red-500 to-rose-500",
    lightBg: "bg-red-50",
    border: "border-red-400",
    badge: "bg-red-600",
    textColor: "text-red-700",
    accentText: "text-red-400",
    totalChapters: 8,
    days: "Day 53 – 56",
    dayRange: [53, 56],
    chapters: [
      "Motion",
      "Force and Laws of Motion",
      "Gravitation and Work Done",
      "Sound",
      "Reflection & Refraction",
      "Human Eye & Vision",
      "Electricity",
      "Magnetic Effect and Current",
    ],
  },
  {
    id: "chemistry",
    title: "CHEMISTRY",
    icon: "🧪",
    color: "pink",
    gradient: "from-pink-500 to-fuchsia-500",
    lightBg: "bg-pink-50",
    border: "border-pink-400",
    badge: "bg-pink-600",
    textColor: "text-pink-700",
    accentText: "text-pink-400",
    totalChapters: 7,
    days: "Day 57 – 59",
    dayRange: [57, 59],
    chapters: [
      "Matter",
      "Atom and Its Structure",
      "Periodic Table",
      "Chemical Reactions",
      "Metals and Non-Metals",
      "Acid, Base and Salt",
      "Carbon & Its Compounds",
    ],
  },
];

// Build the full 60-day schedule by distributing chapters
export const schedule: {
  day: number;
  subject: string;
  subjectId: string;
  chapter: string;
  chapterNo: number;
  totalChapters: number;
  gradient: string;
  icon: string;
  accentText: string;
}[] = [];

// History: 27 chapters → Day 1-18 (some days 2 chapters)
// Geography: 25 chapters → Day 19-34 (some days 2 chapters)
// Polity: 14 chapters → Day 35-42 (some days 2 chapters)
// Economics: 10 chapters → Day 43-47 (2 chapters/day)
// Biology: 13 chapters → Day 48-52 (some days 3 chapters)
// Physics: 8 chapters → Day 53-56 (2/day)
// Chemistry: 7 chapters → Day 57-59 (some days 2, some 3)
// Day 60: REVISION

const buildSchedule = () => {
  for (const subject of subjects) {
    const [startDay, endDay] = subject.dayRange;
    const totalDays = endDay - startDay + 1;
    const chapters = subject.chapters;
    const n = chapters.length;

    // Distribute chapters across days
    const base = Math.floor(n / totalDays);
    const extra = n % totalDays;
    let chapterIdx = 0;

    for (let d = 0; d < totalDays; d++) {
      const chapCount = d < extra ? base + 1 : base;
      for (let c = 0; c < chapCount; c++) {
        if (chapterIdx < n) {
          schedule.push({
            day: startDay + d,
            subject: subject.title,
            subjectId: subject.id,
            chapter: chapters[chapterIdx],
            chapterNo: chapterIdx + 1,
            totalChapters: n,
            gradient: subject.gradient,
            icon: subject.icon,
            accentText: subject.accentText,
          });
          chapterIdx++;
        }
      }
    }
  }

  // Day 60 - Revision
  schedule.push({
    day: 60,
    subject: "REVISION",
    subjectId: "revision",
    chapter: "Full Syllabus Revision + Mock Tests",
    chapterNo: 0,
    totalChapters: 0,
    gradient: "from-yellow-400 to-orange-400",
    icon: "🔁",
    accentText: "text-yellow-400",
  });
};

buildSchedule();

export const subjectColors: Record<string, string> = {
  history: "bg-amber-500",
  geography: "bg-green-600",
  polity: "bg-blue-600",
  economics: "bg-purple-600",
  biology: "bg-teal-600",
  physics: "bg-red-600",
  chemistry: "bg-pink-600",
  revision: "bg-yellow-500",
};

export const colorMap: Record<string, { bg: string; text: string; border: string; light: string }> = {
  history:   { bg: "bg-amber-500",   text: "text-amber-400",   border: "border-amber-400",   light: "bg-amber-500/20" },
  geography: { bg: "bg-green-600",   text: "text-green-400",   border: "border-green-400",   light: "bg-green-500/20" },
  polity:    { bg: "bg-blue-600",    text: "text-blue-400",    border: "border-blue-400",    light: "bg-blue-500/20" },
  economics: { bg: "bg-purple-600",  text: "text-purple-400",  border: "border-purple-400",  light: "bg-purple-500/20" },
  biology:   { bg: "bg-teal-600",    text: "text-teal-400",    border: "border-teal-400",    light: "bg-teal-500/20" },
  physics:   { bg: "bg-red-600",     text: "text-red-400",     border: "border-red-400",     light: "bg-red-500/20" },
  chemistry: { bg: "bg-pink-600",    text: "text-pink-400",    border: "border-pink-400",    light: "bg-pink-500/20" },
  revision:  { bg: "bg-yellow-500",  text: "text-yellow-400",  border: "border-yellow-400",  light: "bg-yellow-500/20" },
};
