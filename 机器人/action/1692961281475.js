Blockly.Blocks['1692961281475'] = {
  init: function() {
    this.jsonInit({
      "type": "1692961281475",
      "message0": "推右转1_7",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692961281475'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,70,100,87,123,99,100,100,100,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,70,99,60,123,99,100,100,100,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,98,99,73,124,99,100,100,100,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692961281475'] = function(block) {
  let code = "robot.leju_action('推右转1_7')\n";
  return code;
}

