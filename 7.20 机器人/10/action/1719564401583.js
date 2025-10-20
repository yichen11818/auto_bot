Blockly.Blocks['1719564401583'] = {
  init: function() {
    this.jsonInit({
      "type": "1719564401583",
      "message0": "BoxBack2-3gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1719564401583'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,100,93,55,130,100,132,188,18,100,107,145,70,100,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,105,93,55,130,108,132,188,18,111,102,136,70,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,105,93,55,134,107,132,188,18,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,92,106,55,144,95,132,188,18,95,117,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,92,75,55,106,95,132,188,18,95,107,145,66,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,105,83,55,124,107,132,188,18,108,94,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,130,98,132,188,18,100,107,145,70,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1719564401583'] = function(block) {
  let code = "base_action.action('BoxBack2-3gai')\n";
  return code;
}

