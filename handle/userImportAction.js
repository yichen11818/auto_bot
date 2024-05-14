Blockly.Blocks['1676273100751'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273100751",
      "message0": "抱起方块1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273100751'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 149, 100, 113, 90, 109, 100, 120, 170, 50, 100, 87, 111, 91, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 136, 150, 62, 100, 120, 170, 50, 100, 72, 50, 138, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 149, 150, 67, 100, 120, 170, 50, 100, 52, 50, 133, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 149, 150, 67, 100, 140, 190, 50, 100, 52, 50, 133, 100, 128, 78, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 100, 104, 132, 70, 100, 140, 190, 50, 100, 93, 69, 130, 100, 128, 78, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 90, 55, 127, 100, 140, 190, 50, 100, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273100751'] = function(block) {
  let code = "base_action.action('抱起方块1')\n";
  return code;
}

Blockly.Blocks['1676273110376'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273110376",
      "message0": "抱箱后退1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273110376'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 90, 91, 48, 138, 88, 140, 190, 50, 94, 107, 146, 67, 92, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 90, 95, 94, 90, 140, 190, 50, 94, 107, 146, 67, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 88, 71, 53, 114, 85, 140, 190, 50, 93, 100, 144, 70, 91, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 106, 93, 53, 134, 111, 140, 190, 50, 114, 87, 163, 33, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 95, 53, 133, 113, 140, 190, 50, 114, 110, 105, 105, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 107, 100, 56, 130, 109, 140, 190, 50, 112, 129, 147, 86, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 107, 100, 56, 130, 109, 140, 190, 50, 112, 129, 147, 86, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 86, 113, 37, 167, 90, 140, 190, 50, 94, 107, 147, 67, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 90, 95, 95, 90, 140, 190, 50, 94, 105, 147, 69, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 93, 55, 133, 100, 140, 190, 50, 100, 107, 145, 67, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273110376'] = function(block) {
  let code = "base_action.action('抱箱后退1')\n";
  return code;
}

Blockly.Blocks['1676273115472'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273115472",
      "message0": "抱箱前进1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273115472'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 90, 91, 48, 134, 88, 140, 190, 50, 94, 109, 146, 71, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 123, 95, 115, 90, 140, 190, 50, 94, 109, 146, 71, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 121, 37, 161, 88, 140, 190, 50, 94, 109, 146, 72, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 107, 98, 56, 129, 111, 140, 190, 50, 112, 131, 155, 88, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 93, 54, 128, 113, 140, 190, 50, 114, 77, 105, 85, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 91, 54, 128, 111, 140, 190, 50, 114, 89, 163, 39, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 88, 69, 45, 112, 90, 140, 190, 50, 93, 102, 144, 71, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 123, 95, 115, 90, 140, 190, 50, 94, 107, 146, 72, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273115472'] = function(block) {
  let code = "base_action.action('抱箱前进1')\n";
  return code;
}

Blockly.Blocks['1676273121186'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273121186",
      "message0": "抱箱右移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273121186'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 90, 93, 54, 130, 100, 140, 190, 50, 115, 88, 110, 85, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65, 10, 149, 80, 84, 40, 138, 70, 140, 190, 50, 105, 107, 147, 69, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 97, 93, 54, 130, 95, 140, 190, 50, 100, 107, 146, 66, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 130, 95, 140, 190, 50, 100, 107, 145, 66, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 130, 100, 140, 190, 50, 100, 107, 145, 66, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273121186'] = function(block) {
  let code = "base_action.action('抱箱右移1')\n";
  return code;
}

Blockly.Blocks['1676273129812'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273129812",
      "message0": "抱箱右转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273129812'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 95, 110, 55, 149, 95, 140, 190, 50, 105, 130, 145, 91, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 95, 118, 55, 149, 92, 140, 190, 50, 105, 121, 145, 91, 108, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 100, 90, 55, 129, 100, 140, 190, 50, 100, 110, 145, 71, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 90, 55, 129, 100, 140, 190, 50, 100, 110, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273129812'] = function(block) {
  let code = "base_action.action('抱箱右转1')\n";
  return code;
}

Blockly.Blocks['1676273135796'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273135796",
      "message0": "抱箱左移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273135796'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 85, 112, 90, 115, 90, 140, 190, 50, 110, 107, 146, 70, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65, 10, 149, 95, 93, 53, 131, 105, 140, 190, 50, 120, 116, 160, 68, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 100, 93, 54, 134, 98, 140, 190, 50, 103, 107, 146, 76, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 134, 95, 140, 190, 50, 100, 107, 145, 76, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 134, 100, 140, 190, 50, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273135796'] = function(block) {
  let code = "base_action.action('抱箱左移1')\n";
  return code;
}

Blockly.Blocks['1676273139445'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273139445",
      "message0": "抱箱左转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273139445'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 95, 71, 55, 109, 95, 140, 190, 50, 105, 89, 145, 51, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 95, 80, 55, 109, 92, 140, 190, 50, 105, 81, 145, 51, 108, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273139445'] = function(block) {
  let code = "base_action.action('抱箱左转1')\n";
  return code;
}

Blockly.Blocks['1676273147745'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273147745",
      "message0": "抱10cm方块后退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273147745'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 100, 100, 15, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75,0,0,0)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 105, 93, 55, 124, 108, 100, 15, 100, 111, 102, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 100, 105, 93, 55, 124, 107, 100, 15, 100, 108, 125, 145, 94, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 100, 92, 116, 55, 144, 85, 100, 15, 100, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 100, 92, 75, 55, 106, 95, 100, 15, 100, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 100, 105, 93, 55, 124, 107, 100, 15, 100, 108, 84, 141, 56, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 100, 105, 92, 55, 124, 107, 100, 15, 100, 111, 107, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 98, 100, 15, 100, 100, 107, 145, 76, 102, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273147745'] = function(block) {
  let code = "base_action.action('抱10cm方块后退')\n";
  return code;
}

Blockly.Blocks['1676273151408'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273151408",
      "message0": "抱10cm方块前进",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273151408'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 100, 94, 55, 124, 100, 100, 15, 99, 100, 106, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(40,40,40,85,60,60,60,75,40,40,40,85,60,60,60,75,0,0,0)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 105, 93, 55, 124, 105, 100, 15, 99, 111, 102, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 105, 93, 55, 124, 107, 100, 15, 99, 105, 84, 141, 62, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 101, 95, 80, 55, 111, 90, 100, 15, 99, 95, 101, 145, 73, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 95, 116, 59, 138, 90, 100, 15, 99, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 101, 105, 99, 55, 127, 107, 100, 15, 99, 105, 120, 145, 89, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 105, 94, 54, 123, 107, 100, 15, 99, 105, 102, 136, 78, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 100, 94, 55, 123, 98, 100, 15, 99, 100, 106, 145, 77, 102, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273151408'] = function(block) {
  let code = "base_action.action('抱10cm方块前进')\n";
  return code;
}

Blockly.Blocks['1676273155676'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273155676",
      "message0": "抱10cm方块右移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273155676'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 105, 93, 55, 124, 108, 100, 15, 99, 111, 102, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 94, 93, 54, 124, 100, 100, 15, 100, 106, 107, 146, 76, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(100, 185, 100, 91, 93, 54, 124, 88, 100, 15, 100, 102, 107, 146, 77, 98, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 97, 95, 61, 119, 91, 100, 15, 100, 102, 107, 146, 77, 98, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 97, 95, 61, 119, 91, 100, 15, 100, 102, 107, 146, 77, 98, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 100, 100, 15, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273155676'] = function(block) {
  let code = "base_action.action('抱10cm方块右移')\n";
  return code;
}

Blockly.Blocks['1676273159353'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273159353",
      "message0": "抱10cm方块左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273159353'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 89, 98, 64, 122, 90, 100, 15, 99, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 95, 93, 54, 124, 90, 100, 15, 99, 105, 107, 146, 76, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(100, 185, 101, 98, 93, 54, 123, 102, 100, 15, 99, 109, 107, 146, 76, 112, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 98, 93, 54, 123, 102, 100, 15, 99, 103, 105, 139, 81, 109, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 98, 93, 54, 123, 102, 100, 15, 99, 103, 105, 139, 81, 109, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 100, 93, 55, 124, 100, 100, 15, 99, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273159353'] = function(block) {
  let code = "base_action.action('抱10cm方块左移')\n";
  return code;
}

Blockly.Blocks['1676273176627'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273176627",
      "message0": "抱起10cm方块",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273176627'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 94, 55, 123, 100, 120, 170, 100, 100, 106, 145, 77, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,30,60,60,60,30,100,100,100,30,60,60,60,30,0,0,0)\n\n\n-- 3\nMOTOsetspeed(20)\nMOTOmove19(110, 155, 100, 100, 142, 145, 77, 100, 90, 45, 100, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 165, 10, 100, 142, 145, 77, 100, 100, 35, 190, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 165, 10, 100, 142, 145, 55, 100, 100, 35, 190, 100, 58, 55, 145, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 165, 10, 100, 142, 25, 125, 100, 100, 35, 190, 100, 58, 175, 75, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 10, 100, 142, 25, 125, 100, 100, 15, 190, 100, 58, 175, 75, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 10, 55, 158, 140, 55, 60, 100, 15, 190, 145, 42, 60, 145, 140, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(100, 185, 10, 50, 138, 150, 55, 60, 100, 15, 190, 150, 62, 50, 145, 140, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(55)\nMOTOmove19(100, 185, 10, 70, 128, 145, 75, 70, 100, 15, 190, 130, 72, 55, 125, 130, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(100, 185, 100, 98, 142, 145, 77, 98, 100, 15, 100, 102, 58, 55, 123, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 98, 122, 40, 152, 98, 100, 15, 100, 102, 78, 160, 48, 102, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 100, 100, 15, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273176627'] = function(block) {
  let code = "base_action.action('抱起10cm方块')\n";
  return code;
}

Blockly.Blocks['1676273185034'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273185034",
      "message0": "放下10cm方块",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273185034'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 98, 93, 55, 124, 98, 100, 15, 100, 102, 107, 145, 76, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 100, 102, 142, 145, 77, 98, 100, 15, 100, 98, 58, 55, 123, 102, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(100, 185, 10, 70, 128, 145, 75, 70, 100, 15, 190, 130, 72, 55, 125, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(90, 185, 10, 55, 158, 140, 55, 60, 110, 15, 190, 145, 42, 60, 145, 140, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(110, 155, 10, 65, 138, 150, 55, 70, 90, 45, 190, 135, 62, 50, 145, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(110, 155, 10, 70, 128, 145, 75, 70, 90, 45, 190, 130, 72, 55, 125, 130, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 165, 100, 98, 142, 145, 77, 98, 120, 35, 100, 102, 58, 55, 123, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 98, 122, 40, 152, 98, 100, 15, 100, 102, 78, 160, 48, 102, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273185034'] = function(block) {
  let code = "base_action.action('放下10cm方块')\n";
  return code;
}

Blockly.Blocks['1676273195308'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273195308",
      "message0": "放下方块1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273195308'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 93, 55, 127, 100, 140, 190, 50, 100, 107, 145, 73, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 111, 150, 54, 102, 140, 190, 50, 100, 88, 51, 142, 101, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 101, 150, 42, 102, 140, 190, 50, 100, 99, 51, 158, 101, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 101, 107, 149, 43, 100, 140, 190, 50, 101, 92, 51, 157, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 101, 107, 149, 43, 100, 120, 165, 66, 101, 92, 51, 157, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 100, 111, 150, 54, 102, 120, 165, 66, 100, 88, 51, 142, 101, 128, 71, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273195308'] = function(block) {
  let code = "base_action.action('放下方块1')\n";
  return code;
}

Blockly.Blocks['1676273199273'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273199273",
      "message0": "上台阶",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273199273'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94, 79, 100, 85, 106, 79, 113, 80, 106, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 105, 100, 85, 132, 127, 85, 89, 103, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 150, 100, 85, 160, 50, 180, 95, 100, 100, 100, 95, 85, 100, 99, 90, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 150, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 135, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 145, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 160, 78, 135, 112, 100, 190, 20, 110, 130, 190, 40, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 112, 100, 190, 20, 115, 155, 180, 105, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60,0,0,0)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 100, 100, 106, 93, 55, 124, 112, 103, 95, 100, 115, 68, 73, 115, 111, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 100, 100, 105, 115, 100, 101, 110, 100, 50, 100, 115, 40, 150, 20, 105, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 65, 50, 101, 100, 100, 50, 100, 100, 40, 122, 45, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 55, 50, 101, 100, 100, 100, 100, 100, 40, 122, 45, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 90, 70, 10, 160, 90, 100, 190, 20, 95, 40, 122, 65, 88, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 85, 45, 20, 95, 100, 100, 190, 20, 95, 85, 135, 75, 88, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 85, 130, 90, 105, 100, 100, 190, 20, 95, 95, 135, 75, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 180, 85, 110, 90, 105, 100, 100, 100, 20, 95, 102, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 105, 100, 85, 132, 127, 85, 89, 103, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 150, 100, 85, 160, 50, 180, 95, 100, 100, 100, 95, 85, 100, 99, 90, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 150, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 135, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 145, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 160, 78, 135, 112, 100, 190, 20, 110, 130, 190, 40, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 112, 100, 190, 20, 115, 155, 180, 105, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 180, 102, 79, 32, 137, 108, 100, 100, 20, 108, 121, 165, 70, 108, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 108, 70, 10, 148, 108, 100, 70, 100, 111, 101, 142, 72, 110, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50,0,0,0)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 105, 79, 32, 137, 108, 100, 70, 100, 107, 107, 160, 60, 112, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 100, 79, 35, 130, 100, 100, 70, 100, 102, 107, 160, 65, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 98, 79, 35, 130, 95, 100, 70, 100, 98, 107, 160, 65, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 92, 79, 35, 130, 92, 100, 70, 100, 98, 121, 168, 63, 92, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 95, 55, 123, 100, 120, 170, 100, 100, 105, 145, 77, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273199273'] = function(block) {
  let code = "base_action.action('上台阶')\n";
  return code;
}

Blockly.Blocks['1676447440168'] = {
  init: function() {
    this.jsonInit({
      "type": "1676447440168",
      "message0": "前倒地",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676447440168'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 起\nMOTOsetspeed(40)\nMOTOmove19(80, 90, 101, 101, 93, 57, 124, 101, 131, 100, 98, 102, 107, 143, 77, 99, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(37, 92, 182, 85, 64, 41, 98, 99, 153, 107, 19, 130, 142, 160, 92, 103, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 63, 160, 136, 46, 86, 150, 147, 19, 137, 44, 67, 152, 117, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85, 12, 172, 62, 160, 146, 47, 75, 119, 189, 31, 139, 43, 54, 154, 123, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 66, 149, 146, 55, 63, 150, 147, 19, 158, 48, 60, 146, 140, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 70, 126, 145, 53, 68, 150, 147, 19, 138, 74, 60, 147, 135, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54, 47, 190, 79, 113, 140, 50, 78, 150, 147, 19, 126, 72, 60, 135, 125, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 100, 125, 140, 62, 100, 120, 170, 87, 100, 75, 60, 138, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 104, 127, 133, 71, 100, 120, 170, 87, 103, 70, 67, 128, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 102, 128, 104, 97, 100, 120, 170, 87, 102, 74, 91, 104, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80, 37, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676447440168'] = function(block) {
  let code = "base_action.action('前倒地')\n";
  return code;
}

Blockly.Blocks['1676447448574'] = {
  init: function() {
    this.jsonInit({
      "type": "1676447448574",
      "message0": "后倒地",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676447448574'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35, 130, 20, 101, 131, 126, 170, 100, 165, 70, 180, 99, 69, 74, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21, 105, 21, 101, 131, 126, 170, 100, 179, 95, 180, 99, 69, 74, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 16, 46, 100, 80, 150, 60, 100, 108, 184, 154, 100, 120, 50, 140, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 18, 58, 100, 73, 150, 40, 100, 108, 182, 142, 100, 127, 50, 160, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 25, 135, 100, 124, 150, 50, 100, 108, 175, 65, 100, 76, 50, 150, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676447448574'] = function(block) {
  let code = "base_action.action('后倒地')\n";
  return code;
}

Blockly.Blocks['1677548683339'] = {
  init: function() {
    this.jsonInit({
      "type": "1677548683339",
      "message0": "下台阶",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1677548683339'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 93, 93, 55, 123, 86, 105, 95, 100, 93, 106, 143, 75, 89, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 85, 125, 100, 117, 91, 105, 95, 100, 95, 106, 143, 75, 88, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 90, 145, 60, 117, 91, 105, 95, 100, 95, 106, 143, 75, 88, 128, 71, 99)\nMOTOwait()\nMOTOrigid16(25,25,25,50,50,50,50,50,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(86, 105, 100, 85, 103, 27, 165, 90, 105, 95, 100, 94, 134, 100, 124, 85, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(86, 105, 100, 85, 102, 10, 190, 90, 105, 95, 100, 94, 118, 80, 153, 85, 128, 71, 99)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(100, 167, 100, 105, 120, 10, 181, 110, 100, 100, 100, 120, 105, 91, 145, 125, 128, 71, 99)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(15)\nMOTOmove19(100, 167, 100, 105, 120, 10, 175, 113, 100, 100, 100, 120, 100, 96, 145, 120, 128, 71, 99)\nMOTOwait()\nDelayMs(150)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,50,50,50,50,50,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 75, 10, 145, 113, 100, 60, 100, 120, 160, 175, 105, 129, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 75, 10, 145, 113, 100, 60, 100, 130, 150, 190, 105, 129, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 68, 10, 148, 112, 100, 60, 100, 135, 110, 91, 145, 129, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 52, 10, 139, 112, 100, 60, 100, 125, 89, 69, 145, 116, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 52, 10, 139, 112, 100, 60, 100, 113, 107, 145, 76, 110, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 30, 100, 107, 91, 48, 129, 107, 120, 150, 100, 113, 107, 145, 76, 110, 128, 71, 99)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOsetspeed(18)\nMOTOmove19(80, 30, 100, 107, 91, 48, 129, 107, 120, 150, 100, 113, 107, 145, 76, 110, 128, 71, 99)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1677548683339'] = function(block) {
  let code = "base_action.action('下台阶')\n";
  return code;
}

Blockly.Blocks['1677554203595'] = {
  init: function() {
    this.jsonInit({
      "type": "1677554203595",
      "message0": "翻墙稳定1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1677554203595'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(90, 105, 190, 100, 128, 10, 170, 100, 110, 95, 10, 100, 72, 190, 30, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(90, 10, 190, 100, 108, 10, 170, 100, 110, 190, 10, 100, 92, 190, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 118, 10, 170, 100, 110, 190, 10, 100, 82, 190, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 169, 100, 110, 190, 10, 100, 72, 190, 31, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 168, 100, 110, 190, 10, 100, 72, 190, 32, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 164, 100, 110, 190, 10, 100, 72, 190, 36, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 130, 10, 164, 100, 110, 190, 10, 100, 70, 190, 36, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 130, 10, 161, 100, 110, 190, 10, 100, 70, 190, 39, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 130, 10, 159, 100, 110, 190, 10, 100, 70, 190, 41, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 132, 10, 159, 100, 110, 190, 10, 100, 68, 190, 41, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 132, 10, 157, 100, 110, 190, 10, 100, 68, 190, 43, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 132, 10, 154, 100, 110, 190, 10, 100, 68, 190, 46, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(87, 14, 190, 100, 132, 10, 154, 100, 113, 186, 10, 100, 68, 190, 46, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOrigid16(90,90,100,30,60,60,60,30,90,90,100,30,60,60,60,30,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(50, 50, 190, 100, 132, 10, 154, 100, 150, 150, 10, 100, 68, 190, 46, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(50, 50, 165, 100, 10, 95, 108, 100, 150, 150, 35, 100, 65, 190, 40, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(50, 50, 165, 100, 10, 95, 108, 100, 150, 150, 35, 100, 165, 190, 40, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 修改\nMOTOsetspeed(135)\nMOTOmove19(43, 40, 190, 100, 10, 95, 108, 100, 166, 160, 10, 100, 190, 175, 10, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 8\nMOTOsetspeed(99)\nMOTOmove19(50, 50, 190, 100, 90, 95, 170, 100, 150, 150, 10, 100, 110, 105, 30, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 9\nMOTOsetspeed(40)\nMOTOmove19(89, 182, 110, 100, 10, 95, 93, 100, 111, 18, 90, 100, 190, 105, 107, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 10\nMOTOsetspeed(40)\nMOTOmove19(90, 160, 190, 100, 10, 95, 63, 100, 110, 40, 10, 100, 190, 105, 137, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70,0,0,0)\n\n\n-- 12\nMOTOsetspeed(24)\nMOTOmove19(90, 50, 190, 100, 142, 145, 77, 100, 110, 150, 10, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 13\nMOTOsetspeed(24)\nMOTOmove19(90, 50, 190, 100, 142, 145, 77, 100, 110, 150, 10, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1677554203595'] = function(block) {
  let code = "base_action.action('翻墙稳定1')\n";
  return code;
}

Blockly.Blocks['1714055540534'] = {
  init: function() {
    this.jsonInit({
      "type": "1714055540534",
      "message0": "快步走改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714055540534'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(79, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 91, 94, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 91, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 91, 66, 109, 102, 120, 170, 120, 101, 85, 101, 97, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 110, 100, 120, 170, 120, 101, 90, 126, 79, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 94, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 120, 96, 95, 70, 110, 100, 120, 170, 120, 102, 109, 146, 75, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714055540534'] = function(block) {
  let code = "robot.leju_action('快步走改')\n";
  return code;
}

