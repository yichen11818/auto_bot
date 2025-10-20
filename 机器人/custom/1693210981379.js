Blockly.Blocks['1693210981379'] = {
  init: function() {
    this.jsonInit({
      "type": "1693210981379",
      "message0": "抱箱子左转1-2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693210981379'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,50,40,100,99,140,180,50,100,75,146,43,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693210981379'] = function(block) {
  let code = "robot.leju_action('抱箱子左转1-2')\n";
  return code;
}

