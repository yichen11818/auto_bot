Blockly.Blocks['1721414458782'] = {
  init: function() {
    this.jsonInit({
      "type": "1721414458782",
      "message0": "Box_back",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721414458782'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOmove19(16,51,180,100,93,55,124,100,177,160,22,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(15)\nMOTOmove19(16,51,180,85,91,50,128,88,177,160,22,95,117,168,62,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(16,51,180,88,91,48,129,88,177,160,22,94,107,146,76,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(90)\nMOTOmove19(16,51,180,86,90,95,84,90,177,160,22,94,107,146,78,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(16,51,180,88,74,53,105,85,177,160,22,93,101,144,79,91,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(16,51,180,106,93,53,124,107,177,160,22,114,87,164,45,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(16,51,180,106,93,53,124,107,177,160,22,114,87,105,102,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(90)\nMOTOmove19(16,51,180,106,93,53,124,107,177,160,22,109,97,117,88,108,0,0,100)\nMOTOwait()\nMOTOsetspeed(90)\nMOTOmove19(16,51,180,100,93,55,124,100,177,160,22,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721414458782'] = function(block) {
  let code = "base_action.action('Box_back')\n";
  return code;
}

