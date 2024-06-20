Blockly.Blocks['1718546593967'] = {
  init: function() {
    this.jsonInit({
      "type": "1718546593967",
      "message0": "BoxBack1-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718546593967'] = function(block) {
  let code = "MOTOsetspeed(45)\nMOTOmove19(60,15,190,100,93,55,130,100,132,187,10,100,107,145,70,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,105,93,55,130,108,132,187,10,111,102,136,70,112,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,105,93,55,134,107,132,187,10,108,125,145,94,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,92,106,55,144,90,132,187,10,90,117,145,76,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,130,98,132,187,10,100,107,145,70,102,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718546593967'] = function(block) {
  let code = "base_action.action('BoxBack1-1')\n";
  return code;
}

