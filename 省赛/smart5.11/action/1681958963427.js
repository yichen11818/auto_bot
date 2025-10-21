Blockly.Blocks['1681958963427'] = {
  init: function() {
    this.jsonInit({
      "type": "1681958963427",
      "message0": "boxbackrun",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1681958963427'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,120,40,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,85,91,50,128,88,132,187,10,95,117,168,62,90,120,40,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,88,91,48,129,88,132,187,10,94,107,146,76,87,120,40,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,86,90,95,84,90,132,187,10,94,107,146,78,87,120,40,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,88,84,53,115,85,132,187,10,93,104,144,78,91,120,40,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,103,92,53,124,107,132,187,10,114,102,154,55,110,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,106,93,53,129,113,132,187,10,114,95,105,100,110,120,40,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,95,95,95,65,30,30,30,50,50,50,50,50)\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,104,83,32,140,111,132,187,10,115,111,150,77,112,120,40,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,120,40,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1681958963427'] = function(block) {
  let code = "base_action.action('boxbackrun')\n";
  return code;
}

