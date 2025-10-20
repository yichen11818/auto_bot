Blockly.Blocks['1717506251067'] = {
  init: function() {
    this.jsonInit({
      "type": "1717506251067",
      "message0": "Box_backrun1gai2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717506251067'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(5)\nMOTOmove19(60,15,190,88,91,48,132,80,132,187,10,94,107,146,72,85,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,86,90,85,95,85,132,187,10,94,107,146,72,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,86,66,40,118,90,132,187,10,94,107,146,72,90,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,106,93,60,124,110,132,187,10,114,102,145,68,110,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,106,93,53,129,113,132,187,10,114,105,115,100,110,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717506251067'] = function(block) {
  let code = "base_action.action('Box_backrun1gai2')\n";
  return code;
}

