Blockly.Blocks['1719564255790'] = {
  init: function() {
    this.jsonInit({
      "type": "1719564255790",
      "message0": "Box_rightturn2gai2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1719564255790'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,188,18,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,95,123,55,154,95,132,188,18,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,95,123,55,154,93,132,188,18,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,100,90,55,124,100,132,188,18,100,110,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,95,123,55,154,95,132,188,18,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,95,123,55,154,93,132,188,18,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,100,88,55,124,100,132,188,18,100,112,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1719564255790'] = function(block) {
  let code = "base_action.action('Box_rightturn2gai2')\n";
  return code;
}

