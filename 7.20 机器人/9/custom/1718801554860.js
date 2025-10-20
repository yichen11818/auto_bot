Blockly.Blocks['1718801554860'] = {
  init: function() {
    this.jsonInit({
      "type": "1718801554860",
      "message0": "BoxLeft1-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718801554860'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(45,24,190,104,94,55,122,92,150,183,17,146,106,143,77,109,0,0,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,93,55,124,100,142,180,58,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1718801554860'] = function(block) {
  let code = "base_action.action('BoxLeft1-1')\n";
  return code;
}

