Blockly.Blocks['1721391020509'] = {
  init: function() {
    this.jsonInit({
      "type": "1721391020509",
      "message0": "BoxR11",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721391020509'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(80,25,100,90,93,54,124,100,120,145,100,110,107,146,76,110,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(80,25,100,94,93,54,124,85,120,145,100,105,107,146,76,95,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(80,55,100,85,93,54,124,85,120,175,100,94,107,146,76,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721391020509'] = function(block) {
  let code = "base_action.action('BoxR11')\n";
  return code;
}

