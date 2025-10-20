Blockly.Blocks['1680745704642'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745704642",
      "message0": "BoxTurnL1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745704642'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 96, 97, 55, 130, 96, 132, 187, 10, 101, 117, 145, 82, 103, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 96, 97, 55, 130, 103, 132, 187, 10, 101, 117, 145, 82, 107, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 88, 55, 124, 100, 132, 187, 10, 100, 107, 135, 81, 104, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745704642'] = function(block) {
  let code = "base_action.action('BoxTurnL1')\n";
  return code;
}

