Blockly.Blocks['1721412625989'] = {
  init: function() {
    this.jsonInit({
      "type": "1721412625989",
      "message0": "BoxR_final",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721412625989'] = function(block) {
  let code = "MOTOsetspeed(50)\nMOTOmove19(47,30,143,100,93,55,124,100,150,175,57,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(150)\nMOTOmove19(47,30,143,90,93,54,124,100,151,176,57,120,107,146,76,110,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(70)\nMOTOmove19(47,30,143,94,93,54,124,85,151,176,57,105,107,146,76,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(40)\nMOTOmove19(47,30,143,85,93,54,124,85,151,176,57,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(47,30,143,100,93,55,124,100,151,176,57,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721412625989'] = function(block) {
  let code = "base_action.action('BoxR_final')\n";
  return code;
}

