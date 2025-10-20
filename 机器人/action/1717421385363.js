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

