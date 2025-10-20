Blockly.Blocks['1717941272276'] = {
  init: function() {
    this.jsonInit({
      "type": "1717941272276",
      "message0": "右移demo",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717941272276'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(49,18,149,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(80)\nMOTOmove19(49, 18, 149, 58, 89, 55, 126, 94, 142, 180, 58, 103, 108, 143, 72, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(80)\nMOTOmove19(49, 18, 149, 105, 90, 55, 127, 100, 142, 180, 58, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717941272276'] = function(block) {
  let code = "base_action.action('右移demo')\n";
  return code;
}

