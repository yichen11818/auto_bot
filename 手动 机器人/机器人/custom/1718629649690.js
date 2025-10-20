Blockly.Blocks['1718629649690'] = {
  init: function() {
    this.jsonInit({
      "type": "1718629649690",
      "message0": "左移测试",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718629649690'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(100)\nMOTOmove19(49,18,162,99,94,56,122,99,135,189,42,99,106,143,76,98,128,71,98)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(49,18,162,104,94,55,122,92,135,189,42,146,106,143,77,106,128,71,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(49,18,162,100,93,55,124,100,135,189,42,100,107,145,76,100,128,71,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1718629649690'] = function(block) {
  let code = "robot.leju_action('左移测试')\n";
  return code;
}

