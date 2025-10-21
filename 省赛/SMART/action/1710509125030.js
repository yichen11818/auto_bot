Blockly.Blocks['1710509125030'] = {
  init: function() {
    this.jsonInit({
      "type": "1710509125030",
      "message0": "Grabcub2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1710509125030'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,56,115,65,127,150,51,66,118,141,101,142,81,50,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(88,73,116,57,142,150,48,66,119,126,83,143,60,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(68,49,165,47,154,142,47,62,120,160,39,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(69,16,163,47,154,142,47,62,122,190,40,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(60,17,163,47,154,142,47,62,136,186,40,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,17,163,57,140,150,69,62,136,186,40,138,85,50,152,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,17,163,95,105,150,39,99,136,186,40,98,99,50,163,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,17,163,97,96,150,39,99,136,186,40,99,107,50,163,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,17,163,98,102,77,115,100,136,186,40,99,99,123,86,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1710509125030'] = function(block) {
  let code = "base_action.action('Grabcub2')\n";
  return code;
}

