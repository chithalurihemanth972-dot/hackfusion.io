export const HACKATHON_DETAILS = {
  name: "HACKFUSION",
  edition: "2026",
  tagline: "WHERE CODE AND CIRCUITS CREATE SOLUTIONS",
  organizer: "Kprojectxx",
  date: "4 OCTOBER",
  registrationDeadline: "3 OCTOBER",
  duration: "12 HOURS",
  mode: "ONLINE",
  teamSize: "INDIVIDUAL / TEAM (1–3 MEMBERS)",
  prizePool: "₹10,000",
  registrationFee: "₹150",
  theme: "OPEN INNOVATION",
  softwareDomainSummary:
    "Build innovative digital solutions, applications, platforms, automation systems, AI/ML solutions, and more.",
  softwareDomains: [
    "Web & Mobile Applications",
    "AI/ML Solutions",
    "Automation Systems",
    "Open Innovation Tools",
  ],
  hardwareDomains: [
    "Hardware & Embedded Systems",
    "Robotics & Autonomous Systems",
    "IoT & Smart Devices",
    "Drones & Aerospace",
    "EV & Battery Technology",
    "AgriTech",
  ],
};

export const COLORS = {
  pink: "#FF007F",
  blue: "#00E5FF",
  gold: "#FFD700",
  bg: "#050505",
};

const base = import.meta.env.BASE_URL || "/";

export const PROBLEM_STATEMENTS = [
  {
    tag: "Software Track",
    title: "Software Problem Statements",
    description:
      "Web & mobile apps, AI/ML solutions, automation systems and open innovation challenges. Download the official PDF and choose your problem.",
    file: `${base}problem-statements/hackfusion-software-problem-statements.pdf`,
    accentBorder: "border-hack-blue",
    accentGlow: "group-hover:shadow-[0_0_30px_rgba(0,229,255,0.25)]",
    accentText: "text-hack-blue",
  },
  {
    tag: "Hardware Track",
    title: "Hardware Problem Statements",
    description:
      "Embedded systems, robotics, IoT, drones, EV & AgriTech challenges. Download the official PDF and choose your problem.",
    file: `${base}problem-statements/hackfusion-hardware-problem-statements.pdf`,
    accentBorder: "border-hack-pink",
    accentGlow: "group-hover:shadow-[0_0_30px_rgba(255,0,127,0.24)]",
    accentText: "text-hack-pink",
  },
];
