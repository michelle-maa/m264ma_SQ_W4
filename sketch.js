let storyText = "";
let choice1Btn, choice2Btn;
let currentScene = "level1";

// Load all scenes from scenes.js
// (Make sure scenes.js is included before sketch.js in index.html)
function loadScene(name) {
  const scene = scenes[name];
  currentScene = name;

  storyText = scene.text;

  choice1Btn.html(scene.choices[0].label);
  choice2Btn.html(scene.choices[1].label);

  choice1Btn.mousePressed(() => loadScene(scene.choices[0].next));
  choice2Btn.mousePressed(() => loadScene(scene.choices[1].next));
}

function setup() {
  createCanvas(800, 600);

  textSize(20);
  textAlign(LEFT, TOP);

  // Create p5.js buttons
  choice1Btn = createButton("Choice 1");
  choice1Btn.position(50, 500);
  choice1Btn.size(300, 40);

  choice2Btn = createButton("Choice 2");
  choice2Btn.position(450, 500);
  choice2Btn.size(300, 40);

  loadScene(currentScene);
}

function draw() {
  background(30);
  
  fill(255);

  // Draw centered title
  textAlign(CENTER, TOP);
  textSize(32);
  text(scenes[currentScene].title, width / 2, 30);

  // Draw story text with spacing below title
  textAlign(CENTER, TOP);
  textSize(20);
  text(scenes[currentScene].text, 50, 100, 700, 400);
}
