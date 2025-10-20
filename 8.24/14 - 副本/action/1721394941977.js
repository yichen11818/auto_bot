Blockly.Blocks['1721394941977'] = {
  init: function() {
    this.jsonInit({
      "type": "1721394941977",
      "message0": "BoxR-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721394941977'] = function(block) {
  let code = "MOTOsetspeed(50)\nMOTOmove19(47,30,190,100,93,55,124,100,151,176,16,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(150)\nMOTOmove19(47,30,190,90,93,54,124,100,151,176,16,120,107,146,76,110,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(70)\nMOTOmove19(47,30,190,94,93,54,124,85,151,176,16,105,107,146,76,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(40)\nMOTOmove19(47,30,190,85,93,54,124,85,151,176,16,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(47,30,190,100,93,55,124,100,151,176,16,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721394941977'] = function(block) {
  let code = "base_action.action('BoxR-1')\n";
  return code;
}

