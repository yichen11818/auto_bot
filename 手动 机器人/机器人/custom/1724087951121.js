Blockly.Blocks['1724087951121'] = {
  init: function() {
    this.jsonInit({
      "type": "1724087951121",
      "message0": "左转备用",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1724087951121'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(73,10,158,100,50,40,100,93,134,190,51,100,75,146,43,95,127,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,10,158,100,90,55,127,100,134,190,51,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1724087951121'] = function(block) {
  let code = "robot.leju_action('左转备用')\n";
  return code;
}

