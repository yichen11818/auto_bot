Blockly.Blocks['1717942470613'] = {
  init: function() {
    this.jsonInit({
      "type": "1717942470613",
      "message0": "move_right1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717942470613'] = function(block) {
  let code = "MOTOsetspeed(80)\nMOTOmove19(97,12,97,105,95,51,127,100,104,190,102,100,106,147,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(96,46,94,58,95,55,126,94,104,177,107,103,105,145,72,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(97,12,97,105,95,51,127,100,104,190,102,100,106,147,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717942470613'] = function(block) {
  let code = "base_action.action('move_right1')\n";
  return code;
}

