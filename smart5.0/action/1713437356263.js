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

