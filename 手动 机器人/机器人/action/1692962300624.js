Blockly.Blocks['1692962300624'] = {
  init: function() {
    this.jsonInit({
      "type": "1692962300624",
      "message0": "推左转1_8",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692962300624'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(100,100,100,98,99,73,124,99,100,100,100,130,91,107,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(100,100,100,98,99,73,124,99,100,100,100,130,94,130,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,98,99,73,124,99,100,100,100,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692962300624'] = function(block) {
  let code = "robot.leju_action('推左转1_8')\n";
  return code;
}

