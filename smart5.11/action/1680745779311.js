Blockly.Blocks['1680745779311'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745779311",
      "message0": "Right02move",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745779311'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 104, 93, 54, 124, 111, 120, 165, 100, 110, 109, 152, 71, 112, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 30, 100, 104, 93, 54, 124, 111, 120, 150, 100, 115, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 30, 100, 106, 93, 54, 124, 106, 120, 150, 100, 115, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 50, 100, 94, 93, 55, 124, 92, 120, 170, 100, 93, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745779311'] = function(block) {
  let code = "base_action.action('Right02move')\n";
  return code;
}

