Blockly.Blocks['1691990898630'] = {
  init: function() {
    this.jsonInit({
      "type": "1691990898630",
      "message0": "抱大箱子左移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691990898630'] = function(block) {
  let code = "MOTOrigid16(100,185,100,65,93,65,65,65,100,15,100,65,107,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,95,93,55,109,95,100,15,100,105,107,145,51,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,100,95,93,55,109,92,100,15,100,105,107,145,51,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,100,93,55,129,100,100,15,100,100,107,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(100,185,100,100,93,55,129,100,100,15,100,100,107,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691990898630'] = function(block) {
  let code = "robot.leju_action('抱大箱子左移1')\n";
  return code;
}

