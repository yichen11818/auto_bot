Blockly.Blocks['1721223010377'] = {
  init: function() {
    this.jsonInit({
      "type": "1721223010377",
      "message0": "BoxR_move_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721223010377'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOmove19(52,20,188,100,93,55,124,100,154,175,16,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(52,25,188,70,93,54,124,100,154,175,16,110,107,146,76,110,0,0,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1721223010377'] = function(block) {
  let code = "base_action.action('BoxR_move_1')\n";
  return code;
}

