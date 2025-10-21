Blockly.Blocks['1710762704659'] = {
  init: function() {
    this.jsonInit({
      "type": "1710762704659",
      "message0": "PutCubeDownfast5s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1710762704659'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(21)\nMOTOmove19(60,15,190,100,93,55,130,98,132,187,10,100,107,145,70,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(60,15,190,99,90,150,38,100,132,187,10,101,111,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(59,14,148,99,122,150,39,100,134,188,56,101,79,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(72,14,147,99,122,150,39,100,130,176,57,101,79,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(72,14,147,99,98,150,40,100,130,176,57,100,105,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(26)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1710762704659'] = function(block) {
  let code = "base_action.action('PutCubeDownfast5s')\n";
  return code;
}

