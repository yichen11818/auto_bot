Blockly.Blocks['1676272913746'] = {
  init: function() {
    this.jsonInit({
      "type": "1676272913746",
      "message0": "抱方块前进",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676272913746'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(20)\nMOTOmove19(100,185,101,100,94,55,124,100,100,15,99,100,106,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(40,40,40,85,60,60,60,75,40,40,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(6)\nMOTOmove19(100,185,101,105,93,55,124,105,100,15,99,111,102,136,78,112,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(100,185,101,105,93,55,124,107,100,15,99,105,84,141,62,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,185,101,95,80,55,111,90,100,15,99,95,101,145,73,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,101,95,116,59,138,90,100,15,99,95,107,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,185,101,105,99,55,127,107,100,15,99,105,120,145,89,105,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(100,185,101,105,94,54,123,107,100,15,99,105,102,136,78,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(6)\nMOTOmove19(100,185,101,100,94,55,123,98,100,15,99,100,106,145,77,102,128,71,100)\nMOTOwait()\n";
  return code;
}

