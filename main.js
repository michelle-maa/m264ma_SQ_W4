let scenes = {

  level1: {
    title: "Level 1: The Mountain Path",
    text: "You are stuck in a pot at the bottom of a huge mountain. Your hammer is your only tool. You see two paths leading up the mountain.",
    choices: [
      { label: "Swing your hammer carefully", next: "level2A" },
      { label: "Launch yourself upward", next: "level2B" }
    ]
  },

  level2A: {
    title: "Level 2: Careful Climb",
    text: "You move carefully and slowly, reaching to a rocky slope.",
    choices: [
      { label: "Grab the tree branch", next: "level3A1" },
      { label: "Swing toward the cliff", next: "level3A2" }
    ]
  },

  level2B: {
    title: "Level 2: Risky Leap",
    text: "You launch upward and barely manage to land near two unstable platforms.",
    choices: [
      { label: "Jump to the wooden platform", next: "level3B1" },
      { label: "Swing toward the metal pipe", next: "level3B2" }
    ]
  },

  level3A1: {
    title: "Level 3: The Tree",
    text: "As you climb the tree, the branch bends under your weight",
    choices: [
      { label: "Pull yourself up", next: "ending1" },
      { label: "Swing across to the other side", next: "ending2" }
    ]
  },

  level3A2: {
    title: "Level 3: The Cliff",
    text: "A steep cliff face looms ahead, blocking your path.",
    choices: [
      { label: "Scale the cliff", next: "ending3" },
      { label: "Take a safer route", next: "ending4" }
    ]
  },

  level3B1: {
    title: "Scaffolding",
    text: "The structure below you creaks as you climb.",
    choices: [
      { label: "Climb faster", next: "ending5" },
      { label: "Move slowly", next: "ending6" }
    ]
  },

  level3B2: {
    title: "Level 2: The Pipes",
    text: "You balance yourself on a series of narrow shaky pipes.",
    choices: [
      { label: "Jump between the pipes", next: "ending7" },
      { label: "Slide along the pipes carefully", next: "ending8" }
    ]
  },

  ending1: {
    title: "Victory!",
    text: "You pull yourself ot the summit succesfully and enjoy the view of the sunset in front of you.",
    choices: [
      { label: "Restart", next: "level1" },
      { label: "End Game", next: "level1" }
    ]
  },

  ending2: {
    title: "Defeat.",
    text: "You swing too far and fall all the way back down to the bottom of the mountain.",
    choices: [
      { label: "Restart", next: "level1" },
      { label: "Quit", next: "level1" }
    ]
  },

  ending3: {
    title: "Victory!",
    text: "You scale the cliff and find a treasure chest at the top of the mountain.",
    choices: [
      { label: "Restart", next: "level1" },
      { label: "Quit", next: "level1" }
    ]
  },

  ending4: {
    title: "Defeat.",
    text: "The route leads to a dark cave. You enter and get lost, never finding your way out.",
    choices: [
      { label: "Restart", next: "level1" },
      { label: "Quit", next: "level1" }
    ]
  },

  ending5: {
    title: "Victory!",
    text: "You race up the scaffolding and reach the top of the mountain.",
    choices: [
      { label: "Restart", next: "level1" },
      { label: "Quit", next: "level1" }
    ]
  },

  ending6: {
    title: "Defeat.",
    text: "The scaffolding collapses under your weight and you fall back down to the bottom of the mountain.",
    choices: [
      { label: "Restart", next: "level1" },
      { label: "Quit", next: "level1" }
    ]
  },

  ending7: {
    title: "Victory!",
    text: "You jump skillfully between the pipes and reach the summit of the mountain.",
    choices: [
      { label: "Restart", next: "level1" },
      { label: "Quit", next: "level1" }
    ]
  },

  ending8: {
    title: "Defeat.",
    text: "Your careful approach fails as the pipes give way beneath you.",
    choices: [
      { label: "Restart", next: "level1" },
      { label: "Quit", next: "level1" }
    ]
  }

};


