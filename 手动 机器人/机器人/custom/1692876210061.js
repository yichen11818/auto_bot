Blockly.Blocks['1692876210061'] = {
  init: function() {
    this.jsonInit({
      "type": "1692876210061",
      "message0": "推前进1_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692876210061'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(81,92,132,100,93,55,124,100,120,106,69,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81,92,132,100,80,98,60,100,120,106,69,100,119,100,138,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,76,176,99,80,53,54,99,121,128,24,99,119,145,148,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,66,99,121,127,60,99,100,126,137,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,109,190,98,99,73,66,99,109,101,10,99,100,126,137,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692876210061'] = function(block) {
  let code = "robot.leju_action('推前进1_1')\n";
  return code;
}

