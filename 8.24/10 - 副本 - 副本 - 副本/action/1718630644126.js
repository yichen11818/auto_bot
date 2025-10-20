Blockly.Blocks['1718630644126'] = {
  init: function() {
    this.jsonInit({
      "type": "1718630644126",
      "message0": "turnR-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718630644126'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(80,30,115,99,88,55,125,97,120,170,115,104,98,145,70,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,115,99,88,55,118,93,120,170,115,104,98,145,70,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,100,98,65,119,96,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718630644126'] = function(block) {
  let code = "base_action.action('turnR-1')\n";
  return code;
}

