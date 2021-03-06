// Display
let W = window.innerWidth;
let H = window.innerHeight;
let X_PAD = W/12;
let Y_PAD = H/12;
let w = W-2*X_PAD;
let h = H-2*Y_PAD;
let DIAG = Math.sqrt(w*w+h*h);
let PLOT_PROGRESS = 2;
let SHOW_CONFIDENCE = 0;
let DISPLAY = 1;
let l_bound = 0.5;
let u_bound = 1.5;
let make_up = 0.15;
let diameter = DIAG/200;
let text_size = DIAG/80;

// Environmental Constants
let RANDOM_ENDPOINTS = 1;
let num_of_layers = 7;
let num_of_agents = 7; // per layer
let start_index; 
let end_index;
let agents = [];
let agent0;
let agent1;
let min_len;
let max_len;
let avg_len;
let iter_num = 0;
let progress;

// Algorithm Constants
let ALGORITHM = 1;
let iters = 1000;
let eps = 0.1;
let DECAY = 0;
let LCB_DECAY = 0.001;
let lcb_coeff = 0.1;