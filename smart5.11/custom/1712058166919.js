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

