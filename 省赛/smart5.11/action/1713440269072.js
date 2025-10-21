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

