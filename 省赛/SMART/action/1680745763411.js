Blockly.Blocks['1680745763411'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745763411",
      "message0": "move_left",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745763411'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(80, 40, 100, 85, 112, 90, 105, 90, 120, 160, 100, 110, 107, 146, 76, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 100, 95, 93, 53, 121, 105, 120, 155, 100, 120, 116, 160, 68, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 54, 124, 98, 120, 170, 100, 103, 107, 146, 76, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 95, 120, 170, 100, 100, 107, 145, 76, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745763411'] = function(block) {
  let code = "base_action.action('move_left')\n";
  return code;
}

