Blockly.Blocks['1691990472177'] = {
  init: function() {
    this.jsonInit({
      "type": "1691990472177",
      "message0": "抱大箱子右移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691990472177'] = function(block) {
  let code = "MOTOrigid16(100,185,100,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,95,110,55,149,95,140,190,50,105,130,145,91,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,185,100,95,118,55,149,92,140,190,50,105,121,145,91,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(100,185,100,100,90,55,129,100,140,190,50,100,110,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(100,185,100,100,90,55,129,100,140,190,50,100,110,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691990472177'] = function(block) {
  let code = "robot.leju_action('抱大箱子右移1')\n";
  return code;
}

