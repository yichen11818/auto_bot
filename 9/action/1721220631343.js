Blockly.Blocks['1721220631343'] = {
  init: function() {
    this.jsonInit({
      "type": "1721220631343",
      "message0": "BoxR_move1gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721220631343'] = function(block) {
  let code = "MOTOsetspeed(40)\nMOTOmove19(50,24,190,100,93,55,124,100,143,184,17,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(50,25,190,70,93,54,124,100,143,184,17,110,107,146,76,110,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(60)\nMOTOmove19(50,25,190,94,93,54,124,85,143,184,17,105,107,146,76,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(40)\nMOTOmove19(50,25,190,85,93,54,124,85,143,184,17,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(50,25,190,100,93,55,124,100,143,184,17,103,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721220631343'] = function(block) {
  let code = "base_action.action('BoxR_move1gai1')\n";
  return code;
}

