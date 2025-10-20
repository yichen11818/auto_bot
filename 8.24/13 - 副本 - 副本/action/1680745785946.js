Blockly.Blocks['1680745785946'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745785946",
      "message0": "RightTurn1s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745785946'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 85, 95, 123, 55, 154, 95, 120, 170, 85, 105, 137, 145, 106, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 85, 95, 123, 55, 154, 93, 120, 170, 85, 105, 137, 145, 106, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1680745785946'] = function(block) {
  let code = "base_action.action('RightTurn1s')\n";
  return code;
}

