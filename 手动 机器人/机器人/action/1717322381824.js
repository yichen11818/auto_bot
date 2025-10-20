Blockly.Blocks['1717322381824'] = {
  init: function() {
    this.jsonInit({
      "type": "1717322381824",
      "message0": "抱箱子左转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717322381824'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,50,40,100,93,140,180,50,100,75,146,43,95,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717322381824'] = function(block) {
  let code = "robot.leju_action('抱箱子左转')\n";
  return code;
}

