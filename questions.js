const sections = {
  A: [
    {
      id: "q1",
      question: "Your phone or a favorite gadget suddenly stops working. What is the very first thing you do?",
      weight: 3,
      options: [
        { text: "Search for the logic or error to understand why", scores: { IT: 3, Engineering: 1, Science: 2, Finance: 0, Design: 0 } },
        { text: "Check physical components or connections", scores: { IT: 1, Engineering: 3, Science: 1, Finance: 0, Design: 1 } },
        { text: "Evaluate if repair cost is worth it", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 3, Design: 1 } },
        { text: "Focus on interface/usability impact", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 0, Design: 3 } }
      ]
    },
    {
      id: "q2",
      question: "You are playing a complex strategy game. What is your preferred path to victory?",
      weight: 3,
      options: [
        { text: "Exploit logic systems or automation", scores: { IT: 3, Engineering: 1, Science: 0, Finance: 1, Design: 0 } },
        { text: "Optimize resources and grow wealth", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 3, Design: 1 } },
        { text: "Build strong and efficient structures", scores: { IT: 1, Engineering: 3, Science: 1, Finance: 0, Design: 1 } },
        { text: "Analyze probabilities and data patterns", scores: { IT: 1, Engineering: 1, Science: 3, Finance: 1, Design: -1 } }
      ]
    }
  ],

  B: [
    {
      id: "q3",
      question: "You’re watching deep-dive content. What keeps you engaged?",
      weight: 3,
      options: [
        { text: "How complex algorithms work", scores: { IT: 3, Engineering: 1, Science: 1, Finance: 0, Design: 1 } },
        { text: "Engineering behind large constructions", scores: { IT: 1, Engineering: 3, Science: 1, Finance: 0, Design: 1 } },
        { text: "Biology/chemistry explanations", scores: { IT: 0, Engineering: 0, Science: 3, Finance: 0, Design: 0 } },
        { text: "Market trends and investments", scores: { IT: 0, Engineering: -1, Science: 0, Finance: 3, Design: 1 } }
      ]
    },
    {
      id: "q4",
      question: "You get $5,000 to start a project. What do you choose?",
      weight: 3,
      options: [
        { text: "Build a software/tool", scores: { IT: 3, Engineering: 2, Science: 0, Finance: 1, Design: 1 } },
        { text: "Start a visual/design brand", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 1, Design: 3 } },
        { text: "Invest and grow money", scores: { IT: 1, Engineering: 0, Science: 0, Finance: 3, Design: 0 } },
        { text: "Prototype a physical/mechanical tool", scores: { IT: 1, Engineering: 3, Science: 1, Finance: 0, Design: 1 } }
      ]
    }
  ],

  C: [
    {
      id: "q5",
      question: "In a group project, what role do you take?",
      weight: 2,
      options: [
        { text: "Build and handle the technical side", scores: { IT: 3, Engineering: 2, Science: 1, Finance: 0, Design: 0 } },
        { text: "Analyze and verify data", scores: { IT: 1, Engineering: 1, Science: 3, Finance: 0, Design: 0 } },
        { text: "Manage time and budget", scores: { IT: 1, Engineering: 1, Science: 0, Finance: 3, Design: 0 } },
        { text: "Design presentation/visuals", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 1, Design: 3 } }
      ]
    },
    {
      id: "q6",
      question: "What frustrates you most in an app?",
      weight: 3,
      options: [
        { text: "Bad UI/visual design", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 0, Design: 3 } },
        { text: "Inefficient processes", scores: { IT: 3, Engineering: 1, Science: 1, Finance: 2, Design: 0 } },
        { text: "System instability", scores: { IT: 2, Engineering: 3, Science: 1, Finance: 0, Design: 0 } },
        { text: "Hidden costs/lack of transparency", scores: { IT: 1, Engineering: 0, Science: 1, Finance: 3, Design: 0 } }
      ]
    },
    {
      id: "q7",
      question: "A project works but looks bad. How do you feel?",
      weight: 3,
      options: [
        { text: "It’s unfinished without good design", scores: { IT: 1, Engineering: 1, Science: 0, Finance: 1, Design: 3 } },
        { text: "It works, that’s enough", scores: { IT: 3, Engineering: 2, Science: 1, Finance: 0, Design: -1 } },
        { text: "Concerned about time vs value", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 3, Design: 1 } }
      ]
    }
  ],

  D: [
    {
      id: "q8",
      question: "Planning a trip with friends. What do you handle?",
      weight: 3,
      options: [
        { text: "Apps, maps, and digital planning", scores: { IT: 3, Engineering: 1, Science: 0, Finance: 0, Design: 1 } },
        { text: "Transport and logistics", scores: { IT: 1, Engineering: 3, Science: 0, Finance: 1, Design: 0 } },
        { text: "Budget and payments", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 3, Design: 1 } },
        { text: "Locations and aesthetics", scores: { IT: 0, Engineering: 0, Science: 1, Finance: 0, Design: 3 } }
      ]
    },
    {
      id: "q9",
      question: "You find a locked box. What do you do?",
      weight: 3,
      options: [
        { text: "Find patterns to crack the code", scores: { IT: 3, Engineering: 1, Science: 2, Finance: 1, Design: 0 } },
        { text: "Try to open it physically", scores: { IT: 1, Engineering: 3, Science: 1, Finance: 0, Design: 0 } },
        { text: "Research its history", scores: { IT: 1, Engineering: 1, Science: 3, Finance: 0, Design: 0 } },
        { text: "Analyze visual clues/design", scores: { IT: 0, Engineering: 1, Science: 0, Finance: 0, Design: 3 } }
      ]
    },
    {
      id: "q10",
      question: "In a city-building game, what do you enjoy most?",
      weight: 3,
      options: [
        { text: "Systems and infrastructure", scores: { IT: 3, Engineering: 2, Science: 1, Finance: 0, Design: 0 } },
        { text: "Strong structures", scores: { IT: 1, Engineering: 3, Science: 1, Finance: 0, Design: 1 } },
        { text: "Economy and profit", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 3, Design: 1 } },
        { text: "Visual design and aesthetics", scores: { IT: 0, Engineering: 0, Science: 0, Finance: 1, Design: 3 } }
      ]
    }
  ]
};