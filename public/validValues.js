// Defines valid min, max, error msg, and precision for each entry paramater.
// Used in validate().

const validValues = {
  mu0: {
    initial: 100,
    min: -10000,
    max: 10000,
    precision: 0,
  },
  mu1: {
    initial: 105,
    min: -10000,
    max: 10000,
    precision: 0,
  },
  std: {
    initial: 5,
    min: 1,
    max: 10000,
    msg: "Standard Deviation must be greater than 1.",
    precision: 0,
  },
  delta: {
    min: 0,
    max: 10000,
    precision: 2,
    msg: "Normalized difference must be greater than 0.",
  },
  alpha: {
    initial: 0.05,
    min: 0.001,
    max: 0.999,
    msg: "Type I Error must be between 0.001 and 1",
    precision: 3,
  },
  n: {
    initial: 4,
    min: 1,
    max: 100,
    msg: "Sample size must be between 1 and 100.",
    precision: 0,
    domID: "#slider-vertical1",
  },
  power: {
    min: 0.05,
    max: 0.999,
    msg: "Power must be between 0.05 and 0.999.",
    precision: 3,
    domID: "#slider-vertical2",
  },
  effectsize: {
    domID: "#effectsize",
    precision: 3,
  },
};

/**
 * 
 * 
    "power",
    0.001,
    0.999,
    "Power must be between 0.001 and 0.999.",
    3,
    "#slider-vertical2",
 */
