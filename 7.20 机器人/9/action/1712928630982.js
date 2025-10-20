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

