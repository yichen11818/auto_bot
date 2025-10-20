Blockly.Blocks['1718112715884'] = {
  init: function() {
    this.jsonInit({
      "type": "1718112715884",
      "message0": "右转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718112715884'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,100,122,44,165,100,142,180,58,100,141,143,109,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(48,18,149,100,90,56,118,101,142,179,57,99,108,143,79,98,127,78,108)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718112715884'] = function(block) {
  let code = "robot.leju_action('右转')\n";
  return code;
}

