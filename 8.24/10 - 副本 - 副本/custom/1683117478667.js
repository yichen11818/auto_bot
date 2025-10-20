Blockly.Blocks['1683117478667'] = {
  init: function() {
    this.jsonInit({
      "type": "1683117478667",
      "message0": "box-back01改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1683117478667'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,100,93,55,130,100,132,187,10,100,107,145,70,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,105,93,55,130,108,132,187,10,111,102,136,70,112,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,105,93,55,134,107,132,187,10,108,125,145,94,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,92,106,55,144,85,132,187,10,95,117,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,92,75,55,106,95,132,187,10,95,107,145,66,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,105,83,55,124,107,132,187,10,108,94,141,56,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,130,98,132,187,10,100,107,145,70,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1683117478667'] = function(block) {
  let code = "base_action.action('box-back01改')\n";
  return code;
}

