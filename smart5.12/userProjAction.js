Blockly.Blocks['1680745722093'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745722093",
      "message0": "Left02move",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745722093'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 96, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 50, 100, 85, 93, 54, 124, 85, 120, 170, 100, 96, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 50, 100, 85, 93, 54, 124, 85, 120, 170, 100, 94, 107, 146, 76, 94, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 107, 93, 55, 124, 107, 120, 150, 100, 106, 107, 145, 76, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745722093'] = function(block) {
  let code = "base_action.action('Left02move')\n";
  return code;
}

Blockly.Blocks['1680745652860'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745652860",
      "message0": "Back1Run",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745652860'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(80, 35, 100, 85, 91, 50, 128, 88, 120, 165, 100, 95, 117, 168, 62, 90, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 35, 100, 88, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 86, 90, 95, 84, 90, 120, 165, 110, 94, 107, 146, 78, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 88, 84, 53, 115, 85, 120, 165, 110, 93, 104, 144, 78, 91, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 106, 93, 53, 124, 113, 120, 165, 110, 114, 102, 154, 55, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 106, 93, 53, 124, 113, 120, 165, 90, 114, 95, 105, 95, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,95,95,95,65,30,30,30,50,50,50,50,50,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(80, 35, 100, 104, 83, 32, 135, 111, 120, 165, 100, 115, 111, 150, 72, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30,0,0,0)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745652860'] = function(block) {
  let code = "base_action.action('Back1Run')\n";
  return code;
}

Blockly.Blocks['1680745656786'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745656786",
      "message0": "Back2Run",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745656786'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(80, 35, 100, 85, 91, 50, 128, 88, 120, 165, 100, 95, 117, 168, 62, 90, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 35, 100, 88, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 86, 90, 95, 84, 90, 120, 165, 110, 94, 107, 146, 78, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 88, 74, 53, 105, 85, 120, 165, 110, 93, 101, 144, 79, 91, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 106, 93, 53, 124, 113, 120, 165, 110, 114, 87, 164, 45, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 106, 93, 53, 124, 113, 120, 165, 90, 114, 95, 105, 95, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,95,95,95,65,30,30,30,50,50,50,50,50,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(80, 35, 100, 104, 83, 32, 135, 111, 120, 165, 100, 115, 111, 150, 72, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30,0,0,0)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745656786'] = function(block) {
  let code = "base_action.action('Back2Run')\n";
  return code;
}

Blockly.Blocks['1680745673175'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745673175",
      "message0": "BoxBack2-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745673175'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 105, 93, 55, 130, 108, 132, 187, 10, 111, 102, 136, 70, 112, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 105, 93, 55, 134, 107, 132, 187, 10, 108, 125, 145, 94, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 92, 106, 55, 144, 85, 132, 187, 10, 95, 117, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 92, 75, 55, 106, 95, 132, 187, 10, 95, 107, 145, 66, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 105, 83, 55, 124, 107, 132, 187, 10, 108, 94, 141, 56, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 98, 132, 187, 10, 100, 107, 145, 70, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745673175'] = function(block) {
  let code = "base_action.action('BoxBack2-1')\n";
  return code;
}

Blockly.Blocks['1680752171445'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752171445",
      "message0": "BoxBack1Run",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752171445'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 120, 40, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 85, 91, 50, 128, 88, 132, 187, 10, 95, 117, 168, 62, 90, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 88, 91, 48, 129, 88, 132, 187, 10, 94, 107, 146, 76, 87, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 86, 90, 95, 84, 90, 132, 187, 10, 94, 107, 146, 78, 87, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 88, 84, 53, 115, 85, 132, 187, 10, 93, 104, 144, 78, 91, 120, 40, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 106, 93, 53, 124, 113, 132, 187, 10, 114, 102, 154, 55, 110, 120, 40, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 106, 93, 53, 129, 113, 132, 187, 10, 114, 95, 105, 100, 110, 120, 40, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,95,95,95,65,30,30,30,50,50,50,50,50,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 104, 83, 32, 140, 111, 132, 187, 10, 115, 111, 150, 77, 112, 120, 40, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 120, 40, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752171445'] = function(block) {
  let code = "base_action.action('BoxBack1Run')\n";
  return code;
}

Blockly.Blocks['1680774576284'] = {
  init: function() {
    this.jsonInit({
      "type": "1680774576284",
      "message0": "后退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680774576284'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(69, 14, 149, 98, 95, 50, 137, 84, 136, 184, 50, 99, 107, 146, 67, 90, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(69, 14, 149, 98, 90, 95, 94, 90, 136, 184, 50, 99, 107, 146, 67, 87, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69, 14, 149, 88, 71, 53, 114, 85, 136, 184, 50, 93, 100, 144, 70, 91, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69, 14, 149, 100, 71, 53, 114, 111, 136, 184, 50, 104, 103, 143, 64, 103, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(69, 14, 149, 100, 93, 53, 134, 111, 136, 184, 50, 107, 87, 163, 33, 111, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69, 14, 149, 106, 95, 53, 133, 113, 136, 184, 50, 114, 110, 105, 105, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69, 14, 149, 107, 100, 56, 130, 109, 136, 184, 50, 112, 129, 147, 86, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69, 14, 149, 107, 100, 56, 130, 109, 136, 184, 50, 112, 129, 147, 86, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69, 14, 149, 97, 100, 56, 130, 97, 136, 184, 50, 97, 129, 147, 86, 90, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(69,14,40,40,40,40,40,40,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(69, 14, 149, 97, 113, 37, 167, 90, 136, 184, 50, 97, 107, 147, 67, 89, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69, 14, 149, 97, 106, 84, 110, 90, 136, 184, 50, 97, 107, 147, 67, 88, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69, 14, 149, 95, 91, 44, 142, 85, 136, 184, 50, 97, 105, 147, 69, 91, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69, 14, 147, 98, 95, 54, 133, 99, 136, 184, 51, 99, 106, 145, 67, 97, 128, 71, 101)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680774576284'] = function(block) {
  let code = "base_action.action('后退')\n";
  return code;
}

Blockly.Blocks['1680775114309'] = {
  init: function() {
    this.jsonInit({
      "type": "1680775114309",
      "message0": "BoxBack1Rungai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680775114309'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,120,40,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,88,91,48,132,88,132,187,10,94,107,146,72,91,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,86,90,95,84,90,132,187,10,94,107,146,72,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,86,66,35,121,90,132,187,10,94,107,146,72,88,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,106,93,53,124,113,132,187,10,114,102,154,55,110,120,40,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,106,93,53,129,113,132,187,10,114,95,105,100,110,120,40,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,120,40,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680775114309'] = function(block) {
  let code = "base_action.action('BoxBack1Rungai')\n";
  return code;
}

Blockly.Blocks['1680745718471'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745718471",
      "message0": "Forwalk01",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745718471'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,55,85,100,90,50,30,30,30,75,85,100,90,70,0,0,0)\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(80, 35, 100, 85, 91, 50, 128, 88, 120, 165, 100, 95, 117, 168, 62, 90, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,55,50,50,50,30,30,30,75,85,100,90,60,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 35, 90, 86, 99, 37, 147, 88, 120, 165, 90, 90, 121, 168, 63, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 80, 98, 99, 37, 147, 98, 120, 165, 80, 100, 121, 168, 73, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 35, 100, 108, 88, 54, 124, 108, 120, 165, 100, 110, 135, 158, 95, 110, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 35, 100, 105, 83, 32, 135, 110, 120, 165, 100, 115, 109, 150, 72, 112, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOmove19(80, 30, 100, 107, 93, 55, 124, 107, 120, 150, 100, 106, 107, 145, 76, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745718471'] = function(block) {
  let code = "base_action.action('Forwalk01')\n";
  return code;
}

Blockly.Blocks['1680752248086'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752248086",
      "message0": "BoxForward02",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752248086'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(55, 10, 179, 90, 91, 48, 134, 88, 140, 190, 25, 94, 109, 146, 71, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 86, 113, 85, 115, 90, 140, 190, 25, 94, 109, 146, 71, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 86, 121, 37, 161, 88, 140, 190, 25, 94, 109, 146, 72, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55, 10, 179, 107, 98, 56, 129, 111, 140, 190, 25, 112, 131, 155, 88, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 106, 93, 54, 128, 113, 140, 190, 25, 114, 77, 105, 85, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 100, 93, 55, 124, 100, 140, 190, 25, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752248086'] = function(block) {
  let code = "base_action.action('BoxForward02')\n";
  return code;
}

Blockly.Blocks['1680775618590'] = {
  init: function() {
    this.jsonInit({
      "type": "1680775618590",
      "message0": "BoxForward02gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680775618590'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,95,91,48,134,88,140,190,25,100,109,146,71,90,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,94,113,85,115,90,140,190,25,100,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,102,98,56,129,111,140,190,25,108,131,155,88,110,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,128,100,140,190,25,100,107,145,72,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680775618590'] = function(block) {
  let code = "base_action.action('BoxForward02gai')\n";
  return code;
}

Blockly.Blocks['1680752259809'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752259809",
      "message0": "BoxForward1s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752259809'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 100, 132, 187, 10, 102, 119, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752259809'] = function(block) {
  let code = "base_action.action('BoxForward1s')\n";
  return code;
}

Blockly.Blocks['1680752263368'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752263368",
      "message0": "BoxForward2s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752263368'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 100, 132, 187, 10, 102, 119, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752263368'] = function(block) {
  let code = "base_action.action('BoxForward2s')\n";
  return code;
}

Blockly.Blocks['1680752266437'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752266437",
      "message0": "BoxForward3s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752266437'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 100, 132, 187, 10, 102, 119, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752266437'] = function(block) {
  let code = "base_action.action('BoxForward3s')\n";
  return code;
}

Blockly.Blocks['1681958963427'] = {
  init: function() {
    this.jsonInit({
      "type": "1681958963427",
      "message0": "boxbackrun",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1681958963427'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,120,40,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,85,91,50,128,88,132,187,10,95,117,168,62,90,120,40,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,88,91,48,129,88,132,187,10,94,107,146,76,87,120,40,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,86,90,95,84,90,132,187,10,94,107,146,78,87,120,40,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,88,84,53,115,85,132,187,10,93,104,144,78,91,120,40,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,103,92,53,124,107,132,187,10,114,102,154,55,110,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,106,93,53,129,113,132,187,10,114,95,105,100,110,120,40,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,95,95,95,65,30,30,30,50,50,50,50,50)\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,104,83,32,140,111,132,187,10,115,111,150,77,112,120,40,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,120,40,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1681958963427'] = function(block) {
  let code = "base_action.action('boxbackrun')\n";
  return code;
}

Blockly.Blocks['1680753648499'] = {
  init: function() {
    this.jsonInit({
      "type": "1680753648499",
      "message0": "Left3move",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680753648499'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 55, 100, 90, 93, 54, 124, 90, 120, 175, 100, 110, 107, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 55, 100, 95, 93, 54, 124, 105, 120, 175, 100, 106, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 25, 100, 106, 93, 54, 124, 110, 120, 145, 100, 115, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680753648499'] = function(block) {
  let code = "base_action.action('Left3move')\n";
  return code;
}

Blockly.Blocks['1680752275114'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752275114",
      "message0": "FastForward3s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752275114'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 80, 96, 95, 70, 110, 100, 120, 170, 80, 102, 109, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752275114'] = function(block) {
  let code = "base_action.action('FastForward3s')\n";
  return code;
}

Blockly.Blocks['1680745659863'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745659863",
      "message0": "Box_move_left",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745659863'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(60, 15, 190, 85, 112, 90, 110, 90, 132, 187, 10, 110, 107, 146, 71, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60, 15, 190, 95, 93, 53, 126, 105, 132, 187, 10, 120, 116, 160, 63, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 54, 129, 98, 132, 187, 10, 103, 107, 146, 71, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 95, 132, 187, 10, 100, 107, 145, 71, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745659863'] = function(block) {
  let code = "base_action.action('Box_move_left')\n";
  return code;
}

Blockly.Blocks['1680745688797'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745688797",
      "message0": "BoxLeftTurn1s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745688797'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(60, 15, 190, 95, 63, 55, 94, 95, 132, 187, 10, 105, 77, 145, 46, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 95, 63, 55, 94, 93, 132, 187, 10, 105, 77, 145, 46, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1680745688797'] = function(block) {
  let code = "base_action.action('BoxLeftTurn1s')\n";
  return code;
}

Blockly.Blocks['1680745711207'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745711207",
      "message0": "BoxTurnR1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745711207'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 99, 83, 55, 118, 97, 132, 187, 10, 104, 103, 145, 70, 104, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 55, 118, 93, 132, 187, 10, 104, 103, 145, 70, 97, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 65, 119, 96, 132, 187, 10, 100, 112, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 88, 55, 124, 100, 132, 187, 10, 100, 112, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745711207'] = function(block) {
  let code = "base_action.action('BoxTurnR1')\n";
  return code;
}

Blockly.Blocks['1680745797902'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745797902",
      "message0": "turn003L",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745797902'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 85, 96, 102, 55, 130, 96, 120, 170, 85, 101, 112, 145, 82, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 85, 96, 102, 55, 130, 103, 120, 170, 85, 101, 112, 145, 82, 107, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 102, 135, 81, 104, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745797902'] = function(block) {
  let code = "base_action.action('turn003L')\n";
  return code;
}

Blockly.Blocks['1680745892513'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745892513",
      "message0": "BoxRight1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745892513'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,100,100,100,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 105, 93, 54, 130, 105, 132, 187, 10, 110, 102, 136, 72, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 94, 93, 54, 130, 100, 132, 187, 10, 106, 107, 146, 70, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(60, 15, 190, 91, 93, 54, 130, 88, 132, 187, 10, 102, 107, 146, 70, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 97, 95, 61, 130, 91, 132, 187, 10, 102, 107, 146, 70, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 97, 95, 61, 130, 91, 132, 187, 10, 102, 107, 146, 70, 98, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745892513'] = function(block) {
  let code = "base_action.action('BoxRight1')\n";
  return code;
}

Blockly.Blocks['1680752272439'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752272439",
      "message0": "FastForward2s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752272439'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 80, 96, 95, 70, 110, 100, 120, 170, 80, 102, 109, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752272439'] = function(block) {
  let code = "base_action.action('FastForward2s')\n";
  return code;
}

Blockly.Blocks['1680752269543'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752269543",
      "message0": "FastForward1s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752269543'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 80, 96, 95, 70, 110, 100, 120, 170, 80, 102, 109, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752269543'] = function(block) {
  let code = "base_action.action('FastForward1s')\n";
  return code;
}

Blockly.Blocks['1680753423868'] = {
  init: function() {
    this.jsonInit({
      "type": "1680753423868",
      "message0": "Right3move",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680753423868'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 25, 100, 90, 93, 54, 124, 100, 120, 145, 100, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 25, 100, 94, 93, 54, 124, 85, 120, 145, 100, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 55, 100, 85, 93, 54, 124, 85, 120, 175, 100, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680753423868'] = function(block) {
  let code = "base_action.action('Right3move')\n";
  return code;
}

Blockly.Blocks['1680753447030'] = {
  init: function() {
    this.jsonInit({
      "type": "1680753447030",
      "message0": "GrabCube",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680753447030'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 56, 115, 65, 127, 150, 51, 66, 118, 141, 101, 142, 81, 50, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(88, 73, 116, 57, 142, 150, 48, 66, 119, 126, 83, 143, 60, 50, 151, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(68, 49, 165, 47, 154, 142, 47, 62, 120, 160, 39, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69, 16, 163, 47, 154, 142, 47, 62, 122, 190, 40, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 17, 163, 47, 154, 142, 47, 62, 136, 186, 40, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 57, 140, 150, 69, 62, 136, 186, 40, 138, 85, 50, 152, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 95, 105, 150, 39, 99, 136, 186, 40, 98, 99, 50, 163, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 97, 96, 150, 39, 99, 136, 186, 40, 99, 107, 50, 163, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 98, 102, 77, 115, 100, 136, 186, 40, 99, 99, 123, 86, 98, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680753447030'] = function(block) {
  let code = "base_action.action('GrabCube')\n";
  return code;
}

Blockly.Blocks['1680745663962'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745663962",
      "message0": "Box_move_right",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745663962'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(60, 15, 190, 90, 93, 54, 129, 100, 132, 187, 10, 115, 88, 110, 90, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60, 15, 190, 80, 84, 40, 137, 70, 132, 187, 10, 105, 107, 147, 74, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 97, 93, 54, 129, 95, 132, 187, 10, 100, 107, 146, 71, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 95, 132, 187, 10, 100, 107, 145, 71, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745663962'] = function(block) {
  let code = "base_action.action('Box_move_right')\n";
  return code;
}

Blockly.Blocks['1680745682571'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745682571",
      "message0": "BoxLeft1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745682571'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 128, 100, 132, 187, 10, 100, 107, 145, 72, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,100,100,100,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 90, 98, 64, 128, 90, 132, 187, 10, 95, 107, 146, 72, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 95, 93, 54, 128, 90, 132, 187, 10, 105, 107, 146, 72, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(60, 15, 190, 98, 93, 54, 128, 102, 132, 187, 10, 109, 107, 146, 72, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 98, 94, 54, 128, 102, 132, 187, 10, 103, 105, 139, 77, 109, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 98, 93, 54, 128, 102, 132, 187, 10, 103, 105, 139, 77, 109, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 128, 100, 132, 187, 10, 100, 107, 145, 72, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745682571'] = function(block) {
  let code = "base_action.action('BoxLeft1')\n";
  return code;
}

Blockly.Blocks['1680745704642'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745704642",
      "message0": "BoxTurnL1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745704642'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 96, 97, 55, 130, 96, 132, 187, 10, 101, 117, 145, 82, 103, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 96, 97, 55, 130, 103, 132, 187, 10, 101, 117, 145, 82, 107, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 88, 55, 124, 100, 132, 187, 10, 100, 107, 135, 81, 104, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745704642'] = function(block) {
  let code = "base_action.action('BoxTurnL1')\n";
  return code;
}

Blockly.Blocks['1680745916303'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745916303",
      "message0": "BoxRightTurn1s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745916303'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 95, 132, 187, 10, 105, 137, 145, 106, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 93, 132, 187, 10, 105, 137, 145, 106, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1680745916303'] = function(block) {
  let code = "base_action.action('BoxRightTurn1s')\n";
  return code;
}

Blockly.Blocks['1680753457326'] = {
  init: function() {
    this.jsonInit({
      "type": "1680753457326",
      "message0": "LiftCubeUp",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680753457326'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 98, 102, 77, 115, 100, 132, 187, 10, 99, 99, 123, 86, 98, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680753457326'] = function(block) {
  let code = "base_action.action('LiftCubeUp')\n";
  return code;
}

Blockly.Blocks['1682991221138'] = {
  init: function() {
    this.jsonInit({
      "type": "1682991221138",
      "message0": "fastforword01gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1682991221138'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,99,83,54,122,90,140,190,25,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(55,10,179,99,105,99,103,100,140,190,25,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(55,10,179,99,100,74,121,100,140,190,25,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(55,10,179,99,100,61,126,104,140,190,25,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(55,10,179,99,81,66,111,102,140,190,25,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(55,10,179,99,76,63,111,100,140,190,25,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(55,10,179,99,90,73,106,100,140,190,25,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(55,10,179,96,85,70,110,100,140,190,25,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1682991221138'] = function(block) {
  let code = "base_action.action('fastforword01gai')\n";
  return code;
}

Blockly.Blocks['1683006314962'] = {
  init: function() {
    this.jsonInit({
      "type": "1683006314962",
      "message0": "fastforeordgai1001",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1683006314962'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1683006314962'] = function(block) {
  let code = "base_action.action('fastforeordgai1001')\n";
  return code;
}

Blockly.Blocks['1683006919245'] = {
  init: function() {
    this.jsonInit({
      "type": "1683006919245",
      "message0": "boxForward02gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1683006919245'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1683006919245'] = function(block) {
  let code = "base_action.action('boxForward02gai')\n";
  return code;
}

Blockly.Blocks['1683029469886'] = {
  init: function() {
    this.jsonInit({
      "type": "1683029469886",
      "message0": "fastforword03sgai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1683029469886'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1683029469886'] = function(block) {
  let code = "base_action.action('fastforword03sgai')\n";
  return code;
}

Blockly.Blocks['1683116482760'] = {
  init: function() {
    this.jsonInit({
      "type": "1683116482760",
      "message0": "fastforword001gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1683116482760'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1683116482760'] = function(block) {
  let code = "base_action.action('fastforword001gai')\n";
  return code;
}

Blockly.Blocks['1683116644057'] = {
  init: function() {
    this.jsonInit({
      "type": "1683116644057",
      "message0": "fastforword002改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1683116644057'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,95,91,48,134,88,140,190,25,100,109,146,71,90,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,94,113,85,115,90,140,190,25,100,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,102,98,56,129,111,140,190,25,108,131,155,88,110,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,95,91,48,134,88,140,190,25,100,109,146,71,90,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,94,113,85,115,90,140,190,25,100,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,102,98,56,129,111,140,190,25,108,131,155,88,110,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,95,91,48,134,88,140,190,25,100,109,146,71,90,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,94,113,85,115,90,140,190,25,100,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,102,98,56,129,111,140,190,25,108,131,155,88,110,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,128,100,140,190,25,100,107,145,72,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1683116644057'] = function(block) {
  let code = "base_action.action('fastforword002改')\n";
  return code;
}

Blockly.Blocks['1683117478667'] = {
  init: function() {
    this.jsonInit({
      "type": "1683117478667",
      "message0": "box-back01改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1683117478667'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,100,93,55,130,100,132,187,10,100,107,145,70,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,105,93,55,130,108,132,187,10,111,102,136,70,112,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,105,93,55,134,107,132,187,10,108,125,145,94,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,92,106,55,144,85,132,187,10,95,117,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,92,75,55,106,95,132,187,10,95,107,145,66,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,105,83,55,124,107,132,187,10,108,94,141,56,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,130,98,132,187,10,100,107,145,70,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1683117478667'] = function(block) {
  let code = "base_action.action('box-back01改')\n";
  return code;
}

Blockly.Blocks['1683117563331'] = {
  init: function() {
    this.jsonInit({
      "type": "1683117563331",
      "message0": "box-back03改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1683117563331'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,100,93,55,130,100,132,187,10,100,107,145,70,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,105,93,55,130,108,132,187,10,111,102,136,70,112,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,105,93,55,134,107,132,187,10,108,125,145,94,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,92,106,55,144,85,132,187,10,95,117,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,92,75,55,106,95,132,187,10,95,107,145,66,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,105,83,55,124,107,132,187,10,108,94,141,56,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,130,98,132,187,10,100,107,145,70,102,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1683117563331'] = function(block) {
  let code = "base_action.action('box-back03改')\n";
  return code;
}

Blockly.Blocks['1680745774187'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745774187",
      "message0": "PutCubeDown",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745774187'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 98, 132, 187, 10, 100, 107, 145, 70, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 99, 90, 150, 38, 100, 132, 187, 10, 101, 111, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(59, 14, 148, 99, 122, 150, 39, 100, 134, 188, 56, 101, 79, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72, 14, 147, 99, 122, 150, 39, 100, 130, 176, 57, 101, 79, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72, 14, 147, 99, 98, 150, 40, 100, 130, 176, 57, 100, 105, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745774187'] = function(block) {
  let code = "base_action.action('PutCubeDown')\n";
  return code;
}

Blockly.Blocks['1680745763411'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745763411",
      "message0": "move_left",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745763411'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(80, 40, 100, 85, 112, 90, 105, 90, 120, 160, 100, 110, 107, 146, 76, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 100, 95, 93, 53, 121, 105, 120, 155, 100, 120, 116, 160, 68, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 54, 124, 98, 120, 170, 100, 103, 107, 146, 76, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 95, 120, 170, 100, 100, 107, 145, 76, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745763411'] = function(block) {
  let code = "base_action.action('move_left')\n";
  return code;
}

Blockly.Blocks['1680745769222'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745769222",
      "message0": "move_right",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745769222'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(80, 40, 100, 90, 93, 54, 124, 100, 120, 160, 100, 115, 88, 110, 95, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(80, 45, 100, 80, 84, 40, 132, 70, 120, 170, 100, 105, 107, 147, 79, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 97, 93, 54, 124, 95, 120, 170, 100, 100, 107, 146, 76, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 95, 120, 170, 100, 100, 107, 145, 76, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745769222'] = function(block) {
  let code = "base_action.action('move_right')\n";
  return code;
}

Blockly.Blocks['1680745753817'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745753817",
      "message0": "LeftTurn1s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745753817'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 115, 95, 63, 55, 94, 95, 120, 170, 115, 105, 77, 145, 46, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 115, 95, 63, 55, 94, 93, 120, 170, 115, 105, 77, 145, 46, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1680745753817'] = function(block) {
  let code = "base_action.action('LeftTurn1s')\n";
  return code;
}

Blockly.Blocks['1680745801803'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745801803",
      "message0": "turn003R",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745801803'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 115, 99, 88, 55, 118, 97, 120, 170, 115, 104, 98, 145, 70, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 115, 99, 88, 55, 118, 93, 120, 170, 115, 104, 98, 145, 70, 97, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 98, 65, 119, 96, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745801803'] = function(block) {
  let code = "base_action.action('turn003R')\n";
  return code;
}

Blockly.Blocks['1680745785946'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745785946",
      "message0": "RightTurn1s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745785946'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 85, 95, 123, 55, 154, 95, 120, 170, 85, 105, 137, 145, 106, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 85, 95, 123, 55, 154, 93, 120, 170, 85, 105, 137, 145, 106, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1680745785946'] = function(block) {
  let code = "base_action.action('RightTurn1s')\n";
  return code;
}

Blockly.Blocks['1683195104401'] = {
  init: function() {
    this.jsonInit({
      "type": "1683195104401",
      "message0": "Boxforward1sgai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1683195104401'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1683195104401'] = function(block) {
  let code = "base_action.action('Boxforward1sgai')\n";
  return code;
}

Blockly.Blocks['1683195350675'] = {
  init: function() {
    this.jsonInit({
      "type": "1683195350675",
      "message0": "BoxForward3sgai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1683195350675'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,95,91,48,134,88,140,190,25,100,109,146,71,90,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,94,113,85,115,90,140,190,25,100,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,102,98,56,129,111,140,190,25,108,131,155,88,110,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,95,91,48,134,88,140,190,25,100,109,146,71,90,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,94,113,85,115,90,140,190,25,100,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,102,98,56,129,111,140,190,25,108,131,155,88,110,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,95,91,48,134,88,140,190,25,100,109,146,71,90,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,94,113,85,115,90,140,190,25,100,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,102,98,56,129,111,140,190,25,108,131,155,88,110,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,128,100,140,190,25,100,107,145,72,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1683195350675'] = function(block) {
  let code = "base_action.action('BoxForward3sgai')\n";
  return code;
}

Blockly.Blocks['1683195424092'] = {
  init: function() {
    this.jsonInit({
      "type": "1683195424092",
      "message0": "BoxForward2sgai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1683195424092'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1683195424092'] = function(block) {
  let code = "base_action.action('BoxForward2sgai')\n";
  return code;
}

Blockly.Blocks['1683195695963'] = {
  init: function() {
    this.jsonInit({
      "type": "1683195695963",
      "message0": "BoxBack1Rungai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1683195695963'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,100,93,55,130,100,132,187,10,100,107,145,70,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,105,93,55,130,108,132,187,10,111,102,136,70,112,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,105,93,55,134,107,132,187,10,108,125,145,94,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,92,106,55,144,85,132,187,10,95,117,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,92,75,55,106,95,132,187,10,95,107,145,66,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,100,93,55,130,100,132,187,10,100,107,145,70,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1683195695963'] = function(block) {
  let code = "base_action.action('BoxBack1Rungai')\n";
  return code;
}

Blockly.Blocks['Squat'] = {
  init: function () {
    this.jsonInit({
      type: 'Squat',
      message0: '%{BKY_SQUAT}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Squat'] = function (block) {
  const code = [
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)',
    'MOTOsetspeed(14)',
    'MOTOmove16(80, 30, 100, 100, 130, 130, 77, 100, 120, 170, 100, 100, 70, 70, 123, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(14)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Squat'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SQUAT'] + "')\n";
  return code;
}

Blockly.Blocks['Take_three_slow_steps_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_three_slow_steps_forward',
      message0: '%{BKY_TAKE_THREE_SLOW_STEPS_FORWARD}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_three_slow_steps_forward'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,55,85,100,90,50,30,30,30,75,85,100,90,70)',
    'MOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 35, 100, 85, 91, 50, 128, 88, 120, 165, 100, 95, 117, 168, 62, 90)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 35, 100, 88, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 87)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,50,55,50,50,50,30,30,30,75,85,100,90,70)',
    'MOTOrigid16(30,30,30,50,55,50,50,50,30,30,30,75,85,100,90,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,45,45,45,45,45,30,30,30,45,65,65,65,45)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 110, 138, 83, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 97, 113, 37, 156, 95, 120, 165, 90, 100, 110, 138, 88, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 75, 100, 108, 55, 137, 100, 120, 170, 75, 100, 132, 154, 89, 100)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 30, 75, 100, 108, 55, 137, 100, 120, 170, 75, 100, 132, 154, 89, 100)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,75,85,100,90,70,30,30,30,50,55,50,50,50)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 147, 155, 99, 110)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,75,85,100,90,70,30,30,30,50,55,50,50,50)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 93, 54, 123, 113, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,45,45,45,45,45,30,30,30,45,65,65,65,45)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 110, 106, 90, 62, 117, 111, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 100, 90, 62, 112, 100, 120, 165, 110, 103, 87, 163, 44, 105)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 125, 100, 68, 46, 111, 100, 120, 170, 125, 100, 92, 145, 63, 100)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 30, 125, 100, 68, 46, 111, 100, 120, 170, 125, 100, 92, 145, 63, 100)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,50,55,50,50,50,30,30,30,75,85,100,90,70)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 110, 88, 53, 45, 101, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 105, 146, 77, 87)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,50,55,50,50,50,30,30,30,75,85,100,90,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,45,45,45,45,45,30,30,30,45,65,65,65,45)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 110, 138, 83, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 97, 113, 37, 156, 95, 120, 165, 90, 100, 110, 138, 88, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 75, 100, 108, 55, 137, 100, 120, 170, 75, 100, 132, 154, 89, 100)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 30, 75, 100, 108, 55, 137, 100, 120, 170, 75, 100, 132, 154, 89, 100)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,75,85,100,90,70,30,30,30,50,55,50,50,50)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 147, 155, 99, 110)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,75,85,100,90,70,30,30,30,50,55,50,50,50)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 93, 54, 123, 113, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,45,45,45,45,45,30,30,30,45,65,65,65,45)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 110, 106, 90, 62, 117, 111, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 100, 90, 62, 112, 100, 120, 165, 110, 103, 87, 163, 44, 105)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 125, 100, 68, 46, 111, 100, 120, 170, 125, 100, 92, 145, 63, 100)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 30, 125, 100, 68, 46, 111, 100, 120, 170, 125, 100, 92, 145, 63, 100)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,50,55,50,50,50,30,30,30,75,85,100,90,70)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 110, 88, 53, 45, 101, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 105, 146, 77, 87)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,50,55,50,50,50,30,30,30,75,85,100,90,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,45,45,45,45,45,30,30,30,45,65,65,65,45)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 110, 138, 83, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 97, 113, 37, 156, 95, 120, 165, 90, 100, 110, 138, 88, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 75, 100, 108, 55, 137, 100, 120, 170, 75, 100, 132, 154, 89, 100)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 30, 75, 100, 108, 55, 137, 100, 120, 170, 75, 100, 132, 154, 89, 100)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,75,85,100,90,70,30,30,30,50,55,50,50,50)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 147, 155, 99, 110)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,75,85,100,90,70,30,30,30,50,55,50,50,50)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 93, 54, 123, 113, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,45,45,45,45,45,30,30,30,45,65,65,65,45)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 110, 106, 90, 62, 117, 111, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 100, 90, 62, 112, 100, 120, 165, 110, 103, 87, 163, 44, 105)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 125, 100, 68, 46, 111, 100, 120, 170, 125, 100, 92, 145, 63, 100)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 30, 125, 100, 68, 46, 111, 100, 120, 170, 125, 100, 92, 145, 63, 100)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,50,55,50,50,50,30,30,30,75,85,100,90,70)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 110, 88, 53, 45, 101, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 105, 146, 77, 88)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 100, 80, 91, 48, 129, 80, 120, 165, 100, 94, 105, 146, 76, 89)',
    'MOTOwait()',
    'MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30)',
    'MOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 50, 100, 94, 93, 55, 124, 92, 120, 170, 100, 93, 107, 145, 76, 93)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_three_slow_steps_forward'] = function(block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_THREE_SLOW_STEPS_FORWARD'] + "')\n";
  return code;
}

Blockly.Blocks['Take_a_quick_step_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_quick_step_forward',
      message0: '%{BKY_TAKE_A_QUICK_STEP_FORWARD}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_quick_step_forward'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 91, 94)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 91, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 109, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 110, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 94)',
    'MOTOwait()',
    'MOTOsetspeed(65)',
    'MOTOmove16(80, 30, 120, 96, 95, 70, 110, 100, 120, 170, 120, 102, 109, 146, 75, 96)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_quick_step_forward'] = function(block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_QUICK_STEP_FORWARD'] + "')\n";
  return code;
}

Blockly.Blocks['1680745779311'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745779311",
      "message0": "Right02move",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745779311'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 104, 93, 54, 124, 111, 120, 165, 100, 110, 109, 152, 71, 112, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 30, 100, 104, 93, 54, 124, 111, 120, 150, 100, 115, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 30, 100, 106, 93, 54, 124, 106, 120, 150, 100, 115, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 50, 100, 94, 93, 55, 124, 92, 120, 170, 100, 93, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745779311'] = function(block) {
  let code = "base_action.action('Right02move')\n";
  return code;
}

Blockly.Blocks['1710508595220'] = {
  init: function() {
    this.jsonInit({
      "type": "1710508595220",
      "message0": "Getcubgai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1710508595220'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,56,115,65,127,150,51,66,118,141,101,142,81,50,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(88,73,116,57,142,150,48,66,119,126,83,143,60,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68,49,165,47,154,142,47,62,120,160,39,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,16,163,47,154,142,47,62,122,190,40,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,17,163,47,154,142,47,62,136,186,40,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,17,163,57,140,150,69,62,136,186,40,138,85,50,152,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,17,163,95,105,150,39,99,136,186,40,98,99,50,163,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,17,163,97,96,150,39,99,136,186,40,99,107,50,163,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,17,163,98,102,77,115,100,136,186,40,99,99,123,86,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1710508595220'] = function(block) {
  let code = "base_action.action('Getcubgai')\n";
  return code;
}

Blockly.Blocks['1710509334672'] = {
  init: function() {
    this.jsonInit({
      "type": "1710509334672",
      "message0": "Putcubdowngai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1710509334672'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,100,93,55,130,98,132,187,10,100,107,145,70,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,150,38,100,132,187,10,101,111,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(59,14,148,99,122,150,39,100,134,188,56,101,79,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72,14,147,99,122,150,39,100,130,176,57,101,79,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72,14,147,99,98,150,40,100,130,176,57,100,105,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1710509334672'] = function(block) {
  let code = "base_action.action('Putcubdowngai')\n";
  return code;
}

Blockly.Blocks['1711623676666'] = {
  init: function() {
    this.jsonInit({
      "type": "1711623676666",
      "message0": "Box_forward2s4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711623676666'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711623676666'] = function(block) {
  let code = "base_action.action('Box_forward2s4')\n";
  return code;
}

Blockly.Blocks['1711625419000'] = {
  init: function() {
    this.jsonInit({
      "type": "1711625419000",
      "message0": "Getcubgai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711625419000'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 56, 115, 65, 127, 150, 51, 66, 118, 141, 101, 142, 81, 50, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(88, 73, 116, 57, 142, 150, 48, 66, 119, 126, 83, 143, 60, 50, 151, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68, 49, 165, 47, 154, 142, 47, 62, 120, 160, 39, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69, 16, 163, 47, 154, 142, 47, 62, 122, 190, 40, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 17, 163, 47, 154, 142, 47, 62, 136, 186, 40, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 57, 140, 150, 69, 62, 136, 186, 40, 138, 85, 50, 152, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 95, 105, 150, 39, 99, 136, 186, 40, 98, 99, 50, 163, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 97, 96, 150, 39, 99, 136, 186, 40, 99, 107, 50, 163, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 17, 163, 98, 102, 77, 115, 100, 136, 186, 40, 99, 99, 123, 86, 98, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711625419000'] = function(block) {
  let code = "base_action.action('Getcubgai')\n";
  return code;
}

Blockly.Blocks['1711625426824'] = {
  init: function() {
    this.jsonInit({
      "type": "1711625426824",
      "message0": "Putcubdowngai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711625426824'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 98, 132, 187, 10, 100, 107, 145, 70, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 90, 150, 38, 100, 132, 187, 10, 101, 111, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(59, 14, 148, 99, 122, 150, 39, 100, 134, 188, 56, 101, 79, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72, 14, 147, 99, 122, 150, 39, 100, 130, 176, 57, 101, 79, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72, 14, 147, 99, 98, 150, 40, 100, 130, 176, 57, 100, 105, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711625426824'] = function(block) {
  let code = "base_action.action('Putcubdowngai')\n";
  return code;
}

Blockly.Blocks['1711625446707'] = {
  init: function() {
    this.jsonInit({
      "type": "1711625446707",
      "message0": "Box_backrun1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711625446707'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 88, 91, 48, 132, 80, 132, 187, 10, 94, 107, 146, 72, 85, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 86, 90, 95, 84, 85, 132, 187, 10, 94, 107, 146, 72, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 86, 66, 35, 121, 90, 132, 187, 10, 94, 107, 146, 72, 88, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 106, 93, 53, 124, 110, 132, 187, 10, 114, 102, 154, 55, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 106, 93, 53, 129, 113, 132, 187, 10, 114, 105, 95, 120, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711625446707'] = function(block) {
  let code = "base_action.action('Box_backrun1')\n";
  return code;
}

Blockly.Blocks['1711625501494'] = {
  init: function() {
    this.jsonInit({
      "type": "1711625501494",
      "message0": "BoxTurnL1gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711625501494'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 96, 97, 55, 130, 96, 132, 187, 10, 101, 125, 145, 82, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 96, 97, 55, 130, 103, 132, 187, 10, 101, 125, 145, 82, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 88, 55, 124, 100, 132, 187, 10, 100, 107, 135, 81, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711625501494'] = function(block) {
  let code = "base_action.action('BoxTurnL1gai')\n";
  return code;
}

Blockly.Blocks['1711625559640'] = {
  init: function() {
    this.jsonInit({
      "type": "1711625559640",
      "message0": "Box_move_right2gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711625559640'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(60, 15, 190, 90, 93, 54, 129, 100, 132, 187, 10, 115, 88, 110, 90, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 81, 93, 51, 125, 69, 132, 187, 10, 105, 107, 147, 74, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 97, 93, 54, 129, 95, 132, 187, 10, 100, 107, 146, 71, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 95, 132, 187, 10, 100, 107, 145, 71, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(60, 15, 190, 90, 93, 54, 129, 100, 132, 187, 10, 115, 88, 110, 90, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 81, 93, 51, 125, 69, 132, 187, 10, 105, 107, 147, 74, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 97, 93, 54, 129, 95, 132, 187, 10, 100, 107, 146, 71, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 95, 132, 187, 10, 100, 107, 145, 71, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711625559640'] = function(block) {
  let code = "base_action.action('Box_move_right2gai1')\n";
  return code;
}

Blockly.Blocks['1711625577269'] = {
  init: function() {
    this.jsonInit({
      "type": "1711625577269",
      "message0": "Box_rightturn2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711625577269'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 95, 132, 187, 10, 105, 137, 145, 106, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 93, 132, 187, 10, 105, 137, 145, 106, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 95, 132, 187, 10, 105, 137, 145, 106, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 93, 132, 187, 10, 105, 137, 145, 106, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1711625577269'] = function(block) {
  let code = "base_action.action('Box_rightturn2')\n";
  return code;
}

Blockly.Blocks['1711625610049'] = {
  init: function() {
    this.jsonInit({
      "type": "1711625610049",
      "message0": "BoxLeft1gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711625610049'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 128, 100, 132, 187, 10, 100, 107, 145, 72, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,100,100,100,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 90, 98, 64, 128, 90, 132, 187, 10, 95, 107, 146, 72, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 95, 93, 54, 128, 90, 132, 187, 10, 105, 107, 146, 72, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(60, 15, 190, 98, 93, 54, 128, 102, 132, 187, 10, 109, 107, 146, 72, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 98, 94, 54, 128, 102, 132, 187, 10, 103, 105, 139, 77, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 98, 93, 54, 128, 102, 132, 187, 10, 103, 105, 139, 77, 109, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 128, 100, 132, 187, 10, 100, 107, 145, 72, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711625610049'] = function(block) {
  let code = "base_action.action('BoxLeft1gai')\n";
  return code;
}

Blockly.Blocks['1711625628610'] = {
  init: function() {
    this.jsonInit({
      "type": "1711625628610",
      "message0": "BoxRight1gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711625628610'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,100,100,100,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 105, 93, 54, 130, 105, 132, 187, 10, 110, 102, 136, 72, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 94, 93, 54, 130, 100, 132, 187, 10, 106, 107, 146, 70, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(60, 15, 190, 91, 93, 54, 130, 88, 132, 187, 10, 102, 107, 146, 70, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 97, 95, 61, 130, 91, 132, 187, 10, 102, 107, 146, 70, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 97, 95, 61, 130, 91, 132, 187, 10, 102, 107, 146, 70, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711625628610'] = function(block) {
  let code = "base_action.action('BoxRight1gai')\n";
  return code;
}

Blockly.Blocks['1711625546530'] = {
  init: function() {
    this.jsonInit({
      "type": "1711625546530",
      "message0": "Box_forward2s4（2）",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711625546530'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711625546530'] = function(block) {
  let code = "base_action.action('Box_forward2s4（2）')\n";
  return code;
}

Blockly.Blocks['1711715036818'] = {
  init: function() {
    this.jsonInit({
      "type": "1711715036818",
      "message0": "BoxTurnL1gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711715036818'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,55,130,96,132,187,10,101,125,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,96,97,55,130,103,132,187,10,101,125,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,90,55,124,100,132,187,10,100,110,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711715036818'] = function(block) {
  let code = "base_action.action('BoxTurnL1gai1')\n";
  return code;
}

Blockly.Blocks['aelos_for'] = {
  init: function() {
    this.jsonInit({
      "type": "aelos_for",
      "message0": "%{BKY_AELOS_LOOP} %1 %{BKY_AELOS_LOOP_TIMES} %2 %{BKY_AELOS_DO} %3",
      "args0": [
        {
          "type": "input_value",
          "name": "times",
          "check": ["Number", "Variable"]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "do"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#86C113',
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['aelos_for'] = function(block) {
  var times = Blockly.Lua.valueToCode(block, "times", Blockly.Lua.ORDER_NONE) || "0";
  var do_code = Blockly.Lua.statementToCode(block, "do");

  var code = `for i = 1,${times},1\ndo\n${do_code}\nHKEY()\nend\n`;

  return code;
}

Blockly.Python['aelos_for'] = function(block) {
  var times = Blockly.Python.valueToCode(block, "times", Blockly.Python.ORDER_NONE) || "0";
  var do_code = Blockly.Python.statementToCode(block, "do") || Blockly.Python.PASS;

  var code = `for i in range(${times}):\n${do_code}`;

  return code;
}

Blockly.Blocks['1711715648130'] = {
  init: function() {
    this.jsonInit({
      "type": "1711715648130",
      "message0": "BoxTurnL1gai2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711715648130'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,55,132,96,132,187,10,101,125,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,96,97,55,130,103,132,187,10,101,125,150,85,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,90,55,124,100,132,187,10,100,110,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711715648130'] = function(block) {
  let code = "base_action.action('BoxTurnL1gai2')\n";
  return code;
}

Blockly.Blocks['1711716055743'] = {
  init: function() {
    this.jsonInit({
      "type": "1711716055743",
      "message0": "BoxTurnL1gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711716055743'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,58,132,96,132,187,10,101,125,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,96,97,58,130,103,132,187,10,101,125,150,85,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,90,55,124,100,132,187,10,100,110,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711716055743'] = function(block) {
  let code = "base_action.action('BoxTurnL1gai1')\n";
  return code;
}

Blockly.Blocks['1711716733735'] = {
  init: function() {
    this.jsonInit({
      "type": "1711716733735",
      "message0": "BoxTurnL1gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711716733735'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,55,133,100,132,187,10,101,125,150,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,96,97,55,130,103,132,187,10,101,125,150,85,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,90,55,124,100,132,187,10,100,110,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711716733735'] = function(block) {
  let code = "base_action.action('BoxTurnL1gai1')\n";
  return code;
}

Blockly.Blocks['1711717161169'] = {
  init: function() {
    this.jsonInit({
      "type": "1711717161169",
      "message0": "BoxTurnR1gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711717161169'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,83,55,118,97,132,187,10,104,103,145,70,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,55,118,95,132,187,10,104,103,145,70,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,65,119,96,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711717161169'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai')\n";
  return code;
}

Blockly.Blocks['1711798864589'] = {
  init: function() {
    this.jsonInit({
      "type": "1711798864589",
      "message0": "Box_move_right2gai2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711798864589'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,93,54,129,98,132,187,10,115,88,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,128,71,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,93,54,129,98,132,187,10,115,88,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711798864589'] = function(block) {
  let code = "base_action.action('Box_move_right2gai2')\n";
  return code;
}

Blockly.Blocks['1711799140891'] = {
  init: function() {
    this.jsonInit({
      "type": "1711799140891",
      "message0": "Box_move_right2gai3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711799140891'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,93,54,129,98,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711799140891'] = function(block) {
  let code = "base_action.action('Box_move_right2gai3')\n";
  return code;
}

Blockly.Blocks['1711799474853'] = {
  init: function() {
    this.jsonInit({
      "type": "1711799474853",
      "message0": "Box_move_right2gai4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711799474853'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,129,98,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,128,71,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,129,98,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711799474853'] = function(block) {
  let code = "base_action.action('Box_move_right2gai4')\n";
  return code;
}

Blockly.Blocks['1711799723253'] = {
  init: function() {
    this.jsonInit({
      "type": "1711799723253",
      "message0": "Box_move_right2gai5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711799723253'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,129,98,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,129,98,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711799723253'] = function(block) {
  let code = "base_action.action('Box_move_right2gai5')\n";
  return code;
}

Blockly.Blocks['1711799903674'] = {
  init: function() {
    this.jsonInit({
      "type": "1711799903674",
      "message0": "Box_move_right2gai4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711799903674'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,133,98,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,133,98,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711799903674'] = function(block) {
  let code = "base_action.action('Box_move_right2gai4')\n";
  return code;
}

Blockly.Blocks['1711800144024'] = {
  init: function() {
    this.jsonInit({
      "type": "1711800144024",
      "message0": "Box_move_right2gai4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711800144024'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,98,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,98,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711800144024'] = function(block) {
  let code = "base_action.action('Box_move_right2gai4')\n";
  return code;
}

Blockly.Blocks['1711880353372'] = {
  init: function() {
    this.jsonInit({
      "type": "1711880353372",
      "message0": "Box_move_right2gai6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711880353372'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,133,98,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,98,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711880353372'] = function(block) {
  let code = "base_action.action('Box_move_right2gai6')\n";
  return code;
}

Blockly.Blocks['1711880553261'] = {
  init: function() {
    this.jsonInit({
      "type": "1711880553261",
      "message0": "Box_move_right2gai6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711880553261'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,95,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,98,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711880553261'] = function(block) {
  let code = "base_action.action('Box_move_right2gai6')\n";
  return code;
}

Blockly.Blocks['1711880825691'] = {
  init: function() {
    this.jsonInit({
      "type": "1711880825691",
      "message0": "Box_move_right2gai5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711880825691'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,98,132,187,10,115,85,110,85,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,98,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711880825691'] = function(block) {
  let code = "base_action.action('Box_move_right2gai5')\n";
  return code;
}

Blockly.Blocks['1711881197417'] = {
  init: function() {
    this.jsonInit({
      "type": "1711881197417",
      "message0": "Box_move_right2gai5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711881197417'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,92,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,98,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711881197417'] = function(block) {
  let code = "base_action.action('Box_move_right2gai5')\n";
  return code;
}

Blockly.Blocks['1711881358389'] = {
  init: function() {
    this.jsonInit({
      "type": "1711881358389",
      "message0": "Box_move_right2gai5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711881358389'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,75,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711881358389'] = function(block) {
  let code = "base_action.action('Box_move_right2gai5')\n";
  return code;
}

Blockly.Blocks['1711881513994'] = {
  init: function() {
    this.jsonInit({
      "type": "1711881513994",
      "message0": "Box_move_right2gai4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711881513994'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711881513994'] = function(block) {
  let code = "base_action.action('Box_move_right2gai4')\n";
  return code;
}

Blockly.Blocks['1711972818322'] = {
  init: function() {
    this.jsonInit({
      "type": "1711972818322",
      "message0": "Box_move_right1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711972818322'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711972818322'] = function(block) {
  let code = "base_action.action('Box_move_right1')\n";
  return code;
}

Blockly.Blocks['1712055986674'] = {
  init: function() {
    this.jsonInit({
      "type": "1712055986674",
      "message0": "Box_forward2s5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1712055986674'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1712055986674'] = function(block) {
  let code = "base_action.action('Box_forward2s5')\n";
  return code;
}

Blockly.Blocks['1712058166919'] = {
  init: function() {
    this.jsonInit({
      "type": "1712058166919",
      "message0": "Box_rightturn2gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1712058166919'] = function(block) {
  let code = "MOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,95,123,55,154,95,132,187,10,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,95,123,55,154,93,132,187,10,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,100,90,55,124,100,132,187,10,100,110,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,95,123,55,154,95,132,187,10,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,95,123,55,154,93,132,187,10,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,100,90,55,124,100,132,187,10,100,110,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1712058166919'] = function(block) {
  let code = "base_action.action('Box_rightturn2gai')\n";
  return code;
}

Blockly.Blocks['1712843642761'] = {
  init: function() {
    this.jsonInit({
      "type": "1712843642761",
      "message0": "BoxTurngai2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1712843642761'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,55,130,96,132,187,10,101,125,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,96,97,55,130,103,132,187,10,101,125,145,85,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,142,78,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1712843642761'] = function(block) {
  let code = "base_action.action('BoxTurngai2')\n";
  return code;
}

Blockly.Blocks['1712843837749'] = {
  init: function() {
    this.jsonInit({
      "type": "1712843837749",
      "message0": "BoxTurnL1gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1712843837749'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,55,130,96,132,187,10,101,125,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,96,97,55,130,103,132,187,10,101,125,145,85,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,142,78,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1712843837749'] = function(block) {
  let code = "base_action.action('BoxTurnL1gai1')\n";
  return code;
}

Blockly.Blocks['1712845202977'] = {
  init: function() {
    this.jsonInit({
      "type": "1712845202977",
      "message0": "BoxTurnR1gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1712845202977'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,83,55,118,97,132,187,10,104,103,145,70,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,55,114,98,132,187,10,104,103,145,70,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,65,114,98,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1712845202977'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai')\n";
  return code;
}

Blockly.Blocks['1712926951773'] = {
  init: function() {
    this.jsonInit({
      "type": "1712926951773",
      "message0": "BoxTurnL1gai3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1712926951773'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,55,130,96,132,187,10,101,125,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,96,97,55,130,103,132,187,10,101,125,145,85,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,142,78,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1712926951773'] = function(block) {
  let code = "base_action.action('BoxTurnL1gai3')\n";
  return code;
}

Blockly.Blocks['1712928630982'] = {
  init: function() {
    this.jsonInit({
      "type": "1712928630982",
      "message0": "BoxTurnR1gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1712928630982'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,83,55,118,97,132,187,10,104,103,145,70,106,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,55,118,92,132,187,10,104,103,145,70,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,65,119,92,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1712928630982'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai1')\n";
  return code;
}

Blockly.Blocks['1712930050494'] = {
  init: function() {
    this.jsonInit({
      "type": "1712930050494",
      "message0": "BoxTurnR1gai2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1712930050494'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,78,55,118,94,132,187,10,104,103,145,72,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,55,118,92,132,187,10,104,103,145,70,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,65,119,92,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1712930050494'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai2')\n";
  return code;
}

Blockly.Blocks['1713014236552'] = {
  init: function() {
    this.jsonInit({
      "type": "1713014236552",
      "message0": "BoxTurnR1gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713014236552'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,75,55,113,94,132,187,10,105,103,145,72,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,75,55,113,92,132,187,10,105,103,145,70,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,65,119,92,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713014236552'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai1')\n";
  return code;
}

Blockly.Blocks['1713015562265'] = {
  init: function() {
    this.jsonInit({
      "type": "1713015562265",
      "message0": "BoxTurnR1gai4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713015562265'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,75,55,115,94,132,187,10,105,103,145,70,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,75,55,115,92,132,187,10,105,103,145,70,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,65,119,92,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713015562265'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai4')\n";
  return code;
}

Blockly.Blocks['1713016130983'] = {
  init: function() {
    this.jsonInit({
      "type": "1713016130983",
      "message0": "BoxFoward1sgai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713016130983'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,100,132,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713016130983'] = function(block) {
  let code = "base_action.action('BoxFoward1sgai')\n";
  return code;
}

Blockly.Blocks['1713016492728'] = {
  init: function() {
    this.jsonInit({
      "type": "1713016492728",
      "message0": "BoxForward1sgai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713016492728'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,100,132,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713016492728'] = function(block) {
  let code = "base_action.action('BoxForward1sgai')\n";
  return code;
}

Blockly.Blocks['1713017292607'] = {
  init: function() {
    this.jsonInit({
      "type": "1713017292607",
      "message0": "BoxTurnL1gai4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713017292607'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,142,78,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,55,130,96,132,187,10,101,125,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,96,97,55,130,103,132,187,10,101,125,145,85,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,142,78,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713017292607'] = function(block) {
  let code = "base_action.action('BoxTurnL1gai4')\n";
  return code;
}

Blockly.Blocks['1713017330475'] = {
  init: function() {
    this.jsonInit({
      "type": "1713017330475",
      "message0": "BoxTurnR1gai3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713017330475'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,75,55,115,94,132,187,10,105,103,145,70,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,75,55,115,92,132,187,10,105,103,145,70,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,65,119,92,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713017330475'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai3')\n";
  return code;
}

Blockly.Blocks['1713100376215'] = {
  init: function() {
    this.jsonInit({
      "type": "1713100376215",
      "message0": "BoxTurnR1gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713100376215'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,75,55,115,94,132,187,10,105,103,145,68,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,75,55,115,92,132,187,10,105,103,145,68,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,65,119,92,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713100376215'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai')\n";
  return code;
}

Blockly.Blocks['1713102412520'] = {
  init: function() {
    this.jsonInit({
      "type": "1713102412520",
      "message0": "BoxTurnR1gai2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713102412520'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,75,55,115,92,132,187,10,105,103,145,70,108,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,75,55,115,92,132,187,10,105,103,145,70,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,65,119,92,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713102412520'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai2')\n";
  return code;
}

Blockly.Blocks['1713437356263'] = {
  init: function() {
    this.jsonInit({
      "type": "1713437356263",
      "message0": "BoxTurnR1gai5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713437356263'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,77,55,115,94,132,187,10,105,105,145,70,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,75,55,115,92,132,187,10,105,103,145,70,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,65,119,92,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713437356263'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai5')\n";
  return code;
}

Blockly.Blocks['1713438176305'] = {
  init: function() {
    this.jsonInit({
      "type": "1713438176305",
      "message0": "BoxTurnR1gai6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713438176305'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,102,72,55,115,94,132,187,10,105,105,145,72,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,72,55,113,96,132,187,10,105,105,145,70,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,65,119,92,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713438176305'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai6')\n";
  return code;
}

Blockly.Blocks['1713440269072'] = {
  init: function() {
    this.jsonInit({
      "type": "1713440269072",
      "message0": "BoxTurnR1gai4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713440269072'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,102,72,55,115,94,132,187,10,105,105,145,72,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,102,72,55,113,96,132,187,10,105,105,145,70,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,65,119,92,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713440269072'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai4')\n";
  return code;
}

Blockly.Blocks['1713529729501'] = {
  init: function() {
    this.jsonInit({
      "type": "1713529729501",
      "message0": "BoxTurnR1gai5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713529729501'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,65,90,55,127,96,140,180,50,105,110,145,73,105,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,105,90,55,127,100,140,180,50,100,110,145,73,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1713529729501'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai5')\n";
  return code;
}

Blockly.Blocks['1713613024610'] = {
  init: function() {
    this.jsonInit({
      "type": "1713613024610",
      "message0": "Box_backrun1gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713613024610'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,88,91,48,132,80,132,187,10,94,107,146,72,85,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,86,90,95,84,85,132,187,10,94,107,146,72,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,86,66,35,121,90,132,187,10,94,107,146,72,88,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,106,93,53,124,110,132,187,10,114,102,154,55,110,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,106,93,53,129,113,132,187,10,114,105,95,120,110,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713613024610'] = function(block) {
  let code = "base_action.action('Box_backrun1gai')\n";
  return code;
}

Blockly.Blocks['1713613456745'] = {
  init: function() {
    this.jsonInit({
      "type": "1713613456745",
      "message0": "Box_rightturn2gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713613456745'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,95,123,55,154,95,132,187,10,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,95,123,55,154,93,132,187,10,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,100,90,55,124,100,132,187,10,100,110,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,95,123,55,154,95,132,187,10,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,95,123,55,154,93,132,187,10,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1713613456745'] = function(block) {
  let code = "base_action.action('Box_rightturn2gai1')\n";
  return code;
}

Blockly.Blocks['1713787599503'] = {
  init: function() {
    this.jsonInit({
      "type": "1713787599503",
      "message0": "BoxTurnR1gai5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713787599503'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,75,55,115,94,132,187,10,105,105,145,70,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,75,55,115,92,132,187,10,105,103,145,70,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,65,119,92,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713787599503'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai5')\n";
  return code;
}

Blockly.Blocks['1713879868657'] = {
  init: function() {
    this.jsonInit({
      "type": "1713879868657",
      "message0": "BoxTurnL1gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713879868657'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,142,78,100,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,55,130,96,132,187,10,101,125,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,96,97,55,130,103,132,187,10,101,125,145,85,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,142,78,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713879868657'] = function(block) {
  let code = "base_action.action('BoxTurnL1gai1')\n";
  return code;
}

Blockly.Blocks['1713967046188'] = {
  init: function() {
    this.jsonInit({
      "type": "1713967046188",
      "message0": "Box_backrun1gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713967046188'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,88,91,48,132,80,132,187,10,94,107,146,72,85,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,86,90,85,95,85,132,187,10,94,107,146,72,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,86,66,40,118,90,132,187,10,94,107,146,72,90,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,106,93,60,124,110,132,187,10,114,102,145,68,110,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,106,93,53,129,113,132,187,10,114,105,115,100,110,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713967046188'] = function(block) {
  let code = "base_action.action('Box_backrun1gai1')\n";
  return code;
}

Blockly.Blocks['1714141052381'] = {
  init: function() {
    this.jsonInit({
      "type": "1714141052381",
      "message0": "1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714141052381'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,98,102,77,115,100,132,187,10,99,99,123,86,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,16,155,98,102,77,115,100,131,186,45,99,99,123,86,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714141052381'] = function(block) {
  let code = "base_action.action('1')\n";
  return code;
}

Blockly.Blocks['1714141112488'] = {
  init: function() {
    this.jsonInit({
      "type": "1714141112488",
      "message0": "2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714141112488'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,98,102,77,115,100,132,187,10,99,99,123,86,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,16,155,98,102,77,115,100,131,186,45,99,99,123,86,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714141112488'] = function(block) {
  let code = "base_action.action('2')\n";
  return code;
}

Blockly.Blocks['1714456545819'] = {
  init: function() {
    this.jsonInit({
      "type": "1714456545819",
      "message0": "Getcubgai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714456545819'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,56,115,65,127,150,51,66,118,141,101,142,81,50,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(88,73,116,57,142,150,48,60,119,126,85,143,60,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68,49,165,47,154,142,47,62,120,155,39,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68,16,170,47,154,142,47,62,122,190,33,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(63,17,170,47,154,142,47,62,133,186,33,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,17,163,57,140,150,69,62,136,186,40,138,85,50,152,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,17,163,95,105,150,39,99,136,186,40,98,99,50,163,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,17,163,97,96,150,39,99,136,186,40,99,107,50,163,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,17,163,98,102,77,115,100,136,186,40,99,99,123,86,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714456545819'] = function(block) {
  let code = "base_action.action('Getcubgai1')\n";
  return code;
}

Blockly.Blocks['1714468066250'] = {
  init: function() {
    this.jsonInit({
      "type": "1714468066250",
      "message0": "Getcubgai2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714468066250'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,56,115,65,127,150,51,66,118,141,101,142,81,50,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(88,73,116,57,142,150,48,60,119,126,85,143,60,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68,49,165,47,154,142,47,62,120,155,39,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68,16,170,47,154,142,47,62,122,190,33,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(62,17,170,47,154,142,47,62,134,186,33,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,17,163,57,140,150,69,62,136,186,40,138,85,50,152,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,17,163,95,105,150,39,99,136,186,40,98,99,50,163,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,17,163,97,96,150,39,99,136,186,40,99,107,50,163,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,17,163,98,102,77,115,100,136,186,40,99,99,123,86,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714468066250'] = function(block) {
  let code = "base_action.action('Getcubgai2')\n";
  return code;
}

Blockly.Blocks['1714470307024'] = {
  init: function() {
    this.jsonInit({
      "type": "1714470307024",
      "message0": "Getcubgai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714470307024'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,56,115,65,127,150,51,62,118,141,101,142,81,50,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(88,73,116,57,142,150,48,60,119,126,85,143,60,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68,49,165,47,154,142,47,62,120,155,39,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68,16,170,47,154,142,47,62,122,190,33,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(62,16,170,47,154,142,47,62,134,187,33,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,16,163,57,140,150,69,62,136,187,40,138,85,50,152,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,16,163,95,105,150,39,99,136,187,40,98,99,50,163,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,16,163,97,96,150,39,99,136,187,40,99,107,50,163,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,16,163,98,102,77,115,100,136,187,40,99,99,123,86,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714470307024'] = function(block) {
  let code = "base_action.action('Getcubgai1')\n";
  return code;
}

Blockly.Blocks['1714629534529'] = {
  init: function() {
    this.jsonInit({
      "type": "1714629534529",
      "message0": "b7",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714629534529'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714629534529'] = function(block) {
  let code = "base_action.action('b7')\n";
  return code;
}

Blockly.Blocks['1714629689738'] = {
  init: function() {
    this.jsonInit({
      "type": "1714629689738",
      "message0": "Box_Forward7s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714629689738'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,100,132,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714629689738'] = function(block) {
  let code = "base_action.action('Box_Forward7s')\n";
  return code;
}

Blockly.Blocks['1714629840116'] = {
  init: function() {
    this.jsonInit({
      "type": "1714629840116",
      "message0": "Box_Forward6s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714629840116'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714629840116'] = function(block) {
  let code = "base_action.action('Box_Forward6s')\n";
  return code;
}

Blockly.Blocks['1714629938406'] = {
  init: function() {
    this.jsonInit({
      "type": "1714629938406",
      "message0": "Box_Forward4s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714629938406'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714629938406'] = function(block) {
  let code = "base_action.action('Box_Forward4s')\n";
  return code;
}

Blockly.Blocks['1714630059898'] = {
  init: function() {
    this.jsonInit({
      "type": "1714630059898",
      "message0": "Box_move_right4s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714630059898'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714630059898'] = function(block) {
  let code = "base_action.action('Box_move_right4s')\n";
  return code;
}

Blockly.Blocks['1714630222981'] = {
  init: function() {
    this.jsonInit({
      "type": "1714630222981",
      "message0": "Box_right2_go8s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714630222981'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714630222981'] = function(block) {
  let code = "base_action.action('Box_right2_go8s')\n";
  return code;
}

Blockly.Blocks['1714630314643'] = {
  init: function() {
    this.jsonInit({
      "type": "1714630314643",
      "message0": "3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714630314643'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,112,90,110,90,132,187,10,110,107,146,71,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,95,93,53,126,105,132,187,10,120,116,160,63,130,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,128,71,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,112,90,110,90,132,187,10,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,95,93,53,126,105,132,187,10,120,116,160,63,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,112,90,110,90,132,187,10,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,95,93,53,126,105,132,187,10,120,116,160,63,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,112,90,110,90,132,187,10,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,95,93,53,126,105,132,187,10,120,116,160,63,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714630314643'] = function(block) {
  let code = "base_action.action('3')\n";
  return code;
}

Blockly.Blocks['1714630378754'] = {
  init: function() {
    this.jsonInit({
      "type": "1714630378754",
      "message0": "Box_left4_go1s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714630378754'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,112,90,110,90,132,187,10,110,107,146,71,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,95,93,53,126,105,132,187,10,120,116,160,63,130,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,128,71,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,112,90,110,90,132,187,10,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,95,93,53,126,105,132,187,10,120,116,160,63,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,112,90,110,90,132,187,10,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,95,93,53,126,105,132,187,10,120,116,160,63,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,112,90,110,90,132,187,10,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,95,93,53,126,105,132,187,10,120,116,160,63,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,100,132,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714630378754'] = function(block) {
  let code = "base_action.action('Box_left4_go1s')\n";
  return code;
}

Blockly.Blocks['1714630445160'] = {
  init: function() {
    this.jsonInit({
      "type": "1714630445160",
      "message0": "Putcub",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714630445160'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,98,102,77,115,100,132,187,10,99,99,123,86,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,16,155,98,102,77,115,100,131,186,45,99,99,123,86,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714630445160'] = function(block) {
  let code = "base_action.action('Putcub')\n";
  return code;
}

Blockly.Blocks['1714630655769'] = {
  init: function() {
    this.jsonInit({
      "type": "1714630655769",
      "message0": "Box_go6s_pct",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714630655769'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,98,102,77,115,100,132,187,10,99,99,123,86,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,16,155,98,102,77,115,100,131,186,45,99,99,123,86,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(80,30,85,95,123,55,154,95,120,170,85,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,85,95,123,55,154,93,120,170,85,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(80,30,85,95,123,55,154,95,120,170,85,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,85,95,123,55,154,93,120,170,85,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(80,30,85,95,123,55,154,95,120,170,85,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,85,95,123,55,154,93,120,170,85,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(80,30,85,95,123,55,154,95,120,170,85,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,85,95,123,55,154,93,120,170,85,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1714630655769'] = function(block) {
  let code = "base_action.action('Box_go6s_pct')\n";
  return code;
}

Blockly.Blocks['1717506251067'] = {
  init: function() {
    this.jsonInit({
      "type": "1717506251067",
      "message0": "Box_backrun1gai2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717506251067'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(5)\nMOTOmove19(60,15,190,88,91,48,132,80,132,187,10,94,107,146,72,85,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,86,90,85,95,85,132,187,10,94,107,146,72,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,86,66,40,118,90,132,187,10,94,107,146,72,90,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,106,93,60,124,110,132,187,10,114,102,145,68,110,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,106,93,53,129,113,132,187,10,114,105,115,100,110,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717506251067'] = function(block) {
  let code = "base_action.action('Box_backrun1gai2')\n";
  return code;
}

Blockly.Blocks['1717588323874'] = {
  init: function() {
    this.jsonInit({
      "type": "1717588323874",
      "message0": "Box_go6s_pct1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717588323874'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\n\n\n-- 左放下\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 右放下\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,98,102,77,115,100,132,187,10,99,99,123,86,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,16,155,98,102,77,115,100,131,186,45,99,99,123,86,98,0,0,100)\nMOTOwait()\n\n\n-- 放箱子\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(80,30,85,95,123,55,154,95,120,170,85,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,85,95,123,55,154,93,120,170,85,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(80,30,85,95,123,55,154,95,120,170,85,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,85,95,123,55,154,93,120,170,85,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(80,30,85,95,123,55,154,95,120,170,85,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,85,95,123,55,154,93,120,170,85,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(80,30,85,95,123,55,154,95,120,170,85,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,85,95,123,55,154,93,120,170,85,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(80,30,85,95,123,55,154,95,120,170,85,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,85,95,123,55,154,93,120,170,85,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1717588323874'] = function(block) {
  let code = "base_action.action('Box_go6s_pct1')\n";
  return code;
}

Blockly.Blocks['1717589246973'] = {
  init: function() {
    this.jsonInit({
      "type": "1717589246973",
      "message0": "BoxTurnL1gai11",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717589246973'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,142,78,100,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,55,130,96,132,187,10,101,125,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,96,97,55,130,103,132,187,10,101,125,145,85,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,142,78,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717589246973'] = function(block) {
  let code = "base_action.action('BoxTurnL1gai11')\n";
  return code;
}

Blockly.Blocks['1717589974411'] = {
  init: function() {
    this.jsonInit({
      "type": "1717589974411",
      "message0": "BoxTurnR1gai51",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717589974411'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,75,55,115,94,132,187,10,105,105,145,70,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,75,55,115,92,132,187,10,105,103,145,70,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,65,119,92,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717589974411'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai51')\n";
  return code;
}

Blockly.Blocks['1717591836788'] = {
  init: function() {
    this.jsonInit({
      "type": "1717591836788",
      "message0": "test1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717591836788'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717591836788'] = function(block) {
  let code = "base_action.action('test1')\n";
  return code;
}

Blockly.Blocks['1717592037605'] = {
  init: function() {
    this.jsonInit({
      "type": "1717592037605",
      "message0": "test1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717592037605'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717592037605'] = function(block) {
  let code = "base_action.action('test1')\n";
  return code;
}

Blockly.Blocks['1717592137528'] = {
  init: function() {
    this.jsonInit({
      "type": "1717592137528",
      "message0": "test1（2）",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717592137528'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717592137528'] = function(block) {
  let code = "base_action.action('test1（2）')\n";
  return code;
}

Blockly.Blocks['1717592443469'] = {
  init: function() {
    this.jsonInit({
      "type": "1717592443469",
      "message0": "Box_Forward6sgai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717592443469'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717592443469'] = function(block) {
  let code = "base_action.action('Box_Forward6sgai')\n";
  return code;
}

Blockly.Blocks['1717593194632'] = {
  init: function() {
    this.jsonInit({
      "type": "1717593194632",
      "message0": "Box_Forward6sgai（2）",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717593194632'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717593194632'] = function(block) {
  let code = "base_action.action('Box_Forward6sgai（2）')\n";
  return code;
}

Blockly.Blocks['1717764117843'] = {
  init: function() {
    this.jsonInit({
      "type": "1717764117843",
      "message0": "Back1Rungai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717764117843'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(15)\nMOTOmove19(80,35,100,85,91,50,128,88,120,165,100,95,117,168,62,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,35,100,88,91,48,129,88,120,165,100,94,107,146,76,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(90)\nMOTOmove19(80,35,110,86,90,95,84,90,120,165,110,94,107,146,78,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80,35,110,88,74,53,105,85,120,165,110,93,101,144,79,91,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(80,35,110,106,93,53,124,107,120,165,110,114,87,164,45,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(90)\nMOTOmove19(80,35,110,106,93,53,124,107,120,165,110,109,97,117,88,108,0,0,100)\nMOTOwait()\nMOTOsetspeed(90)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717764117843'] = function(block) {
  let code = "base_action.action('Back1Rungai')\n";
  return code;
}

Blockly.Blocks['1717765149380'] = {
  init: function() {
    this.jsonInit({
      "type": "1717765149380",
      "message0": "Box_Forward4s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717765149380'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717765149380'] = function(block) {
  let code = "base_action.action('Box_Forward4s')\n";
  return code;
}

Blockly.Blocks['1717765922380'] = {
  init: function() {
    this.jsonInit({
      "type": "1717765922380",
      "message0": "test",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717765922380'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,89,132,187,10,101,100,126,78,94,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717765922380'] = function(block) {
  let code = "base_action.action('test')\n";
  return code;
}

Blockly.Blocks['1717766117193'] = {
  init: function() {
    this.jsonInit({
      "type": "1717766117193",
      "message0": "test",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717766117193'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 89, 132, 187, 10, 101, 100, 126, 78, 94, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717766117193'] = function(block) {
  let code = "base_action.action('test')\n";
  return code;
}

Blockly.Blocks['1717766257878'] = {
  init: function() {
    this.jsonInit({
      "type": "1717766257878",
      "message0": "test2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717766257878'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,89,132,187,10,101,100,126,78,94,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,94,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717766257878'] = function(block) {
  let code = "base_action.action('test2')\n";
  return code;
}

Blockly.Blocks['1717766444883'] = {
  init: function() {
    this.jsonInit({
      "type": "1717766444883",
      "message0": "test3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717766444883'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 89, 132, 187, 10, 101, 100, 126, 78, 94, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 89, 132, 187, 10, 101, 100, 126, 78, 94, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 89, 132, 187, 10, 101, 100, 126, 78, 94, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 89, 132, 187, 10, 101, 100, 126, 78, 94, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 89, 132, 187, 10, 101, 100, 126, 78, 94, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 89, 132, 187, 10, 101, 100, 126, 78, 94, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717766444883'] = function(block) {
  let code = "base_action.action('test3')\n";
  return code;
}

Blockly.Blocks['1717767709333'] = {
  init: function() {
    this.jsonInit({
      "type": "1717767709333",
      "message0": "test6-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717767709333'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,107,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,82,60,107,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717767709333'] = function(block) {
  let code = "base_action.action('test6-1')\n";
  return code;
}

Blockly.Blocks['1717767792963'] = {
  init: function() {
    this.jsonInit({
      "type": "1717767792963",
      "message0": "test6-2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717767792963'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 107, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 82, 60, 107, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 107, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 82, 60, 107, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 107, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 82, 60, 107, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 107, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 82, 60, 107, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 107, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 82, 60, 107, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 66, 107, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 82, 60, 107, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717767792963'] = function(block) {
  let code = "base_action.action('test6-2')\n";
  return code;
}

Blockly.Blocks['1717767976669'] = {
  init: function() {
    this.jsonInit({
      "type": "1717767976669",
      "message0": "test6-4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717767976669'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717767976669'] = function(block) {
  let code = "base_action.action('test6-4')\n";
  return code;
}

Blockly.Blocks['1717768058216'] = {
  init: function() {
    this.jsonInit({
      "type": "1717768058216",
      "message0": "test6-5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717768058216'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717768058216'] = function(block) {
  let code = "base_action.action('test6-5')\n";
  return code;
}

Blockly.Blocks['1717768287338'] = {
  init: function() {
    this.jsonInit({
      "type": "1717768287338",
      "message0": "Box_Forwardgai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717768287338'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717768287338'] = function(block) {
  let code = "base_action.action('Box_Forwardgai')\n";
  return code;
}

Blockly.Blocks['1717850967652'] = {
  init: function() {
    this.jsonInit({
      "type": "1717850967652",
      "message0": "BackRungai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717850967652'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,120,40,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,88,91,48,132,88,132,187,10,94,107,146,72,91,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,86,90,95,84,90,132,187,10,94,107,146,72,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,86,66,35,121,90,132,187,10,94,107,146,72,88,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,106,93,53,124,109,132,187,10,114,102,154,55,110,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,106,93,53,129,113,132,187,10,114,95,105,100,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,120,40,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717850967652'] = function(block) {
  let code = "base_action.action('BackRungai1')\n";
  return code;
}

Blockly.Blocks['1717851655786'] = {
  init: function() {
    this.jsonInit({
      "type": "1717851655786",
      "message0": "6-8",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717851655786'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717851655786'] = function(block) {
  let code = "base_action.action('6-8')\n";
  return code;
}

Blockly.Blocks['1717852019622'] = {
  init: function() {
    this.jsonInit({
      "type": "1717852019622",
      "message0": "BoxForward8gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717852019622'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717852019622'] = function(block) {
  let code = "base_action.action('BoxForward8gai')\n";
  return code;
}

Blockly.Blocks['1717852601466'] = {
  init: function() {
    this.jsonInit({
      "type": "1717852601466",
      "message0": "BoxForward6gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717852601466'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717852601466'] = function(block) {
  let code = "base_action.action('BoxForward6gai')\n";
  return code;
}

Blockly.Blocks['1717852753426'] = {
  init: function() {
    this.jsonInit({
      "type": "1717852753426",
      "message0": "BoxForward8sgai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717852753426'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717852753426'] = function(block) {
  let code = "base_action.action('BoxForward8sgai')\n";
  return code;
}

Blockly.Blocks['1717853145188'] = {
  init: function() {
    this.jsonInit({
      "type": "1717853145188",
      "message0": "BoxForward8sgai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717853145188'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717853145188'] = function(block) {
  let code = "base_action.action('BoxForward8sgai1')\n";
  return code;
}

Blockly.Blocks['1717853154354'] = {
  init: function() {
    this.jsonInit({
      "type": "1717853154354",
      "message0": "BoxForward8sgai2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717853154354'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 99, 81, 62, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717853154354'] = function(block) {
  let code = "base_action.action('BoxForward8sgai2')\n";
  return code;
}

Blockly.Blocks['1717940475592'] = {
  init: function() {
    this.jsonInit({
      "type": "1717940475592",
      "message0": "testright",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717940475592'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,142,78,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,96,97,55,130,96,132,187,10,101,125,145,82,103,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,96,97,55,130,103,132,187,10,101,125,145,85,103,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,142,78,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717940475592'] = function(block) {
  let code = "base_action.action('testright')\n";
  return code;
}

Blockly.Blocks['1717941272276'] = {
  init: function() {
    this.jsonInit({
      "type": "1717941272276",
      "message0": "右移demo",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717941272276'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(49,18,149,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(80)\nMOTOmove19(49, 18, 149, 58, 89, 55, 126, 94, 142, 180, 58, 103, 108, 143, 72, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(80)\nMOTOmove19(49, 18, 149, 105, 90, 55, 127, 100, 142, 180, 58, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717941272276'] = function(block) {
  let code = "base_action.action('右移demo')\n";
  return code;
}

Blockly.Blocks['1717941279766'] = {
  init: function() {
    this.jsonInit({
      "type": "1717941279766",
      "message0": "左移完整1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717941279766'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(80)\nMOTOmove19(49, 18, 149, 104, 94, 55, 122, 92, 142, 180, 58, 146, 106, 143, 77, 109, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(80)\nMOTOmove19(49, 18, 149, 100, 93, 55, 124, 100, 142, 180, 58, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717941279766'] = function(block) {
  let code = "base_action.action('左移完整1')\n";
  return code;
}

Blockly.Blocks['1717942470613'] = {
  init: function() {
    this.jsonInit({
      "type": "1717942470613",
      "message0": "move_right1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717942470613'] = function(block) {
  let code = "MOTOsetspeed(80)\nMOTOmove19(97,12,97,105,95,51,127,100,104,190,102,100,106,147,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(96,46,94,58,95,55,126,94,104,177,107,103,105,145,72,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(97,12,97,105,95,51,127,100,104,190,102,100,106,147,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717942470613'] = function(block) {
  let code = "base_action.action('move_right1')\n";
  return code;
}

Blockly.Blocks['1717942518742'] = {
  init: function() {
    this.jsonInit({
      "type": "1717942518742",
      "message0": "move_right2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717942518742'] = function(block) {
  let code = "MOTOsetspeed(80)\nMOTOmove19(97,12,97,105,95,51,127,100,104,190,102,100,106,147,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(96,46,94,58,95,55,126,94,104,177,107,103,105,145,72,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(97,12,97,105,95,51,127,100,104,190,102,100,106,147,73,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717942518742'] = function(block) {
  let code = "base_action.action('move_right2')\n";
  return code;
}

Blockly.Blocks['1718110740884'] = {
  init: function() {
    this.jsonInit({
      "type": "1718110740884",
      "message0": "move_left1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718110740884'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,104,94,55,122,92,142,180,58,146,106,143,77,109,0,0,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,93,55,124,100,142,180,58,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1718110740884'] = function(block) {
  let code = "base_action.action('move_left1')\n";
  return code;
}

Blockly.Blocks['1718111598147'] = {
  init: function() {
    this.jsonInit({
      "type": "1718111598147",
      "message0": "turnL",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718111598147'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(80,30,85,96,102,55,130,96,120,170,85,101,112,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,85,96,102,55,130,103,120,170,85,101,112,145,82,107,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,102,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718111598147'] = function(block) {
  let code = "base_action.action('turnL')\n";
  return code;
}

Blockly.Blocks['1718111646547'] = {
  init: function() {
    this.jsonInit({
      "type": "1718111646547",
      "message0": "turnR",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718111646547'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(80,30,115,99,88,55,118,97,120,170,115,104,98,145,70,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,115,99,88,55,118,93,120,170,115,104,98,145,70,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,100,98,65,119,96,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718111646547'] = function(block) {
  let code = "base_action.action('turnR')\n";
  return code;
}

Blockly.Blocks['1718113265962'] = {
  init: function() {
    this.jsonInit({
      "type": "1718113265962",
      "message0": "test11",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718113265962'] = function(block) {
  let code = "MOTOsetspeed(80)\nMOTOmove19(98,14,98,100,93,55,124,100,111,181,98,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(91,11,101,104,94,55,122,92,98,152,102,146,106,143,77,109,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(98,14,98,100,93,55,124,100,111,181,98,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1718113265962'] = function(block) {
  let code = "base_action.action('test11')\n";
  return code;
}

Blockly.Blocks['1718113289585'] = {
  init: function() {
    this.jsonInit({
      "type": "1718113289585",
      "message0": "move_left2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718113289585'] = function(block) {
  let code = "MOTOsetspeed(80)\nMOTOmove19(98,14,98,100,93,55,124,100,111,181,98,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(91,11,101,104,94,55,122,92,98,152,102,146,106,143,77,109,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(98,14,98,100,93,55,124,100,111,181,98,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1718113289585'] = function(block) {
  let code = "base_action.action('move_left2')\n";
  return code;
}

Blockly.Blocks['1718113839228'] = {
  init: function() {
    this.jsonInit({
      "type": "1718113839228",
      "message0": "BoxForward6gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718113839228'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718113839228'] = function(block) {
  let code = "base_action.action('BoxForward6gai')\n";
  return code;
}

Blockly.Blocks['1718113849784'] = {
  init: function() {
    this.jsonInit({
      "type": "1718113849784",
      "message0": "BoxForward6gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718113849784'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718113849784'] = function(block) {
  let code = "base_action.action('BoxForward6gai1')\n";
  return code;
}

Blockly.Blocks['1718114059596'] = {
  init: function() {
    this.jsonInit({
      "type": "1718114059596",
      "message0": "BoxForward7gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718114059596'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718114059596'] = function(block) {
  let code = "base_action.action('BoxForward7gai')\n";
  return code;
}

Blockly.Blocks['1718114203290'] = {
  init: function() {
    this.jsonInit({
      "type": "1718114203290",
      "message0": "BoxForward8gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718114203290'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718114203290'] = function(block) {
  let code = "base_action.action('BoxForward8gai1')\n";
  return code;
}

Blockly.Blocks['1718114344370'] = {
  init: function() {
    this.jsonInit({
      "type": "1718114344370",
      "message0": "BoxForward9gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718114344370'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 开始\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,62,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718114344370'] = function(block) {
  let code = "base_action.action('BoxForward9gai')\n";
  return code;
}

Blockly.Blocks['1718281253423'] = {
  init: function() {
    this.jsonInit({
      "type": "1718281253423",
      "message0": "BoxForward6gai2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718281253423'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718281253423'] = function(block) {
  let code = "base_action.action('BoxForward6gai2')\n";
  return code;
}

Blockly.Blocks['1718460059756'] = {
  init: function() {
    this.jsonInit({
      "type": "1718460059756",
      "message0": "test615",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718460059756'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,100,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,100,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,100,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,100,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,100,105,132,187,10,101,95,107,92,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718460059756'] = function(block) {
  let code = "base_action.action('test615')\n";
  return code;
}

Blockly.Blocks['1718543079333'] = {
  init: function() {
    this.jsonInit({
      "type": "1718543079333",
      "message0": "BoxTurnR1gai5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718543079333'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,99,83,55,118,97,132,187,10,104,103,145,70,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,55,118,93,132,187,10,104,103,145,70,97,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,65,119,96,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718543079333'] = function(block) {
  let code = "base_action.action('BoxTurnR1gai5')\n";
  return code;
}

Blockly.Blocks['1718543580669'] = {
  init: function() {
    this.jsonInit({
      "type": "1718543580669",
      "message0": "Box_backrun1gai2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718543580669'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(5)\nMOTOmove19(60, 15, 190, 88, 91, 48, 132, 80, 132, 187, 10, 94, 107, 146, 72, 85, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 86, 90, 85, 95, 85, 132, 187, 10, 94, 107, 146, 72, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 86, 66, 40, 118, 90, 132, 187, 10, 94, 107, 146, 72, 90, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 106, 93, 60, 124, 110, 132, 187, 10, 114, 102, 145, 68, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 106, 93, 53, 129, 113, 132, 187, 10, 114, 105, 115, 100, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718543580669'] = function(block) {
  let code = "base_action.action('Box_backrun1gai2')\n";
  return code;
}

Blockly.Blocks['1718544521290'] = {
  init: function() {
    this.jsonInit({
      "type": "1718544521290",
      "message0": "Box_move_right2gai5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718544521290'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,90,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,90,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718544521290'] = function(block) {
  let code = "base_action.action('Box_move_right2gai5')\n";
  return code;
}

Blockly.Blocks['1718544593264'] = {
  init: function() {
    this.jsonInit({
      "type": "1718544593264",
      "message0": "Box_move_right2gai6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718544593264'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,96,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,96,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718544593264'] = function(block) {
  let code = "base_action.action('Box_move_right2gai6')\n";
  return code;
}

Blockly.Blocks['1718544840629'] = {
  init: function() {
    this.jsonInit({
      "type": "1718544840629",
      "message0": "test616",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718544840629'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,87,120,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,87,120,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718544840629'] = function(block) {
  let code = "base_action.action('test616')\n";
  return code;
}

Blockly.Blocks['1718544967952'] = {
  init: function() {
    this.jsonInit({
      "type": "1718544967952",
      "message0": "Box_move_right2gai5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718544967952'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(50)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(50)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718544967952'] = function(block) {
  let code = "base_action.action('Box_move_right2gai5')\n";
  return code;
}

Blockly.Blocks['1718544996458'] = {
  init: function() {
    this.jsonInit({
      "type": "1718544996458",
      "message0": "Box_move_right1gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718544996458'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(50)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718544996458'] = function(block) {
  let code = "base_action.action('Box_move_right1gai1')\n";
  return code;
}

Blockly.Blocks['1718545175760'] = {
  init: function() {
    this.jsonInit({
      "type": "1718545175760",
      "message0": "Box_move_right4gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718545175760'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(50)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(50)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(50)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(50)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718545175760'] = function(block) {
  let code = "base_action.action('Box_move_right4gai1')\n";
  return code;
}

Blockly.Blocks['1718545646289'] = {
  init: function() {
    this.jsonInit({
      "type": "1718545646289",
      "message0": "BoxBack2-2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718545646289'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,100,93,55,130,100,132,187,10,100,107,145,70,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,105,93,55,130,108,132,187,10,111,102,136,70,112,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,105,93,55,134,107,132,187,10,108,125,145,94,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,92,106,55,144,95,132,187,10,95,117,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,92,75,55,106,95,132,187,10,95,107,145,66,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,105,83,55,124,107,132,187,10,108,94,141,56,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,130,98,132,187,10,100,107,145,70,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718545646289'] = function(block) {
  let code = "base_action.action('BoxBack2-2')\n";
  return code;
}

Blockly.Blocks['1718545681768'] = {
  init: function() {
    this.jsonInit({
      "type": "1718545681768",
      "message0": "BoxBack2-3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718545681768'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,100,93,55,130,100,132,187,10,100,107,145,70,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,105,93,55,130,108,132,187,10,111,102,136,70,112,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,105,93,55,134,107,132,187,10,108,125,145,94,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,92,106,55,144,95,132,187,10,95,117,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,92,75,55,106,95,132,187,10,95,107,145,66,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,105,83,55,124,107,132,187,10,108,94,141,56,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,130,98,132,187,10,100,107,145,70,102,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718545681768'] = function(block) {
  let code = "base_action.action('BoxBack2-3')\n";
  return code;
}

Blockly.Blocks['1718545884078'] = {
  init: function() {
    this.jsonInit({
      "type": "1718545884078",
      "message0": "Boxback1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718545884078'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,100,93,55,130,100,132,187,10,100,107,145,70,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,105,93,55,130,108,132,187,10,111,102,136,70,112,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,105,93,55,134,107,132,187,10,108,125,145,94,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,92,106,55,144,95,132,187,10,90,117,145,76,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,130,98,132,187,10,100,107,145,70,102,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718545884078'] = function(block) {
  let code = "base_action.action('Boxback1')\n";
  return code;
}

Blockly.Blocks['1718545903928'] = {
  init: function() {
    this.jsonInit({
      "type": "1718545903928",
      "message0": "BoxBack1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718545903928'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,100,93,55,130,100,132,187,10,100,107,145,70,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,105,93,55,130,108,132,187,10,111,102,136,70,112,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,105,93,55,134,107,132,187,10,108,125,145,94,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,92,106,55,144,95,132,187,10,90,117,145,76,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,130,98,132,187,10,100,107,145,70,102,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718545903928'] = function(block) {
  let code = "base_action.action('BoxBack1')\n";
  return code;
}

Blockly.Blocks['1718546161225'] = {
  init: function() {
    this.jsonInit({
      "type": "1718546161225",
      "message0": "test6161",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718546161225'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,100,93,55,130,100,132,187,10,100,107,145,70,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,105,93,55,130,108,132,187,10,111,102,136,70,112,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,105,93,55,134,107,132,187,10,108,125,145,94,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,92,106,55,144,95,132,187,10,90,117,145,76,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(60,15,190,92,106,55,144,95,132,187,10,90,117,145,76,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,130,98,132,187,10,100,107,145,70,102,0,0,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1718546161225'] = function(block) {
  let code = "base_action.action('test6161')\n";
  return code;
}

Blockly.Blocks['Take_a_slow_step_backward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_slow_step_backward',
      message0: '%{BKY_TAKE_A_SLOW_STEP_BACKWARD}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_slow_step_backward'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 90)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 90, 95, 84, 90, 120, 165, 90, 94, 107, 146, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 88, 71, 53, 105, 85, 120, 165, 110, 93, 100, 144, 79, 91)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 106, 93, 53, 124, 111, 120, 165, 110, 114, 87, 163, 42, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 106, 95, 53, 122, 113, 120, 165, 90, 114, 110, 105, 114, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 121, 109, 120, 165, 90, 112, 129, 147, 95, 115)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 158, 90, 120, 165, 90, 94, 107, 147, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 110, 95, 100, 90, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 90)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_slow_step_backward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_SLOW_STEP_BACKWARD'] + "')\n";
  return code;
}

Blockly.Blocks['Take_a_quick_step_backward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_quick_step_backward',
      message0: '%{BKY_TAKE_A_QUICK_STEP_BACKWARD}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_quick_step_backward'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,55,65,90,80,50,25,25,25,55,65,90,80,50)',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 55, 124, 89, 120, 170, 100, 98, 107, 145, 78, 93)',
    'MOTOwait()',
    'MOTOsetspeed(58)',
    'MOTOmove16(80, 30, 120, 99, 113, 100, 99, 100, 120, 170, 120, 101, 100, 141, 77, 99)',
    'MOTOwait()',
    'MOTOsetspeed(68)',
    'MOTOmove16(80, 30, 120, 99, 95, 70, 109, 100, 120, 170, 120, 101, 100, 141, 77, 99)',
    'MOTOwait()',
    'MOTOsetspeed(78)',
    'MOTOmove16(80, 30, 120, 99, 90, 60, 117, 105, 120, 170, 120, 101, 95, 118, 91, 99)',
    'MOTOwait()',
    'MOTOsetspeed(78)',
    'MOTOmove16(80, 30, 80, 99, 100, 59, 123, 101, 120, 170, 80, 101, 87, 100, 101, 100)',
    'MOTOwait()',
    'MOTOsetspeed(78)',
    'MOTOmove16(80, 30, 80, 99, 100, 59, 123, 101, 120, 170, 80, 101, 105, 130, 91, 100)',
    'MOTOwait()',
    'MOTOsetspeed(78)',
    'MOTOmove16(80, 30, 80, 99, 105, 82, 109, 101, 120, 170, 80, 101, 110, 140, 83, 95)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 120, 97, 113, 100, 99, 100, 120, 170, 120, 101, 103, 145, 78, 96)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 97, 120, 170, 100, 100, 107, 145, 76, 103)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_quick_step_backward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_QUICK_STEP_BACKWARD'] + "')\n";
  return code;
}

Blockly.Blocks['1718546593967'] = {
  init: function() {
    this.jsonInit({
      "type": "1718546593967",
      "message0": "BoxBack1-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718546593967'] = function(block) {
  let code = "MOTOsetspeed(45)\nMOTOmove19(60,15,190,100,93,55,130,100,132,187,10,100,107,145,70,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,105,93,55,130,108,132,187,10,111,102,136,70,112,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,105,93,55,134,107,132,187,10,108,125,145,94,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,92,106,55,144,90,132,187,10,90,117,145,76,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,130,98,132,187,10,100,107,145,70,102,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718546593967'] = function(block) {
  let code = "base_action.action('BoxBack1-1')\n";
  return code;
}

Blockly.Blocks['1718628863999'] = {
  init: function() {
    this.jsonInit({
      "type": "1718628863999",
      "message0": "turnL",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718628863999'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(80,30,85,96,102,55,130,96,120,170,85,101,112,145,72,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,85,96,102,55,130,103,120,170,85,101,112,145,82,107,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,102,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718628863999'] = function(block) {
  let code = "base_action.action('turnL')\n";
  return code;
}

Blockly.Blocks['1718628898085'] = {
  init: function() {
    this.jsonInit({
      "type": "1718628898085",
      "message0": "turnL-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718628898085'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(80,30,85,96,102,55,130,96,120,170,85,101,112,145,72,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,85,96,102,55,130,103,120,170,85,101,112,145,82,107,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,102,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718628898085'] = function(block) {
  let code = "base_action.action('turnL-1')\n";
  return code;
}

Blockly.Blocks['1718630644126'] = {
  init: function() {
    this.jsonInit({
      "type": "1718630644126",
      "message0": "turnR-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718630644126'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(80,30,115,99,88,55,125,97,120,170,115,104,98,145,70,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,115,99,88,55,118,93,120,170,115,104,98,145,70,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,100,98,65,119,96,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718630644126'] = function(block) {
  let code = "base_action.action('turnR-1')\n";
  return code;
}

Blockly.Blocks['1718630838113'] = {
  init: function() {
    this.jsonInit({
      "type": "1718630838113",
      "message0": "BoxturnL",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718630838113'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,142,78,100,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,55,130,96,132,187,10,101,125,145,77,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,96,97,55,130,103,132,187,10,101,125,145,85,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,142,78,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718630838113'] = function(block) {
  let code = "base_action.action('BoxturnL')\n";
  return code;
}

Blockly.Blocks['1718632015973'] = {
  init: function() {
    this.jsonInit({
      "type": "1718632015973",
      "message0": "BoxturnR",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718632015973'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,83,57,125,97,132,187,10,104,103,145,70,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,55,118,93,132,187,10,101,103,145,70,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,65,119,96,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718632015973'] = function(block) {
  let code = "base_action.action('BoxturnR')\n";
  return code;
}

Blockly.Blocks['1718634285538'] = {
  init: function() {
    this.jsonInit({
      "type": "1718634285538",
      "message0": "box4-5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718634285538'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,120,90,110,94,132,187,10,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,128,71,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,120,90,110,90,132,187,10,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,120,90,110,90,132,187,10,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,120,90,110,90,132,187,10,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,100,132,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718634285538'] = function(block) {
  let code = "base_action.action('box4-5')\n";
  return code;
}

Blockly.Blocks['1718635072416'] = {
  init: function() {
    this.jsonInit({
      "type": "1718635072416",
      "message0": "turnR-2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718635072416'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(80,30,115,99,88,55,128,97,120,170,115,104,98,145,70,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,115,99,88,55,118,93,120,170,115,99,98,145,70,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,100,98,65,119,96,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718635072416'] = function(block) {
  let code = "base_action.action('turnR-2')\n";
  return code;
}

Blockly.Blocks['1718712883139'] = {
  init: function() {
    this.jsonInit({
      "type": "1718712883139",
      "message0": "Box_Forward6s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718712883139'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 93, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 123, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 78, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718712883139'] = function(block) {
  let code = "base_action.action('Box_Forward6s')\n";
  return code;
}

Blockly.Blocks['1718716430030'] = {
  init: function() {
    this.jsonInit({
      "type": "1718716430030",
      "message0": "BoxForward0-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718716430030'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718716430030'] = function(block) {
  let code = "base_action.action('BoxForward0-1')\n";
  return code;
}

Blockly.Blocks['1718716629579'] = {
  init: function() {
    this.jsonInit({
      "type": "1718716629579",
      "message0": "BoxForward1-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718716629579'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,78,98,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,95,132,187,10,102,119,146,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,85,55,124,100,132,187,10,100,115,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718716629579'] = function(block) {
  let code = "base_action.action('BoxForward1-1')\n";
  return code;
}

Blockly.Blocks['1718717148483'] = {
  init: function() {
    this.jsonInit({
      "type": "1718717148483",
      "message0": "Box4-5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718717148483'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,117,90,110,94,132,187,10,110,107,141,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,128,71,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,117,90,110,94,132,187,10,110,107,141,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,117,90,110,94,132,187,10,110,107,141,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,117,90,110,94,132,187,10,110,107,141,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,117,90,110,94,132,187,10,110,107,141,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,117,90,110,94,132,187,10,110,107,141,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,132,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\n";
  return code;
}

Blockly.Python['1718717148483'] = function(block) {
  let code = "base_action.action('Box4-5')\n";
  return code;
}

Blockly.Blocks['1718800875295'] = {
  init: function() {
    this.jsonInit({
      "type": "1718800875295",
      "message0": "Back1Rungai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718800875295'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(80, 35, 100, 85, 91, 50, 128, 88, 120, 165, 100, 95, 117, 168, 62, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 35, 100, 88, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(90)\nMOTOmove19(80, 35, 110, 86, 90, 95, 84, 90, 120, 165, 110, 94, 107, 146, 78, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 35, 110, 88, 74, 53, 105, 85, 120, 165, 110, 93, 101, 144, 79, 91, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 106, 93, 53, 124, 107, 120, 165, 110, 114, 87, 164, 45, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(90)\nMOTOmove19(80, 35, 110, 106, 93, 53, 124, 107, 120, 165, 110, 109, 97, 117, 88, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(90)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718800875295'] = function(block) {
  let code = "base_action.action('Back1Rungai')\n";
  return code;
}

Blockly.Blocks['1718801394143'] = {
  init: function() {
    this.jsonInit({
      "type": "1718801394143",
      "message0": "左移完整1（3）",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718801394143'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(80)\nMOTOmove19(49, 18, 149, 104, 94, 55, 122, 92, 142, 180, 58, 146, 106, 143, 77, 109, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(80)\nMOTOmove19(49, 18, 149, 100, 93, 55, 124, 100, 142, 180, 58, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1718801394143'] = function(block) {
  let code = "base_action.action('左移完整1（3）')\n";
  return code;
}

Blockly.Blocks['1718801554860'] = {
  init: function() {
    this.jsonInit({
      "type": "1718801554860",
      "message0": "BoxLeft1-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718801554860'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(45,24,190,104,94,55,122,92,150,183,17,146,106,143,77,109,0,0,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,93,55,124,100,142,180,58,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1718801554860'] = function(block) {
  let code = "base_action.action('BoxLeft1-1')\n";
  return code;
}

Blockly.Blocks['1718803579991'] = {
  init: function() {
    this.jsonInit({
      "type": "1718803579991",
      "message0": "BoxLeft4s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718803579991'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(45,24,190,104,94,55,122,92,150,183,17,146,106,143,77,109,0,0,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(55,19,190,100,93,55,124,100,141,186,17,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(45,24,190,104,94,55,122,92,150,183,17,146,106,143,77,109,0,0,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(55,19,190,100,93,55,124,100,141,186,17,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(45,24,190,104,94,55,122,92,150,183,17,146,106,143,77,109,0,0,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(55,19,190,100,93,55,124,100,141,186,17,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(45,24,190,104,94,55,122,92,150,183,17,146,106,143,77,109,0,0,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(55,19,190,100,93,55,124,100,141,186,17,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(45,24,190,104,94,55,122,92,150,183,17,146,106,143,77,109,0,0,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(55,19,190,100,93,55,124,100,141,186,17,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(45,24,190,104,94,55,122,92,150,183,17,146,106,143,77,109,0,0,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(55,19,190,100,93,55,124,100,141,186,17,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1718803579991'] = function(block) {
  let code = "base_action.action('BoxLeft4s')\n";
  return code;
}

