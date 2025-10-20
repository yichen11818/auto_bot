Blockly.Blocks['1724485701350'] = {
  init: function() {
    this.jsonInit({
      "type": "1724485701350",
      "message0": "右转新",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1724485701350'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(73,10,158,100,122,44,165,100,134,190,51,100,141,143,113,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(73,10,158,100,90,55,127,100,134,190,51,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1724485701350'] = function(block) {
  let code = "robot.leju_action('右转新')\n";
  return code;
}

