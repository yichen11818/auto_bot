Blockly.Blocks['1718630838113'] = {
  init: function() {
    this.jsonInit({
      "type": "1718630838113",
      "message0": "BoxturnL",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718630838113'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,142,78,100,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,55,130,96,132,187,10,101,125,145,77,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,96,97,55,130,103,132,187,10,101,125,145,85,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,110,142,78,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718630838113'] = function(block) {
  let code = "base_action.action('BoxturnL')\n";
  return code;
}

