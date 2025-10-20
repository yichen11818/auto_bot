Blockly.Blocks['1718878546418'] = {
  init: function() {
    this.jsonInit({
      "type": "1718878546418",
      "message0": "Box_moveleft1sgai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718878546418'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(62, 12, 190, 100, 90, 55, 127, 93, 135, 190, 13, 135, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(80)\nMOTOmove19(62, 12, 190, 100, 90, 55, 127, 100, 135, 190, 13, 95, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(260)\n";
  return code;
}

Blockly.Python['1718878546418'] = function(block) {
  let code = "base_action.action('Box_moveleft1sgai1')\n";
  return code;
}

