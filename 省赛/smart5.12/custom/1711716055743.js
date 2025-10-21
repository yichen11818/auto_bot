Blockly.Blocks['1711716055743'] = {
  init: function() {
    this.jsonInit({
      "type": "1711716055743",
      "message0": "BoxTurnL1gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711716055743'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,58,132,96,132,187,10,101,125,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,96,97,58,130,103,132,187,10,101,125,150,85,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,90,55,124,100,132,187,10,100,110,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711716055743'] = function(block) {
  let code = "base_action.action('BoxTurnL1gai1')\n";
  return code;
}

