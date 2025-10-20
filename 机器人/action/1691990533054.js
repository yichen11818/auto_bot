Blockly.Blocks['1691990533054'] = {
  init: function() {
    this.jsonInit({
      "type": "1691990533054",
      "message0": "抱大箱子右移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691990533054'] = function(block) {
  let code = "MOTOrigid16(100,185,100,65,65,65,65,65,100,15,100,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,95,110,55,149,95,100,15,100,105,130,145,91,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,100,95,118,55,149,92,100,15,100,105,121,145,91,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,100,90,55,129,100,100,15,100,100,110,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(100,185,100,100,90,55,129,100,100,15,100,100,110,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691990533054'] = function(block) {
  let code = "robot.leju_action('抱大箱子右移')\n";
  return code;
}

