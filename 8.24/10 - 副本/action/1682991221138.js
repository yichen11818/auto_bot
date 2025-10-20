Blockly.Blocks['1682991221138'] = {
  init: function() {
    this.jsonInit({
      "type": "1682991221138",
      "message0": "fastforword01gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1682991221138'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,99,83,54,122,90,140,190,25,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(55,10,179,99,105,99,103,100,140,190,25,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(55,10,179,99,100,74,121,100,140,190,25,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(55,10,179,99,100,61,126,104,140,190,25,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(55,10,179,99,81,66,111,102,140,190,25,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(55,10,179,99,76,63,111,100,140,190,25,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(55,10,179,99,90,73,106,100,140,190,25,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(55,10,179,96,85,70,110,100,140,190,25,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1682991221138'] = function(block) {
  let code = "base_action.action('fastforword01gai')\n";
  return code;
}

