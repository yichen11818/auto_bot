Blockly.Blocks['1717679066146'] = {
  init: function() {
    this.jsonInit({
      "type": "1717679066146",
      "message0": "左移demo",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717679066146'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,90,55,127,93,142,180,58,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717679066146'] = function(block) {
  let code = "robot.leju_action('左移demo')\n";
  return code;
}

