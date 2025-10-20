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

