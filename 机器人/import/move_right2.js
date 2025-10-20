Blockly.Blocks['1717942602555'] = {
  init: function() {
    this.jsonInit({
      "type": "1717942602555",
      "message0": "move_right2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717942602555'] = function(block) {
  let code = "MOTOsetspeed(80)\nMOTOmove19(97, 12, 97, 105, 95, 51, 127, 100, 104, 190, 102, 100, 106, 147, 73, 100, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(96, 46, 94, 58, 95, 55, 126, 94, 104, 177, 107, 103, 105, 145, 72, 110, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(97, 12, 97, 105, 95, 51, 127, 100, 104, 190, 102, 100, 106, 147, 73, 100, 120, 40, 100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717942602555'] = function(block) {
  let code = "robot.leju_action('move_right2')\n";
  return code;
}

