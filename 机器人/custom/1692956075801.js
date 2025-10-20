Blockly.Blocks['1692956075801'] = {
  init: function() {
    this.jsonInit({
      "type": "1692956075801",
      "message0": "推左转弯1_5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692956075801'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(73,86,143,98,99,73,124,99,120,117,60,130,91,107,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(73,86,143,98,99,73,124,99,120,117,60,130,94,126,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,86,143,98,99,73,124,99,121,117,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692956075801'] = function(block) {
  let code = "robot.leju_action('推左转弯1_5')\n";
  return code;
}

