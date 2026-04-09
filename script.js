const sections = {
  A: [
    {
      id: "q1",
      question: "Your phone stops working. What do you do first?",
      weight: 3,
      options: [
        { text: "Find the logical error", scores: { IT: 3, Engineering: 1, Science: 2, Finance: 0, Design: 0 } },
        { text: "Check physical parts", scores: { IT: 1, Engineering: 3, Science: 1, Finance: 0, Design: 1 } },
        { text: "Check repair cost", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 3, Design: 1 } },
        { text: "Focus on usability", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 0, Design: 3 } }
      ]
    },
    {
      id: "q2",
      question: "In a strategy game, how do you win?",
      weight: 3,
      options: [
        { text: "Exploit logic systems", scores: { IT: 3, Engineering: 1, Science: 0, Finance: 1, Design: 0 } },
        { text: "Grow money/resources", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 3, Design: 1 } },
        { text: "Build strong structures", scores: { IT: 1, Engineering: 3, Science: 1, Finance: 0, Design: 1 } },
        { text: "Analyze probabilities", scores: { IT: 1, Engineering: 1, Science: 3, Finance: 1, Design: -1 } }
      ]
    }
  ],

  B: [
    {
      id: "q3",
      question: "What content do you enjoy most?",
      weight: 3,
      options: [
        { text: "Tech systems", scores: { IT: 3, Engineering: 1, Science: 1, Finance: 0, Design: 1 } },
        { text: "Engineering builds", scores: { IT: 1, Engineering: 3, Science: 1, Finance: 0, Design: 1 } },
        { text: "Science topics", scores: { IT: 0, Engineering: 0, Science: 3, Finance: 0, Design: 0 } },
        { text: "Business/money", scores: { IT: 0, Engineering: -1, Science: 0, Finance: 3, Design: 1 } }
      ]
    },
    {
      id: "q4",
      question: "You get $5000. What do you build?",
      weight: 3,
      options: [
        { text: "Software/tool", scores: { IT: 3, Engineering: 2, Science: 0, Finance: 1, Design: 1 } },
        { text: "Design brand", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 1, Design: 3 } },
        { text: "Invest money", scores: { IT: 1, Engineering: 0, Science: 0, Finance: 3, Design: 0 } },
        { text: "Mechanical tool", scores: { IT: 1, Engineering: 3, Science: 1, Finance: 0, Design: 1 } }
      ]
    }
  ],

  C: [
    {
      id: "q5",
      question: "Your role in a team?",
      weight: 2,
      options: [
        { text: "Builder", scores: { IT: 3, Engineering: 2, Science: 1, Finance: 0, Design: 0 } },
        { text: "Researcher", scores: { IT: 1, Engineering: 1, Science: 3, Finance: 0, Design: 0 } },
        { text: "Planner", scores: { IT: 1, Engineering: 1, Science: 0, Finance: 3, Design: 0 } },
        { text: "Designer", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 1, Design: 3 } }
      ]
    },
    {
      id: "q6",
      question: "What frustrates you most?",
      weight: 3,
      options: [
        { text: "Bad UI", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 0, Design: 3 } },
        { text: "Slow workflow", scores: { IT: 3, Engineering: 1, Science: 1, Finance: 2, Design: 0 } },
        { text: "Instability", scores: { IT: 2, Engineering: 3, Science: 1, Finance: 0, Design: 0 } },
        { text: "Hidden costs", scores: { IT: 1, Engineering: 0, Science: 1, Finance: 3, Design: 0 } }
      ]
    },
    {
      id: "q7",
      question: "Project works but looks bad?",
      weight: 3,
      options: [
        { text: "Not finished", scores: { IT: 1, Engineering: 1, Science: 0, Finance: 1, Design: 3 } },
        { text: "It's fine", scores: { IT: 3, Engineering: 2, Science: 1, Finance: 0, Design: -1 } },
        { text: "Think ROI", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 3, Design: 1 } }
      ]
    }
  ],

  D: [
    {
      id: "q8",
      question: "Trip planning role?",
      weight: 3,
      options: [
        { text: "Digital setup", scores: { IT: 3, Engineering: 1, Science: 0, Finance: 0, Design: 1 } },
        { text: "Logistics", scores: { IT: 1, Engineering: 3, Science: 0, Finance: 1, Design: 0 } },
        { text: "Budget", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 3, Design: 1 } },
        { text: "Aesthetic", scores: { IT: 0, Engineering: 0, Science: 1, Finance: 0, Design: 3 } }
      ]
    },
    {
      id: "q9",
      question: "Locked box?",
      weight: 3,
      options: [
        { text: "Crack code", scores: { IT: 3, Engineering: 1, Science: 2, Finance: 1, Design: 0 } },
        { text: "Force open", scores: { IT: 1, Engineering: 3, Science: 1, Finance: 0, Design: 0 } },
        { text: "Research", scores: { IT: 1, Engineering: 1, Science: 3, Finance: 0, Design: 0 } },
        { text: "Analyze visuals", scores: { IT: 0, Engineering: 1, Science: 0, Finance: 0, Design: 3 } }
      ]
    },
    {
      id: "q10",
      question: "City-building game?",
      weight: 3,
      options: [
        { text: "Systems", scores: { IT: 3, Engineering: 2, Science: 1, Finance: 0, Design: 0 } },
        { text: "Structures", scores: { IT: 1, Engineering: 3, Science: 1, Finance: 0, Design: 1 } },
        { text: "Economy", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 3, Design: 1 } },
        { text: "Design", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 1, Design: 3 } }
      ]
    }
  ]
};