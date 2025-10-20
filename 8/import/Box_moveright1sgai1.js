Blockly.Blocks['1718877451599'] = {
  init: function() {
    this.jsonInit({
      "type": "1718877451599",
      "message0": "Box_moveright1sgai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718877451599'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(60)\nMOTOmove19(62, 12, 190, 65, 90, 55, 127, 100, 135, 190, 13, 100, 110, 145, 73, 105, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(80)\nMOTOmove19(62, 12, 190, 105, 90, 55, 127, 100, 135, 190, 13, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\n";
  return code;
}

Blockly.Python['1718877451599'] = function(block) {
  let code = "base_action.action('Box_moveright1sgai1')\n";
  return code;
}

