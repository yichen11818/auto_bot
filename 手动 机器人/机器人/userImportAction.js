Blockly.Blocks['1623313321912'] = {
  init: function() {
    this.jsonInit({
      "type": "1623313321912",
      "message0": "抱箱前进",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623313321912'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(6)\nMOTOmove19(65, 10, 149, 90, 91, 48, 134, 88, 140, 190, 50, 94, 109, 146, 71, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 123, 95, 115, 90, 140, 190, 50, 94, 109, 146, 71, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 121, 37, 161, 88, 140, 190, 50, 94, 109, 146, 72, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 107, 98, 56, 129, 111, 140, 190, 50, 112, 131, 155, 88, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 93, 54, 128, 113, 140, 190, 50, 114, 77, 105, 85, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 91, 54, 128, 111, 140, 190, 50, 114, 89, 163, 39, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 88, 69, 45, 112, 90, 140, 190, 50, 93, 102, 144, 71, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 123, 95, 115, 90, 140, 190, 50, 94, 107, 146, 72, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623313331243'] = {
  init: function() {
    this.jsonInit({
      "type": "1623313331243",
      "message0": "抱箱后退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623313331243'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(5)\nMOTOmove19(65, 10, 149, 90, 91, 48, 138, 88, 140, 190, 50, 94, 107, 146, 67, 92, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 90, 95, 94, 90, 140, 190, 50, 94, 107, 146, 67, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 88, 71, 53, 114, 85, 140, 190, 50, 93, 100, 144, 70, 91, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 106, 93, 53, 134, 111, 140, 190, 50, 114, 87, 163, 33, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 95, 53, 133, 113, 140, 190, 50, 114, 110, 105, 105, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 107, 100, 56, 130, 109, 140, 190, 50, 112, 129, 147, 86, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 107, 100, 56, 130, 109, 140, 190, 50, 112, 129, 147, 86, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 86, 113, 37, 167, 90, 140, 190, 50, 94, 107, 147, 67, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 90, 95, 95, 90, 140, 190, 50, 94, 105, 147, 69, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 93, 55, 133, 100, 140, 190, 50, 100, 107, 145, 67, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623313340115'] = {
  init: function() {
    this.jsonInit({
      "type": "1623313340115",
      "message0": "抱箱右移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623313340115'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 90, 93, 54, 130, 100, 140, 190, 50, 115, 88, 110, 85, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65, 10, 149, 80, 84, 40, 138, 70, 140, 190, 50, 105, 107, 147, 69, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 97, 93, 54, 130, 95, 140, 190, 50, 100, 107, 146, 66, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 130, 95, 140, 190, 50, 100, 107, 145, 66, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 130, 100, 140, 190, 50, 100, 107, 145, 66, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623313348137'] = {
  init: function() {
    this.jsonInit({
      "type": "1623313348137",
      "message0": "抱箱右转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623313348137'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 95, 110, 55, 149, 95, 140, 190, 50, 105, 130, 145, 91, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 95, 118, 55, 149, 92, 140, 190, 50, 105, 121, 145, 91, 108, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 100, 90, 55, 129, 100, 140, 190, 50, 100, 110, 145, 71, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 90, 55, 129, 100, 140, 190, 50, 100, 110, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623313492450'] = {
  init: function() {
    this.jsonInit({
      "type": "1623313492450",
      "message0": "抱箱左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623313492450'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 85, 112, 90, 115, 90, 140, 190, 50, 110, 107, 146, 70, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65, 10, 149, 95, 93, 53, 131, 105, 140, 190, 50, 120, 116, 160, 68, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 100, 93, 54, 134, 98, 140, 190, 50, 103, 107, 146, 76, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 134, 95, 140, 190, 50, 100, 107, 145, 76, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 134, 100, 140, 190, 50, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623313497407'] = {
  init: function() {
    this.jsonInit({
      "type": "1623313497407",
      "message0": "抱箱左转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623313497407'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 95, 71, 55, 109, 95, 140, 190, 50, 105, 89, 145, 51, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 95, 80, 55, 109, 92, 140, 190, 50, 105, 81, 145, 51, 108, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623313503852'] = {
  init: function() {
    this.jsonInit({
      "type": "1623313503852",
      "message0": "抱起方块",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623313503852'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 149, 100, 113, 90, 109, 100, 120, 170, 50, 100, 87, 111, 91, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 136, 150, 62, 100, 120, 170, 50, 100, 72, 50, 138, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(80, 30, 149, 100, 149, 150, 67, 100, 120, 170, 50, 100, 52, 50, 133, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 149, 150, 67, 100, 140, 190, 50, 100, 52, 50, 133, 100, 128, 78, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(5)\nMOTOmove19(65, 10, 149, 100, 104, 132, 70, 100, 140, 190, 50, 100, 93, 69, 130, 100, 128, 78, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 90, 55, 127, 100, 140, 190, 50, 100, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623313509748'] = {
  init: function() {
    this.jsonInit({
      "type": "1623313509748",
      "message0": "放下方块",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623313509748'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 93, 55, 127, 100, 140, 190, 50, 100, 107, 145, 73, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 111, 150, 54, 102, 140, 190, 50, 100, 88, 51, 142, 101, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 101, 150, 42, 102, 140, 190, 50, 100, 99, 51, 158, 101, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 101, 107, 149, 43, 100, 140, 190, 50, 101, 92, 51, 157, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 101, 107, 149, 43, 100, 120, 165, 66, 101, 92, 51, 157, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 100, 111, 150, 54, 102, 120, 165, 66, 100, 88, 51, 142, 101, 128, 71, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623315400364'] = {
  init: function() {
    this.jsonInit({
      "type": "1623315400364",
      "message0": "UpBridge3mm_5512",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623315400364'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOsetspeed(30)\n\n\n-- 1站立\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 85, 91, 50, 129, 88, 100, 70, 100, 92, 130, 190, 52, 89, 128, 71, 100)\nMOTOwait()\n\n\n-- 3\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\nMOTOsetspeed(15)\nMOTOmove19(100, 130, 100, 85, 142, 145, 77, 90, 100, 100, 100, 95, 130, 190, 52, 88, 128, 71, 100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(35)\n\n\n-- MOTORA,90,24,122,158,115\n\n\n-- MOTORB,105,75,180,48,92\n\n\n-- MOTORC,100,100,100\n\n\n-- MOTORD,100,100,100\n\n\n-- WAIT\n\n\n-- 5\nMOTOmove19(100, 150, 100, 85, 165, 63, 170, 95, 100, 100, 100, 95, 135, 190, 52, 90, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,60)\nMOTOmove19(100, 150, 100, 100, 165, 63, 170, 100, 100, 100, 100, 100, 140, 190, 70, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 5\n\n\n-- MOTORA,105,55,122,165,100\n\n\n-- MOTORB,100,65,190,60,100\n\n\n-- MOTORD,100,150,100\n\n\n-- MOTORC,100,100,100\n\n\n-- WAIT\n\n\n-- DELAY 300\nMOTOmove19(100, 100, 100, 100, 165, 78, 145, 100, 100, 50, 100, 100, 145, 190, 55, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(150)\nMOTOmove19(100, 100, 100, 105, 165, 78, 145, 108, 100, 50, 100, 100, 145, 190, 55, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(150)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 165, 78, 135, 113, 100, 190, 20, 105, 130, 190, 40, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- MOTORA,112,75,135,130,95\n\n\n-- MOTORB,100,65,180,45,115\n\n\n-- MOTORC,180,10,100\n\n\n-- MOTORD,180,10,100\n\n\n-- WAIT\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 113, 100, 190, 20, 110, 155, 180, 105, 100, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 180, 102, 79, 32, 137, 108, 100, 100, 20, 108, 121, 165, 70, 108, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 108, 70, 10, 148, 108, 100, 70, 100, 111, 101, 142, 72, 110, 128, 71, 100)\nMOTOwait()\n\n\n-- 迈左脚\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 105, 79, 32, 137, 108, 100, 70, 100, 107, 107, 160, 60, 112, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 100, 79, 35, 130, 100, 100, 70, 100, 102, 107, 160, 65, 102, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 98, 79, 35, 130, 95, 100, 70, 100, 98, 107, 160, 65, 95, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 92, 79, 35, 130, 92, 100, 70, 100, 98, 121, 168, 63, 92, 128, 71, 100)\nMOTOwait()\n\n\n-- 14\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 95, 55, 123, 100, 120, 170, 100, 100, 105, 145, 77, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623316861827'] = {
  init: function() {
    this.jsonInit({
      "type": "1623316861827",
      "message0": "UpBridge3mm_4511",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623316861827'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOsetspeed(30)\n\n\n-- 1站立\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 85, 91, 50, 129, 88, 100, 70, 100, 92, 130, 190, 52, 89, 128, 71, 100)\nMOTOwait()\n\n\n-- 3\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\nMOTOsetspeed(15)\nMOTOmove19(100, 130, 100, 85, 142, 145, 77, 90, 100, 100, 100, 95, 130, 190, 52, 88, 128, 71, 100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(35)\n\n\n-- MOTORA,90,24,122,158,115\n\n\n-- MOTORB,105,75,180,48,92\n\n\n-- MOTORC,100,100,100\n\n\n-- MOTORD,100,100,100\n\n\n-- WAIT\n\n\n-- 5\nMOTOmove19(100, 150, 100, 85, 165, 63, 170, 95, 100, 100, 100, 95, 135, 190, 52, 90, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 150, 100, 100, 165, 63, 170, 100, 100, 100, 100, 100, 140, 190, 65, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 5\n\n\n-- MOTORA,105,55,122,165,100\n\n\n-- MOTORB,100,65,190,60,100\n\n\n-- MOTORD,100,150,100\n\n\n-- MOTORC,100,100,100\n\n\n-- WAIT\n\n\n-- DELAY 300\nMOTOmove19(100, 100, 100, 100, 165, 78, 145, 105, 100, 50, 100, 100, 145, 190, 55, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 165, 78, 135, 112, 100, 190, 20, 110, 130, 190, 40, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- MOTORA,112,75,135,130,95\n\n\n-- MOTORB,100,65,180,45,115\n\n\n-- MOTORC,180,10,100\n\n\n-- MOTORD,180,10,100\n\n\n-- WAIT\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 112, 100, 190, 20, 115, 155, 180, 105, 100, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 180, 102, 79, 32, 137, 108, 100, 100, 20, 108, 121, 165, 70, 108, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 108, 70, 10, 148, 108, 100, 70, 100, 111, 101, 142, 72, 110, 128, 71, 100)\nMOTOwait()\n\n\n-- 迈左脚\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 105, 79, 32, 137, 108, 100, 70, 100, 107, 107, 160, 60, 112, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 100, 79, 35, 130, 100, 100, 70, 100, 102, 107, 160, 65, 102, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 98, 79, 35, 130, 95, 100, 70, 100, 98, 107, 160, 65, 95, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 92, 79, 35, 130, 92, 100, 70, 100, 98, 121, 168, 63, 92, 128, 71, 100)\nMOTOwait()\n\n\n-- 14\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 95, 55, 123, 100, 120, 170, 100, 100, 105, 145, 77, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623376198209'] = {
  init: function() {
    this.jsonInit({
      "type": "1623376198209",
      "message0": "UpBridge2mm_610",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623376198209'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOsetspeed(30)\n\n\n-- 1站立\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\nMOTOsetspeed(25)\nMOTOmove19(94, 79, 100, 85, 106, 79, 113, 88, 106, 100, 100, 92, 107, 145, 76, 89, 128, 71, 100)\nMOTOwait()\n\n\n-- 3\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\nMOTOsetspeed(15)\nMOTOmove19(97, 105, 100, 85, 124, 112, 95, 89, 103, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(35)\n\n\n-- MOTORA,90,24,122,158,115\n\n\n-- MOTORB,105,75,180,48,92\n\n\n-- MOTORC,100,100,100\n\n\n-- MOTORD,100,100,100\n\n\n-- WAIT\n\n\n-- 5\nMOTOmove19(100, 150, 100, 85, 165, 63, 170, 95, 100, 100, 100, 95, 92, 120, 90, 90, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 150, 100, 100, 165, 63, 170, 100, 100, 100, 100, 100, 115, 149, 82, 97, 128, 71, 100)\nMOTOwait()\n\n\n-- 5\n\n\n-- MOTORA,105,55,122,165,100\n\n\n-- MOTORB,100,65,190,60,100\n\n\n-- MOTORD,100,150,100\n\n\n-- MOTORC,100,100,100\n\n\n-- WAIT\n\n\n-- DELAY 300\nMOTOmove19(100, 100, 100, 100, 165, 78, 145, 105, 100, 50, 100, 100, 145, 190, 55, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 165, 78, 135, 112, 100, 190, 20, 110, 130, 190, 40, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- MOTORA,112,75,135,130,95\n\n\n-- MOTORB,100,65,180,45,115\n\n\n-- MOTORC,180,10,100\n\n\n-- MOTORD,180,10,100\n\n\n-- WAIT\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 112, 100, 190, 20, 115, 155, 180, 105, 100, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 180, 102, 79, 32, 137, 108, 100, 100, 20, 108, 121, 165, 70, 108, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 108, 70, 10, 148, 108, 100, 70, 100, 111, 101, 142, 72, 110, 128, 71, 100)\nMOTOwait()\n\n\n-- 迈左脚\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 105, 79, 32, 137, 108, 100, 70, 100, 107, 107, 160, 60, 112, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 100, 79, 35, 130, 100, 100, 70, 100, 102, 107, 160, 65, 102, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 98, 79, 35, 130, 95, 100, 70, 100, 98, 107, 160, 65, 95, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 92, 79, 35, 130, 92, 100, 70, 100, 98, 121, 168, 63, 92, 128, 71, 100)\nMOTOwait()\n\n\n-- 14\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 95, 55, 123, 100, 120, 170, 100, 100, 105, 145, 77, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623376203724'] = {
  init: function() {
    this.jsonInit({
      "type": "1623376203724",
      "message0": "DownBridge2mm_610",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623376203724'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 93, 93, 55, 123, 86, 105, 95, 100, 93, 106, 143, 75, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 85, 125, 100, 117, 91, 105, 95, 100, 95, 106, 143, 75, 88, 128, 71, 100)\nMOTOwait()\nMOTOmove19(86, 105, 100, 90, 145, 60, 117, 91, 105, 95, 100, 95, 106, 143, 75, 88, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOrigid16(25,25,25,50,50,50,50,50,25,25,25,90,90,90,90,90)\nMOTOsetspeed(25)\n\n\n-- 3\nMOTOmove19(86, 105, 100, 85, 103, 27, 165, 90, 105, 95, 100, 94, 134, 100, 124, 85, 128, 71, 100)\nMOTOwait()\nMOTOmove19(86, 105, 100, 85, 135, 33, 190, 90, 105, 95, 100, 94, 118, 70, 153, 85, 128, 71, 100)\nMOTOwait()\n\n\n-- 7\n\n\n-- 11\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(15)\nMOTOmove19(100, 167, 100, 105, 125, 33, 165, 110, 100, 100, 100, 115, 101, 95, 143, 125, 128, 71, 100)\nMOTOwait()\nDelayMs(150)\nMOTOmove19(100, 167, 100, 105, 125, 33, 165, 113, 100, 100, 100, 115, 100, 96, 145, 120, 128, 71, 100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(15)\n\n\n-- 12\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,50,50,50,50,50)\nMOTOmove19(100, 100, 100, 105, 75, 10, 145, 113, 100, 60, 100, 120, 160, 175, 105, 129, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 105, 75, 10, 145, 113, 100, 60, 100, 130, 150, 190, 105, 129, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 68, 10, 148, 112, 100, 60, 100, 135, 110, 91, 145, 129, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 105, 52, 10, 139, 112, 100, 60, 100, 125, 89, 69, 145, 116, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 105, 52, 10, 139, 112, 100, 60, 100, 113, 107, 145, 76, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(18)\n\n\n-- MOTORA,107,71,152,91,93\nMOTOmove19(80, 30, 100, 107, 91, 48, 129, 107, 120, 150, 100, 113, 107, 145, 76, 110, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85)\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623394327538'] = {
  init: function() {
    this.jsonInit({
      "type": "1623394327538",
      "message0": "抱起10CM方块511",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623394327538'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 94, 55, 123, 100, 120, 170, 100, 100, 106, 145, 77, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,30,60,60,60,30,100,100,100,30,60,60,60,30,0,0,0)\n\n\n-- 3\nMOTOsetspeed(20)\nMOTOmove19(110, 155, 100, 100, 142, 145, 77, 100, 90, 45, 100, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 165, 10, 100, 142, 145, 77, 100, 100, 35, 190, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 165, 10, 100, 142, 145, 55, 100, 100, 35, 190, 100, 58, 55, 145, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 165, 10, 100, 142, 25, 125, 100, 100, 35, 190, 100, 58, 175, 75, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 10, 100, 142, 25, 125, 100, 100, 15, 190, 100, 58, 175, 75, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 10, 55, 158, 140, 55, 60, 100, 15, 190, 145, 42, 60, 145, 140, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(100, 185, 10, 50, 138, 150, 55, 60, 100, 15, 190, 150, 62, 50, 145, 140, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(55)\nMOTOmove19(100, 185, 10, 70, 128, 145, 75, 70, 100, 15, 190, 130, 72, 55, 125, 130, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(100, 185, 100, 98, 142, 145, 77, 98, 100, 15, 100, 102, 58, 55, 123, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 98, 122, 40, 152, 98, 100, 15, 100, 102, 78, 160, 48, 102, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 100, 100, 15, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623394334101'] = {
  init: function() {
    this.jsonInit({
      "type": "1623394334101",
      "message0": "放下方块1511",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623394334101'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 98, 93, 55, 124, 98, 100, 15, 100, 102, 107, 145, 76, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 100, 102, 142, 145, 77, 98, 100, 15, 100, 98, 58, 55, 123, 102, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(100, 185, 10, 70, 128, 145, 75, 70, 100, 15, 190, 130, 72, 55, 125, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(90, 185, 10, 55, 158, 140, 55, 60, 110, 15, 190, 145, 42, 60, 145, 140, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(110, 155, 10, 65, 138, 150, 55, 70, 90, 45, 190, 135, 62, 50, 145, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(110, 155, 10, 70, 128, 145, 75, 70, 90, 45, 190, 130, 72, 55, 125, 130, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 165, 100, 98, 142, 145, 77, 98, 120, 35, 100, 102, 58, 55, 123, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 98, 122, 40, 152, 98, 100, 15, 100, 102, 78, 160, 48, 102, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623394340239'] = {
  init: function() {
    this.jsonInit({
      "type": "1623394340239",
      "message0": "抱方块前进511",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623394340239'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 100, 94, 55, 124, 100, 100, 15, 99, 100, 106, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(40,40,40,85,60,60,60,75,40,40,40,85,60,60,60,75,0,0,0)\n\n\n-- 右抬腿\nMOTOsetspeed(6)\nMOTOmove19(100, 185, 101, 105, 93, 55, 124, 105, 100, 15, 99, 111, 102, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 105, 93, 55, 124, 107, 100, 15, 99, 105, 84, 141, 62, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 101, 95, 80, 55, 111, 90, 100, 15, 99, 95, 101, 145, 73, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 95, 116, 59, 138, 90, 100, 15, 99, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 101, 105, 99, 55, 127, 107, 100, 15, 99, 105, 120, 145, 89, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 105, 94, 54, 123, 107, 100, 15, 99, 105, 102, 136, 78, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(6)\nMOTOmove19(100, 185, 101, 100, 94, 55, 123, 98, 100, 15, 99, 100, 106, 145, 77, 102, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623394348027'] = {
  init: function() {
    this.jsonInit({
      "type": "1623394348027",
      "message0": "抱方块后退511",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623394348027'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 100, 100, 15, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75,0,0,0)\n\n\n-- 右抬腿\nMOTOsetspeed(6)\nMOTOmove19(100, 185, 100, 105, 93, 55, 124, 108, 100, 15, 100, 111, 102, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 100, 105, 93, 55, 124, 107, 100, 15, 100, 108, 125, 145, 94, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 100, 92, 116, 55, 144, 85, 100, 15, 100, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 100, 92, 75, 55, 106, 95, 100, 15, 100, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 100, 105, 93, 55, 124, 107, 100, 15, 100, 108, 84, 141, 56, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 100, 105, 92, 55, 124, 107, 100, 15, 100, 111, 107, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(6)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 98, 100, 15, 100, 100, 107, 145, 76, 102, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623394353812'] = {
  init: function() {
    this.jsonInit({
      "type": "1623394353812",
      "message0": "抱方块左移1511",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623394353812'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(6)\nMOTOmove19(100, 185, 101, 89, 98, 64, 122, 90, 100, 15, 99, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 95, 93, 54, 124, 90, 100, 15, 99, 105, 107, 146, 76, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(100, 185, 101, 98, 93, 54, 123, 102, 100, 15, 99, 109, 107, 146, 76, 112, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(100, 185, 101, 98, 93, 54, 123, 102, 100, 15, 99, 103, 105, 139, 81, 109, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(100, 185, 101, 98, 93, 54, 123, 102, 100, 15, 99, 103, 105, 139, 81, 109, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(100, 185, 101, 100, 93, 55, 124, 100, 100, 15, 99, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623394359059'] = {
  init: function() {
    this.jsonInit({
      "type": "1623394359059",
      "message0": "抱方块右移1511",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623394359059'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(6)\nMOTOmove19(100, 185, 101, 105, 93, 55, 124, 108, 100, 15, 99, 111, 102, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 94, 93, 54, 124, 100, 100, 15, 100, 106, 107, 146, 76, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(100, 185, 100, 91, 93, 54, 124, 88, 100, 15, 100, 102, 107, 146, 77, 98, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(100, 185, 100, 97, 95, 61, 119, 91, 100, 15, 100, 102, 107, 146, 77, 98, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(100, 185, 100, 97, 95, 61, 119, 91, 100, 15, 100, 102, 107, 146, 77, 98, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 100, 100, 15, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623397295555'] = {
  init: function() {
    this.jsonInit({
      "type": "1623397295555",
      "message0": "翻墙稳定",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623397295555'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(90, 105, 190, 100, 128, 10, 170, 100, 110, 95, 10, 100, 72, 190, 30, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(90, 10, 190, 100, 108, 10, 170, 100, 110, 190, 10, 100, 92, 190, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 118, 10, 170, 100, 110, 190, 10, 100, 82, 190, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 169, 100, 110, 190, 10, 100, 72, 190, 31, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 128, 10, 168, 100, 110, 190, 10, 100, 72, 190, 32, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 128, 10, 164, 100, 110, 190, 10, 100, 72, 190, 36, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 130, 10, 164, 100, 110, 190, 10, 100, 70, 190, 36, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 130, 10, 161, 100, 110, 190, 10, 100, 70, 190, 39, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 130, 10, 159, 100, 110, 190, 10, 100, 70, 190, 41, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 132, 10, 159, 100, 110, 190, 10, 100, 68, 190, 41, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 132, 10, 157, 100, 110, 190, 10, 100, 68, 190, 43, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 132, 10, 154, 100, 110, 190, 10, 100, 68, 190, 46, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(87, 14, 190, 100, 132, 10, 154, 100, 113, 186, 10, 100, 68, 190, 46, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOrigid16(90,90,100,30,60,60,60,30,90,90,100,30,60,60,60,30,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(50, 50, 190, 100, 132, 10, 154, 100, 150, 150, 10, 100, 68, 190, 46, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(50, 50, 165, 100, 10, 95, 108, 100, 150, 150, 35, 100, 65, 190, 40, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(50, 50, 165, 100, 10, 95, 108, 100, 150, 150, 35, 100, 165, 190, 40, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 修改\nMOTOsetspeed(135)\nMOTOmove19(43, 40, 190, 100, 10, 95, 108, 100, 166, 160, 10, 100, 190, 175, 10, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 8\nMOTOsetspeed(99)\nMOTOmove19(50, 50, 190, 100, 90, 95, 170, 100, 150, 150, 10, 100, 110, 105, 30, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 9\nMOTOsetspeed(40)\nMOTOmove19(89, 182, 110, 100, 10, 95, 93, 100, 111, 18, 90, 100, 190, 105, 107, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 10\nMOTOsetspeed(40)\nMOTOmove19(90, 160, 190, 100, 10, 95, 63, 100, 110, 40, 10, 100, 190, 105, 137, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70,0,0,0)\n\n\n-- 12\nMOTOsetspeed(24)\nMOTOmove19(90, 50, 190, 100, 142, 145, 77, 100, 110, 150, 10, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 13\nMOTOsetspeed(24)\nMOTOmove19(90, 50, 190, 100, 142, 145, 77, 100, 110, 150, 10, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623406907594'] = {
  init: function() {
    this.jsonInit({
      "type": "1623406907594",
      "message0": "UpBridge2mm_6112",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623406907594'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOsetspeed(30)\n\n\n-- 1站立\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\nMOTOsetspeed(25)\nMOTOmove19(94, 79, 100, 85, 106, 79, 113, 80, 106, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\n\n\n-- 3\n\n\n-- 左腿上台阶\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\nMOTOsetspeed(15)\nMOTOmove19(97, 105, 100, 85, 132, 127, 85, 89, 103, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 150, 100, 85, 165, 50, 180, 95, 100, 100, 100, 95, 85, 100, 99, 90, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOmove19(100, 100, 100, 100, 165, 78, 145, 105, 100, 50, 100, 100, 145, 170, 90, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 165, 78, 135, 112, 100, 190, 20, 110, 130, 190, 40, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- MOTORA,112,75,135,130,95\n\n\n-- MOTORB,100,65,180,45,115\n\n\n-- MOTORC,180,10,100\n\n\n-- MOTORD,180,10,100\n\n\n-- WAIT\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 112, 100, 190, 20, 115, 155, 180, 105, 100, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 180, 102, 79, 32, 137, 108, 100, 100, 20, 108, 121, 165, 70, 108, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 108, 70, 10, 148, 108, 100, 70, 100, 111, 101, 142, 72, 110, 128, 71, 100)\nMOTOwait()\n\n\n-- 迈左脚\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 105, 79, 32, 137, 108, 100, 70, 100, 107, 107, 160, 60, 112, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 100, 79, 35, 130, 100, 100, 70, 100, 102, 107, 160, 65, 102, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 98, 79, 35, 130, 95, 100, 70, 100, 98, 107, 160, 65, 95, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 92, 79, 35, 130, 92, 100, 70, 100, 98, 121, 168, 63, 92, 128, 71, 100)\nMOTOwait()\n\n\n-- 14\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 95, 55, 123, 100, 120, 170, 100, 100, 105, 145, 77, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1623407926500'] = {
  init: function() {
    this.jsonInit({
      "type": "1623407926500",
      "message0": "UpBridge2mm_L6113",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623407926500'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOsetspeed(30)\n\n\n-- 1站立\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\nMOTOsetspeed(25)\nMOTOmove19(94, 79, 100, 85, 106, 79, 113, 80, 106, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\n\n\n-- 3\n\n\n-- 左腿上台阶\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\nMOTOsetspeed(15)\nMOTOmove19(97, 105, 100, 85, 132, 127, 85, 89, 103, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 150, 100, 85, 165, 50, 180, 95, 100, 100, 100, 95, 85, 100, 99, 90, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 150, 100, 100, 165, 78, 155, 100, 100, 100, 100, 100, 135, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 100, 165, 78, 155, 100, 100, 100, 100, 100, 145, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 165, 78, 135, 112, 100, 190, 20, 110, 130, 190, 40, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 112, 100, 190, 20, 115, 155, 180, 105, 100, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 2右腿上台阶\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\nMOTOsetspeed(15)\nMOTOmove19(97, 100, 100, 106, 93, 55, 124, 112, 103, 95, 100, 115, 68, 73, 115, 111, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 100, 100, 105, 115, 100, 101, 110, 100, 50, 100, 115, 35, 150, 20, 105, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 65, 50, 101, 100, 100, 50, 100, 100, 35, 122, 45, 100, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 100, 55, 50, 101, 100, 100, 100, 100, 100, 35, 122, 45, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 90, 70, 10, 160, 90, 100, 190, 20, 95, 35, 122, 65, 88, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 85, 45, 20, 95, 100, 100, 190, 20, 95, 85, 135, 75, 88, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 10, 180, 85, 130, 90, 105, 100, 100, 190, 20, 95, 95, 135, 75, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOmove19(100, 100, 180, 85, 110, 90, 105, 100, 100, 100, 20, 95, 102, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 3左腿上台阶\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\nMOTOsetspeed(15)\nMOTOmove19(97, 105, 100, 85, 132, 127, 85, 89, 103, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 150, 100, 85, 165, 50, 180, 95, 100, 100, 100, 95, 85, 100, 99, 90, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 150, 100, 100, 165, 78, 155, 100, 100, 100, 100, 100, 135, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 100, 165, 78, 155, 100, 100, 100, 100, 100, 145, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 165, 78, 135, 112, 100, 190, 20, 110, 130, 190, 40, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 112, 100, 190, 20, 115, 155, 180, 105, 100, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 180, 102, 79, 32, 137, 108, 100, 100, 20, 108, 121, 165, 70, 108, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 108, 70, 10, 148, 108, 100, 70, 100, 111, 101, 142, 72, 110, 128, 71, 100)\nMOTOwait()\n\n\n-- 迈左脚\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 105, 79, 32, 137, 108, 100, 70, 100, 107, 107, 160, 60, 112, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 100, 79, 35, 130, 100, 100, 70, 100, 102, 107, 160, 65, 102, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 98, 79, 35, 130, 95, 100, 70, 100, 98, 107, 160, 65, 95, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 92, 79, 35, 130, 92, 100, 70, 100, 98, 121, 168, 63, 92, 128, 71, 100)\nMOTOwait()\n\n\n-- 14\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 95, 55, 123, 100, 120, 170, 100, 100, 105, 145, 77, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676271181254'] = {
  init: function() {
    this.jsonInit({
      "type": "1676271181254",
      "message0": "box_up6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676271181254'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 94, 55, 123, 100, 120, 170, 100, 100, 106, 145, 77, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,30,60,60,60,30,100,100,100,30,60,60,60,30,0,0,0)\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,0,0,0)\n\n\n-- 2弯腰准备\nMOTOsetspeed(15)\nMOTOmove19(100, 170, 10, 100, 138, 15, 180, 100, 100, 30, 190, 100, 62, 185, 20, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 170, 10, 100, 145, 15, 175, 100, 100, 30, 190, 100, 55, 185, 25, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 175, 20, 80, 145, 30, 160, 90, 100, 25, 180, 120, 55, 170, 40, 110, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,40,40,40,40,30,100,100,100,40,40,40,40,30,0,0,0)\nMOTOrigid16(100,100,100,30,30,30,30,30,100,100,100,30,30,30,30,30,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(94, 180, 20, 80, 158, 15, 140, 98, 116, 20, 180, 120, 42, 185, 60, 102, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 2弯腰拿\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 20, 80, 158, 15, 140, 98, 100, 15, 180, 120, 42, 185, 60, 102, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOrigid16(100,100,100,60,40,40,40,60,100,100,100,60,40,40,40,60,0,0,0)\n\n\n-- 起身1\nMOTOsetspeed(35)\nMOTOmove19(100, 185, 10, 85, 150, 15, 170, 90, 100, 15, 190, 115, 50, 185, 30, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\n\n\n-- 起身2\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 10, 90, 112, 40, 152, 90, 100, 15, 190, 110, 88, 160, 48, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 95, 88, 55, 124, 95, 100, 15, 100, 105, 112, 145, 76, 105, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(50)\nMOTOmove19(100, 185, 100, 102, 93, 55, 124, 98, 100, 15, 100, 98, 107, 145, 76, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(100, 185, 100, 100, 94, 55, 124, 100, 100, 15, 100, 100, 106, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1677553926196'] = {
  init: function() {
    this.jsonInit({
      "type": "1677553926196",
      "message0": "下台阶",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1677553926196'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 93, 93, 55, 123, 86, 105, 95, 100, 93, 106, 143, 75, 89, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 85, 125, 100, 117, 91, 105, 95, 100, 95, 106, 143, 75, 88, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 90, 145, 60, 117, 91, 105, 95, 100, 95, 106, 143, 75, 88, 128, 71, 99)\nMOTOwait()\nMOTOrigid16(25,25,25,50,50,50,50,50,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(86, 105, 100, 85, 103, 27, 165, 90, 105, 95, 100, 94, 134, 100, 124, 85, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(86, 105, 100, 85, 102, 10, 190, 90, 105, 95, 100, 94, 118, 80, 153, 85, 128, 71, 99)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(100, 167, 100, 105, 120, 10, 181, 110, 100, 100, 100, 120, 105, 91, 145, 125, 128, 71, 99)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(15)\nMOTOmove19(100, 167, 100, 105, 120, 10, 175, 113, 100, 100, 100, 120, 100, 96, 145, 120, 128, 71, 99)\nMOTOwait()\nDelayMs(150)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,50,50,50,50,50,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 75, 10, 145, 113, 100, 60, 100, 120, 160, 175, 105, 129, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 75, 10, 145, 113, 100, 60, 100, 130, 150, 190, 105, 129, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 68, 10, 148, 112, 100, 60, 100, 135, 110, 91, 145, 129, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 52, 10, 139, 112, 100, 60, 100, 125, 89, 69, 145, 116, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 52, 10, 139, 112, 100, 60, 100, 113, 107, 145, 76, 110, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 30, 100, 107, 91, 48, 129, 107, 120, 150, 100, 113, 107, 145, 76, 110, 128, 71, 99)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOsetspeed(18)\nMOTOmove19(80, 30, 100, 107, 91, 48, 129, 107, 120, 150, 100, 113, 107, 145, 76, 110, 128, 71, 99)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 99)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680501740489'] = {
  init: function() {
    this.jsonInit({
      "type": "1680501740489",
      "message0": "趴着下楼梯",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680501740489'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 100, 149, 38, 100, 120, 170, 100, 100, 99, 50, 159, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 148, 100, 156, 150, 40, 100, 120, 170, 56, 100, 45, 50, 159, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 185, 100, 97, 87, 48, 100, 120, 170, 16, 100, 101, 111, 149, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 185, 100, 152, 150, 41, 100, 120, 170, 16, 100, 49, 50, 156, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 149, 100, 151, 150, 56, 100, 120, 170, 56, 100, 51, 50, 144, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 142, 100, 143, 150, 54, 100, 120, 170, 60, 100, 58, 50, 144, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 142, 100, 110, 150, 47, 100, 120, 170, 60, 100, 90, 50, 151, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 142, 100, 116, 110, 97, 100, 120, 170, 60, 100, 83, 90, 103, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1623313321912'] = function(block) {
  let code = "robot.leju_action('抱箱前进')\n";
  return code;
}

Blockly.Python['1623313331243'] = function(block) {
  let code = "robot.leju_action('抱箱后退')\n";
  return code;
}

Blockly.Python['1623313340115'] = function(block) {
  let code = "robot.leju_action('抱箱右移')\n";
  return code;
}

Blockly.Python['1623313348137'] = function(block) {
  let code = "robot.leju_action('抱箱右转')\n";
  return code;
}

Blockly.Python['1623313492450'] = function(block) {
  let code = "robot.leju_action('抱箱左移')\n";
  return code;
}

Blockly.Python['1623313497407'] = function(block) {
  let code = "robot.leju_action('抱箱左转')\n";
  return code;
}

Blockly.Python['1623313503852'] = function(block) {
  let code = "robot.leju_action('抱起方块')\n";
  return code;
}

Blockly.Python['1623313509748'] = function(block) {
  let code = "robot.leju_action('放下方块')\n";
  return code;
}

Blockly.Python['1623315400364'] = function(block) {
  let code = "robot.leju_action('UpBridge3mm_5512')\n";
  return code;
}

Blockly.Python['1623316861827'] = function(block) {
  let code = "robot.leju_action('UpBridge3mm_4511')\n";
  return code;
}

Blockly.Python['1623376198209'] = function(block) {
  let code = "robot.leju_action('UpBridge2mm_610')\n";
  return code;
}

Blockly.Python['1623376203724'] = function(block) {
  let code = "robot.leju_action('DownBridge2mm_610')\n";
  return code;
}

Blockly.Python['1623394327538'] = function(block) {
  let code = "robot.leju_action('抱起10CM方块511')\n";
  return code;
}

Blockly.Python['1623394334101'] = function(block) {
  let code = "robot.leju_action('放下方块1511')\n";
  return code;
}

Blockly.Python['1623394340239'] = function(block) {
  let code = "robot.leju_action('抱方块前进511')\n";
  return code;
}

Blockly.Python['1623394348027'] = function(block) {
  let code = "robot.leju_action('抱方块后退511')\n";
  return code;
}

Blockly.Python['1623394353812'] = function(block) {
  let code = "robot.leju_action('抱方块左移1511')\n";
  return code;
}

Blockly.Python['1623394359059'] = function(block) {
  let code = "robot.leju_action('抱方块右移1511')\n";
  return code;
}

Blockly.Python['1623397295555'] = function(block) {
  let code = "robot.leju_action('翻墙稳定')\n";
  return code;
}

Blockly.Python['1623406907594'] = function(block) {
  let code = "robot.leju_action('UpBridge2mm_6112')\n";
  return code;
}

Blockly.Python['1623407926500'] = function(block) {
  let code = "robot.leju_action('UpBridge2mm_L6113')\n";
  return code;
}

Blockly.Python['1676271181254'] = function(block) {
  let code = "robot.leju_action('box_up6')\n";
  return code;
}

Blockly.Python['1677553926196'] = function(block) {
  let code = "robot.leju_action('下台阶')\n";
  return code;
}

Blockly.Python['1680501740489'] = function(block) {
  let code = "robot.leju_action('趴着下楼梯')\n";
  return code;
}

Blockly.Blocks['1694609351544'] = {
  init: function() {
    this.jsonInit({
      "type": "1694609351544",
      "message0": "侧面上高台夺箱子6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1694609351544'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80, 29, 20, 99, 95, 55, 150, 99, 119, 170, 180, 99, 105, 145, 50, 99, 128, 71, 101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80, 80, 20, 99, 95, 55, 150, 99, 119, 120, 180, 99, 105, 145, 50, 99, 128, 71, 101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 80, 100, 99, 95, 55, 150, 99, 119, 120, 100, 99, 105, 145, 50, 99, 128, 71, 101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 99, 95, 55, 150, 99, 119, 165, 100, 99, 105, 145, 50, 99, 128, 71, 101)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 66, 99, 93, 55, 150, 99, 119, 165, 123, 99, 105, 145, 50, 99, 128, 71, 101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 66, 99, 128, 55, 150, 99, 119, 165, 123, 99, 71, 145, 50, 99, 128, 71, 101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 29, 66, 100, 92, 134, 150, 99, 119, 164, 123, 98, 105, 65, 46, 99, 128, 71, 101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 29, 66, 100, 92, 134, 150, 99, 119, 164, 123, 98, 105, 65, 46, 99, 128, 71, 101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 180, 105, 100, 93, 55, 124, 100, 120, 25, 90, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(115, 180, 105, 100, 93, 55, 124, 100, 80, 25, 90, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(115, 180, 80, 100, 93, 55, 124, 100, 80, 25, 123, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(115, 180, 105, 100, 93, 55, 124, 100, 80, 25, 90, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35, 130, 20, 101, 131, 126, 170, 100, 165, 70, 180, 99, 69, 74, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21, 105, 21, 101, 131, 126, 170, 100, 179, 95, 180, 99, 69, 74, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 16, 46, 100, 80, 150, 60, 100, 108, 184, 154, 100, 120, 50, 140, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 18, 58, 100, 73, 150, 40, 100, 108, 182, 142, 100, 127, 50, 160, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92, 25, 97, 100, 113, 150, 50, 100, 108, 175, 103, 100, 85, 50, 150, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1694609351544'] = function(block) {
  let code = "robot.leju_action('侧面上高台夺箱子6')\n";
  return code;
}

Blockly.Blocks['1694609414240'] = {
  init: function() {
    this.jsonInit({
      "type": "1694609414240",
      "message0": "新侧面拿高台1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1694609414240'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 94, 55, 123, 100, 120, 170, 100, 100, 106, 145, 77, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,30,60,60,60,30,100,100,100,30,60,60,60,30,0,0,0)\n\n\n-- 伸手\nMOTOsetspeed(20)\nMOTOmove19(110, 83, 100, 100, 93, 55, 124, 100, 103, 106, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(104, 155, 15, 100, 93, 55, 124, 100, 94, 58, 183, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(102, 158, 59, 100, 148, 48, 116, 102, 96, 50, 144, 98, 56, 157, 79, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(102, 139, 111, 100, 145, 48, 122, 99, 100, 50, 92, 99, 55, 144, 84, 99, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129, 159, 108, 101, 144, 49, 122, 99, 80, 41, 91, 99, 56, 144, 84, 99, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(138, 159, 107, 101, 144, 49, 122, 99, 68, 44, 91, 99, 56, 144, 84, 99, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(138, 159, 108, 103, 139, 51, 92, 99, 68, 44, 91, 101, 60, 144, 111, 103, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(138, 159, 108, 102, 148, 129, 137, 97, 68, 41, 91, 101, 60, 144, 111, 103, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(138, 159, 108, 102, 142, 131, 130, 97, 68, 41, 91, 100, 56, 61, 70, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(138, 159, 108, 104, 134, 138, 137, 96, 68, 41, 91, 100, 64, 51, 69, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 放箱子\nMOTOsetspeed(30)\nMOTOmove19(138, 158, 45, 102, 134, 138, 137, 96, 68, 41, 153, 100, 64, 51, 69, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(110, 142, 40, 102, 134, 138, 137, 96, 100, 46, 156, 100, 64, 51, 69, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(113, 142, 35, 101, 152, 141, 47, 100, 101, 57, 169, 99, 45, 52, 158, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(127, 141, 10, 100, 136, 143, 42, 99, 70, 56, 190, 98, 64, 50, 160, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(127, 141, 10, 101, 153, 142, 70, 98, 70, 56, 190, 98, 47, 50, 136, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(113, 142, 35, 101, 104, 150, 42, 100, 101, 57, 169, 98, 96, 50, 160, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(101, 94, 102, 101, 112, 150, 42, 100, 101, 117, 95, 98, 88, 50, 160, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\n";
  return code;
}

Blockly.Python['1694609414240'] = function(block) {
  let code = "robot.leju_action('新侧面拿高台1')\n";
  return code;
}

Blockly.Blocks['1713878511206'] = {
  init: function() {
    this.jsonInit({
      "type": "1713878511206",
      "message0": "Box_Forwardgai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713878511206'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 99, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 99, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 120, 40, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713878511206'] = function(block) {
  let code = "robot.leju_action('Box_Forwardgai')\n";
  return code;
}

Blockly.Blocks['1713878586234'] = {
  init: function() {
    this.jsonInit({
      "type": "1713878586234",
      "message0": "fastforword001gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713878586234'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(55, 10, 179, 90, 91, 48, 134, 88, 140, 190, 25, 94, 109, 146, 71, 94, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 86, 113, 85, 115, 90, 140, 190, 25, 94, 109, 146, 71, 87, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 86, 121, 37, 161, 88, 140, 190, 25, 94, 109, 146, 72, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55, 10, 179, 107, 98, 56, 129, 111, 140, 190, 25, 112, 131, 155, 88, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 106, 93, 54, 128, 113, 140, 190, 25, 114, 77, 105, 85, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55, 10, 179, 90, 91, 48, 134, 88, 140, 190, 25, 94, 109, 146, 71, 94, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 86, 113, 85, 115, 90, 140, 190, 25, 94, 109, 146, 71, 87, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 86, 121, 37, 161, 88, 140, 190, 25, 94, 109, 146, 72, 89, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55, 10, 179, 107, 98, 56, 129, 111, 140, 190, 25, 112, 131, 155, 88, 110, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 106, 93, 54, 128, 113, 140, 190, 25, 114, 77, 105, 85, 110, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55, 10, 179, 90, 91, 48, 134, 88, 140, 190, 25, 94, 109, 146, 71, 94, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 86, 113, 85, 115, 90, 140, 190, 25, 94, 109, 146, 71, 87, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 86, 121, 37, 161, 88, 140, 190, 25, 94, 109, 146, 72, 89, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55, 10, 179, 107, 98, 56, 129, 111, 140, 190, 25, 112, 131, 155, 88, 110, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 106, 93, 54, 128, 113, 140, 190, 25, 114, 77, 105, 85, 110, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 100, 93, 55, 124, 100, 140, 190, 25, 100, 107, 145, 76, 100, 120, 40, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713878586234'] = function(block) {
  let code = "robot.leju_action('fastforword001gai')\n";
  return code;
}

Blockly.Blocks['1714054737011'] = {
  init: function() {
    this.jsonInit({
      "type": "1714054737011",
      "message0": "box-back01改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714054737011'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 105, 93, 55, 130, 108, 132, 187, 10, 111, 102, 136, 70, 112, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 105, 93, 55, 134, 107, 132, 187, 10, 108, 125, 145, 94, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 92, 106, 55, 144, 85, 132, 187, 10, 95, 117, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 92, 75, 55, 106, 95, 132, 187, 10, 95, 107, 145, 66, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 105, 83, 55, 124, 107, 132, 187, 10, 108, 94, 141, 56, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 98, 132, 187, 10, 100, 107, 145, 70, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714054737011'] = function(block) {
  let code = "robot.leju_action('box-back01改')\n";
  return code;
}

Blockly.Blocks['1714054754109'] = {
  init: function() {
    this.jsonInit({
      "type": "1714054754109",
      "message0": "BoxBack1Rungai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714054754109'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 105, 93, 55, 130, 108, 132, 187, 10, 111, 102, 136, 70, 112, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 105, 93, 55, 134, 107, 132, 187, 10, 108, 125, 145, 94, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 92, 106, 55, 144, 85, 132, 187, 10, 95, 117, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 92, 75, 55, 106, 95, 132, 187, 10, 95, 107, 145, 66, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 120, 40, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714054754109'] = function(block) {
  let code = "robot.leju_action('BoxBack1Rungai')\n";
  return code;
}

Blockly.Blocks['1714055002434'] = {
  init: function() {
    this.jsonInit({
      "type": "1714055002434",
      "message0": "向前快步走3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714055002434'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(79, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 91, 94, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 91, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 91, 66, 109, 102, 120, 170, 120, 101, 85, 101, 97, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 110, 100, 120, 170, 120, 101, 90, 126, 79, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 94, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 120, 96, 95, 70, 110, 100, 120, 170, 120, 102, 109, 146, 75, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714055002434'] = function(block) {
  let code = "robot.leju_action('向前快步走3')\n";
  return code;
}

Blockly.Blocks['1714055025611'] = {
  init: function() {
    this.jsonInit({
      "type": "1714055025611",
      "message0": "向前快步走3（2）",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714055025611'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(79, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 91, 94, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 91, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 91, 66, 109, 102, 120, 170, 120, 101, 85, 101, 97, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 110, 100, 120, 170, 120, 101, 90, 126, 79, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 94, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 120, 96, 95, 70, 110, 100, 120, 170, 120, 102, 109, 146, 75, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714055025611'] = function(block) {
  let code = "robot.leju_action('向前快步走3（2）')\n";
  return code;
}

Blockly.Blocks['1714055337250'] = {
  init: function() {
    this.jsonInit({
      "type": "1714055337250",
      "message0": "向前快步走3gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714055337250'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 91, 94, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 91, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 91, 66, 109, 102, 120, 170, 120, 101, 85, 101, 97, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 110, 100, 120, 170, 120, 101, 90, 126, 79, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 94, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 120, 96, 95, 70, 110, 100, 120, 170, 120, 102, 109, 146, 75, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714055337250'] = function(block) {
  let code = "robot.leju_action('向前快步走3gai')\n";
  return code;
}

Blockly.Blocks['1717423167815'] = {
  init: function() {
    this.jsonInit({
      "type": "1717423167815",
      "message0": "10s登台1(1)",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717423167815'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(50)\nMOTOmove19(100, 100, 100, 90, 91, 48, 129, 88, 100, 100, 100, 92, 107, 146, 76, 88, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(150)\nMOTOmove19(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 93, 102, 145, 74, 87, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(100, 100, 100, 94, 140, 146, 77, 86, 100, 100, 100, 103, 102, 145, 74, 88, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 90, 115, 145, 47, 85, 100, 100, 100, 142, 101, 148, 75, 134, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 90, 115, 145, 47, 85, 100, 100, 100, 120, 101, 143, 75, 121, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 90, 115, 101, 94, 92, 100, 100, 100, 120, 113, 176, 56, 77, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 90, 115, 140, 58, 110, 100, 100, 100, 126, 113, 177, 55, 86, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94, 79, 100, 85, 106, 79, 113, 80, 106, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 105, 100, 85, 132, 127, 85, 89, 103, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(97, 150, 100, 85, 160, 50, 180, 95, 100, 100, 100, 95, 85, 100, 99, 90, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 150, 100, 85, 160, 50, 180, 95, 100, 100, 100, 99, 85, 100, 99, 90, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 150, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 136, 150, 108, 99, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(99, 10, 159, 107, 160, 91, 118, 111, 100, 190, 43, 107, 130, 190, 48, 104, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(150)\nMOTOmove19(75, 10, 158, 107, 160, 91, 118, 111, 130, 190, 42, 107, 130, 190, 48, 104, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75, 10, 158, 107, 160, 91, 118, 111, 130, 190, 42, 107, 130, 190, 48, 104, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75, 10, 159, 107, 160, 91, 118, 111, 130, 190, 42, 110, 157, 169, 136, 99, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75, 10, 159, 107, 160, 91, 118, 111, 130, 190, 42, 108, 41, 87, 109, 101, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(75, 10, 159, 106, 142, 117, 99, 111, 130, 190, 42, 107, 62, 88, 98, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75, 10, 159, 101, 140, 120, 97, 102, 130, 190, 42, 102, 62, 81, 106, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 15, 149, 100, 104, 132, 70, 100, 140, 180, 50, 100, 93, 69, 130, 100, 128, 78, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 15, 149, 100, 90, 55, 127, 100, 140, 180, 50, 100, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717423167815'] = function(block) {
  let code = "robot.leju_action('10s登台1(1)')\n";
  return code;
}

Blockly.Blocks['1717423979526'] = {
  init: function() {
    this.jsonInit({
      "type": "1717423979526",
      "message0": "抱箱子上楼梯右边移动改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717423979526'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(50)\nMOTOmove19(100, 100, 100, 90, 91, 48, 129, 88, 100, 100, 100, 92, 107, 146, 76, 88, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(150)\nMOTOmove19(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 93, 102, 145, 74, 87, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(100, 100, 100, 90, 115, 145, 47, 85, 100, 100, 100, 103, 102, 145, 74, 88, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 90, 115, 145, 47, 85, 100, 100, 100, 142, 101, 148, 75, 134, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 90, 115, 145, 47, 85, 100, 100, 100, 120, 101, 143, 75, 121, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 90, 115, 101, 94, 92, 100, 100, 100, 120, 113, 176, 56, 77, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(100, 100, 100, 90, 115, 140, 58, 110, 100, 100, 100, 117, 115, 177, 56, 86, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 81, 114, 141, 60, 121, 96, 174, 98, 117, 115, 177, 56, 86, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(100, 100, 100, 81, 114, 141, 60, 121, 96, 114, 98, 96, 77, 57, 133, 83, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(100, 100, 100, 98, 110, 142, 49, 99, 96, 114, 98, 98, 89, 57, 151, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94, 79, 100, 85, 106, 79, 113, 80, 106, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 105, 100, 85, 132, 127, 85, 89, 103, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(97, 150, 100, 85, 160, 50, 180, 95, 100, 100, 100, 95, 85, 100, 99, 90, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 150, 100, 85, 160, 50, 180, 95, 100, 100, 100, 99, 85, 100, 99, 90, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 150, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 136, 150, 108, 99, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(99, 10, 159, 107, 160, 91, 118, 111, 100, 190, 43, 107, 130, 190, 48, 104, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(150)\nMOTOmove19(75, 10, 158, 107, 160, 91, 118, 111, 130, 190, 42, 107, 130, 190, 48, 104, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75, 10, 158, 107, 160, 91, 118, 111, 130, 190, 42, 107, 130, 190, 48, 104, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75, 10, 159, 107, 160, 91, 118, 111, 130, 190, 42, 110, 157, 169, 136, 99, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75, 10, 159, 107, 160, 91, 118, 111, 130, 190, 42, 108, 41, 87, 109, 101, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(75, 10, 159, 106, 142, 117, 99, 111, 130, 190, 42, 107, 62, 88, 98, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75, 10, 159, 101, 140, 120, 97, 102, 130, 190, 42, 102, 62, 81, 106, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 15, 149, 100, 104, 132, 70, 100, 140, 180, 50, 100, 93, 69, 130, 100, 128, 78, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 15, 149, 100, 90, 55, 127, 100, 140, 180, 50, 100, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(60)\nMOTOmove19(65, 15, 149, 65, 90, 55, 127, 96, 140, 180, 50, 105, 110, 145, 73, 105, 127, 78, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(80)\nMOTOmove19(65, 15, 149, 105, 90, 55, 127, 100, 140, 180, 50, 100, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(60)\nMOTOmove19(65, 15, 149, 65, 90, 55, 127, 96, 140, 180, 50, 105, 110, 145, 73, 105, 127, 78, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(80)\nMOTOmove19(65, 15, 149, 105, 90, 55, 127, 100, 140, 180, 50, 100, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717423979526'] = function(block) {
  let code = "robot.leju_action('抱箱子上楼梯右边移动改')\n";
  return code;
}

Blockly.Blocks['1717942602555'] = {
  init: function() {
    this.jsonInit({
      "type": "1717942602555",
      "message0": "move_right2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717942602555'] = function(block) {
  let code = "MOTOsetspeed(80)\nMOTOmove19(97, 12, 97, 105, 95, 51, 127, 100, 104, 190, 102, 100, 106, 147, 73, 100, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(96, 46, 94, 58, 95, 55, 126, 94, 104, 177, 107, 103, 105, 145, 72, 110, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(97, 12, 97, 105, 95, 51, 127, 100, 104, 190, 102, 100, 106, 147, 73, 100, 120, 40, 100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717942602555'] = function(block) {
  let code = "robot.leju_action('move_right2')\n";
  return code;
}

Blockly.Blocks['1721484906713'] = {
  init: function() {
    this.jsonInit({
      "type": "1721484906713",
      "message0": "左移720-3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721484906713'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(60)\nMOTOmove19(65, 15, 149, 93, 90, 55, 127, 89, 140, 180, 50, 145, 110, 145, 73, 102, 127, 78, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(65, 15, 149, 100, 90, 55, 127, 100, 140, 180, 50, 95, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721484906713'] = function(block) {
  let code = "robot.leju_action('左移720-3')\n";
  return code;
}

Blockly.Blocks['1721485159714'] = {
  init: function() {
    this.jsonInit({
      "type": "1721485159714",
      "message0": "抱箱右移7-19-2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721485159714'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(100)\nMOTOmove19(64, 12, 149, 60, 90, 55, 127, 100, 141, 184, 52, 105, 110, 145, 73, 105, 127, 78, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(100)\nMOTOmove19(64, 12, 149, 105, 90, 55, 127, 100, 141, 184, 52, 100, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1721485159714'] = function(block) {
  let code = "robot.leju_action('抱箱右移7-19-2')\n";
  return code;
}

Blockly.Blocks['1724086739099'] = {
  init: function() {
    this.jsonInit({
      "type": "1724086739099",
      "message0": "抱箱子1-9",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1724086739099'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 张\nMOTOsetspeed(150)\nMOTOmove19(80, 47, 147, 100, 93, 55, 124, 100, 119, 147, 50, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 47, 147, 100, 113, 90, 109, 100, 119, 147, 50, 100, 87, 111, 91, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80, 47, 147, 100, 136, 150, 62, 100, 119, 147, 50, 100, 72, 50, 138, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 47, 147, 100, 160, 150, 67, 100, 119, 147, 60, 100, 45, 50, 133, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73, 10, 158, 100, 160, 150, 67, 100, 134, 190, 51, 100, 45, 50, 133, 100, 128, 78, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(70, 10, 158, 100, 108, 132, 70, 100, 132, 190, 50, 100, 89, 69, 130, 100, 128, 78, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(70, 10, 158, 100, 90, 55, 127, 100, 132, 190, 50, 100, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1724086739099'] = function(block) {
  let code = "robot.leju_action('抱箱子1-9')\n";
  return code;
}

Blockly.Blocks['1724086758345'] = {
  init: function() {
    this.jsonInit({
      "type": "1724086758345",
      "message0": "放箱子杭",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1724086758345'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- RIGEND\nMOTOsetspeed(50)\nMOTOmove19(70, 10, 158, 100, 93, 55, 127, 100, 124, 190, 50, 100, 107, 145, 73, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(20)\nMOTOmove19(70, 10, 158, 100, 111, 150, 54, 102, 124, 190, 50, 100, 88, 51, 142, 101, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(70, 10, 158, 100, 101, 150, 42, 102, 124, 190, 50, 100, 99, 51, 158, 101, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(15)\nMOTOmove19(70, 10, 158, 101, 107, 149, 43, 100, 124, 190, 50, 101, 92, 51, 157, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(87, 12, 138, 101, 127, 149, 43, 100, 122, 185, 68, 101, 75, 51, 157, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74, 25, 137, 101, 127, 149, 43, 100, 132, 172, 68, 101, 75, 51, 157, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(74, 31, 137, 101, 127, 149, 43, 100, 132, 163, 68, 101, 75, 51, 157, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(77, 31, 138, 101, 107, 149, 43, 100, 121, 163, 68, 101, 92, 51, 157, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(5)\nMOTOmove19(79, 31, 139, 100, 111, 150, 54, 102, 120, 165, 66, 100, 88, 51, 142, 101, 128, 71, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1724086758345'] = function(block) {
  let code = "robot.leju_action('放箱子杭')\n";
  return code;
}

Blockly.Blocks['1724485588256'] = {
  init: function() {
    this.jsonInit({
      "type": "1724485588256",
      "message0": "右转6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1724485588256'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(69, 10, 149, 100, 122, 44, 165, 100, 139, 189, 51, 100, 141, 143, 113, 100, 127, 78, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(69, 10, 149, 100, 90, 55, 127, 100, 139, 189, 51, 100, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1724485588256'] = function(block) {
  let code = "robot.leju_action('右转6')\n";
  return code;
}

