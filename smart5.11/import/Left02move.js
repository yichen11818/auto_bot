Blockly.Blocks['1680745722093'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745722093",
      "message0": "Left02move",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745722093'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 96, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 50, 100, 85, 93, 54, 124, 85, 120, 170, 100, 96, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 50, 100, 85, 93, 54, 124, 85, 120, 170, 100, 94, 107, 146, 76, 94, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 107, 93, 55, 124, 107, 120, 150, 100, 106, 107, 145, 76, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745722093'] = function(block) {
  let code = "base_action.action('Left02move')\n";
  return code;
}

