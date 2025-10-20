Blockly.Blocks['1676271726460'] = {
  init: function() {
    this.jsonInit({
      "type": "1676271726460",
      "message0": "抱起方块1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676271726460'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,30,149,100,93,55,124,100,120,170,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,149,100,113,90,109,100,120,170,50,100,87,111,91,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,149,100,136,150,62,100,120,170,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(80,30,149,100,149,150,67,100,120,170,50,100,52,50,133,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,149,100,149,150,67,100,140,190,50,100,52,50,133,100,128,78,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(5)\nMOTOmove19(65,10,149,100,104,132,70,100,140,190,50,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676271749456'] = {
  init: function() {
    this.jsonInit({
      "type": "1676271749456",
      "message0": "放下方块1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676271749456'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,93,55,127,100,140,190,50,100,107,145,73,100,128,71,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,10,149,100,111,150,54,102,140,190,50,100,88,51,142,101,128,71,100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(65,10,149,100,101,150,42,102,140,190,50,100,99,51,158,101,128,71,100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,101,107,149,43,100,140,190,50,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,33,130,100,111,150,54,102,120,165,66,100,88,51,142,101,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676271775672'] = {
  init: function() {
    this.jsonInit({
      "type": "1676271775672",
      "message0": "抱箱左转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676271775672'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,10,149,95,71,55,109,95,140,190,50,105,89,145,51,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,95,80,55,109,92,140,190,50,105,81,145,51,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,10,149,100,91,55,129,100,140,190,50,100,109,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,91,55,129,100,140,190,50,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676271795032'] = {
  init: function() {
    this.jsonInit({
      "type": "1676271795032",
      "message0": "抱箱右转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676271795032'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,10,149,95,110,55,149,95,140,190,50,105,130,145,91,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,95,118,55,149,92,140,190,50,105,121,145,91,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,10,149,100,90,55,129,100,140,190,50,100,110,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,90,55,129,100,140,190,50,100,110,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676271838376'] = {
  init: function() {
    this.jsonInit({
      "type": "1676271838376",
      "message0": "抱箱前进1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676271838376'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(6)\nMOTOmove19(65,10,149,90,91,48,134,88,140,190,50,94,109,146,71,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,86,123,95,115,90,140,190,50,94,109,146,71,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,86,121,37,161,88,140,190,50,94,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,107,98,56,129,111,140,190,50,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,106,93,54,128,113,140,190,50,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,106,91,54,128,111,140,190,50,114,89,163,39,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,88,69,45,112,90,140,190,50,93,102,144,71,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,86,123,95,115,90,140,190,50,94,107,146,72,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,91,55,129,100,140,190,50,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676271852841'] = {
  init: function() {
    this.jsonInit({
      "type": "1676271852841",
      "message0": "抱箱左移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676271852841'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,149,85,112,90,115,90,140,190,50,110,107,146,70,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,149,95,93,53,131,105,140,190,50,120,116,160,68,130,128,71,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,10,149,100,93,54,134,98,140,190,50,103,107,146,76,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,100,93,55,134,95,140,190,50,100,107,145,76,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,100,93,55,134,100,140,190,50,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676271878688'] = {
  init: function() {
    this.jsonInit({
      "type": "1676271878688",
      "message0": "抱箱后退1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676271878688'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(5)\nMOTOmove19(65,10,149,90,91,48,138,88,140,190,50,94,107,146,67,92,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,86,90,95,94,90,140,190,50,94,107,146,67,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,88,71,53,114,85,140,190,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,106,93,53,134,111,140,190,50,114,87,163,33,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,106,95,53,133,113,140,190,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,107,100,56,130,109,140,190,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,107,100,56,130,109,140,190,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,86,113,37,167,90,140,190,50,94,107,147,67,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,86,90,95,95,90,140,190,50,94,105,147,69,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,93,55,133,100,140,190,50,100,107,145,67,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676271903449'] = {
  init: function() {
    this.jsonInit({
      "type": "1676271903449",
      "message0": "抱箱右移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676271903449'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,149,90,93,54,130,100,140,190,50,115,88,110,85,110,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,149,80,84,40,138,70,140,190,50,105,107,147,69,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,10,149,97,93,54,130,95,140,190,50,100,107,146,66,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,100,93,55,130,95,140,190,50,100,107,145,66,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,100,93,55,130,100,140,190,50,100,107,145,66,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676272513989'] = {
  init: function() {
    this.jsonInit({
      "type": "1676272513989",
      "message0": "上台阶",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676272513989'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,35,150,20,105,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,65,50,101,100,100,50,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,35,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100,100,180,102,79,32,137,108,100,100,20,108,121,165,70,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,108,70,10,148,108,100,70,100,111,101,142,72,110,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,105,79,32,137,108,100,70,100,107,107,160,60,112,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,79,35,130,100,100,70,100,102,107,160,65,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,98,79,35,130,95,100,70,100,98,107,160,65,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,92,79,35,130,92,100,70,100,98,121,168,63,92,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,95,55,123,100,120,170,100,100,105,145,77,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676272859220'] = {
  init: function() {
    this.jsonInit({
      "type": "1676272859220",
      "message0": "抱起10cm方块",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676272859220'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,94,55,123,100,120,170,100,100,106,145,77,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,30,60,60,60,30,100,100,100,30,60,60,60,30)\n\n\n-- 3\nMOTOsetspeed(20)\nMOTOmove19(110,155,100,100,142,145,77,100,90,45,100,100,58,55,123,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,165,10,100,142,145,77,100,100,35,190,100,58,55,123,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,165,10,100,142,145,55,100,100,35,190,100,58,55,145,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,165,10,100,142,25,125,100,100,35,190,100,58,175,75,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,185,10,100,142,25,125,100,100,15,190,100,58,175,75,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,185,10,55,158,140,55,60,100,15,190,145,42,60,145,140,128,71,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(100,185,10,50,138,150,55,60,100,15,190,150,62,50,145,140,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(55)\nMOTOmove19(100,185,10,70,128,145,75,70,100,15,190,130,72,55,125,130,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,98,142,145,77,98,100,15,100,102,58,55,123,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,185,100,98,122,40,152,98,100,15,100,102,78,160,48,102,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,185,100,100,93,55,124,100,100,15,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676272887706'] = {
  init: function() {
    this.jsonInit({
      "type": "1676272887706",
      "message0": "放下10cm方块",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676272887706'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOsetspeed(30)\nMOTOmove19(100,185,100,98,93,55,124,98,100,15,100,102,107,145,76,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,100,102,142,145,77,98,100,15,100,98,58,55,123,102,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(14)\nMOTOmove19(100,185,10,70,128,145,75,70,100,15,190,130,72,55,125,130,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(90,185,10,55,158,140,55,60,110,15,190,145,42,60,145,140,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(110,155,10,65,138,150,55,70,90,45,190,135,62,50,145,130,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(110,155,10,70,128,145,75,70,90,45,190,130,72,55,125,130,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(30)\nMOTOmove19(80,165,100,98,142,145,77,98,120,35,100,102,58,55,123,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,185,100,98,122,40,152,98,100,15,100,102,78,160,48,102,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676272913746'] = {
  init: function() {
    this.jsonInit({
      "type": "1676272913746",
      "message0": "抱方块前进",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676272913746'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(20)\nMOTOmove19(100,185,101,100,94,55,124,100,100,15,99,100,106,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(40,40,40,85,60,60,60,75,40,40,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(6)\nMOTOmove19(100,185,101,105,93,55,124,105,100,15,99,111,102,136,78,112,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(100,185,101,105,93,55,124,107,100,15,99,105,84,141,62,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,185,101,95,80,55,111,90,100,15,99,95,101,145,73,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,101,95,116,59,138,90,100,15,99,95,107,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,185,101,105,99,55,127,107,100,15,99,105,120,145,89,105,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(100,185,101,105,94,54,123,107,100,15,99,105,102,136,78,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(6)\nMOTOmove19(100,185,101,100,94,55,123,98,100,15,99,100,106,145,77,102,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676272937634'] = {
  init: function() {
    this.jsonInit({
      "type": "1676272937634",
      "message0": "抱方块左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676272937634'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(6)\nMOTOmove19(100,185,101,89,98,64,122,90,100,15,99,95,107,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,101,95,93,54,124,90,100,15,99,105,107,146,76,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(100,185,101,98,93,54,123,102,100,15,99,109,107,146,76,112,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(100,185,101,98,93,54,123,102,100,15,99,103,105,139,81,109,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(100,185,101,98,93,54,123,102,100,15,99,103,105,139,81,109,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(100,185,101,100,93,55,124,100,100,15,99,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676272964552'] = {
  init: function() {
    this.jsonInit({
      "type": "1676272964552",
      "message0": "抱10cm方块前进",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676272964552'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(20)\nMOTOmove19(100,185,101,100,94,55,124,100,100,15,99,100,106,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(40,40,40,85,60,60,60,75,40,40,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(6)\nMOTOmove19(100,185,101,105,93,55,124,105,100,15,99,111,102,136,78,112,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(100,185,101,105,93,55,124,107,100,15,99,105,84,141,62,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,185,101,95,80,55,111,90,100,15,99,95,101,145,73,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,101,95,116,59,138,90,100,15,99,95,107,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,185,101,105,99,55,127,107,100,15,99,105,120,145,89,105,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(100,185,101,105,94,54,123,107,100,15,99,105,102,136,78,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(6)\nMOTOmove19(100,185,101,100,94,55,123,98,100,15,99,100,106,145,77,102,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676272983481'] = {
  init: function() {
    this.jsonInit({
      "type": "1676272983481",
      "message0": "抱10cm方块左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676272983481'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(6)\nMOTOmove19(100,185,101,89,98,64,122,90,100,15,99,95,107,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,101,95,93,54,124,90,100,15,99,105,107,146,76,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(100,185,101,98,93,54,123,102,100,15,99,109,107,146,76,112,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(100,185,101,98,93,54,123,102,100,15,99,103,105,139,81,109,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(100,185,101,98,93,54,123,102,100,15,99,103,105,139,81,109,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(100,185,101,100,93,55,124,100,100,15,99,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676273013890'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273013890",
      "message0": "抱10cm方块后退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273013890'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(45)\nMOTOmove19(100,185,100,100,93,55,124,100,100,15,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(6)\nMOTOmove19(100,185,100,105,93,55,124,108,100,15,100,111,102,136,78,112,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(100,185,100,105,93,55,124,107,100,15,100,108,125,145,94,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,185,100,92,116,55,144,85,100,15,100,95,107,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,100,92,75,55,106,95,100,15,100,95,107,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,185,100,105,93,55,124,107,100,15,100,108,84,141,56,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,185,100,105,92,55,124,107,100,15,100,111,107,136,78,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(6)\nMOTOmove19(100,185,100,100,93,55,124,98,100,15,100,100,107,145,76,102,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1676273033322'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273033322",
      "message0": "抱10cm方块右移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273033322'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(6)\nMOTOmove19(100,185,101,105,93,55,124,108,100,15,99,111,102,136,78,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,185,100,94,93,54,124,100,100,15,100,106,107,146,76,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(100,185,100,91,93,54,124,88,100,15,100,102,107,146,77,98,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(100,185,100,97,95,61,119,91,100,15,100,102,107,146,77,98,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(100,185,100,97,95,61,119,91,100,15,100,102,107,146,77,98,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(100,185,100,100,93,55,124,100,100,15,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1677554174806'] = {
  init: function() {
    this.jsonInit({
      "type": "1677554174806",
      "message0": "翻墙稳定1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1677554174806'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(90,105,190,100,128,10,170,100,110,95,10,100,72,190,30,100,128,71,100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(90,10,190,100,108,10,170,100,110,190,10,100,92,190,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,118,10,170,100,110,190,10,100,82,190,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,128,10,169,100,110,190,10,100,72,190,31,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90,10,190,100,128,10,168,100,110,190,10,100,72,190,32,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90,10,190,100,128,10,164,100,110,190,10,100,72,190,36,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90,10,190,100,130,10,164,100,110,190,10,100,70,190,36,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90,10,190,100,130,10,161,100,110,190,10,100,70,190,39,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90,10,190,100,130,10,159,100,110,190,10,100,70,190,41,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90,10,190,100,132,10,159,100,110,190,10,100,68,190,41,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90,10,190,100,132,10,157,100,110,190,10,100,68,190,43,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90,10,190,100,132,10,154,100,110,190,10,100,68,190,46,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(87,14,190,100,132,10,154,100,113,186,10,100,68,190,46,100,128,71,100)\nMOTOwait()\nDelayMs(1000)\nMOTOrigid16(90,90,100,30,60,60,60,30,90,90,100,30,60,60,60,30)\nMOTOsetspeed(20)\nMOTOmove19(50,50,190,100,132,10,154,100,150,150,10,100,68,190,46,100,128,71,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(50,50,165,100,10,95,108,100,150,150,35,100,65,190,40,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(50,50,165,100,10,95,108,100,150,150,35,100,165,190,40,100,128,71,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 修改\nMOTOsetspeed(135)\nMOTOmove19(43,40,190,100,10,95,108,100,166,160,10,100,190,175,10,100,128,71,100)\nMOTOwait()\n\n\n-- 8\nMOTOsetspeed(99)\nMOTOmove19(50,50,190,100,90,95,170,100,150,150,10,100,110,105,30,100,128,71,100)\nMOTOwait()\n\n\n-- 9\nMOTOsetspeed(40)\nMOTOmove19(89,182,110,100,10,95,93,100,111,18,90,100,190,105,107,100,128,71,100)\nMOTOwait()\n\n\n-- 10\nMOTOsetspeed(40)\nMOTOmove19(90,160,190,100,10,95,63,100,110,40,10,100,190,105,137,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)\n\n\n-- 12\nMOTOsetspeed(24)\nMOTOmove19(90,50,190,100,142,145,77,100,110,150,10,100,58,55,123,100,128,71,100)\nMOTOwait()\n\n\n-- 13\nMOTOsetspeed(24)\nMOTOmove19(90,50,190,100,142,145,77,100,110,150,10,100,58,55,123,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(24)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680500183760'] = {
  init: function() {
    this.jsonInit({
      "type": "1680500183760",
      "message0": "抓",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680500183760'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,30,149,100,93,55,124,100,120,170,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,149,100,113,90,109,100,120,170,50,100,87,111,91,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,149,100,136,150,62,100,120,170,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(80,30,149,100,149,150,67,100,120,170,50,100,52,50,133,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,100,149,150,67,100,140,180,50,100,52,50,133,100,128,78,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(5)\nMOTOmove19(65,20,149,100,104,132,70,100,140,180,50,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680500221546'] = {
  init: function() {
    this.jsonInit({
      "type": "1680500221546",
      "message0": "放",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680500221546'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,100,93,55,127,100,140,180,50,100,107,145,73,100,128,71,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,100,111,150,54,102,140,180,50,100,88,51,142,101,128,71,100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,100,101,150,42,102,140,180,50,100,99,51,158,101,128,71,100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(65,20,149,101,107,149,43,100,140,180,50,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,33,130,100,111,150,54,102,120,165,66,100,88,51,142,101,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680500267955'] = {
  init: function() {
    this.jsonInit({
      "type": "1680500267955",
      "message0": "左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680500267955'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(65,20,149,85,112,90,115,90,140,180,50,110,107,146,70,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,20,149,95,93,53,131,105,140,180,50,120,116,160,68,130,128,71,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,20,149,100,93,54,134,98,140,180,50,103,107,146,76,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,20,149,100,93,55,134,95,140,180,50,100,107,145,76,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,20,149,100,93,55,134,100,140,180,50,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680500293632'] = {
  init: function() {
    this.jsonInit({
      "type": "1680500293632",
      "message0": "右移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680500293632'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(65,20,149,90,93,54,130,100,140,180,50,115,88,110,85,110,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,20,149,80,84,40,138,70,140,180,50,105,107,147,69,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,20,149,97,93,54,130,95,140,180,50,100,107,146,66,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,20,149,100,93,55,130,95,140,180,50,100,107,145,66,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,20,149,100,93,55,130,100,140,180,50,100,107,145,66,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680500322955'] = {
  init: function() {
    this.jsonInit({
      "type": "1680500322955",
      "message0": "前进",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680500322955'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(6)\nMOTOmove19(65,20,149,90,91,48,134,88,140,180,50,94,109,146,71,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,86,123,95,115,90,140,180,50,94,109,146,71,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,86,121,37,161,88,140,180,50,94,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,20,149,107,98,56,129,111,140,180,50,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,106,93,54,128,113,140,180,50,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,106,91,54,128,111,140,180,50,114,89,163,39,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,20,149,88,69,45,112,90,140,180,50,93,102,144,71,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,86,123,95,115,90,140,180,50,94,107,146,72,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,100,91,55,129,100,140,180,50,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680500357227'] = {
  init: function() {
    this.jsonInit({
      "type": "1680500357227",
      "message0": "后退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680500357227'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(5)\nMOTOmove19(65,20,149,90,91,48,138,88,140,180,50,94,107,146,67,92,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,86,90,95,94,90,140,180,50,94,107,146,67,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,88,71,53,114,85,140,180,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,20,149,106,93,53,134,111,140,180,50,114,87,163,33,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,106,95,53,133,113,140,180,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,107,100,56,130,109,140,180,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,107,100,56,130,109,140,180,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,20,149,86,113,37,167,90,140,180,50,94,107,147,67,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,86,90,95,95,90,140,180,50,94,105,147,69,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,100,93,55,133,100,140,180,50,100,107,145,67,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680500382458'] = {
  init: function() {
    this.jsonInit({
      "type": "1680500382458",
      "message0": "左转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680500382458'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,20,149,95,71,55,109,95,140,180,50,105,89,145,51,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,20,149,95,80,55,109,92,140,180,50,105,81,145,51,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,20,149,100,91,55,129,100,140,180,50,100,109,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,100,91,55,129,100,140,180,50,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680500403091'] = {
  init: function() {
    this.jsonInit({
      "type": "1680500403091",
      "message0": "右转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680500403091'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,20,149,95,110,55,149,95,140,180,50,105,130,145,91,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,20,149,95,118,55,149,92,140,180,50,105,121,145,91,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,20,149,100,90,55,129,100,140,180,50,100,110,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,100,90,55,129,100,140,180,50,100,110,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680500531544'] = {
  init: function() {
    this.jsonInit({
      "type": "1680500531544",
      "message0": "后倒地起身1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680500531544'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,160,60,100,108,184,154,100,120,40,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,158,40,100,108,182,142,100,127,42,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680502049033'] = {
  init: function() {
    this.jsonInit({
      "type": "1680502049033",
      "message0": "趴着退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680502049033'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,100,149,38,100,120,170,100,100,99,50,159,100,128,71,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(15)\nMOTOmove19(80,30,148,100,156,150,40,100,120,170,56,100,45,50,159,100,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,30,185,100,97,87,48,100,120,170,16,100,101,111,149,100,128,71,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(15)\nMOTOmove19(80,30,148,100,156,150,40,100,120,170,56,100,45,50,159,100,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,30,185,100,97,87,48,100,120,170,16,100,101,111,149,100,128,71,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(15)\nMOTOmove19(80,30,148,100,156,150,40,100,120,170,56,100,45,50,159,100,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,30,185,100,97,87,48,100,120,170,16,100,101,111,149,100,128,71,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(15)\nMOTOmove19(80,30,148,100,156,150,40,100,120,170,56,100,45,50,159,100,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,30,185,100,97,87,48,100,120,170,16,100,101,111,149,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,185,100,152,150,41,100,120,170,16,100,49,50,156,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,149,100,151,150,56,100,120,170,56,100,51,50,144,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,142,100,143,150,54,100,120,170,60,100,58,50,144,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,142,100,110,150,47,100,120,170,60,100,90,50,151,100,128,71,100)\nMOTOwait()\nDelayMs(1000)\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(80,30,142,100,116,110,97,100,120,170,60,100,83,90,103,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680671782457'] = {
  init: function() {
    this.jsonInit({
      "type": "1680671782457",
      "message0": "后退改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680671782457'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(5)\nMOTOmove19(65,20,149,90,91,48,138,88,140,180,50,94,107,146,67,92,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,86,90,95,94,90,140,180,50,94,107,146,67,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,88,71,53,114,85,140,180,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,98,71,53,114,98,140,180,50,97,100,144,70,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,106,93,53,134,111,140,180,50,114,87,163,33,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,106,95,53,133,113,140,180,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,107,100,56,130,109,140,180,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,107,100,56,130,109,140,180,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,20,149,86,113,37,167,90,140,180,50,94,107,147,67,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,86,90,95,95,90,140,180,50,94,105,147,69,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,100,93,55,133,100,140,180,50,100,107,145,67,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680671894578'] = {
  init: function() {
    this.jsonInit({
      "type": "1680671894578",
      "message0": "后退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680671894578'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(5)\nMOTOmove19(65,20,149,90,91,48,138,88,140,180,50,94,107,146,67,92,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,86,90,95,94,90,140,180,50,94,107,146,67,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,88,71,53,114,85,140,180,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,98,71,53,114,98,140,180,50,97,100,144,70,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,106,93,53,134,111,140,180,50,114,87,163,33,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,106,95,53,133,113,140,180,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,107,100,56,130,109,140,180,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,107,100,56,130,109,140,180,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,97,100,56,130,97,140,180,50,97,129,147,86,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,86,113,37,167,90,140,180,50,94,107,147,67,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,86,90,95,95,90,140,180,50,94,105,147,69,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,100,93,55,133,100,140,180,50,100,107,145,67,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680672210596'] = {
  init: function() {
    this.jsonInit({
      "type": "1680672210596",
      "message0": "后退改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680672210596'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(5)\nMOTOmove19(65,20,149,90,91,48,138,88,140,180,50,94,107,146,67,92,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,86,90,95,94,90,140,180,50,94,107,146,67,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,88,71,53,114,85,140,180,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,98,71,53,114,98,140,180,50,97,100,144,70,99,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,106,93,53,134,111,140,180,50,114,87,163,33,111,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,106,95,53,133,113,140,180,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,107,100,56,130,109,140,180,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,107,100,56,130,109,140,180,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,97,100,56,130,97,140,180,50,97,129,147,86,98,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,70,70,70,70,70)\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,86,113,37,167,90,140,180,50,94,107,147,67,89,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,86,90,95,95,90,140,180,50,94,105,147,69,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,100,93,55,133,100,140,180,50,100,107,145,67,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680677974319'] = {
  init: function() {
    this.jsonInit({
      "type": "1680677974319",
      "message0": "右侧移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680677974319'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,80,90,55,127,100,140,190,50,100,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(45)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680678082798'] = {
  init: function() {
    this.jsonInit({
      "type": "1680678082798",
      "message0": "左侧移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680678082798'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(45)\nMOTOmove19(65,10,149,100,90,55,127,95,140,190,50,120,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680678441281'] = {
  init: function() {
    this.jsonInit({
      "type": "1680678441281",
      "message0": "左移改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680678441281'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,90,55,127,95,140,190,50,125,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(45)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680678497789'] = {
  init: function() {
    this.jsonInit({
      "type": "1680678497789",
      "message0": "右移改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680678497789'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,75,90,55,127,100,140,190,50,100,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(45)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680678690961'] = {
  init: function() {
    this.jsonInit({
      "type": "1680678690961",
      "message0": "抱方块",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680678690961'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,30,149,100,93,55,124,100,120,170,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,149,100,113,90,109,100,120,170,50,100,87,111,91,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,149,100,136,150,62,100,120,170,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(80,30,149,100,149,150,67,100,120,170,50,100,52,50,133,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,149,100,149,150,67,100,140,190,50,100,52,50,133,100,128,78,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(5)\nMOTOmove19(65,10,149,100,104,132,70,100,140,190,50,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680678871975'] = {
  init: function() {
    this.jsonInit({
      "type": "1680678871975",
      "message0": "右转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680678871975'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,100,122,44,165,100,140,190,50,100,141,143,109,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680678980356'] = {
  init: function() {
    this.jsonInit({
      "type": "1680678980356",
      "message0": "左转弯",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680678980356'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,100,53,48,90,100,140,190,50,100,75,146,43,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680679813900'] = {
  init: function() {
    this.jsonInit({
      "type": "1680679813900",
      "message0": "前进改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680679813900'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(6)\nMOTOmove19(65,10,149,95,91,48,134,80,140,190,50,98,109,146,71,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,95,123,95,115,90,140,190,50,98,109,146,71,87,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,95,121,37,161,88,140,190,50,98,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,107,98,56,129,111,140,190,50,112,131,155,88,110,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,93,54,128,113,140,190,50,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,106,91,54,128,111,140,190,50,114,89,163,39,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,95,69,45,112,90,140,190,50,98,102,144,71,89,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,95,123,95,115,90,140,190,50,98,107,146,72,87,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,91,55,129,100,140,190,50,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680680132105'] = {
  init: function() {
    this.jsonInit({
      "type": "1680680132105",
      "message0": "抱方块后退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680680132105'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(5)\nMOTOmove19(69,14,149,90,91,48,138,88,136,184,50,94,107,146,67,92,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,86,90,95,94,90,136,184,50,94,107,146,67,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,88,71,53,114,85,136,184,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,98,71,53,114,98,136,184,50,97,100,144,70,99,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,106,93,53,134,111,136,184,50,114,87,163,33,111,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,106,95,53,133,113,136,184,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,100,56,130,97,136,184,50,97,129,147,86,98,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,40,40,40,40,40,40,40,40,70,70,70,70,70)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,86,113,37,167,90,136,184,50,94,107,147,67,89,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,86,90,95,95,90,136,184,50,94,105,147,69,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,100,93,55,133,100,136,184,50,100,107,145,67,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,147,98,95,54,133,99,136,184,51,99,106,145,67,97,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680680845091'] = {
  init: function() {
    this.jsonInit({
      "type": "1680680845091",
      "message0": "后退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680680845091'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(5)\nMOTOmove19(69,14,149,98,91,48,138,84,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,98,90,95,94,90,136,184,50,99,107,146,67,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,88,71,53,114,85,136,184,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,71,53,114,111,136,184,50,104,103,143,64,103,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,93,53,134,111,136,184,50,107,87,163,33,111,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,106,95,53,133,113,136,184,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,100,56,130,97,136,184,50,97,129,147,86,92,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,40,40,40,40,40,40,40,40,70,70,70,70,70)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,86,113,37,167,90,136,184,50,97,107,147,67,89,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,86,90,95,95,90,136,184,50,97,105,147,69,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,100,93,55,133,100,136,184,50,100,107,145,67,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,147,98,95,54,133,99,136,184,51,99,106,145,67,97,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680681145338'] = {
  init: function() {
    this.jsonInit({
      "type": "1680681145338",
      "message0": "后退1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680681145338'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(5)\nMOTOmove19(69,14,149,98,91,48,138,84,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,98,90,95,94,90,136,184,50,99,107,146,67,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,88,71,53,114,85,136,184,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,71,53,114,111,136,184,50,104,103,143,64,103,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,93,53,134,111,136,184,50,107,87,163,33,111,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,106,95,53,133,113,136,184,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,100,56,130,97,136,184,50,97,129,147,86,90,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,40,40,40,40,40,40,40,40,70,70,70,70,70)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,113,37,167,90,136,184,50,97,107,147,67,89,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,95,90,95,95,90,136,184,50,97,105,147,69,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,100,93,55,133,100,136,184,50,100,107,145,67,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,147,98,95,54,133,99,136,184,51,99,106,145,67,97,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680681921528'] = {
  init: function() {
    this.jsonInit({
      "type": "1680681921528",
      "message0": "后退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680681921528'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(5)\nMOTOmove19(69,14,149,98,91,48,138,84,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,98,90,95,94,90,136,184,50,99,107,146,67,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,88,71,53,114,85,136,184,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,71,53,114,111,136,184,50,104,103,143,64,103,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,93,53,134,111,136,184,50,107,87,163,33,111,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,106,95,53,133,113,136,184,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,100,56,130,97,136,184,50,97,129,147,86,90,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,40,40,40,40,40,40,40,40,70,70,70,70,70)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,113,37,167,90,136,184,50,97,107,147,67,89,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,95,91,44,142,85,136,184,50,97,105,147,69,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,147,98,95,54,133,99,136,184,51,99,106,145,67,97,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680682109407'] = {
  init: function() {
    this.jsonInit({
      "type": "1680682109407",
      "message0": "前进",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680682109407'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(6)\nMOTOmove19(65,10,149,95,91,48,134,80,140,190,50,98,109,146,71,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,95,123,95,115,90,140,190,50,98,109,146,71,87,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,95,121,37,161,88,140,190,50,98,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,107,98,56,129,111,140,190,50,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,93,54,128,113,140,190,50,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,106,91,54,128,111,140,190,50,114,89,163,39,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,95,69,45,112,90,140,190,50,98,102,144,71,89,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,95,123,95,115,90,140,190,50,98,107,146,72,87,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,95,90,34,140,78,140,190,50,98,107,146,72,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,100,91,55,129,100,140,190,50,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680682376660'] = {
  init: function() {
    this.jsonInit({
      "type": "1680682376660",
      "message0": "前进1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680682376660'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(6)\nMOTOmove19(65,10,149,95,91,48,134,80,140,190,50,98,109,146,71,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,95,123,95,115,90,140,190,50,98,109,146,71,87,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,95,121,37,161,88,140,190,50,98,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,107,98,56,129,111,140,190,50,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,93,54,128,113,140,190,50,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,106,91,54,128,111,140,190,50,114,89,163,39,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,95,69,45,112,90,140,190,50,98,102,144,71,89,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,95,123,95,115,90,140,190,50,98,107,146,72,87,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,91,55,129,87,140,190,50,100,109,145,71,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,149,100,91,55,129,100,140,190,50,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680682620217'] = {
  init: function() {
    this.jsonInit({
      "type": "1680682620217",
      "message0": "后退1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680682620217'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(5)\nMOTOmove19(69,14,149,98,91,48,138,84,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,98,90,95,94,90,136,184,50,99,107,146,67,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,88,71,53,114,85,136,184,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,71,53,114,111,136,184,50,104,103,143,64,103,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,93,53,134,111,136,184,50,107,87,163,33,111,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,106,95,53,133,113,136,184,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,100,56,130,97,136,184,50,97,129,147,86,90,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,40,40,40,40,40,40,40,40,70,70,70,70,70)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,113,37,167,90,136,184,50,97,107,147,67,89,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,95,91,44,142,85,136,184,50,97,105,147,69,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,147,98,95,54,133,99,136,184,51,99,106,145,67,97,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680683489466'] = {
  init: function() {
    this.jsonInit({
      "type": "1680683489466",
      "message0": "后退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680683489466'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(69,14,149,98,95,50,137,84,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,98,90,95,94,90,136,184,50,99,107,146,67,87,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,88,71,53,114,85,136,184,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,71,53,114,111,136,184,50,104,103,143,64,103,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,93,53,134,111,136,184,50,107,87,163,33,111,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,106,95,53,133,113,136,184,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,100,56,130,97,136,184,50,97,129,147,86,90,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,40,40,40,40,40,40,40,40,70,70,70,70,70)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,113,37,167,90,136,184,50,97,107,147,67,89,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,97,106,84,110,90,136,184,50,97,107,147,67,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,95,91,44,142,85,136,184,50,97,105,147,69,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,147,98,95,54,133,99,136,184,51,99,106,145,67,97,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680852765786'] = {
  init: function() {
    this.jsonInit({
      "type": "1680852765786",
      "message0": "上楼梯",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680852765786'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\nMOTOsetspeed(10)\nMOTOmove19(94,79,100,85,106,79,113,75,106,100,100,100,107,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,100,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,35,150,20,105,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,65,50,101,100,100,50,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,35,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100,100,180,102,79,32,137,108,100,100,20,108,121,165,70,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,108,70,10,148,108,100,70,100,111,101,142,72,110,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,105,79,32,137,108,100,70,100,107,107,160,60,112,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,79,35,130,100,100,70,100,102,107,160,65,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,98,79,35,130,95,100,70,100,98,107,160,65,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,92,79,35,130,92,100,70,100,98,121,168,63,92,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,95,55,123,100,120,170,100,100,105,145,77,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680856939469'] = {
  init: function() {
    this.jsonInit({
      "type": "1680856939469",
      "message0": "上楼梯",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680856939469'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,85,100,100,93,55,124,80,120,114,100,100,107,145,76,90,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,35,150,20,105,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,65,50,101,100,100,50,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,35,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100,100,180,102,79,32,137,108,100,100,20,108,121,165,70,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,108,70,10,148,108,100,70,100,111,101,142,72,110,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,105,79,32,137,108,100,70,100,107,107,160,60,112,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,79,35,130,100,100,70,100,102,107,160,65,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,98,79,35,130,95,100,70,100,98,107,160,65,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,92,79,35,130,92,100,70,100,98,121,168,63,92,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,95,55,123,100,120,170,100,100,105,145,77,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680860730133'] = {
  init: function() {
    this.jsonInit({
      "type": "1680860730133",
      "message0": "上楼梯改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680860730133'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,85,100,100,93,55,124,80,120,114,100,100,107,145,76,90,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,134,150,106,100,128,71,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,35,150,20,105,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,65,50,101,100,100,50,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,35,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100,100,180,102,79,32,137,108,100,100,20,108,121,165,70,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,108,70,10,148,108,100,70,100,111,101,142,72,110,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,105,79,32,137,108,100,70,100,107,107,160,60,112,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,79,35,130,100,100,70,100,102,107,160,65,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,98,79,35,130,95,100,70,100,98,107,160,65,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,92,79,35,130,92,100,70,100,98,121,168,63,92,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,95,55,123,100,120,170,100,100,105,145,77,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680860887164'] = {
  init: function() {
    this.jsonInit({
      "type": "1680860887164",
      "message0": "上楼梯",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680860887164'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,85,100,100,93,55,124,80,120,114,100,100,107,145,76,90,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,134,150,106,100,128,71,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,35,150,20,105,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,65,50,101,100,100,50,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,35,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,128,151,102,100,128,71,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100,100,180,102,79,32,137,108,100,100,20,108,121,165,70,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,108,70,10,148,108,100,70,100,111,101,142,72,110,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,105,79,32,137,108,100,70,100,107,107,160,60,112,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,79,35,130,100,100,70,100,102,107,160,65,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,98,79,35,130,95,100,70,100,98,107,160,65,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,92,79,35,130,92,100,70,100,98,121,168,63,92,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,95,55,123,100,120,170,100,100,105,145,77,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1680861463014'] = {
  init: function() {
    this.jsonInit({
      "type": "1680861463014",
      "message0": "上楼图改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680861463014'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,35,150,20,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,56,39,94,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,65,50,101,100,100,50,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,35,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100,100,180,102,79,32,137,108,100,100,20,108,121,165,70,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,108,70,10,148,108,100,70,100,111,101,142,72,110,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,105,79,32,137,108,100,70,100,107,107,160,60,112,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,79,35,130,100,100,70,100,102,107,160,65,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,98,79,35,130,95,100,70,100,98,107,160,65,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,92,79,35,130,92,100,70,100,98,121,168,63,92,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,95,55,123,100,120,170,100,100,105,145,77,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1681954385085'] = {
  init: function() {
    this.jsonInit({
      "type": "1681954385085",
      "message0": "上楼梯改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1681954385085'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- gai\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,97,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,35,150,20,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,56,39,94,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,65,50,101,100,100,50,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,35,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100,100,180,102,79,32,137,108,100,100,20,108,121,165,70,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,108,70,10,148,108,100,70,100,111,101,142,72,110,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,105,79,32,137,108,100,70,100,107,107,160,60,112,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,79,35,130,100,100,70,100,102,107,160,65,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,98,79,35,130,95,100,70,100,98,107,160,65,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,92,79,35,130,92,100,70,100,98,121,168,63,92,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,95,55,123,100,120,170,100,100,105,145,77,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1681955103379'] = {
  init: function() {
    this.jsonInit({
      "type": "1681955103379",
      "message0": "上楼梯1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1681955103379'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,99,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,35,150,20,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,56,39,94,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,65,50,101,100,100,50,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,35,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100,100,180,102,79,32,137,108,100,100,20,108,121,165,70,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,108,70,10,148,108,100,70,100,111,101,142,72,110,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,105,79,32,137,108,100,70,100,107,107,160,60,112,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,79,35,130,100,100,70,100,102,107,160,65,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,98,79,35,130,95,100,70,100,98,107,160,65,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,92,79,35,130,92,100,70,100,98,121,168,63,92,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,95,55,123,100,120,170,100,100,105,145,77,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1681955345185'] = {
  init: function() {
    this.jsonInit({
      "type": "1681955345185",
      "message0": "2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1681955345185'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,99,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,35,150,20,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,56,39,94,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,65,50,101,100,100,50,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,35,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,99,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100,100,180,102,79,32,137,108,100,100,20,108,121,165,70,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,108,70,10,148,108,100,70,100,111,101,142,72,110,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,105,79,32,137,108,100,70,100,107,107,160,60,112,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,79,35,130,100,100,70,100,102,107,160,65,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,98,79,35,130,95,100,70,100,98,107,160,65,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,92,79,35,130,92,100,70,100,98,121,168,63,92,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,95,55,123,100,120,170,100,100,105,145,77,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1681956168548'] = {
  init: function() {
    this.jsonInit({
      "type": "1681956168548",
      "message0": "3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1681956168548'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,99,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,35,150,20,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,56,39,94,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,65,50,101,100,100,50,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,35,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,99,136,145,113,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100,100,180,102,79,32,137,108,100,100,20,108,121,165,70,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,108,70,10,148,108,100,70,100,111,101,142,72,110,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,105,79,32,137,108,100,70,100,107,107,160,60,112,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,79,35,130,100,100,70,100,102,107,160,65,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,98,79,35,130,95,100,70,100,98,107,160,65,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,92,79,35,130,92,100,70,100,98,121,168,63,92,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,95,55,123,100,120,170,100,100,105,145,77,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1681957031129'] = {
  init: function() {
    this.jsonInit({
      "type": "1681957031129",
      "message0": "4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1681957031129'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,99,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,35,150,20,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,56,39,94,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,65,50,101,100,100,50,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,35,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,99,136,145,113,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100,100,180,102,79,32,137,108,100,100,20,108,121,165,70,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,108,70,10,148,108,100,70,100,111,101,142,72,110,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,105,79,32,137,108,100,70,100,107,107,160,60,112,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,79,35,130,100,100,70,100,102,107,160,65,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,98,79,35,130,95,100,70,100,98,107,160,65,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,92,79,35,130,92,100,70,100,98,121,168,63,92,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,95,55,123,100,120,170,100,100,105,145,77,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Blocks['1691386592954'] = {
  init: function() {
    this.jsonInit({
      "type": "1691386592954",
      "message0": "抱大箱子右移改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691386592954'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(6)\nMOTOmove19(100,30,101,105,93,55,124,108,100,170,99,111,102,136,78,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,30,100,94,93,54,124,100,100,170,100,106,107,146,76,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(100,30,100,91,93,54,124,88,100,170,100,102,107,146,77,98,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(100,30,100,97,95,61,119,91,100,170,100,102,107,146,77,98,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(100,30,100,97,95,61,119,91,100,170,100,102,107,146,77,98,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(100,30,100,100,93,55,124,100,100,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691386592954'] = function(block) {
  let code = "robot.leju_action('抱大箱子右移改')\n";
  return code;
}

Blockly.Blocks['1691386757880'] = {
  init: function() {
    this.jsonInit({
      "type": "1691386757880",
      "message0": "抱大箱子左移改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691386757880'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(6)\nMOTOmove19(80,30,100,89,98,64,122,90,120,170,99,95,107,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,95,93,54,124,90,120,170,99,105,107,146,76,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(80,30,101,98,93,54,123,102,120,170,99,109,107,146,76,112,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(80,30,101,98,93,54,123,102,120,170,99,103,105,139,81,109,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(80,30,101,98,93,54,123,102,120,170,99,103,105,139,81,109,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(80,30,101,100,93,55,124,100,120,170,99,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691386757880'] = function(block) {
  let code = "robot.leju_action('抱大箱子左移改')\n";
  return code;
}

Blockly.Blocks['1691387100677'] = {
  init: function() {
    this.jsonInit({
      "type": "1691387100677",
      "message0": "抱大箱子右移改2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691387100677'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(6)\nMOTOmove19(80,30,101,105,93,55,124,108,100,170,99,111,102,136,78,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,94,93,54,124,100,100,170,100,106,107,146,76,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(80,30,100,91,93,54,124,88,100,170,100,102,107,146,77,98,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(80,30,100,97,95,61,119,91,100,170,100,102,107,146,77,98,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(80,30,100,97,95,61,119,91,100,170,100,102,107,146,77,98,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(80,30,100,100,93,55,124,100,100,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691387100677'] = function(block) {
  let code = "robot.leju_action('抱大箱子右移改2')\n";
  return code;
}

Blockly.Blocks['1691411759706'] = {
  init: function() {
    this.jsonInit({
      "type": "1691411759706",
      "message0": "右移改1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691411759706'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,75,90,55,127,100,140,190,50,125,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(45)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691411759706'] = function(block) {
  let code = "robot.leju_action('右移改1')\n";
  return code;
}

Blockly.Blocks['1691412063019'] = {
  init: function() {
    this.jsonInit({
      "type": "1691412063019",
      "message0": "右移改1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691412063019'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,75,90,55,127,100,140,190,50,100,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(50)\nMOTOmove19(65,10,149,110,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691412063019'] = function(block) {
  let code = "robot.leju_action('右移改1')\n";
  return code;
}

Blockly.Blocks['1691412130905'] = {
  init: function() {
    this.jsonInit({
      "type": "1691412130905",
      "message0": "右移改2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691412130905'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,75,90,55,127,100,140,190,50,100,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(50)\nMOTOmove19(65,10,149,105,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691412130905'] = function(block) {
  let code = "robot.leju_action('右移改2')\n";
  return code;
}

Blockly.Blocks['1691990319507'] = {
  init: function() {
    this.jsonInit({
      "type": "1691990319507",
      "message0": "抱大箱子左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691990319507'] = function(block) {
  let code = "MOTOrigid16(100,185,100,65,65,65,65,65,100,15,100,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,95,71,55,109,95,100,15,100,105,89,145,51,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,100,95,80,55,109,92,100,15,100,105,81,145,51,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,100,91,55,129,100,100,15,100,100,109,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(100,185,100,100,91,55,129,100,100,15,100,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691990319507'] = function(block) {
  let code = "robot.leju_action('抱大箱子左移')\n";
  return code;
}

Blockly.Blocks['1691990472177'] = {
  init: function() {
    this.jsonInit({
      "type": "1691990472177",
      "message0": "抱大箱子右移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691990472177'] = function(block) {
  let code = "MOTOrigid16(100,185,100,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,95,110,55,149,95,140,190,50,105,130,145,91,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,100,95,118,55,149,92,140,190,50,105,121,145,91,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,100,90,55,129,100,140,190,50,100,110,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(100,185,100,100,90,55,129,100,140,190,50,100,110,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691990472177'] = function(block) {
  let code = "robot.leju_action('抱大箱子右移1')\n";
  return code;
}

Blockly.Blocks['1691990533054'] = {
  init: function() {
    this.jsonInit({
      "type": "1691990533054",
      "message0": "抱大箱子右移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691990533054'] = function(block) {
  let code = "MOTOrigid16(100,185,100,65,65,65,65,65,100,15,100,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,95,110,55,149,95,100,15,100,105,130,145,91,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,100,95,118,55,149,92,100,15,100,105,121,145,91,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,100,90,55,129,100,100,15,100,100,110,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(100,185,100,100,90,55,129,100,100,15,100,100,110,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691990533054'] = function(block) {
  let code = "robot.leju_action('抱大箱子右移')\n";
  return code;
}

Blockly.Blocks['1691990791196'] = {
  init: function() {
    this.jsonInit({
      "type": "1691990791196",
      "message0": "报大箱子左移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691990791196'] = function(block) {
  let code = "MOTOrigid16(100,185,100,65,93,65,65,65,100,15,100,65,107,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,95,93,55,109,95,100,15,100,105,107,145,51,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,100,95,93,55,109,92,100,15,100,105,107,145,51,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,100,93,55,129,100,100,15,100,100,107,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(100,185,100,100,93,55,129,100,100,15,100,100,107,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691990791196'] = function(block) {
  let code = "robot.leju_action('报大箱子左移1')\n";
  return code;
}

Blockly.Blocks['1691990898630'] = {
  init: function() {
    this.jsonInit({
      "type": "1691990898630",
      "message0": "抱大箱子左移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691990898630'] = function(block) {
  let code = "MOTOrigid16(100,185,100,65,93,65,65,65,100,15,100,65,107,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,95,93,55,109,95,100,15,100,105,107,145,51,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,100,95,93,55,109,92,100,15,100,105,107,145,51,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,100,93,55,129,100,100,15,100,100,107,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(100,185,100,100,93,55,129,100,100,15,100,100,107,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691990898630'] = function(block) {
  let code = "robot.leju_action('抱大箱子左移1')\n";
  return code;
}

Blockly.Blocks['1691990944540'] = {
  init: function() {
    this.jsonInit({
      "type": "1691990944540",
      "message0": "报大箱子右移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691990944540'] = function(block) {
  let code = "MOTOrigid16(100,185,100,65,93,65,65,65,100,15,100,65,107,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,95,93,55,149,95,100,15,100,105,107,145,91,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,100,95,93,55,149,92,100,15,100,105,107,145,91,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,100,93,55,129,100,100,15,100,100,107,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(100,185,100,100,93,55,129,100,100,15,100,100,107,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691990944540'] = function(block) {
  let code = "robot.leju_action('报大箱子右移1')\n";
  return code;
}

Blockly.Blocks['1692170719098'] = {
  init: function() {
    this.jsonInit({
      "type": "1692170719098",
      "message0": "抱箱后实验",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692170719098'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(69,14,149,98,95,50,137,84,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,98,90,95,94,90,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,88,71,53,114,85,136,184,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,71,53,114,111,136,184,50,104,103,143,64,103,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,93,53,134,111,136,184,50,107,87,163,33,111,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,106,95,53,133,113,136,184,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,100,56,130,97,136,184,50,97,129,147,86,90,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,40,40,40,40,40,40,40,40,70,70,70,70,70)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,113,37,167,90,136,184,50,97,107,147,67,89,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,97,106,84,110,90,136,184,50,97,107,147,67,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,95,91,44,142,85,136,184,50,97,105,147,69,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,147,98,95,54,133,99,136,184,51,99,106,145,67,97,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692170719098'] = function(block) {
  let code = "robot.leju_action('抱箱后实验')\n";
  return code;
}

Blockly.Blocks['1692170954132'] = {
  init: function() {
    this.jsonInit({
      "type": "1692170954132",
      "message0": "抱小箱后移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692170954132'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(69,14,149,98,95,50,137,84,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,98,90,95,94,90,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,88,71,53,114,85,136,184,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,71,53,114,111,136,184,50,104,103,143,64,103,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,93,53,134,111,136,184,50,107,87,163,33,111,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,106,95,53,133,113,136,184,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,94,100,56,130,97,136,184,50,97,129,147,86,90,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,40,40,40,40,40,40,40,40,70,70,70,70,70)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,113,37,167,90,136,184,50,97,107,147,67,90,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,97,106,84,110,90,136,184,50,97,107,147,67,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,95,91,44,142,85,136,184,50,97,105,147,69,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,147,98,95,54,133,99,136,184,51,99,106,145,67,97,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692170954132'] = function(block) {
  let code = "robot.leju_action('抱小箱后移')\n";
  return code;
}

Blockly.Blocks['1692171212901'] = {
  init: function() {
    this.jsonInit({
      "type": "1692171212901",
      "message0": "抱小箱后移改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692171212901'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(69,14,149,98,95,50,137,84,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,98,90,95,94,90,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,88,71,53,114,85,136,184,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,71,53,114,107,136,184,50,104,103,143,64,103,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,93,53,134,111,136,184,50,107,87,163,33,111,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,106,95,53,133,113,136,184,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,94,100,56,130,97,136,184,50,97,129,147,86,94,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,40,40,40,40,40,40,40,40,70,70,70,70,70)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,113,37,167,90,136,184,50,97,107,147,67,90,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,97,106,84,110,90,136,184,50,97,107,147,67,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,95,91,44,142,85,136,184,50,97,105,147,69,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,147,98,95,54,133,99,136,184,51,99,106,145,67,97,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692171212901'] = function(block) {
  let code = "robot.leju_action('抱小箱后移改')\n";
  return code;
}

Blockly.Blocks['1692171342201'] = {
  init: function() {
    this.jsonInit({
      "type": "1692171342201",
      "message0": "抱小箱子后逸",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692171342201'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(69,14,149,98,95,50,137,84,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,98,90,95,94,90,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,88,71,53,114,85,136,184,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,71,53,114,107,136,184,50,104,103,143,64,103,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,93,53,134,111,136,184,50,107,87,163,33,111,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,106,95,53,133,113,136,184,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,94,100,56,130,97,136,184,50,97,129,147,86,97,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,40,40,40,40,40,40,40,40,70,70,70,70,70)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,113,37,167,90,136,184,50,97,107,147,67,90,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,97,106,84,110,90,136,184,50,97,107,147,67,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,95,91,44,142,85,136,184,50,97,105,147,69,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,147,98,95,54,133,99,136,184,51,99,106,145,67,97,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692171342201'] = function(block) {
  let code = "robot.leju_action('抱小箱子后逸')\n";
  return code;
}

Blockly.Blocks['1692186589106'] = {
  init: function() {
    this.jsonInit({
      "type": "1692186589106",
      "message0": "删减后抱小箱后退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692186589106'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(69,14,149,98,95,50,137,84,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,98,90,95,94,90,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,88,71,53,114,85,136,184,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,71,53,114,107,136,184,50,104,103,143,64,103,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,93,53,134,111,136,184,50,107,87,163,33,111,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,106,95,53,133,113,136,184,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,107,100,56,130,109,136,184,50,112,129,147,86,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,94,100,56,130,97,136,184,50,97,129,147,86,97,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,40,40,40,40,40,40,40,40,70,70,70,70,70)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,97,113,37,167,90,136,184,50,97,107,147,67,97,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,97,106,84,110,90,136,184,50,97,107,147,67,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,147,98,95,54,133,99,136,184,51,99,106,145,67,97,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692186589106'] = function(block) {
  let code = "robot.leju_action('删减后抱小箱后退')\n";
  return code;
}

Blockly.Blocks['1692186785408'] = {
  init: function() {
    this.jsonInit({
      "type": "1692186785408",
      "message0": "抱小箱子后退一步",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692186785408'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(69,14,149,98,95,50,137,84,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,98,90,95,94,90,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,88,71,53,114,85,136,184,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,71,53,114,107,136,184,50,104,103,143,64,103,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,93,53,134,111,136,184,50,107,87,163,33,111,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,106,95,53,133,113,136,184,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,147,98,95,54,133,99,136,184,51,99,106,145,67,97,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692186785408'] = function(block) {
  let code = "robot.leju_action('抱小箱子后退一步')\n";
  return code;
}

Blockly.Blocks['1692868470435'] = {
  init: function() {
    this.jsonInit({
      "type": "1692868470435",
      "message0": "抱箱子右移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692868470435'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,75,90,55,127,100,140,190,50,100,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(50)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692868470435'] = function(block) {
  let code = "robot.leju_action('抱箱子右移1')\n";
  return code;
}

Blockly.Blocks['1692874112516'] = {
  init: function() {
    this.jsonInit({
      "type": "1692874112516",
      "message0": "前倒地起身1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692874112516'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,90,101,101,93,57,124,101,131,100,98,102,107,143,77,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(74,95,101,100,92,47,46,100,134,101,98,101,106,154,157,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(37,92,182,100,92,68,44,100,153,107,19,101,106,129,158,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(82,33,169,100,157,152,43,100,130,161,35,101,45,32,161,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,162,175,35,100,110,185,45,100,38,25,165,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,84,160,150,35,100,110,185,45,100,40,50,165,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(42)\nMOTOmove19(90,15,140,84,160,150,50,100,110,185,60,100,40,50,150,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,84,155,150,62,100,120,170,87,100,45,50,138,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,84,155,150,62,100,120,170,87,100,45,50,138,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,84,135,150,62,100,120,170,87,100,65,50,138,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,84,135,150,62,100,120,170,87,100,65,50,138,100,128,71,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(25)\nMOTOmove19(80,30,113,84,136,151,60,88,120,170,87,102,64,46,139,106,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,30,113,95,116,61,135,94,120,170,87,109,82,124,77,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\n";
  return code;
}

Blockly.Python['1692874112516'] = function(block) {
  let code = "robot.leju_action('前倒地起身1')\n";
  return code;
}

Blockly.Blocks['1692875156279'] = {
  init: function() {
    this.jsonInit({
      "type": "1692875156279",
      "message0": "倒地准备推1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692875156279'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,94,55,123,100,120,170,100,100,106,145,77,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,30,60,60,60,30,100,100,100,30,60,60,60,30)\n\n\n-- 3\nMOTOsetspeed(20)\nMOTOmove19(110,155,100,100,142,145,77,100,90,45,100,100,58,55,123,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,165,10,100,142,145,77,100,100,35,190,100,58,55,123,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,165,10,100,142,145,55,100,100,35,190,100,58,55,145,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(99,97,10,100,142,145,55,100,100,97,189,100,58,55,145,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(81,92,132,100,93,55,124,100,120,106,69,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692875156279'] = function(block) {
  let code = "robot.leju_action('倒地准备推1')\n";
  return code;
}

Blockly.Blocks['1692876210061'] = {
  init: function() {
    this.jsonInit({
      "type": "1692876210061",
      "message0": "推前进1_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692876210061'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(81,92,132,100,93,55,124,100,120,106,69,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81,92,132,100,80,98,60,100,120,106,69,100,119,100,138,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,76,176,99,80,53,54,99,121,128,24,99,119,145,148,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,66,99,121,127,60,99,100,126,137,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,109,190,98,99,73,66,99,109,101,10,99,100,126,137,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692876210061'] = function(block) {
  let code = "robot.leju_action('推前进1_1')\n";
  return code;
}

Blockly.Blocks['1692877220735'] = {
  init: function() {
    this.jsonInit({
      "type": "1692877220735",
      "message0": "推前进1_2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692877220735'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(73,109,190,98,99,150,54,99,109,101,10,99,100,50,148,99,128,71,99)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(74,76,176,99,80,53,54,99,121,128,24,99,119,145,148,99,128,71,99)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692877220735'] = function(block) {
  let code = "robot.leju_action('推前进1_2')\n";
  return code;
}

Blockly.Blocks['1692877816626'] = {
  init: function() {
    this.jsonInit({
      "type": "1692877816626",
      "message0": "推前进1_3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692877816626'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(40)\nMOTOmove19(73,109,190,98,99,150,54,99,109,100,10,99,100,50,148,99,128,71,99)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(40)\nMOTOmove19(74,76,176,99,80,53,54,99,121,128,24,99,119,145,148,99,128,71,99)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(40)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692877816626'] = function(block) {
  let code = "robot.leju_action('推前进1_3')\n";
  return code;
}

Blockly.Blocks['1692878108851'] = {
  init: function() {
    this.jsonInit({
      "type": "1692878108851",
      "message0": "推左转弯1_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692878108851'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,120,100,44,115,91,107,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,120,112,28,114,94,126,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692878108851'] = function(block) {
  let code = "robot.leju_action('推左转弯1_1')\n";
  return code;
}

Blockly.Blocks['1692878201082'] = {
  init: function() {
    this.jsonInit({
      "type": "1692878201082",
      "message0": "推左转弯1_2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692878201082'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,120,100,44,115,91,107,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,120,112,28,114,94,126,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692878201082'] = function(block) {
  let code = "robot.leju_action('推左转弯1_2')\n";
  return code;
}

Blockly.Blocks['1692878999389'] = {
  init: function() {
    this.jsonInit({
      "type": "1692878999389",
      "message0": "推右转弯1_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692878999389'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(73,96,164,83,100,87,123,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,70,165,82,99,60,123,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692878999389'] = function(block) {
  let code = "robot.leju_action('推右转弯1_1')\n";
  return code;
}

Blockly.Blocks['1692879123365'] = {
  init: function() {
    this.jsonInit({
      "type": "1692879123365",
      "message0": "推左转弯1_3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692879123365'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,120,100,44,115,91,107,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,120,125,28,114,94,126,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692879123365'] = function(block) {
  let code = "robot.leju_action('推左转弯1_3')\n";
  return code;
}

Blockly.Blocks['1692879344935'] = {
  init: function() {
    this.jsonInit({
      "type": "1692879344935",
      "message0": "推右转弯1_2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692879344935'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(73,96,183,83,100,87,123,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,70,183,82,99,60,123,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692879344935'] = function(block) {
  let code = "robot.leju_action('推右转弯1_2')\n";
  return code;
}

Blockly.Blocks['1692879929484'] = {
  init: function() {
    this.jsonInit({
      "type": "1692879929484",
      "message0": "推前进1_4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692879929484'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(40)\nMOTOmove19(73,109,190,98,99,150,54,99,109,100,10,99,100,50,148,99,128,71,99)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(40)\nMOTOmove19(74,76,176,99,80,30,54,99,121,128,24,99,119,165,148,99,128,71,99)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(40)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692879929484'] = function(block) {
  let code = "robot.leju_action('推前进1_4')\n";
  return code;
}

Blockly.Blocks['1692880538130'] = {
  init: function() {
    this.jsonInit({
      "type": "1692880538130",
      "message0": "推右转弯1_3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692880538130'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(73,96,183,83,100,87,123,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,74,183,82,99,60,123,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692880538130'] = function(block) {
  let code = "robot.leju_action('推右转弯1_3')\n";
  return code;
}

Blockly.Blocks['1692880865357'] = {
  init: function() {
    this.jsonInit({
      "type": "1692880865357",
      "message0": "推前进1_5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692880865357'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(40)\nMOTOmove19(73,109,190,98,99,150,54,99,109,100,10,99,100,50,148,99,128,71,99)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(40)\nMOTOmove19(74,76,176,99,80,53,54,99,121,128,24,99,119,145,148,99,128,71,99)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(40)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(84,125,99,98,99,73,124,99,106,72,98,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692880865357'] = function(block) {
  let code = "robot.leju_action('推前进1_5')\n";
  return code;
}

Blockly.Blocks['1692942386925'] = {
  init: function() {
    this.jsonInit({
      "type": "1692942386925",
      "message0": "抱起方块1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692942386925'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,93,55,124,100,120,150,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,136,150,62,100,120,150,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(80,50,149,100,149,150,58,100,120,150,50,100,52,50,142,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,15,149,100,149,150,67,100,140,180,50,100,52,50,133,100,128,78,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,15,149,100,104,132,70,100,140,180,50,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692942386925'] = function(block) {
  let code = "robot.leju_action('抱起方块1')\n";
  return code;
}

Blockly.Blocks['1692942534360'] = {
  init: function() {
    this.jsonInit({
      "type": "1692942534360",
      "message0": "放下方块1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692942534360'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,93,55,127,100,140,180,50,100,107,145,73,100,128,71,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,15,149,100,111,150,54,102,140,180,50,100,88,51,142,101,128,71,100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(65,15,149,100,101,150,42,102,140,180,50,100,99,51,158,101,128,71,100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(65,15,149,101,107,149,43,100,140,180,50,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,33,130,100,111,150,54,102,120,165,66,100,88,51,142,101,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692942534360'] = function(block) {
  let code = "robot.leju_action('放下方块1')\n";
  return code;
}

Blockly.Blocks['1692942625008'] = {
  init: function() {
    this.jsonInit({
      "type": "1692942625008",
      "message0": "抱箱子左移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692942625008'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(45)\nMOTOmove19(65,10,149,100,90,55,127,95,140,190,50,125,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692942625008'] = function(block) {
  let code = "robot.leju_action('抱箱子左移1')\n";
  return code;
}

Blockly.Blocks['1692942679105'] = {
  init: function() {
    this.jsonInit({
      "type": "1692942679105",
      "message0": "抱箱子右移1_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692942679105'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(65,10,149,75,90,55,127,100,140,190,50,100,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692942679105'] = function(block) {
  let code = "robot.leju_action('抱箱子右移1_1')\n";
  return code;
}

Blockly.Blocks['1692943250540'] = {
  init: function() {
    this.jsonInit({
      "type": "1692943250540",
      "message0": "抱箱子左移1_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692943250540'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(45)\nMOTOmove19(65,15,149,100,90,55,127,95,140,180,50,125,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,10,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692943250540'] = function(block) {
  let code = "robot.leju_action('抱箱子左移1_1')\n";
  return code;
}

Blockly.Blocks['1692943284147'] = {
  init: function() {
    this.jsonInit({
      "type": "1692943284147",
      "message0": "抱箱子右移1_2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692943284147'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(65,15,149,75,90,55,127,100,140,180,50,100,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692943284147'] = function(block) {
  let code = "robot.leju_action('抱箱子右移1_2')\n";
  return code;
}

Blockly.Blocks['1692943388587'] = {
  init: function() {
    this.jsonInit({
      "type": "1692943388587",
      "message0": "抱箱子前进1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692943388587'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(6)\nMOTOmove19(65,15,149,95,91,48,134,80,140,180,50,98,109,146,71,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,95,123,95,115,90,140,180,50,98,109,146,71,87,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,95,121,37,161,88,140,180,50,98,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,15,149,107,98,56,129,111,140,180,50,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,93,54,128,113,140,180,50,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,106,91,54,128,111,140,180,50,114,89,163,39,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,15,149,95,69,45,112,90,140,180,50,98,102,144,71,89,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,95,123,95,115,90,140,180,50,98,107,146,72,87,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(15)\nMOTOmove19(65,15,149,100,91,55,129,100,140,180,50,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692943388587'] = function(block) {
  let code = "robot.leju_action('抱箱子前进1')\n";
  return code;
}

Blockly.Blocks['1692944416029'] = {
  init: function() {
    this.jsonInit({
      "type": "1692944416029",
      "message0": "抱箱子后退1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692944416029'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(69,15,149,98,95,50,137,84,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(69,15,149,98,90,95,94,90,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(69,15,149,88,71,53,114,85,136,184,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,15,149,100,71,53,114,107,136,184,50,104,103,143,64,103,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(69,15,149,100,93,53,134,111,136,184,50,107,101,163,40,106,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(69,15,147,98,95,54,133,99,136,184,51,99,103,145,67,100,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692944416029'] = function(block) {
  let code = "robot.leju_action('抱箱子后退1')\n";
  return code;
}

Blockly.Blocks['1692944475623'] = {
  init: function() {
    this.jsonInit({
      "type": "1692944475623",
      "message0": "抱箱子左转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692944475623'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(65,10,149,100,53,48,90,100,140,190,50,100,75,146,43,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692944475623'] = function(block) {
  let code = "robot.leju_action('抱箱子左转1')\n";
  return code;
}

Blockly.Blocks['1692944506385'] = {
  init: function() {
    this.jsonInit({
      "type": "1692944506385",
      "message0": "抱箱子右转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692944506385'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(25)\nMOTOmove19(65,10,149,100,122,44,165,100,140,190,50,100,141,143,109,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692944506385'] = function(block) {
  let code = "robot.leju_action('抱箱子右转1')\n";
  return code;
}

Blockly.Blocks['1692953893798'] = {
  init: function() {
    this.jsonInit({
      "type": "1692953893798",
      "message0": "推左转弯1_4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692953893798'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(73,85,143,98,99,73,124,99,120,100,44,115,91,107,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(73,85,143,98,99,73,124,99,120,125,28,114,94,126,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692953893798'] = function(block) {
  let code = "robot.leju_action('推左转弯1_4')\n";
  return code;
}

Blockly.Blocks['1692954087451'] = {
  init: function() {
    this.jsonInit({
      "type": "1692954087451",
      "message0": "推右转弯1_4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692954087451'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(73,96,160,83,100,87,123,99,121,115,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(73,74,160,82,99,60,123,99,121,115,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692954087451'] = function(block) {
  let code = "robot.leju_action('推右转弯1_4')\n";
  return code;
}

Blockly.Blocks['1692954692860'] = {
  init: function() {
    this.jsonInit({
      "type": "1692954692860",
      "message0": "推右转弯1_5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692954692860'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(73,96,145,83,100,87,123,99,121,107,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(73,74,145,82,99,60,123,99,121,107,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692954692860'] = function(block) {
  let code = "robot.leju_action('推右转弯1_5')\n";
  return code;
}

Blockly.Blocks['1692954811679'] = {
  init: function() {
    this.jsonInit({
      "type": "1692954811679",
      "message0": "推右转弯1_6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692954811679'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(73,96,155,83,100,87,123,99,121,107,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(73,74,155,82,99,60,123,99,121,107,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692954811679'] = function(block) {
  let code = "robot.leju_action('推右转弯1_6')\n";
  return code;
}

Blockly.Blocks['1692955452996'] = {
  init: function() {
    this.jsonInit({
      "type": "1692955452996",
      "message0": "推左转弯1_5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692955452996'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(73,83,143,98,99,73,124,99,120,118,44,115,91,107,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(73,83,143,98,99,73,124,99,120,118,28,114,94,126,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692955452996'] = function(block) {
  let code = "robot.leju_action('推左转弯1_5')\n";
  return code;
}

Blockly.Blocks['1692955830618'] = {
  init: function() {
    this.jsonInit({
      "type": "1692955830618",
      "message0": "推右转弯1_6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692955830618'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(73,86,145,70,100,87,123,99,121,117,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(73,86,145,70,99,60,123,99,121,117,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,86,143,98,99,73,124,99,121,117,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692955830618'] = function(block) {
  let code = "robot.leju_action('推右转弯1_6')\n";
  return code;
}

Blockly.Blocks['1692956075801'] = {
  init: function() {
    this.jsonInit({
      "type": "1692956075801",
      "message0": "推左转弯1_5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692956075801'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(73,86,143,98,99,73,124,99,120,117,60,130,91,107,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(73,86,143,98,99,73,124,99,120,117,60,130,94,126,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,86,143,98,99,73,124,99,121,117,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692956075801'] = function(block) {
  let code = "robot.leju_action('推左转弯1_5')\n";
  return code;
}

Blockly.Blocks['1692956657129'] = {
  init: function() {
    this.jsonInit({
      "type": "1692956657129",
      "message0": "推左转1_6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692956657129'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(84,125,99,98,99,73,124,99,106,72,98,130,91,107,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(84,125,99,98,99,73,124,99,106,72,98,130,94,126,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(84,125,99,98,99,73,124,99,106,72,98,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692956657129'] = function(block) {
  let code = "robot.leju_action('推左转1_6')\n";
  return code;
}

Blockly.Blocks['1692961165161'] = {
  init: function() {
    this.jsonInit({
      "type": "1692961165161",
      "message0": "推左转1_7",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692961165161'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(100,100,100,98,99,73,124,99,100,100,100,130,91,107,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(100,100,100,98,99,73,124,99,100,100,100,130,94,126,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,98,99,73,124,99,100,100,100,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692961165161'] = function(block) {
  let code = "robot.leju_action('推左转1_7')\n";
  return code;
}

Blockly.Blocks['1692961281475'] = {
  init: function() {
    this.jsonInit({
      "type": "1692961281475",
      "message0": "推右转1_7",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692961281475'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,70,100,87,123,99,100,100,100,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,70,99,60,123,99,100,100,100,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,98,99,73,124,99,100,100,100,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692961281475'] = function(block) {
  let code = "robot.leju_action('推右转1_7')\n";
  return code;
}

Blockly.Blocks['1692961428112'] = {
  init: function() {
    this.jsonInit({
      "type": "1692961428112",
      "message0": "抱箱子左移1_2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692961428112'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(45)\nMOTOmove19(65,15,149,100,90,55,127,95,140,180,50,125,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692961428112'] = function(block) {
  let code = "robot.leju_action('抱箱子左移1_2')\n";
  return code;
}

Blockly.Blocks['1692961468091'] = {
  init: function() {
    this.jsonInit({
      "type": "1692961468091",
      "message0": "抱箱子右移1_2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692961468091'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(65,15,149,75,90,55,127,100,140,180,50,100,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692961468091'] = function(block) {
  let code = "robot.leju_action('抱箱子右移1_2')\n";
  return code;
}

Blockly.Blocks['1692961776541'] = {
  init: function() {
    this.jsonInit({
      "type": "1692961776541",
      "message0": "抱小方块1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692961776541'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,93,55,124,100,120,150,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,136,150,62,100,120,150,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(80,50,149,100,149,150,58,100,120,150,50,100,52,50,142,100,128,71,100)\nMOTOwait()\n\n\n-- 2号15，10号180\nMOTOsetspeed(15)\nMOTOmove19(65,15,149,100,149,150,67,100,140,180,50,100,52,50,133,100,128,78,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,15,149,100,104,132,70,100,140,180,50,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692961776541'] = function(block) {
  let code = "robot.leju_action('抱小方块1')\n";
  return code;
}

Blockly.Blocks['1692961848078'] = {
  init: function() {
    this.jsonInit({
      "type": "1692961848078",
      "message0": "抱小方块前进1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692961848078'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(6)\nMOTOmove19(65,15,149,95,91,48,134,80,140,180,50,98,109,146,71,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,95,123,95,115,90,140,180,50,98,109,146,71,87,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,95,121,37,161,88,140,180,50,98,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,15,149,107,98,56,129,111,140,180,50,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,93,54,128,113,140,180,50,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,106,91,54,128,111,140,180,50,114,89,163,39,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,95,69,45,112,90,140,180,50,98,102,144,71,89,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,95,123,95,115,90,140,180,50,98,107,146,72,87,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,91,55,129,87,140,180,50,100,109,145,71,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,15,149,100,91,55,129,100,140,180,50,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692961848078'] = function(block) {
  let code = "robot.leju_action('抱小方块前进1')\n";
  return code;
}

Blockly.Blocks['1692961899531'] = {
  init: function() {
    this.jsonInit({
      "type": "1692961899531",
      "message0": "抱箱子左转1_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692961899531'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,53,48,90,100,140,180,50,100,75,146,43,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692961899531'] = function(block) {
  let code = "robot.leju_action('抱箱子左转1_1')\n";
  return code;
}

Blockly.Blocks['1692961939546'] = {
  init: function() {
    this.jsonInit({
      "type": "1692961939546",
      "message0": "抱箱子右转1_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692961939546'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,122,44,165,100,140,180,50,100,141,143,109,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692961939546'] = function(block) {
  let code = "robot.leju_action('抱箱子右转1_1')\n";
  return code;
}

Blockly.Blocks['1692962300624'] = {
  init: function() {
    this.jsonInit({
      "type": "1692962300624",
      "message0": "推左转1_8",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692962300624'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(100,100,100,98,99,73,124,99,100,100,100,130,91,107,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(100,100,100,98,99,73,124,99,100,100,100,130,94,130,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,98,99,73,124,99,100,100,100,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692962300624'] = function(block) {
  let code = "robot.leju_action('推左转1_8')\n";
  return code;
}

Blockly.Blocks['1692962935941'] = {
  init: function() {
    this.jsonInit({
      "type": "1692962935941",
      "message0": "右移一小步",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692962935941'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(15)\nMOTOmove19(80,30,101,105,93,55,124,108,120,170,99,111,102,136,78,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,94,93,54,124,100,120,170,100,106,107,146,76,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(80,30,100,91,93,54,124,88,120,170,100,102,107,146,77,98,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(15)\nMOTOmove19(80,30,100,97,95,61,119,91,120,170,100,102,107,146,77,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(6)\nMOTOmove19(80,30,100,105,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692962935941'] = function(block) {
  let code = "robot.leju_action('右移一小步')\n";
  return code;
}

Blockly.Blocks['1692963072300'] = {
  init: function() {
    this.jsonInit({
      "type": "1692963072300",
      "message0": "左移一小步",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692963072300'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(15)\nMOTOmove19(80,30,100,89,98,64,122,90,120,170,99,95,107,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,95,93,54,124,90,120,170,99,105,107,146,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,30,101,98,93,54,123,102,120,170,99,109,107,146,76,112,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(80,30,101,98,93,54,123,102,120,170,99,103,105,139,81,109,128,71,100)\nMOTOwait()\nMOTOsetspeed(6)\nMOTOmove19(80,30,101,100,93,55,124,100,120,170,99,95,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692963072300'] = function(block) {
  let code = "robot.leju_action('左移一小步')\n";
  return code;
}

Blockly.Blocks['1692963317266'] = {
  init: function() {
    this.jsonInit({
      "type": "1692963317266",
      "message0": "抱箱子左移1_3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692963317266'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(45)\nMOTOmove19(65,15,149,100,90,55,127,95,140,180,50,125,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692963317266'] = function(block) {
  let code = "robot.leju_action('抱箱子左移1_3')\n";
  return code;
}

Blockly.Blocks['1692963363919'] = {
  init: function() {
    this.jsonInit({
      "type": "1692963363919",
      "message0": "抱箱子右移1_3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692963363919'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(65,15,149,75,90,55,127,100,140,180,50,100,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,105,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692963363919'] = function(block) {
  let code = "robot.leju_action('抱箱子右移1_3')\n";
  return code;
}

Blockly.Blocks['1692963510399'] = {
  init: function() {
    this.jsonInit({
      "type": "1692963510399",
      "message0": "抱箱子左移1_4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692963510399'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(45)\nMOTOmove19(65,15,149,100,90,55,127,95,140,180,50,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692963510399'] = function(block) {
  let code = "robot.leju_action('抱箱子左移1_4')\n";
  return code;
}

Blockly.Blocks['1692963585601'] = {
  init: function() {
    this.jsonInit({
      "type": "1692963585601",
      "message0": "抱箱子右移1_4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692963585601'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(65,15,149,65,90,55,127,100,140,180,50,100,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,105,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692963585601'] = function(block) {
  let code = "robot.leju_action('抱箱子右移1_4')\n";
  return code;
}

Blockly.Blocks['1692963737814'] = {
  init: function() {
    this.jsonInit({
      "type": "1692963737814",
      "message0": "抱箱子右移1_5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692963737814'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,65,90,55,127,100,140,180,50,100,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,105,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692963737814'] = function(block) {
  let code = "robot.leju_action('抱箱子右移1_5')\n";
  return code;
}

Blockly.Blocks['1692963767440'] = {
  init: function() {
    this.jsonInit({
      "type": "1692963767440",
      "message0": "抱箱子左移1_5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692963767440'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,100,90,55,127,95,140,180,50,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692963767440'] = function(block) {
  let code = "robot.leju_action('抱箱子左移1_5')\n";
  return code;
}

Blockly.Blocks['1692963863778'] = {
  init: function() {
    this.jsonInit({
      "type": "1692963863778",
      "message0": "抱箱子右移1_6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692963863778'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,65,90,55,127,98,140,180,50,100,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,105,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692963863778'] = function(block) {
  let code = "robot.leju_action('抱箱子右移1_6')\n";
  return code;
}

Blockly.Blocks['1692964204087'] = {
  init: function() {
    this.jsonInit({
      "type": "1692964204087",
      "message0": "放小方块1_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692964204087'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,93,55,127,100,140,180,50,100,107,145,73,100,128,71,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,15,149,100,111,150,54,102,140,180,50,100,88,51,142,101,128,71,100)\nMOTOwait()\n\n\n-- 放\nMOTOsetspeed(5)\nMOTOmove19(65,15,149,101,120,149,43,100,140,180,50,101,77,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(10)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692964204087'] = function(block) {
  let code = "robot.leju_action('放小方块1_1')\n";
  return code;
}

Blockly.Blocks['1692964259488'] = {
  init: function() {
    this.jsonInit({
      "type": "1692964259488",
      "message0": "f放小方块1_2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692964259488'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,93,55,127,100,140,180,50,100,107,145,73,100,128,71,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,15,149,100,111,150,54,102,140,180,50,100,88,51,142,101,128,71,100)\nMOTOwait()\n\n\n-- 放\nMOTOsetspeed(5)\nMOTOmove19(65,15,149,101,120,149,43,100,140,180,50,101,77,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(5)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692964259488'] = function(block) {
  let code = "robot.leju_action('f放小方块1_2')\n";
  return code;
}

Blockly.Blocks['1692964697687'] = {
  init: function() {
    this.jsonInit({
      "type": "1692964697687",
      "message0": "抱箱子右移1_6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692964697687'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,65,90,55,127,98,140,180,50,105,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,105,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692964697687'] = function(block) {
  let code = "robot.leju_action('抱箱子右移1_6')\n";
  return code;
}

Blockly.Blocks['1692964732628'] = {
  init: function() {
    this.jsonInit({
      "type": "1692964732628",
      "message0": "放小方块1_3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692964732628'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,93,55,127,100,140,180,50,100,107,145,73,100,128,71,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,15,149,100,111,150,54,102,140,180,50,100,88,51,142,101,128,71,100)\nMOTOwait()\n\n\n-- 放\nMOTOsetspeed(10)\nMOTOmove19(65,15,149,101,120,149,43,100,140,180,50,101,77,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(5)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692964732628'] = function(block) {
  let code = "robot.leju_action('放小方块1_3')\n";
  return code;
}

Blockly.Blocks['1692964990964'] = {
  init: function() {
    this.jsonInit({
      "type": "1692964990964",
      "message0": "抱箱子左移1_5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692964990964'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,100,90,55,127,95,140,180,50,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692964990964'] = function(block) {
  let code = "robot.leju_action('抱箱子左移1_5')\n";
  return code;
}

Blockly.Blocks['1692965201218'] = {
  init: function() {
    this.jsonInit({
      "type": "1692965201218",
      "message0": "抱箱子左移1_6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692965201218'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,100,90,55,127,95,140,180,50,135,110,145,73,104,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692965201218'] = function(block) {
  let code = "robot.leju_action('抱箱子左移1_6')\n";
  return code;
}

Blockly.Blocks['1692965253232'] = {
  init: function() {
    this.jsonInit({
      "type": "1692965253232",
      "message0": "抱箱子右移1_7",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692965253232'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,65,90,55,127,96,140,180,50,105,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,105,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692965253232'] = function(block) {
  let code = "robot.leju_action('抱箱子右移1_7')\n";
  return code;
}

Blockly.Blocks['1693032322255'] = {
  init: function() {
    this.jsonInit({
      "type": "1693032322255",
      "message0": "倒楼梯",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693032322255'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,93,55,150,99,119,165,10,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,130,10,170,99,119,165,10,99,70,123,31,99,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693032322255'] = function(block) {
  let code = "robot.leju_action('倒楼梯')\n";
  return code;
}

Blockly.Blocks['1693032516777'] = {
  init: function() {
    this.jsonInit({
      "type": "1693032516777",
      "message0": "倒楼梯1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693032516777'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,93,55,150,99,119,165,10,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,81,100,128,134,160,99,119,164,118,100,71,65,38,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,90,100,128,134,160,99,119,164,116,100,71,65,38,99,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693032516777'] = function(block) {
  let code = "robot.leju_action('倒楼梯1')\n";
  return code;
}

Blockly.Blocks['1693032892998'] = {
  init: function() {
    this.jsonInit({
      "type": "1693032892998",
      "message0": "倒楼梯1_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693032892998'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,99,95,55,150,99,119,120,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,93,55,150,99,119,165,120,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,128,55,150,99,119,165,120,99,71,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,81,100,128,134,160,99,119,164,118,100,71,65,38,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,90,100,128,134,160,99,119,164,116,100,71,65,38,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693032892998'] = function(block) {
  let code = "robot.leju_action('倒楼梯1_1')\n";
  return code;
}

Blockly.Blocks['1693032970167'] = {
  init: function() {
    this.jsonInit({
      "type": "1693032970167",
      "message0": "shanglouti",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693032970167'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,99,95,55,150,99,119,120,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,93,55,150,99,119,165,120,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,128,55,150,99,119,165,120,99,71,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,81,100,128,134,160,99,119,164,118,100,71,65,38,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,90,100,128,134,160,99,119,164,116,100,71,65,38,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693032970167'] = function(block) {
  let code = "robot.leju_action('shanglouti')\n";
  return code;
}

Blockly.Blocks['1693033041330'] = {
  init: function() {
    this.jsonInit({
      "type": "1693033041330",
      "message0": "倒楼梯1_2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693033041330'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,99,95,55,150,99,119,120,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,93,55,150,99,119,165,120,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,128,55,150,99,119,165,120,99,71,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,81,100,128,134,160,99,119,164,118,100,71,65,38,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,90,100,128,134,160,99,119,164,116,100,71,65,38,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693033041330'] = function(block) {
  let code = "robot.leju_action('倒楼梯1_2')\n";
  return code;
}

Blockly.Blocks['1693033311653'] = {
  init: function() {
    this.jsonInit({
      "type": "1693033311653",
      "message0": "后倒上楼梯",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693033311653'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,99,95,55,150,99,119,120,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,93,55,150,99,119,165,120,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,128,55,150,99,119,165,120,99,71,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,81,100,128,134,160,99,119,164,118,100,71,65,38,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,90,100,128,134,160,99,119,164,116,100,71,65,38,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693033311653'] = function(block) {
  let code = "robot.leju_action('后倒上楼梯')\n";
  return code;
}

Blockly.Blocks['1693033914956'] = {
  init: function() {
    this.jsonInit({
      "type": "1693033914956",
      "message0": "前上楼梯",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693033914956'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,93,55,100,100,120,170,30,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,90,170,100,93,55,100,100,120,110,30,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,90,100,100,93,55,100,100,120,110,100,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,40,130,100,93,55,100,100,120,160,70,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,40,130,100,60,55,100,100,120,160,70,100,140,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,40,130,99,95,10,71,100,120,160,70,100,105,190,129,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693033914956'] = function(block) {
  let code = "robot.leju_action('前上楼梯')\n";
  return code;
}

Blockly.Blocks['1693034352066'] = {
  init: function() {
    this.jsonInit({
      "type": "1693034352066",
      "message0": "前上楼梯1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693034352066'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,93,55,100,100,120,170,30,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,90,170,100,93,55,100,100,120,110,30,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,90,100,100,93,55,100,100,120,110,100,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,40,130,100,93,55,100,100,120,160,70,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,40,130,100,60,55,100,100,120,160,70,100,140,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,40,130,99,95,10,71,100,120,160,70,100,105,190,129,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,90,101,101,93,57,124,101,131,100,98,102,107,143,77,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(74,95,101,100,92,47,46,100,134,101,98,101,106,154,157,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(37,92,182,100,92,68,44,100,153,107,19,101,106,129,158,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(82,33,169,100,157,150,43,100,130,161,35,101,45,50,161,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,160,150,35,100,110,185,45,100,40,50,165,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,160,150,35,100,110,185,45,100,40,50,165,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(42)\nMOTOmove19(90,15,140,100,160,150,50,100,110,185,60,100,40,50,150,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,155,150,62,100,120,170,87,100,45,50,138,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,155,150,62,100,120,170,87,100,45,50,138,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,128,71,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(25)\nMOTOmove19(80,30,113,84,136,150,60,88,120,170,87,102,64,50,139,106,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,30,113,95,116,61,135,94,120,170,87,109,82,124,77,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\n";
  return code;
}

Blockly.Python['1693034352066'] = function(block) {
  let code = "robot.leju_action('前上楼梯1')\n";
  return code;
}

Blockly.Blocks['1693035255871'] = {
  init: function() {
    this.jsonInit({
      "type": "1693035255871",
      "message0": "前倒上楼梯",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693035255871'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,93,55,100,100,120,170,30,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,85,170,100,93,55,100,100,120,115,30,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,85,100,100,93,55,100,100,120,115,100,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,130,100,93,55,100,100,120,170,70,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,130,100,60,55,100,100,120,170,70,100,140,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,130,99,95,10,71,100,120,170,70,100,105,190,129,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,90,101,101,93,57,124,101,131,100,98,102,107,143,77,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(74,85,101,100,92,47,46,100,134,115,98,101,106,154,157,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(35,85,182,100,92,68,44,100,165,115,19,101,106,129,158,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(82,33,169,100,157,150,43,100,130,161,35,101,45,50,161,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,160,150,44,100,110,185,45,100,40,50,156,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(42)\nMOTOmove19(90,15,140,100,160,150,50,100,110,185,60,100,40,50,150,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,155,150,62,100,120,170,87,100,45,50,138,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,155,150,62,100,120,170,87,100,45,50,138,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,128,71,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(25)\nMOTOmove19(80,30,100,102,93,55,124,100,120,170,100,98,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\n";
  return code;
}

Blockly.Python['1693035255871'] = function(block) {
  let code = "robot.leju_action('前倒上楼梯')\n";
  return code;
}

Blockly.Blocks['1693036294756'] = {
  init: function() {
    this.jsonInit({
      "type": "1693036294756",
      "message0": "前倒上楼梯1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693036294756'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,93,55,100,100,120,170,30,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,85,170,100,93,55,100,100,120,115,30,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,85,100,100,93,55,100,100,120,115,100,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,130,100,93,55,100,100,120,170,70,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,130,100,60,55,100,100,120,170,70,100,140,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,130,99,95,10,71,100,120,170,70,100,105,190,129,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,90,101,101,93,57,124,101,131,100,98,102,107,143,77,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,85,150,100,92,47,46,100,134,116,50,101,106,154,157,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(35,60,182,100,92,68,44,100,165,130,19,101,106,129,158,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(82,33,169,100,157,150,43,100,130,161,35,101,45,50,161,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,160,150,44,100,110,185,45,100,40,50,156,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(42)\nMOTOmove19(90,15,140,100,160,150,50,100,110,185,60,100,40,50,150,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,155,150,62,100,120,170,87,100,45,50,138,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,155,150,62,100,120,170,87,100,45,50,138,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,128,71,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(25)\nMOTOmove19(80,30,100,102,93,55,124,100,120,170,100,98,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\n";
  return code;
}

Blockly.Python['1693036294756'] = function(block) {
  let code = "robot.leju_action('前倒上楼梯1')\n";
  return code;
}

Blockly.Blocks['1693036377306'] = {
  init: function() {
    this.jsonInit({
      "type": "1693036377306",
      "message0": "后倒地起身1_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693036377306'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,160,60,100,108,184,154,100,120,40,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,158,40,100,108,182,142,100,127,42,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693036377306'] = function(block) {
  let code = "robot.leju_action('后倒地起身1_1')\n";
  return code;
}

Blockly.Blocks['1693052329410'] = {
  init: function() {
    this.jsonInit({
      "type": "1693052329410",
      "message0": "放小方块1_4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693052329410'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,93,55,127,100,140,180,50,100,107,145,73,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,111,150,50,102,140,180,50,100,88,51,153,101,128,71,100)\nMOTOwait()\n\n\n-- 放\nMOTOsetspeed(5)\nMOTOmove19(65,15,149,101,120,149,43,100,140,180,50,101,77,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(5)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693052329410'] = function(block) {
  let code = "robot.leju_action('放小方块1_4')\n";
  return code;
}

Blockly.Blocks['1693208711874'] = {
  init: function() {
    this.jsonInit({
      "type": "1693208711874",
      "message0": "抱箱子右移1_8",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693208711874'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,65,90,55,127,96,140,180,50,105,110,145,73,111,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,105,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693208711874'] = function(block) {
  let code = "robot.leju_action('抱箱子右移1_8')\n";
  return code;
}

Blockly.Blocks['1693208884535'] = {
  init: function() {
    this.jsonInit({
      "type": "1693208884535",
      "message0": "抱箱子右移1_9",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693208884535'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,65,90,55,127,96,140,180,50,105,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,105,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(150)\n";
  return code;
}

Blockly.Python['1693208884535'] = function(block) {
  let code = "robot.leju_action('抱箱子右移1_9')\n";
  return code;
}

Blockly.Blocks['1693208957629'] = {
  init: function() {
    this.jsonInit({
      "type": "1693208957629",
      "message0": "抱箱子右移2-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693208957629'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,65,90,55,127,96,140,180,50,105,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,105,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1693208957629'] = function(block) {
  let code = "robot.leju_action('抱箱子右移2-1')\n";
  return code;
}

Blockly.Blocks['1693209031177'] = {
  init: function() {
    this.jsonInit({
      "type": "1693209031177",
      "message0": "抱箱子左移1-7",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693209031177'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,100,90,55,127,95,140,180,50,135,110,145,73,104,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1693209031177'] = function(block) {
  let code = "robot.leju_action('抱箱子左移1-7')\n";
  return code;
}

Blockly.Blocks['1693209177256'] = {
  init: function() {
    this.jsonInit({
      "type": "1693209177256",
      "message0": "抱箱子左移1-8",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693209177256'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,100,90,55,127,95,140,180,50,135,110,145,73,104,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1693209177256'] = function(block) {
  let code = "robot.leju_action('抱箱子左移1-8')\n";
  return code;
}

Blockly.Blocks['1693209543661'] = {
  init: function() {
    this.jsonInit({
      "type": "1693209543661",
      "message0": "抱箱子左移1-9",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693209543661'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,90,55,127,93,140,180,50,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1693209543661'] = function(block) {
  let code = "robot.leju_action('抱箱子左移1-9')\n";
  return code;
}

Blockly.Blocks['1693209690828'] = {
  init: function() {
    this.jsonInit({
      "type": "1693209690828",
      "message0": "抱箱子左移2-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693209690828'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,90,55,127,93,140,180,50,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(150)\n";
  return code;
}

Blockly.Python['1693209690828'] = function(block) {
  let code = "robot.leju_action('抱箱子左移2-1')\n";
  return code;
}

Blockly.Blocks['1693209786460'] = {
  init: function() {
    this.jsonInit({
      "type": "1693209786460",
      "message0": "抱箱子左移2-2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693209786460'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,90,55,127,93,140,180,50,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1693209786460'] = function(block) {
  let code = "robot.leju_action('抱箱子左移2-2')\n";
  return code;
}

Blockly.Blocks['1693209905388'] = {
  init: function() {
    this.jsonInit({
      "type": "1693209905388",
      "message0": "抱箱子左移2-3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693209905388'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,90,55,127,93,140,180,50,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(300)\n";
  return code;
}

Blockly.Python['1693209905388'] = function(block) {
  let code = "robot.leju_action('抱箱子左移2-3')\n";
  return code;
}

Blockly.Blocks['1693210302324'] = {
  init: function() {
    this.jsonInit({
      "type": "1693210302324",
      "message0": "放小方块1-5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693210302324'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(20)\nMOTOmove19(65,15,149,100,93,55,127,100,140,180,50,100,107,145,73,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,15,149,100,111,150,50,102,140,180,50,100,88,51,153,101,128,71,100)\nMOTOwait()\n\n\n-- 放\nMOTOsetspeed(5)\nMOTOmove19(65,15,149,101,120,149,43,100,140,180,50,101,77,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(5)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693210302324'] = function(block) {
  let code = "robot.leju_action('放小方块1-5')\n";
  return code;
}

Blockly.Blocks['1693210981379'] = {
  init: function() {
    this.jsonInit({
      "type": "1693210981379",
      "message0": "抱箱子左转1-2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693210981379'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,50,40,100,99,140,180,50,100,75,146,43,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693210981379'] = function(block) {
  let code = "robot.leju_action('抱箱子左转1-2')\n";
  return code;
}

Blockly.Blocks['1693211126756'] = {
  init: function() {
    this.jsonInit({
      "type": "1693211126756",
      "message0": "抱箱子左移1-3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693211126756'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,50,40,100,93,140,180,50,100,75,146,43,95,127,78,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693211126756'] = function(block) {
  let code = "robot.leju_action('抱箱子左移1-3')\n";
  return code;
}

Blockly.Blocks['1693468356942'] = {
  init: function() {
    this.jsonInit({
      "type": "1693468356942",
      "message0": "倒地准备推1-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693468356942'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,94,55,123,100,120,170,100,100,106,145,77,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,30,60,60,60,30,100,100,100,30,60,60,60,30)\n\n\n-- 3\nMOTOsetspeed(20)\nMOTOmove19(110,155,100,100,142,145,77,100,90,45,100,100,58,55,123,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,165,10,100,142,145,77,100,100,35,190,100,58,55,123,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,165,10,100,142,145,55,100,100,35,190,100,58,55,145,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(99,97,10,100,142,145,55,100,100,97,189,100,58,55,145,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(81,92,132,100,93,55,124,100,120,106,69,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693468356942'] = function(block) {
  let code = "robot.leju_action('倒地准备推1-1')\n";
  return code;
}

Blockly.Blocks['1693468750637'] = {
  init: function() {
    this.jsonInit({
      "type": "1693468750637",
      "message0": "推前进1-6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693468750637'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(40)\nMOTOmove19(73,109,190,98,99,150,54,99,109,100,10,99,100,50,148,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,76,176,99,80,45,54,99,121,128,24,99,119,155,148,99,128,71,99)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(40)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(84,125,99,98,99,73,124,99,106,72,98,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693468750637'] = function(block) {
  let code = "robot.leju_action('推前进1-6')\n";
  return code;
}

Blockly.Blocks['1693483144682'] = {
  init: function() {
    this.jsonInit({
      "type": "1693483144682",
      "message0": "抱箱子左移2-4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693483144682'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,90,55,127,93,140,180,50,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(260)\n";
  return code;
}

Blockly.Python['1693483144682'] = function(block) {
  let code = "robot.leju_action('抱箱子左移2-4')\n";
  return code;
}

Blockly.Blocks['1693483988253'] = {
  init: function() {
    this.jsonInit({
      "type": "1693483988253",
      "message0": "后倒地起身1-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693483988253'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,160,60,100,108,184,154,100,120,40,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,158,40,100,108,182,142,100,127,42,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693483988253'] = function(block) {
  let code = "robot.leju_action('后倒地起身1-1')\n";
  return code;
}

Blockly.Blocks['1693484718913'] = {
  init: function() {
    this.jsonInit({
      "type": "1693484718913",
      "message0": "左移一小步1-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693484718913'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(5)\nMOTOmove19(80,30,100,89,98,64,122,90,120,170,99,95,107,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,89,98,64,122,101,120,170,99,95,107,145,76,113,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,97,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693484718913'] = function(block) {
  let code = "robot.leju_action('左移一小步1-1')\n";
  return code;
}

Blockly.Blocks['1693485014791'] = {
  init: function() {
    this.jsonInit({
      "type": "1693485014791",
      "message0": "右移一小步1-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693485014791'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(80,30,101,105,93,55,124,108,120,170,99,111,102,145,76,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,101,105,93,55,124,90,120,170,99,111,102,145,76,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,105,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693485014791'] = function(block) {
  let code = "robot.leju_action('右移一小步1-1')\n";
  return code;
}

Blockly.Blocks['1693485051153'] = {
  init: function() {
    this.jsonInit({
      "type": "1693485051153",
      "message0": "左移一小步1-2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693485051153'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,89,98,64,122,90,120,170,99,95,107,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,89,98,64,122,101,120,170,99,95,107,145,76,113,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,97,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693485051153'] = function(block) {
  let code = "robot.leju_action('左移一小步1-2')\n";
  return code;
}

Blockly.Blocks['1693485739568'] = {
  init: function() {
    this.jsonInit({
      "type": "1693485739568",
      "message0": "左移一小步1-3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693485739568'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,85,98,64,122,90,120,170,99,95,107,145,76,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,100,89,93,55,122,101,120,170,99,95,107,145,80,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,98,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693485739568'] = function(block) {
  let code = "robot.leju_action('左移一小步1-3')\n";
  return code;
}

Blockly.Blocks['1693485798677'] = {
  init: function() {
    this.jsonInit({
      "type": "1693485798677",
      "message0": "右移一小步1-2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693485798677'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(80,30,101,105,93,55,124,108,120,170,99,114,102,145,76,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,101,105,93,55,124,90,120,170,99,111,102,145,76,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,105,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693485798677'] = function(block) {
  let code = "robot.leju_action('右移一小步1-2')\n";
  return code;
}

Blockly.Blocks['1693485984745'] = {
  init: function() {
    this.jsonInit({
      "type": "1693485984745",
      "message0": "抱大方块左移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693485984745'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(100,185,100,85,98,64,122,90,100,15,99,95,107,145,76,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,185,100,89,93,55,122,101,100,15,99,95,107,145,80,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,185,100,100,93,55,124,100,100,15,100,98,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693485984745'] = function(block) {
  let code = "robot.leju_action('抱大方块左移1')\n";
  return code;
}

Blockly.Blocks['1693486071801'] = {
  init: function() {
    this.jsonInit({
      "type": "1693486071801",
      "message0": "抱大方块右移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693486071801'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(100,185,100,105,93,55,124,108,100,15,100,114,102,145,76,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,185,100,105,93,55,124,90,100,15,100,111,102,145,76,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,185,100,105,93,55,124,100,100,15,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693486071801'] = function(block) {
  let code = "robot.leju_action('抱大方块右移1')\n";
  return code;
}

Blockly.Blocks['1693486425042'] = {
  init: function() {
    this.jsonInit({
      "type": "1693486425042",
      "message0": "推前进1-7",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693486425042'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(50)\nMOTOmove19(73,109,190,98,99,150,54,99,109,100,10,99,100,50,148,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,76,176,99,80,45,54,99,121,128,24,99,119,155,148,99,128,71,99)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 3\nMOTOsetspeed(50)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(84,125,99,98,99,73,124,99,106,72,98,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693486425042'] = function(block) {
  let code = "robot.leju_action('推前进1-7')\n";
  return code;
}

Blockly.Blocks['1693642943313'] = {
  init: function() {
    this.jsonInit({
      "type": "1693642943313",
      "message0": "后倒地上楼梯1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693642943313'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,99,95,55,150,99,119,120,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,93,55,150,99,119,165,120,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,128,55,150,99,119,165,120,99,71,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,81,100,128,134,160,99,119,164,118,100,71,65,38,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,90,100,128,134,160,99,119,164,113,100,71,65,38,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693642943313'] = function(block) {
  let code = "robot.leju_action('后倒地上楼梯1')\n";
  return code;
}

Blockly.Blocks['1694766618813'] = {
  init: function() {
    this.jsonInit({
      "type": "1694766618813",
      "message0": "侧面上高台夺箱子6-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1694766618813'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,99,95,55,150,99,119,120,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(30)\nMOTOmove19(80,30,66,99,93,55,150,99,119,165,123,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,66,99,128,55,150,99,119,165,123,99,71,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,66,100,92,134,150,99,119,164,123,98,105,65,46,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,180,105,100,93,55,124,100,120,25,90,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,93,55,124,100,80,25,90,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,80,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,92,134,150,99,80,25,123,100,105,65,46,99,128,71,101)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,120,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,93,55,124,100,80,25,90,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1694766618813'] = function(block) {
  let code = "robot.leju_action('侧面上高台夺箱子6-1')\n";
  return code;
}

Blockly.Blocks['1694768363362'] = {
  init: function() {
    this.jsonInit({
      "type": "1694768363362",
      "message0": "侧面上高台夺箱子6-2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1694768363362'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,99,95,55,150,99,119,120,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(30)\nMOTOmove19(80,30,77,99,93,55,150,99,119,165,123,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,77,99,128,55,150,99,119,165,123,99,71,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 上完\nMOTOsetspeed(30)\nMOTOmove19(80,29,77,100,100,134,150,99,119,164,123,98,105,65,46,99,128,71,101)\nMOTOwait()\n\n\n-- 上完抱\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,100,133,150,99,80,25,90,100,107,65,46,99,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,100,133,150,99,80,25,123,100,105,65,46,99,128,71,100)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,80,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,100,133,150,99,80,25,123,100,105,65,46,99,128,71,100)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,80,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,93,55,124,100,80,25,90,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1694768363362'] = function(block) {
  let code = "robot.leju_action('侧面上高台夺箱子6-2')\n";
  return code;
}

Blockly.Blocks['1694769407910'] = {
  init: function() {
    this.jsonInit({
      "type": "1694769407910",
      "message0": "侧面抱箱子夺高台6-3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1694769407910'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,99,95,55,150,99,119,120,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(30)\nMOTOmove19(80,30,77,99,93,55,150,99,119,165,123,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,77,99,128,55,150,99,119,165,123,99,71,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 上完\nMOTOsetspeed(30)\nMOTOmove19(80,29,77,100,100,134,150,99,119,164,123,98,105,65,46,99,128,71,101)\nMOTOwait()\n\n\n-- 上完抱\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,87,133,130,99,80,25,90,100,113,67,70,99,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,87,133,130,99,80,25,123,100,113,67,70,99,128,71,100)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,80,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,87,133,130,99,80,25,123,100,113,67,70,99,128,71,100)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,80,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,93,55,124,100,80,25,90,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1694769407910'] = function(block) {
  let code = "robot.leju_action('侧面抱箱子夺高台6-3')\n";
  return code;
}

Blockly.Blocks['1694770232947'] = {
  init: function() {
    this.jsonInit({
      "type": "1694770232947",
      "message0": "侧面抱箱子夺高台6-4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1694770232947'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,99,95,55,150,99,119,120,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,73,99,93,55,150,99,119,165,127,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,73,99,128,55,150,99,119,165,127,99,71,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 上完\nMOTOsetspeed(30)\nMOTOmove19(80,29,73,100,100,134,150,99,119,164,127,98,105,65,46,99,128,71,101)\nMOTOwait()\n\n\n-- 上完抱\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,87,133,130,99,80,25,90,100,113,67,70,99,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,87,133,130,99,80,25,123,100,113,67,70,99,128,71,100)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,80,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,87,133,130,99,80,25,123,100,113,67,70,99,128,71,100)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,80,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,93,55,124,100,80,25,90,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1694770232947'] = function(block) {
  let code = "robot.leju_action('侧面抱箱子夺高台6-4')\n";
  return code;
}

Blockly.Blocks['1694771498564'] = {
  init: function() {
    this.jsonInit({
      "type": "1694771498564",
      "message0": "侧面抱箱子6-5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1694771498564'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,99,95,55,150,99,119,120,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,73,99,93,55,150,99,119,165,127,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,73,99,128,55,150,99,119,165,127,99,71,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 上完\nMOTOsetspeed(30)\nMOTOmove19(80,29,73,100,100,134,150,99,119,164,127,98,105,65,46,99,128,71,101)\nMOTOwait()\n\n\n-- 上完抱\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,128,133,160,99,80,25,90,100,71,65,38,99,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,128,133,160,99,80,25,123,100,71,65,38,99,128,71,100)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,80,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,87,133,130,99,80,25,123,100,113,67,70,99,128,71,100)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,80,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,93,55,124,100,80,25,90,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1694771498564'] = function(block) {
  let code = "robot.leju_action('侧面抱箱子6-5')\n";
  return code;
}

Blockly.Blocks['1694771598319'] = {
  init: function() {
    this.jsonInit({
      "type": "1694771598319",
      "message0": "中专",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1694771598319'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,99,95,55,150,99,119,120,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,73,99,93,55,150,99,119,165,127,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,73,99,128,55,150,99,119,165,127,99,71,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 上完\nMOTOsetspeed(30)\nMOTOmove19(80,29,73,100,100,134,150,99,119,164,127,98,105,65,46,99,128,71,101)\nMOTOwait()\n\n\n-- 上完抱\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,128,133,160,99,80,25,90,100,71,65,38,99,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,128,133,160,99,80,25,123,100,71,65,38,99,128,71,100)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,80,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,87,133,130,99,80,25,123,100,113,67,70,99,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,128,133,160,99,80,25,123,100,71,65,38,99,128,71,100)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,80,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,93,55,124,100,80,25,90,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1694771598319'] = function(block) {
  let code = "robot.leju_action('中专')\n";
  return code;
}

Blockly.Blocks['1694771628229'] = {
  init: function() {
    this.jsonInit({
      "type": "1694771628229",
      "message0": "侧面抱箱子",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1694771628229'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,99,95,55,150,99,119,120,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,73,99,93,55,150,99,119,165,127,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,73,99,128,55,150,99,119,165,127,99,71,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 上完\nMOTOsetspeed(30)\nMOTOmove19(80,29,73,100,100,134,150,99,119,164,127,98,105,65,46,99,128,71,101)\nMOTOwait()\n\n\n-- 上完抱\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,128,133,160,99,80,25,90,100,71,65,38,99,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,128,133,160,99,80,25,123,100,71,65,38,99,128,71,100)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,80,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,128,133,160,99,80,25,123,100,71,65,38,99,128,71,100)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,80,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,93,55,124,100,80,25,90,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1694771628229'] = function(block) {
  let code = "robot.leju_action('侧面抱箱子')\n";
  return code;
}

Blockly.Blocks['1694772132938'] = {
  init: function() {
    this.jsonInit({
      "type": "1694772132938",
      "message0": "后倒地上楼梯2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1694772132938'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,99,95,55,150,99,119,120,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,93,55,150,99,119,165,120,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,128,55,150,99,119,165,120,99,71,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,81,100,128,134,160,99,119,164,118,100,71,65,38,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,90,100,128,134,160,99,119,164,113,100,71,65,38,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1694772132938'] = function(block) {
  let code = "robot.leju_action('后倒地上楼梯2')\n";
  return code;
}

Blockly.Blocks['1717320180352'] = {
  init: function() {
    this.jsonInit({
      "type": "1717320180352",
      "message0": "抱箱子",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717320180352'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,93,55,124,100,120,150,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,50,149,100,136,150,62,100,120,150,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(80,50,149,99,132,142,57,101,120,150,50,101,63,58,142,99,128,71,100)\nMOTOwait()\n\n\n-- 2号15，10号180\nMOTOsetspeed(15)\nMOTOmove19(65,15,149,100,149,150,67,100,140,180,50,100,52,50,133,100,128,78,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,15,149,100,104,132,70,100,140,180,50,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717320180352'] = function(block) {
  let code = "robot.leju_action('抱箱子')\n";
  return code;
}

Blockly.Blocks['1717322336412'] = {
  init: function() {
    this.jsonInit({
      "type": "1717322336412",
      "message0": "抱箱子左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717322336412'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,50,40,100,93,140,180,50,100,75,146,43,95,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717322336412'] = function(block) {
  let code = "robot.leju_action('抱箱子左移')\n";
  return code;
}

Blockly.Blocks['1717322381824'] = {
  init: function() {
    this.jsonInit({
      "type": "1717322381824",
      "message0": "抱箱子左转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717322381824'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,50,40,100,93,140,180,50,100,75,146,43,95,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717322381824'] = function(block) {
  let code = "robot.leju_action('抱箱子左转')\n";
  return code;
}

Blockly.Blocks['1717322820861'] = {
  init: function() {
    this.jsonInit({
      "type": "1717322820861",
      "message0": "抱箱子左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717322820861'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,100,90,55,127,93,140,180,50,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(260)\n";
  return code;
}

Blockly.Python['1717322820861'] = function(block) {
  let code = "robot.leju_action('抱箱子左移')\n";
  return code;
}

Blockly.Blocks['1717418155305'] = {
  init: function() {
    this.jsonInit({
      "type": "1717418155305",
      "message0": "抱箱子",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717418155305'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,93,55,124,100,120,150,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,136,150,62,100,120,150,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80,50,149,100,149,150,58,100,120,150,50,100,52,50,142,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(53,23,150,100,149,150,67,100,142,180,58,100,52,50,133,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(53,23,150,100,104,132,70,100,142,180,58,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(53,23,150,100,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717418155305'] = function(block) {
  let code = "robot.leju_action('抱箱子')\n";
  return code;
}

Blockly.Blocks['1717418233188'] = {
  init: function() {
    this.jsonInit({
      "type": "1717418233188",
      "message0": "抱箱子左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717418233188'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,100,90,55,127,93,140,180,50,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(260)\n";
  return code;
}

Blockly.Python['1717418233188'] = function(block) {
  let code = "robot.leju_action('抱箱子左移')\n";
  return code;
}

Blockly.Blocks['1717418605256'] = {
  init: function() {
    this.jsonInit({
      "type": "1717418605256",
      "message0": "抱箱子左转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717418605256'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,50,40,100,93,140,180,50,100,75,146,43,95,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717418605256'] = function(block) {
  let code = "robot.leju_action('抱箱子左转')\n";
  return code;
}

Blockly.Blocks['1717419250141'] = {
  init: function() {
    this.jsonInit({
      "type": "1717419250141",
      "message0": "抱箱子左移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717419250141'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(53,23,150,100,90,55,127,93,142,180,58,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(53,23,150,100,90,55,127,100,142,180,58,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(260)\n";
  return code;
}

Blockly.Python['1717419250141'] = function(block) {
  let code = "robot.leju_action('抱箱子左移1')\n";
  return code;
}

Blockly.Blocks['1717419390355'] = {
  init: function() {
    this.jsonInit({
      "type": "1717419390355",
      "message0": "抱箱子右移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717419390355'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(53,23,150,65,90,55,127,96,142,180,58,105,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(53,23,150,105,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717419390355'] = function(block) {
  let code = "robot.leju_action('抱箱子右移')\n";
  return code;
}

Blockly.Blocks['1717419594121'] = {
  init: function() {
    this.jsonInit({
      "type": "1717419594121",
      "message0": "抱箱子左转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717419594121'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(53,23,150,100,50,40,100,93,142,180,58,100,75,146,43,95,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(53,23,150,100,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717419594121'] = function(block) {
  let code = "robot.leju_action('抱箱子左转1')\n";
  return code;
}

Blockly.Blocks['1717419680449'] = {
  init: function() {
    this.jsonInit({
      "type": "1717419680449",
      "message0": "抱箱子右转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717419680449'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(25)\nMOTOmove19(53,23,150,100,122,44,165,100,142,180,58,100,141,143,109,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(53,23,150,100,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717419680449'] = function(block) {
  let code = "robot.leju_action('抱箱子右转')\n";
  return code;
}

Blockly.Blocks['1717421385363'] = {
  init: function() {
    this.jsonInit({
      "type": "1717421385363",
      "message0": "侧面上高台",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717421385363'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(20)\nMOTOmove19(80,30,99,101,92,55,123,101,120,170,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,101,92,55,123,101,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,101,131,150,70,97,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,83,130,149,67,98,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,62,135,149,67,76,120,87,100,104,104,136,78,107,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(96,121,96,62,135,149,67,76,170,184,23,104,104,136,78,107,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,64,130,149,68,98,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717421385363'] = function(block) {
  let code = "robot.leju_action('侧面上高台')\n";
  return code;
}

Blockly.Blocks['1717423082130'] = {
  init: function() {
    this.jsonInit({
      "type": "1717423082130",
      "message0": "侧面上高台1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717423082130'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(20)\nMOTOmove19(80,30,99,101,92,55,123,101,120,170,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,101,92,55,123,101,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,101,131,150,70,97,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,83,130,149,67,98,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,95,130,148,68,97,120,87,100,101,105,137,78,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,83,130,149,67,98,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,95,130,148,68,97,120,87,100,101,105,137,78,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,83,130,149,67,98,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,95,130,148,68,97,120,87,100,101,105,137,78,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,83,130,149,67,98,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,95,130,148,68,97,120,87,100,101,105,137,78,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,83,130,149,67,98,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(96,116,106,83,130,149,67,98,172,188,16,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(96,116,106,58,124,150,60,101,172,188,16,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(96,116,106,58,124,150,60,101,172,188,16,88,83,50,158,104,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717423082130'] = function(block) {
  let code = "robot.leju_action('侧面上高台1')\n";
  return code;
}

Blockly.Blocks['1717425490570'] = {
  init: function() {
    this.jsonInit({
      "type": "1717425490570",
      "message0": "侧面上高台2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717425490570'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(150)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,142,101,148,75,134,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,120,101,143,75,121,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,101,94,92,100,100,100,120,113,176,56,77,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(100,100,100,90,115,140,58,110,100,100,100,117,115,177,56,86,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,100,99,90,115,140,58,110,165,190,10,117,115,177,56,86,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,100,99,91,114,108,83,108,167,190,10,116,115,177,56,86,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,100,99,91,114,108,83,108,167,190,10,116,115,177,56,86,128,71,99)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(97,150,100,85,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,99,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(99,10,159,107,160,91,118,111,100,190,43,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(150)\nMOTOmove19(75,10,158,107,160,91,118,111,130,190,42,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,10,158,107,160,91,118,111,130,190,42,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,10,159,107,160,91,118,111,130,190,42,110,157,169,136,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,10,159,107,160,91,118,111,130,190,42,108,41,87,109,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(75,10,159,106,142,117,99,111,130,190,42,107,62,88,98,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,10,159,101,140,120,97,102,130,190,42,102,62,81,106,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,15,149,100,104,132,70,100,140,180,50,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,65,90,55,127,96,140,180,50,105,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,105,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,65,90,55,127,96,140,180,50,105,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,105,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717425490570'] = function(block) {
  let code = "robot.leju_action('侧面上高台2')\n";
  return code;
}

Blockly.Blocks['1717507566647'] = {
  init: function() {
    this.jsonInit({
      "type": "1717507566647",
      "message0": "抱箱子左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717507566647'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(53,23,150,100,90,55,127,93,142,180,58,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(53,23,150,100,90,55,127,100,142,180,58,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(260)\n";
  return code;
}

Blockly.Python['1717507566647'] = function(block) {
  let code = "robot.leju_action('抱箱子左移')\n";
  return code;
}

Blockly.Blocks['1717507623279'] = {
  init: function() {
    this.jsonInit({
      "type": "1717507623279",
      "message0": "抱箱子左移2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717507623279'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(53,23,150,100,90,55,127,93,142,180,58,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(53,23,150,100,90,55,127,100,142,180,58,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717507623279'] = function(block) {
  let code = "robot.leju_action('抱箱子左移2')\n";
  return code;
}

Blockly.Blocks['1717508125236'] = {
  init: function() {
    this.jsonInit({
      "type": "1717508125236",
      "message0": "抱箱子1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717508125236'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(30)\nMOTOmove19(80,50,149,100,93,55,124,100,120,150,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,136,150,62,100,120,150,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80,50,149,100,149,150,58,100,120,150,50,100,52,50,142,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(52,21,149,100,149,150,67,100,142,179,57,100,52,50,133,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(53,23,150,100,104,132,70,100,142,180,58,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(53,23,150,100,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717508125236'] = function(block) {
  let code = "robot.leju_action('抱箱子1')\n";
  return code;
}

Blockly.Blocks['1717508292999'] = {
  init: function() {
    this.jsonInit({
      "type": "1717508292999",
      "message0": "放箱子",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717508292999'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(20)\nMOTOmove19(65,15,149,100,93,55,127,100,140,180,50,100,107,145,73,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,15,149,100,111,150,50,102,140,180,50,100,88,51,153,101,128,71,100)\nMOTOwait()\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(65,15,149,101,120,149,43,100,140,180,50,101,77,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717508292999'] = function(block) {
  let code = "robot.leju_action('放箱子')\n";
  return code;
}

Blockly.Blocks['1717509807480'] = {
  init: function() {
    this.jsonInit({
      "type": "1717509807480",
      "message0": "抱箱左转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717509807480'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(53,23,150,100,50,40,100,93,142,180,58,100,75,146,43,95,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(53,23,150,100,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717509807480'] = function(block) {
  let code = "robot.leju_action('抱箱左转1')\n";
  return code;
}

Blockly.Blocks['1717511102344'] = {
  init: function() {
    this.jsonInit({
      "type": "1717511102344",
      "message0": "抱箱子2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717511102344'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(30)\nMOTOmove19(80,50,149,100,93,55,124,100,120,150,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,136,150,62,100,120,150,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80,50,149,100,149,150,58,100,120,150,50,100,52,50,142,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(52,21,149,100,149,150,67,100,142,179,57,100,52,50,133,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(52,18,149,100,104,132,70,100,142,189,57,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717511102344'] = function(block) {
  let code = "robot.leju_action('抱箱子2')\n";
  return code;
}

Blockly.Blocks['1717596181007'] = {
  init: function() {
    this.jsonInit({
      "type": "1717596181007",
      "message0": "侧面上高台3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717596181007'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(20)\nMOTOmove19(80,30,99,101,92,55,123,101,120,170,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,101,92,55,123,101,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,101,131,150,70,97,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,83,130,149,67,98,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,95,130,148,68,97,120,87,100,101,105,137,78,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,83,130,149,67,98,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,95,130,148,68,97,120,87,100,101,105,137,78,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,83,130,149,67,98,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,95,130,148,68,97,120,87,100,101,105,137,78,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,83,130,149,67,98,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,95,130,148,68,97,120,87,100,101,105,137,78,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(19,18,190,83,130,149,67,98,120,87,100,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(96,108,106,83,130,149,67,98,118,118,95,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(96,116,106,84,118,130,76,98,113,100,95,104,104,138,79,140,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(96,116,106,105,138,148,78,124,172,188,16,104,104,138,79,140,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(96,116,106,90,132,149,73,116,172,188,16,104,104,138,79,140,128,71,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(96,116,106,58,124,150,60,101,172,188,16,100,105,138,79,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(96,116,106,58,124,150,60,101,172,188,16,88,83,50,158,104,128,71,100)\nMOTOwait()\n\n\n-- 上二阶\nMOTOsetspeed(30)\nMOTOmove19(96,95,106,99,129,149,58,108,167,189,16,97,77,62,134,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(95,78,100,107,93,60,116,104,119,84,100,106,107,139,82,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(97,107,100,91,85,78,95,109,111,103,105,95,105,88,130,106,128,71,105)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717596181007'] = function(block) {
  let code = "robot.leju_action('侧面上高台3')\n";
  return code;
}

Blockly.Blocks['1717677482835'] = {
  init: function() {
    this.jsonInit({
      "type": "1717677482835",
      "message0": "抱箱左转2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717677482835'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(49,18,149,100,50,40,100,93,142,180,58,100,75,146,43,95,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717677482835'] = function(block) {
  let code = "robot.leju_action('抱箱左转2')\n";
  return code;
}

Blockly.Blocks['1717677558655'] = {
  init: function() {
    this.jsonInit({
      "type": "1717677558655",
      "message0": "抱箱右转2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717677558655'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(25)\nMOTOmove19(49,18,149,100,122,44,165,100,142,180,58,100,141,143,109,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717677558655'] = function(block) {
  let code = "robot.leju_action('抱箱右转2')\n";
  return code;
}

Blockly.Blocks['1717677685304'] = {
  init: function() {
    this.jsonInit({
      "type": "1717677685304",
      "message0": "抱箱左移2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717677685304'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(49,18,149,100,90,55,127,93,142,180,58,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717677685304'] = function(block) {
  let code = "robot.leju_action('抱箱左移2')\n";
  return code;
}

Blockly.Blocks['1717677741476'] = {
  init: function() {
    this.jsonInit({
      "type": "1717677741476",
      "message0": "抱箱右移2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717677741476'] = function(block) {
  let code = "MOTOrigid16(49,18,149,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(49,18,149,65,90,55,127,96,142,180,58,105,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,105,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717677741476'] = function(block) {
  let code = "robot.leju_action('抱箱右移2')\n";
  return code;
}

Blockly.Blocks['1717678501126'] = {
  init: function() {
    this.jsonInit({
      "type": "1717678501126",
      "message0": "后倒地起身2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717678501126'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,160,60,100,108,184,154,100,120,40,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,158,40,100,108,182,142,100,127,42,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717678501126'] = function(block) {
  let code = "robot.leju_action('后倒地起身2')\n";
  return code;
}

Blockly.Blocks['1717679066146'] = {
  init: function() {
    this.jsonInit({
      "type": "1717679066146",
      "message0": "左移demo",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717679066146'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,90,55,127,93,142,180,58,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717679066146'] = function(block) {
  let code = "robot.leju_action('左移demo')\n";
  return code;
}

Blockly.Blocks['1717679384063'] = {
  init: function() {
    this.jsonInit({
      "type": "1717679384063",
      "message0": "左移demo1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717679384063'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,90,55,127,93,142,180,58,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,89,89,56,127,82,142,180,58,140,108,140,72,101,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717679384063'] = function(block) {
  let code = "robot.leju_action('左移demo1')\n";
  return code;
}

Blockly.Blocks['1717679679668'] = {
  init: function() {
    this.jsonInit({
      "type": "1717679679668",
      "message0": "左移demo2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717679679668'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(49,18,149,89,89,56,127,82,142,180,58,140,108,140,72,101,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717679679668'] = function(block) {
  let code = "robot.leju_action('左移demo2')\n";
  return code;
}

Blockly.Blocks['1717679966393'] = {
  init: function() {
    this.jsonInit({
      "type": "1717679966393",
      "message0": "右移demo",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717679966393'] = function(block) {
  let code = "MOTOrigid16(49,18,149,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,58,89,55,126,94,142,180,58,103,108,143,72,110,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,105,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717679966393'] = function(block) {
  let code = "robot.leju_action('右移demo')\n";
  return code;
}

Blockly.Blocks['1717680169022'] = {
  init: function() {
    this.jsonInit({
      "type": "1717680169022",
      "message0": "抱箱",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717680169022'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(30)\nMOTOmove19(80,50,149,100,93,55,124,100,120,150,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,136,150,62,100,120,150,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80,50,149,100,149,150,58,100,120,150,50,100,52,50,142,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(52,21,149,100,149,150,67,100,142,179,57,100,52,50,133,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(52,18,149,100,104,132,70,100,142,189,57,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717680169022'] = function(block) {
  let code = "robot.leju_action('抱箱')\n";
  return code;
}

Blockly.Blocks['1717680628857'] = {
  init: function() {
    this.jsonInit({
      "type": "1717680628857",
      "message0": "抱箱左转3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717680628857'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,100,50,40,100,93,142,180,58,100,75,146,43,95,127,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717680628857'] = function(block) {
  let code = "robot.leju_action('抱箱左转3')\n";
  return code;
}

Blockly.Blocks['1717852437616'] = {
  init: function() {
    this.jsonInit({
      "type": "1717852437616",
      "message0": "左移demo3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717852437616'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,91,91,57,128,86,142,180,58,132,107,142,66,107,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717852437616'] = function(block) {
  let code = "robot.leju_action('左移demo3')\n";
  return code;
}

Blockly.Blocks['1717853464381'] = {
  init: function() {
    this.jsonInit({
      "type": "1717853464381",
      "message0": "左移demo4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717853464381'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,73,29,133,92,142,180,58,148,105,165,52,111,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717853464381'] = function(block) {
  let code = "robot.leju_action('左移demo4')\n";
  return code;
}

Blockly.Blocks['1717854294225'] = {
  init: function() {
    this.jsonInit({
      "type": "1717854294225",
      "message0": "左移demo5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717854294225'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,101,76,10,162,90,142,180,58,152,109,162,52,115,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717854294225'] = function(block) {
  let code = "robot.leju_action('左移demo5')\n";
  return code;
}

Blockly.Blocks['1717855019497'] = {
  init: function() {
    this.jsonInit({
      "type": "1717855019497",
      "message0": "左移完整",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717855019497'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,104,94,55,122,92,142,180,58,146,106,143,77,109,128,71,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,93,55,124,100,142,180,58,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717855019497'] = function(block) {
  let code = "robot.leju_action('左移完整')\n";
  return code;
}

Blockly.Blocks['1717855153633'] = {
  init: function() {
    this.jsonInit({
      "type": "1717855153633",
      "message0": "左移完整1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717855153633'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,104,94,55,122,92,142,180,58,146,106,143,77,109,128,71,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,93,55,124,100,142,180,58,100,107,145,76,100,128,71,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717855153633'] = function(block) {
  let code = "robot.leju_action('左移完整1')\n";
  return code;
}

Blockly.Blocks['1718112218649'] = {
  init: function() {
    this.jsonInit({
      "type": "1718112218649",
      "message0": "左移加速",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718112218649'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(100)\nMOTOmove19(49,18,149,104,94,55,122,92,142,180,58,146,106,143,77,109,128,71,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(100)\nMOTOmove19(49,18,149,100,93,55,124,100,142,180,58,100,107,145,76,100,128,71,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1718112218649'] = function(block) {
  let code = "robot.leju_action('左移加速')\n";
  return code;
}

Blockly.Blocks['1718112251701'] = {
  init: function() {
    this.jsonInit({
      "type": "1718112251701",
      "message0": "右移加速",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718112251701'] = function(block) {
  let code = "MOTOrigid16(49,18,149,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(100)\nMOTOmove19(49,18,149,58,89,55,126,94,142,180,58,103,108,143,72,110,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(100)\nMOTOmove19(49,18,149,105,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1718112251701'] = function(block) {
  let code = "robot.leju_action('右移加速')\n";
  return code;
}

Blockly.Blocks['1718112715884'] = {
  init: function() {
    this.jsonInit({
      "type": "1718112715884",
      "message0": "右转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718112715884'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,100,122,44,165,100,142,180,58,100,141,143,109,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(48,18,149,100,90,56,118,101,142,179,57,99,108,143,79,98,127,78,108)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718112715884'] = function(block) {
  let code = "robot.leju_action('右转')\n";
  return code;
}

Blockly.Blocks['1718113129943'] = {
  init: function() {
    this.jsonInit({
      "type": "1718113129943",
      "message0": "左转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718113129943'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(40)\nMOTOmove19(49,18,149,100,50,40,100,93,142,180,58,100,75,146,43,95,127,78,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718113129943'] = function(block) {
  let code = "robot.leju_action('左转')\n";
  return code;
}

Blockly.Blocks['1718113628979'] = {
  init: function() {
    this.jsonInit({
      "type": "1718113628979",
      "message0": "右转plus",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718113628979'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(48,18,149,99,130,43,173,106,142,180,57,98,143,141,117,100,127,78,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(47,18,149,99,90,55,124,100,142,179,56,98,107,145,76,100,127,78,107)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1718113628979'] = function(block) {
  let code = "robot.leju_action('右转plus')\n";
  return code;
}

Blockly.Blocks['1718113842216'] = {
  init: function() {
    this.jsonInit({
      "type": "1718113842216",
      "message0": "右转测试",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718113842216'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(40)\nMOTOmove19(48,18,149,99,130,43,173,106,142,180,57,98,143,141,117,100,127,78,101)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(47,18,149,99,90,55,124,100,142,179,56,98,107,145,76,100,127,78,107)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718113842216'] = function(block) {
  let code = "robot.leju_action('右转测试')\n";
  return code;
}

Blockly.Blocks['1718114341013'] = {
  init: function() {
    this.jsonInit({
      "type": "1718114341013",
      "message0": "抱箱调整",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718114341013'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(30)\nMOTOmove19(80,50,149,100,93,55,124,100,120,150,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,136,150,62,100,120,150,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80,50,149,100,149,150,58,100,120,150,50,100,52,50,142,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(52,21,149,100,149,150,67,100,142,179,57,100,52,50,133,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(52,18,149,100,104,132,70,100,142,189,57,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(52,18,149,100,90,55,127,100,142,189,57,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718114341013'] = function(block) {
  let code = "robot.leju_action('抱箱调整')\n";
  return code;
}

Blockly.Blocks['1718114554124'] = {
  init: function() {
    this.jsonInit({
      "type": "1718114554124",
      "message0": "放调整",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718114554124'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(20)\nMOTOmove19(52,18,149,100,93,55,127,100,142,189,57,100,107,145,73,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,15,149,100,111,150,50,102,140,180,50,100,88,51,153,101,128,71,100)\nMOTOwait()\n\n\n-- 放\nMOTOsetspeed(5)\nMOTOmove19(65,15,149,101,120,149,43,100,140,180,50,101,77,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718114554124'] = function(block) {
  let code = "robot.leju_action('放调整')\n";
  return code;
}

Blockly.Blocks['1718114620161'] = {
  init: function() {
    this.jsonInit({
      "type": "1718114620161",
      "message0": "抱箱再调整",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718114620161'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(30)\nMOTOmove19(80,50,149,100,93,55,124,100,120,150,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,136,150,62,100,120,150,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,50,149,100,149,150,58,100,120,150,50,100,52,50,142,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(52,21,149,100,149,150,67,100,142,179,57,100,52,50,133,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(52,18,149,100,104,132,70,100,142,189,57,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(52,18,149,100,90,55,127,100,142,189,57,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718114620161'] = function(block) {
  let code = "robot.leju_action('抱箱再调整')\n";
  return code;
}

Blockly.Blocks['1718115188175'] = {
  init: function() {
    this.jsonInit({
      "type": "1718115188175",
      "message0": "测试",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718115188175'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(20)\nMOTOmove19(52,18,149,100,93,55,127,100,142,189,57,100,107,145,73,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,15,149,100,111,150,50,102,140,180,50,100,88,51,153,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(65,26,148,100,128,149,41,101,120,181,50,99,74,53,161,99,128,71,99)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718115188175'] = function(block) {
  let code = "robot.leju_action('测试')\n";
  return code;
}

Blockly.Blocks['1718115496509'] = {
  init: function() {
    this.jsonInit({
      "type": "1718115496509",
      "message0": "完整",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718115496509'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(20)\nMOTOmove19(52,18,149,100,93,55,127,100,142,189,57,100,107,145,73,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(52,15,149,100,111,150,50,102,142,189,57,100,88,51,153,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(65,26,148,100,128,149,41,101,120,181,50,99,74,53,161,99,128,71,99)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718115496509'] = function(block) {
  let code = "robot.leju_action('完整')\n";
  return code;
}

Blockly.Blocks['1718284073811'] = {
  init: function() {
    this.jsonInit({
      "type": "1718284073811",
      "message0": "侧面上高台1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718284073811'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(150)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,142,101,148,75,134,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,120,101,143,75,121,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,101,94,92,100,100,100,120,113,176,56,77,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(100,100,100,90,115,140,58,110,100,100,100,117,115,177,56,86,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,81,114,141,60,121,96,174,98,117,115,177,56,86,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(100,100,100,81,114,141,60,121,96,114,98,96,77,57,133,83,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(100,100,100,98,110,142,49,99,96,114,98,98,89,57,151,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(97,150,100,85,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,99,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(99,10,159,107,160,91,118,111,100,190,43,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(150)\nMOTOmove19(75,10,158,107,160,91,118,111,130,190,42,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,10,158,107,160,91,118,111,130,190,42,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,10,159,107,160,91,118,111,130,190,42,110,157,169,136,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,10,159,107,160,91,118,111,130,190,42,108,41,87,109,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(75,10,159,106,142,117,99,111,130,190,42,107,62,88,98,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,10,159,101,140,120,97,102,130,190,42,102,62,81,106,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,15,149,100,104,132,70,100,140,180,50,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n";
  return code;
}

Blockly.Python['1718284073811'] = function(block) {
  let code = "robot.leju_action('侧面上高台1')\n";
  return code;
}

Blockly.Blocks['1718284859071'] = {
  init: function() {
    this.jsonInit({
      "type": "1718284859071",
      "message0": "侧面上高台新",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718284859071'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(150)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,142,101,148,75,134,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,120,101,143,75,121,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,101,94,92,100,100,100,120,113,176,56,77,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(100,100,100,90,115,140,58,110,100,100,100,117,115,177,56,86,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,81,114,141,60,121,96,174,98,117,115,177,56,86,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(100,100,100,81,114,141,60,121,96,114,98,96,77,57,133,83,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(100,100,100,98,110,142,49,99,96,114,98,98,89,57,151,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(97,150,100,85,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,99,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(99,10,159,107,160,91,118,111,100,190,43,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(150)\nMOTOmove19(59,18,171,107,160,91,118,111,129,188,36,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(59,18,171,107,160,91,118,111,129,188,36,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(59,18,159,107,160,91,118,111,129,188,36,110,157,169,136,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(59,18,159,107,160,91,118,111,129,188,36,108,41,87,109,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(59,18,159,106,142,117,99,111,130,188,36,107,62,88,98,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(59,18,159,101,140,120,97,102,130,190,42,102,62,81,106,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,15,149,100,104,132,70,100,130,188,50,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,90,48,127,100,130,188,50,100,110,150,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n";
  return code;
}

Blockly.Python['1718284859071'] = function(block) {
  let code = "robot.leju_action('侧面上高台新')\n";
  return code;
}

Blockly.Blocks['1718458813991'] = {
  init: function() {
    this.jsonInit({
      "type": "1718458813991",
      "message0": "侧面上高台新新",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718458813991'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(150)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,142,101,148,75,134,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,120,101,143,75,121,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,101,94,92,100,100,100,120,113,176,56,77,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(100,100,100,90,115,140,58,110,100,100,100,117,115,177,56,86,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,81,114,141,60,121,96,174,98,117,115,177,56,86,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(100,100,100,81,114,141,60,121,96,114,98,96,77,57,133,83,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(100,100,100,98,110,142,49,99,96,114,98,98,89,57,151,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(97,150,100,85,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,99,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(99,89,145,107,160,91,118,111,99,112,63,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,84,129,107,160,91,118,111,94,123,70,110,157,169,136,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(91,79,145,107,160,91,118,111,105,107,79,108,41,87,109,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(101,82,115,106,142,117,99,111,103,108,97,107,62,88,98,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,15,149,100,90,48,127,100,130,188,50,100,110,150,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n";
  return code;
}

Blockly.Python['1718458813991'] = function(block) {
  let code = "robot.leju_action('侧面上高台新新')\n";
  return code;
}

Blockly.Blocks['1718629649690'] = {
  init: function() {
    this.jsonInit({
      "type": "1718629649690",
      "message0": "左移测试",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718629649690'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(100)\nMOTOmove19(49,18,162,99,94,56,122,99,135,189,42,99,106,143,76,98,128,71,98)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(49,18,162,104,94,55,122,92,135,189,42,146,106,143,77,106,128,71,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(49,18,162,100,93,55,124,100,135,189,42,100,107,145,76,100,128,71,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1718629649690'] = function(block) {
  let code = "robot.leju_action('左移测试')\n";
  return code;
}

Blockly.Blocks['1718630024648'] = {
  init: function() {
    this.jsonInit({
      "type": "1718630024648",
      "message0": "友谊此时",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718630024648'] = function(block) {
  let code = "MOTOrigid16(49,18,149,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(100)\nMOTOmove19(49,18,149,58,99,55,126,94,142,180,58,103,103,143,72,110,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(100)\nMOTOmove19(49,18,149,105,99,55,127,100,142,180,58,100,102,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1718630024648'] = function(block) {
  let code = "robot.leju_action('友谊此时')\n";
  return code;
}

Blockly.Blocks['1718630114338'] = {
  init: function() {
    this.jsonInit({
      "type": "1718630114338",
      "message0": "右移测试",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718630114338'] = function(block) {
  let code = "MOTOrigid16(49,18,149,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,58,99,55,126,94,142,180,58,103,103,143,72,110,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,105,99,55,127,100,142,180,58,100,102,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1718630114338'] = function(block) {
  let code = "robot.leju_action('右移测试')\n";
  return code;
}

Blockly.Blocks['1718632547809'] = {
  init: function() {
    this.jsonInit({
      "type": "1718632547809",
      "message0": "正面上高台新",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718632547809'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,35,150,20,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,56,39,94,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,99,57,53,83,101,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,35,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,99,136,145,113,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,160,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718632547809'] = function(block) {
  let code = "robot.leju_action('正面上高台新')\n";
  return code;
}

Blockly.Blocks['1718716809064'] = {
  init: function() {
    this.jsonInit({
      "type": "1718716809064",
      "message0": "抱箱在在调整",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718716809064'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(30)\nMOTOmove19(80,50,149,100,93,55,124,100,120,150,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,136,150,62,100,120,150,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,50,149,100,149,150,58,100,120,150,50,100,52,50,142,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(52,21,149,100,149,150,67,100,142,179,57,100,40,50,133,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(52,18,149,100,104,132,70,100,142,189,57,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(52,18,149,100,90,55,127,100,142,189,57,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718716809064'] = function(block) {
  let code = "robot.leju_action('抱箱在在调整')\n";
  return code;
}

Blockly.Blocks['1718719598655'] = {
  init: function() {
    this.jsonInit({
      "type": "1718719598655",
      "message0": "正面上高台",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718719598655'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,103,93,55,124,100,120,170,100,95,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 1站立\nMOTOsetspeed(90)\nMOTOmove19(80,30,100,103,93,55,124,78,120,170,100,95,107,145,76,95,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,165,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,35,150,20,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,56,39,94,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,40,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,89,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,86,100,100,165,78,155,100,100,100,100,99,136,145,113,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,160,78,155,104,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(99,80,140,105,160,78,135,112,100,102,69,110,130,190,40,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(97,83,158,105,115,65,125,112,100,113,37,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718719598655'] = function(block) {
  let code = "robot.leju_action('正面上高台')\n";
  return code;
}

Blockly.Blocks['1718802456452'] = {
  init: function() {
    this.jsonInit({
      "type": "1718802456452",
      "message0": "正面上高台调整",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718802456452'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,103,93,55,124,100,120,170,100,95,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 1站立\nMOTOsetspeed(90)\nMOTOmove19(80,30,100,103,93,55,124,78,120,170,100,95,107,145,76,95,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(10)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,35,150,20,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,56,39,94,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,40,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,89,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,86,100,100,160,78,155,100,100,100,100,99,136,145,113,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,160,78,155,96,100,100,100,100,145,150,99,99,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(99,80,140,105,160,78,135,110,100,102,69,110,130,190,40,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(97,83,158,105,115,65,125,110,100,113,37,111,153,130,142,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718802456452'] = function(block) {
  let code = "robot.leju_action('正面上高台调整')\n";
  return code;
}

Blockly.Blocks['1718882285592'] = {
  init: function() {
    this.jsonInit({
      "type": "1718882285592",
      "message0": "正面上高台最终",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718882285592'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,103,93,55,124,100,120,170,100,95,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 1站立\nMOTOsetspeed(90)\nMOTOmove19(80,30,100,103,93,55,124,78,120,170,100,95,107,145,76,95,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(10)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,165,78,135,112,100,190,20,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,35,150,20,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,56,39,94,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,40,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,89,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,86,100,100,160,78,155,100,100,100,100,99,136,145,113,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,160,78,155,96,100,100,100,100,145,150,99,99,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(10)\nMOTOmove19(99,80,140,105,160,78,135,110,100,102,69,110,130,190,40,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(97,83,158,105,115,65,125,110,100,113,37,111,153,130,142,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718882285592'] = function(block) {
  let code = "robot.leju_action('正面上高台最终')\n";
  return code;
}

Blockly.Blocks['1718882941879'] = {
  init: function() {
    this.jsonInit({
      "type": "1718882941879",
      "message0": "正面上高台备用",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718882941879'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,103,93,55,124,100,120,170,100,95,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 1站立\nMOTOsetspeed(90)\nMOTOmove19(80,30,100,103,93,55,124,78,120,170,100,95,107,145,76,95,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(10)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,165,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(142,117,99,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(118,140,133,105,165,78,135,112,100,107,76,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,144,101,105,115,65,125,112,100,117,96,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(124,130,87,105,105,65,125,112,100,116,114,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(135,133,102,105,98,55,124,112,100,99,106,115,90,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\nMOTOsetspeed(15)\nMOTOmove19(152,111,100,106,93,55,124,112,102,96,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\nMOTOsetspeed(15)\nMOTOmove19(141,119,100,105,115,100,101,110,100,92,100,115,40,150,20,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,56,39,94,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,40,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,89,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,86,100,100,160,78,155,100,100,100,100,99,136,145,113,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,160,78,155,96,100,100,100,100,145,150,99,99,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(10)\nMOTOmove19(99,80,140,105,160,78,135,110,100,102,69,110,130,190,40,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(97,83,158,105,115,65,125,110,100,113,37,111,153,130,142,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718882941879'] = function(block) {
  let code = "robot.leju_action('正面上高台备用')\n";
  return code;
}

Blockly.Blocks['1718884649444'] = {
  init: function() {
    this.jsonInit({
      "type": "1718884649444",
      "message0": "放下",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718884649444'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(20)\nMOTOmove19(52,18,149,100,93,55,127,100,142,189,57,100,107,145,73,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(52,15,149,100,111,150,50,102,142,189,57,100,88,51,153,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(64,18,154,100,128,149,41,101,120,189,53,99,74,53,161,99,128,71,99)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718884649444'] = function(block) {
  let code = "robot.leju_action('放下')\n";
  return code;
}

Blockly.Blocks['1718884720290'] = {
  init: function() {
    this.jsonInit({
      "type": "1718884720290",
      "message0": "放下新",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718884720290'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(20)\nMOTOmove19(52,18,149,100,93,55,127,100,142,189,57,100,107,145,73,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(52,15,149,100,111,150,50,102,142,189,57,100,88,51,153,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(64,18,154,100,128,149,41,101,120,189,53,99,74,53,161,99,128,71,99)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(10)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718884720290'] = function(block) {
  let code = "robot.leju_action('放下新')\n";
  return code;
}

Blockly.Blocks['1718885306827'] = {
  init: function() {
    this.jsonInit({
      "type": "1718885306827",
      "message0": "宝箱前进",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718885306827'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(6)\nMOTOmove19(49,18,149,95,91,48,134,80,142,180,58,98,109,146,71,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,95,123,95,115,90,142,180,58,98,109,146,71,87,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,95,121,37,161,88,142,180,58,98,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(49,18,149,107,98,56,129,111,142,180,58,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,100,93,54,128,113,142,180,58,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,106,91,54,128,111,142,180,58,114,89,163,39,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(49,18,149,95,69,45,112,90,142,180,58,98,102,144,71,89,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,95,123,95,115,90,142,180,58,98,107,146,72,87,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,100,91,55,129,87,142,180,58,100,109,145,71,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(49,18,149,100,91,55,129,100,142,180,58,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718885306827'] = function(block) {
  let code = "robot.leju_action('宝箱前进')\n";
  return code;
}

Blockly.Blocks['1718885474211'] = {
  init: function() {
    this.jsonInit({
      "type": "1718885474211",
      "message0": "宝箱后退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718885474211'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,142,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(49,18,149,98,95,50,137,84,142,180,58,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(69,18,40,70,70,70,70,70,142,180,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,98,90,95,94,90,142,180,58,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,88,71,53,114,85,142,180,58,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(49,18,149,100,71,53,114,107,142,180,58,104,103,143,64,103,128,71,100)\nMOTOwait()\nMOTOrigid16(69,18,40,70,70,70,70,70,142,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(49,18,149,100,93,53,134,111,142,180,58,107,101,163,40,106,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(49,18,149,98,95,54,133,99,142,180,58,99,103,145,67,100,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718885474211'] = function(block) {
  let code = "robot.leju_action('宝箱后退')\n";
  return code;
}

Blockly.Blocks['1718953461976'] = {
  init: function() {
    this.jsonInit({
      "type": "1718953461976",
      "message0": "左转比赛",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718953461976'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,100,50,40,100,93,142,180,58,100,75,146,43,95,127,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1718953461976'] = function(block) {
  let code = "robot.leju_action('左转比赛')\n";
  return code;
}

Blockly.Blocks['1718953596586'] = {
  init: function() {
    this.jsonInit({
      "type": "1718953596586",
      "message0": "右转比赛",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718953596586'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(48,18,149,99,130,43,173,106,142,180,57,98,143,141,117,100,127,78,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(47,18,149,99,90,55,124,100,142,179,56,98,107,145,76,100,127,78,107)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718953596586'] = function(block) {
  let code = "robot.leju_action('右转比赛')\n";
  return code;
}

Blockly.Blocks['1718954100918'] = {
  init: function() {
    this.jsonInit({
      "type": "1718954100918",
      "message0": "正面上高台比赛",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718954100918'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,103,93,55,124,100,120,170,100,95,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 1站立\nMOTOsetspeed(90)\nMOTOmove19(80,30,100,103,93,55,124,78,120,170,100,95,107,145,76,95,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(10)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(142,117,99,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(118,140,133,105,165,78,135,112,100,107,76,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,144,101,105,115,65,125,112,100,117,96,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(124,130,87,105,105,65,125,112,100,116,114,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(135,133,102,105,98,55,124,112,100,99,106,115,90,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\nMOTOsetspeed(15)\nMOTOmove19(152,111,100,106,93,55,124,112,102,96,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\nMOTOsetspeed(15)\nMOTOmove19(141,119,100,105,115,100,101,110,100,92,100,115,40,150,20,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,100,56,39,94,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,40,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,89,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,86,100,100,160,78,155,100,100,100,100,99,136,145,113,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,160,78,155,96,100,100,100,100,145,150,99,99,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(10)\nMOTOmove19(99,80,140,105,160,78,135,110,100,102,69,110,130,190,40,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(97,83,158,105,115,65,125,110,100,113,37,111,153,130,142,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718954100918'] = function(block) {
  let code = "robot.leju_action('正面上高台比赛')\n";
  return code;
}

Blockly.Blocks['1718954933625'] = {
  init: function() {
    this.jsonInit({
      "type": "1718954933625",
      "message0": "侧面上高台比赛",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718954933625'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(150)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,142,101,148,75,134,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,120,101,143,75,121,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,101,94,92,100,100,100,120,113,176,56,77,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,140,58,110,100,100,100,117,115,177,56,86,128,71,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(100,100,100,81,114,141,60,121,96,174,98,117,115,177,56,86,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(100,100,100,81,114,141,60,121,96,114,98,96,77,57,133,83,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(100,100,100,98,110,142,49,99,96,114,98,98,89,57,151,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(97,150,100,85,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,99,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(99,89,145,107,160,91,118,111,99,112,63,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,84,129,107,160,91,118,111,94,123,70,110,157,169,136,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(91,79,145,107,160,91,118,111,105,107,79,108,41,87,109,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(101,82,115,106,142,117,99,111,103,108,97,107,62,88,98,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,15,149,100,90,48,127,100,130,188,50,100,110,150,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n";
  return code;
}

Blockly.Python['1718954933625'] = function(block) {
  let code = "robot.leju_action('侧面上高台比赛')\n";
  return code;
}

Blockly.Blocks['1718960444723'] = {
  init: function() {
    this.jsonInit({
      "type": "1718960444723",
      "message0": "侧面上高台比赛新",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718960444723'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(150)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,142,101,148,75,134,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,120,101,143,75,121,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,101,94,92,100,100,100,120,113,176,56,77,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,140,58,110,100,100,100,117,115,177,56,86,128,71,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(100,100,100,81,114,141,60,121,96,174,98,117,115,177,56,86,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(100,100,100,81,114,141,60,121,96,114,98,96,77,57,133,83,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(100,100,100,98,110,142,49,99,96,114,98,98,89,57,151,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(97,150,100,85,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,99,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(99,89,145,107,160,91,118,111,99,112,63,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,89,145,107,160,91,118,111,99,112,63,110,128,81,152,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(91,79,145,107,160,91,118,111,105,107,79,108,41,87,109,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(101,82,115,106,142,117,99,111,103,108,97,107,62,88,98,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,15,149,100,90,48,127,100,130,188,50,100,110,150,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n";
  return code;
}

Blockly.Python['1718960444723'] = function(block) {
  let code = "robot.leju_action('侧面上高台比赛新')\n";
  return code;
}

Blockly.Blocks['1718960677190'] = {
  init: function() {
    this.jsonInit({
      "type": "1718960677190",
      "message0": "正面上高台比赛新",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718960677190'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,103,93,55,124,100,120,170,100,95,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 1站立\nMOTOsetspeed(90)\nMOTOmove19(80,30,100,103,93,55,124,78,120,170,100,95,107,145,76,95,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(10)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(142,117,99,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(118,140,133,105,165,78,135,112,100,107,76,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,144,101,105,115,65,125,112,100,117,96,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(124,130,87,105,105,65,125,112,100,116,114,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(135,133,102,105,98,55,124,112,100,99,106,115,90,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\nMOTOsetspeed(15)\nMOTOmove19(152,111,100,106,93,55,124,112,102,96,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\nMOTOsetspeed(15)\nMOTOmove19(141,119,100,105,115,100,101,110,100,92,100,115,40,150,20,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,100,56,39,94,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,40,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,89,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,86,100,100,160,78,155,100,100,100,100,99,136,145,113,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,160,78,155,96,100,100,100,100,145,150,99,99,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(10)\nMOTOmove19(99,80,140,105,160,78,135,110,100,102,69,110,130,190,40,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,80,140,105,160,78,135,110,100,102,69,103,130,80,128,103,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(97,83,158,105,115,65,125,110,100,113,37,111,153,130,142,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718960677190'] = function(block) {
  let code = "robot.leju_action('正面上高台比赛新')\n";
  return code;
}

Blockly.Blocks['1718963228155'] = {
  init: function() {
    this.jsonInit({
      "type": "1718963228155",
      "message0": "正面上高台比赛最终",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718963228155'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,103,93,55,124,100,120,170,100,95,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 1站立\nMOTOsetspeed(90)\nMOTOmove19(80,30,100,103,93,55,124,78,120,170,100,95,107,145,76,95,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(10)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,136,150,108,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(142,117,99,100,165,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(118,140,133,105,165,78,135,112,100,107,76,107,130,190,48,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(118,140,133,105,165,78,135,112,100,107,76,104,87,105,26,92,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(118,140,133,105,160,78,135,112,100,107,76,105,61,54,89,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(124,130,87,105,105,65,125,112,100,116,114,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(135,133,102,105,98,55,124,112,100,99,106,115,90,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\nMOTOsetspeed(15)\nMOTOmove19(152,111,100,106,93,55,124,112,102,96,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\nMOTOsetspeed(15)\nMOTOmove19(141,119,100,105,115,100,101,110,100,92,100,115,40,150,20,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,100,56,39,94,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,35,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,40,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,96,45,22,92,103,100,190,20,95,40,122,65,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,89,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,86,100,100,160,78,155,100,100,100,100,99,136,145,113,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,160,78,155,96,100,100,100,100,145,150,99,99,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(10)\nMOTOmove19(99,80,140,105,160,78,135,110,100,102,69,110,130,190,40,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,80,140,105,160,78,135,110,100,102,69,103,130,80,128,103,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(97,83,158,105,115,65,125,110,100,113,37,111,153,130,142,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718963228155'] = function(block) {
  let code = "robot.leju_action('正面上高台比赛最终')\n";
  return code;
}

