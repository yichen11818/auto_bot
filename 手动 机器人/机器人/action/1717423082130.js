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

