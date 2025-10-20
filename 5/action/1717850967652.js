Blockly.Blocks['1717850967652'] = {
  init: function() {
    this.jsonInit({
      "type": "1717850967652",
      "message0": "BackRungai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717850967652'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,120,40,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,88,91,48,132,88,132,187,10,94,107,146,72,91,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,86,90,95,84,90,132,187,10,94,107,146,72,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,86,66,35,121,90,132,187,10,94,107,146,72,88,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,106,93,53,124,109,132,187,10,114,102,154,55,110,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,106,93,53,129,113,132,187,10,114,95,105,100,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,120,40,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717850967652'] = function(block) {
  let code = "base_action.action('BackRungai1')\n";
  return code;
}

