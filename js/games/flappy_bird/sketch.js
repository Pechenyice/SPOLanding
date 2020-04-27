const TOTAL = 250;
let birds = [];
let savedBirds = [];
let pipes = [];
let counter = 0;
let slider;
let populationText;
let populations = 1;

var bestScores = {
  input_nodes: 5,
  hidden_nodes: 8,
  output_nodes: 2,
  weights_ih: {
    rows: 8,
    cols: 5,
    data: [
      [
        0.24290897632779115,
        0.6023070696779698,
        0.8698764568425079,
        -0.3486255902465888,
        -0.7694571711070477
      ],
      [
        0.6771506186912837,
        0.10262145878120203,
        -0.40609158729919176,
        -0.10204251214525505,
        0.7378899926042739
      ],
      [
        0.6082253887501916,
        -0.91503590887837,
        -0.7083501483203501,
        -0.1339766296885303,
        -0.7430894060941763
      ],
      [
        -0.6517180437957979,
        0.7141633466116087,
        -0.5010564596200849,
        0.30434069487487175,
        -0.984707898146473
      ],
      [
        0.8543241844367803,
        -0.8139776029452613,
        -0.9869978949008602,
        -0.8753440728078506,
        -0.12194788396936065
      ],
      [
        0.5982301784479579,
        -0.6587227493887894,
        -0.008605507736079786,
        0.1121141870866045,
        0.6029570894351282
      ],
      [
        -0.8164425250983025,
        -0.2293025475738666,
        -0.7608258775607457,
        -0.886599067641398,
        -0.34877052276698217
      ],
      [
        0.39396545638869895,
        0.16183922070101825,
        0.4297723325184504,
        -0.42723431221599384,
        0.6457629684336197
      ]
    ]
  },
  weights_ho: {
    rows: 2,
    cols: 8,
    data: [
      [
        -0.41337062779534683,
        -0.7917387808260599,
        -0.04730238692931621,
        -0.4256583595152757,
        0.44294314425441506,
        0.9293909479191351,
        -0.6299382870108804,
        0.6359878215646964
      ],
      [
        -0.5994462616172016,
        -0.017665503010428463,
        0.525683907201937,
        0.5890122589646567,
        -0.2098599953361422,
        0.6149644652341639,
        0.13967857100966768,
        -0.4405471126570465
      ]
    ]
  },
  bias_h: {
    rows: 8,
    cols: 1,
    data: [
      [
        -0.7596029862303806
      ],
      [
        0.35696472530792844
      ],
      [
        -0.9445775206158888
      ],
      [
        -0.16313201029253577
      ],
      [
        0.20283617244415245
      ],
      [
        -1.0249090654421396
      ],
      [
        0.250188538053139
      ],
      [
        -0.6736893501421239
      ]
    ]
  },
  bias_o: {
    rows: 2,
    cols: 1,
    data: [
      [
        0.18099374024468118
      ],
      [
        -0.019990227034143437
      ]
    ]
  },
  learning_rate: 0.1,
  activation_function: {}
}

// var startButton = document.getElementById("games-start-button");
// console.log(startButton);
// startButton.onclick = pause();

var draw;
// pause();

function start() {
  var btn = document.getElementById("games-start-button");
  btn.innerHTML = "Пауза";
  btn.onclick = pause;

  draw = function () {
    for (let n = 0; n < slider.value(); n++) {
      if (counter % 75 == 0) {
        pipes.push(new Pipe());
      }
      counter++;

      for (let i = pipes.length - 1; i >= 0; i--) {
        pipes[i].update();

        for (let j = birds.length - 1; j >= 0; j--) {
          if (pipes[i].hits(birds[j])) {
            savedBirds.push(birds.splice(j, 1)[0]);
          }
        }

        if (pipes[i].offscreen()) {
          pipes.splice(i, 1);
        }
      }

      for (let i = birds.length - 1; i >= 0; i--) {
        if (birds[i].offScreen()) {
          savedBirds.push(birds.splice(i, 1)[0]);
        }
      }

      for (let bird of birds) {
        bird.think(pipes);
        bird.update();
      }

      if (birds.length === 0) {
        counter = 0;
        nextGeneration();
        populations++;
        populationText.html("Популяция: " + populations);
        pipes = [];
      }
    }

    // All the drawing stuff
    background(0);

    for (let bird of birds) {
      bird.show();
    }

    for (let pipe of pipes) {
      pipe.show();
    }
  }
}

function pause() {
  var btn = document.getElementById("games-start-button");

  btn.innerHTML = "Продолжить";
  btn.onclick = start;

  draw = () => {};
}

function reset() {
  
  birds = [];
  savedBirds = [];
  pipes = [];
  counter = 0;
  populations = 1;

  for (let i = 0; i < TOTAL; i++) {
    birds[i] = new Bird();
  }

  populationText.html("Популяция: 1");
  start();

}

function loadScores() {
  
  birds = [];
  savedBirds = [];
  pipes = [];
  counter = 0;
  populations = 1;

  birds[0] = new Bird();

  birds[0].brain.input_nodes = bestScores.input_nodes;
  birds[0].brain.hidden_nodes = bestScores.hidden_nodes;
  birds[0].brain.output_nodes = bestScores.output_nodes;

  birds[0].brain.weights_ih = new Matrix(bestScores.hidden_nodes, bestScores.input_nodes);
  for (var i = 0; i < bestScores.hidden_nodes; i++)
  {
    for (var j = 0; j < bestScores.input_nodes; j++)
    {
      birds[0].brain.weights_ih.data[i][j] = bestScores.weights_ih.data[i][j];
    }
  }

  birds[0].brain.weights_ho = new Matrix(bestScores.output_nodes, bestScores.hidden_nodes);
  for (var i = 0; i < bestScores.output_nodes; i++)
  {
    for (var j = 0; j < bestScores.hidden_nodes; j++)
    {
      birds[0].brain.weights_ho.data[i][j] = bestScores.weights_ho.data[i][j];
    }
  }

  birds[0].brain.bias_h = new Matrix(birds[0].brain.hidden_nodes, 1);
  // birds[0].brain.bias_h.data = bestScores.bias_h.data;
  for (var i = 0; i < birds[0].hidden_nodes; i++)
    birds[0].brain.bias_h.data[i][0] = bestScores.bias_h.data[i];

  birds[0].brain.bias_o = new Matrix(birds[0].brain.output_nodes, 1);
  // birds[0].brain.bias_o.data = bestScores.bias_o.data;
  for (var i = 0; i < birds[0].output_nodes; i++)
    birds[0].brain.bias_o.data[i][0] = bestScores.bias_o.data[i];


  populationText.html("Популяция: 1");
  start();  

}

// function keyPressed() {
//   if (key === 'S') {
//     let bird = birds[0];
//     saveJSON(bird.brain, 'bird.json');
//   }
// }

function setup() {
  var canvas = createCanvas(640, 480);
  slider = createSlider(1, 10, 1);
  populationText = createP("Полпуляция: 1");

  canvas.parent("games-canvas");
  slider.parent("games-info");
  populationText.parent("games-info");

  for (let i = 0; i < TOTAL; i++) {
    birds[i] = new Bird();
  }

  background(0);

  for (let bird of birds) {
    bird.show();
  }

  for (let pipe of pipes) {
    pipe.show();
  }
}

// function keyPressed() {
//   if (key == ' ') {
//     bird.up();
//     //console.log("SPACE");
//   }
// }