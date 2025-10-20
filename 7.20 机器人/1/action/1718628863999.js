Blockly.Blocks['1718628863999'] = {
  init: function() {
    this.jsonInit({
      "type": "1718628863999",
      "message0": "turnL",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718628863999'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(80,30,85,96,102,55,130,96,120,170,85,101,112,145,72,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,85,96,102,55,130,103,120,170,85,101,112,145,82,107,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,102,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718628863999'] = function(block) {
  let code = "base_action.action('turnL')\n";
  return code;
}

