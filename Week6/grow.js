// Surrond items that we want to lerp with () in the rules
// () characters are then stripped from the next generation
const rules = {
    X: [
      // Original rule
      { rule: "(F[+X][-X]FX)",  prob: 0.5  },
      
      // Fewer limbs
      { rule: "(F[-X]FX)",      prob: 0.05 },
      { rule: "(F[+X]FX)",      prob: 0.05 },
      
      // Extra rotation
      { rule: "(F[++X][-X]FX)", prob: 0.1  },
      { rule: "(F[+X][--X]FX)", prob: 0.1  },
      
      // Berries/fruits
      { rule: "(F[+X][-X]FXA)",  prob: 0.1  },
      { rule: "(F[+X][-X]FXB)",  prob: 0.1  }
    ],
    F: [
      // Original rule
      { rule: "F(F)",  prob: 0.85 },
      
      // Extra growth
      { rule: "F(FF)", prob: 0.05 },
      
      // Stunted growth
      { rule: "F",   prob: 0.1 },
    ],
    "(": "",
    ")": ""
  };
  
  const len = 4;
  const ang = 25;
  
  let drawRules;
  
  let word = "X";
  
  const maxGeneration = 6;
  let currGeneration = 0;
  
  let growthPercent = 1;
  const growthRate = 0.04;
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    
    strokeWeight(2);
    
    drawRules = {
      "A": (t) => {
        // Draw circle at current location
        noStroke();
        fill("#E5CEDC");
        circle(0, 0, len*2 * t);
      },  
      "B": (t) => {
        // Draw circle at current location
        noStroke();
        fill("#FCA17D");
        circle(0, 0, len*2 * t);
      },
      "F": (t) => {
        // Draw line forward, then move to end of line
        stroke("#9ea93f");
        line(0, 0, 0, -len * t);
        translate(0, -len * t);
      },
      "+": (t) => {
        // Rotate right
        rotate(PI/180 * -ang * t);
      },
      "-": (t) => {
        // Rotate right
        rotate(PI/180 * ang * t);
      },
      // Save current location
      "[": push,
      // Restore last location
      "]": pop,
    };
  }
  
  function draw() {
    background('#848B5D');
    if (currGeneration === maxGeneration && growthPercent >= 1) {
    //   drawLsysLerp(width/3, height, word, growthPercent);
      drawLsysLerp(width/2, height, word, growthPercent);    
      noLoop();
    }
    if(growthPercent < 1) {
      const mod = (currGeneration + growthPercent);
      growthPercent += growthRate/mod;
    } else {
      nextGeneration();
    }
    
    // drawLsysLerp(width/3, height, word, growthPercent);
    drawLsysLerp(width/2, height, word, growthPercent);
  }
  
  function mouseReleased() {
    nextGeneration();
  }
  
  function nextGeneration() {
    if(growthPercent < 1) {
      return;
    }
    
    if(currGeneration === maxGeneration) {
      currGeneration = 0;
      word = "X";
    }
    
    word = generate(word);
    
    currGeneration ++;
    growthPercent = 0;
  }
  
  function generate(word) {
    let next = ""
    
    for(let i = 0; i < word.length; i ++) {
      let c = word[i];
      if(c in rules) {
        let rule = rules[c];
        
        // Check if we're using an array or not
        if(Array.isArray(rule)) {
          next += chooseOne(rule); // If we are, choose one of the options
        } else {
          next += rules[c]; // Otherwise use the rule directly
        }
      } else {
        next += c;
      }
    }
    
    return next;
  }
  
  function chooseOne(ruleSet) {
    let n = random(); // Random number between 0-1
    let t = 0;
    for(let i = 0; i < ruleSet.length; i++) {
      t += ruleSet[i].prob; // Keep adding the probability of the options to total
      if(t > n) { // If the total is more than the random value
        return ruleSet[i].rule; // Choose that option
      }
    }
    return "";
  }
  
  function drawLsysLerp(x, y, state, t) {
    t = constrain(t, 0, 1);
    
    let lerpOn = false;
    
    push();
    translate(x, y);
    for(let i = 0; i < state.length; i ++) {
      let c = state[i];
      
      if(c === "(") {
        lerpOn = true;
        continue;
      }
      
      if(c === ")") {
        lerpOn = false;
        continue;
      }
      
      let lerpT = t;
      
      if(!lerpOn) {
        lerpT = 1;
      }
      
      if(c in drawRules) {
        drawRules[c](lerpT);
      }  
    }
    pop();
  }