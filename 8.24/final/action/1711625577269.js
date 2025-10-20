Blockly.Blocks['1711625577269'] = {
  init: function() {
    this.jsonInit({
      "type": "1711625577269",
      "message0": "Box_rightturn2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711625577269'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 95, 132, 187, 10, 105, 137, 145, 106, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 93, 132, 187, 10, 105, 137, 145, 106, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 95, 132, 187, 10, 105, 137, 145, 106, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 93, 132, 187, 10, 105, 137, 145, 106, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1711625577269'] = function(block) {
  let code = "base_action.action('Box_rightturn2')\n";
  return code;
}

