Blockly.Blocks['1710677604201'] = {
  init: function() {
    this.jsonInit({
      "type": "1710677604201",
      "message0": "box_yy4（3）",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1710677604201'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(60, 15, 190, 90, 93, 54, 127, 100, 132, 187, 10, 115, 88, 110, 90, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60, 15, 190, 80, 84, 40, 127, 70, 132, 187, 10, 105, 107, 147, 74, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 97, 93, 54, 127, 95, 132, 187, 10, 100, 107, 146, 71, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 127, 95, 132, 187, 10, 100, 107, 145, 71, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 127, 100, 132, 187, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1710677604201'] = function(block) {
  let code = "base_action.action('box_yy4（3）')\n";
  return code;
}

