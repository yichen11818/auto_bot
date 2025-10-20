Blockly.Blocks['1692954087451'] = {
  init: function() {
    this.jsonInit({
      "type": "1692954087451",
      "message0": "推右转弯1_4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692954087451'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(73,96,160,83,100,87,123,99,121,115,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(73,74,160,82,99,60,123,99,121,115,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692954087451'] = function(block) {
  let code = "robot.leju_action('推右转弯1_4')\n";
  return code;
}

