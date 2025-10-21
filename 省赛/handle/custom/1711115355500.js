Blockly.Blocks['1711115355500'] = {
  init: function() {
    this.jsonInit({
      "type": "1711115355500",
      "message0": "抱箱子后退5帧",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711115355500'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,90,91,48,138,88,140,190,50,94,107,146,67,92,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,86,90,95,94,90,140,190,50,94,107,146,67,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,88,71,53,114,85,140,190,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(66,12,147,88,73,80,93,100,138,189,49,90,110,142,68,102,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711115355500'] = function(block) {
  let code = "robot.leju_action('抱箱子后退5帧')\n";
  return code;
}

