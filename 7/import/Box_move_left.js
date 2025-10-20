Blockly.Blocks['1680745659863'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745659863",
      "message0": "Box_move_left",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745659863'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(60, 15, 190, 85, 112, 90, 110, 90, 132, 187, 10, 110, 107, 146, 71, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60, 15, 190, 95, 93, 53, 126, 105, 132, 187, 10, 120, 116, 160, 63, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 54, 129, 98, 132, 187, 10, 103, 107, 146, 71, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 95, 132, 187, 10, 100, 107, 145, 71, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745659863'] = function(block) {
  let code = "base_action.action('Box_move_left')\n";
  return code;
}

