Blockly.Blocks['1718113265962'] = {
  init: function() {
    this.jsonInit({
      "type": "1718113265962",
      "message0": "test11",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718113265962'] = function(block) {
  let code = "MOTOsetspeed(80)\nMOTOmove19(98,14,98,100,93,55,124,100,111,181,98,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(91,11,101,104,94,55,122,92,98,152,102,146,106,143,77,109,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(98,14,98,100,93,55,124,100,111,181,98,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1718113265962'] = function(block) {
  let code = "base_action.action('test11')\n";
  return code;
}

