Blockly.Blocks['1680745797902'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745797902",
      "message0": "turn003L",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745797902'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 85, 96, 102, 55, 130, 96, 120, 170, 85, 101, 112, 145, 82, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 85, 96, 102, 55, 130, 103, 120, 170, 85, 101, 112, 145, 82, 107, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 102, 135, 81, 104, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745797902'] = function(block) {
  let code = "base_action.action('turn003L')\n";
  return code;
}

