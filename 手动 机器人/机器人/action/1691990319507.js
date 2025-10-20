Blockly.Blocks['1691990319507'] = {
  init: function() {
    this.jsonInit({
      "type": "1691990319507",
      "message0": "抱大箱子左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691990319507'] = function(block) {
  let code = "MOTOrigid16(100,185,100,65,65,65,65,65,100,15,100,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,95,71,55,109,95,100,15,100,105,89,145,51,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,100,95,80,55,109,92,100,15,100,105,81,145,51,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,100,91,55,129,100,100,15,100,100,109,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(100,185,100,100,91,55,129,100,100,15,100,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691990319507'] = function(block) {
  let code = "robot.leju_action('抱大箱子左移')\n";
  return code;
}

