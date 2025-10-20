Blockly.Blocks['1680745801803'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745801803",
      "message0": "turn003R",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745801803'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 115, 99, 88, 55, 118, 97, 120, 170, 115, 104, 98, 145, 70, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 115, 99, 88, 55, 118, 93, 120, 170, 115, 104, 98, 145, 70, 97, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 98, 65, 119, 96, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745801803'] = function(block) {
  let code = "base_action.action('turn003R')\n";
  return code;
}

