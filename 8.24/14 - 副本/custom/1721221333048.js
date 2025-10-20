Blockly.Blocks['1721221333048'] = {
  init: function() {
    this.jsonInit({
      "type": "1721221333048",
      "message0": "test717",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721221333048'] = function(block) {
  let code = "MOTOsetspeed(40)\nMOTOmove19(50,24,190,100,93,55,124,100,143,184,17,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(50,25,190,70,93,54,124,100,143,184,17,110,107,146,76,110,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(60)\nMOTOmove19(50,25,190,94,93,54,124,85,143,184,17,105,107,146,76,95,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(40)\nMOTOmove19(50,25,190,100,93,55,124,100,143,184,17,107,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721221333048'] = function(block) {
  let code = "base_action.action('test717')\n";
  return code;
}

