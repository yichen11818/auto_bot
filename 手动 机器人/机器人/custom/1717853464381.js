Blockly.Blocks['1717853464381'] = {
  init: function() {
    this.jsonInit({
      "type": "1717853464381",
      "message0": "左移demo4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717853464381'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,73,29,133,92,142,180,58,148,105,165,52,111,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717853464381'] = function(block) {
  let code = "robot.leju_action('左移demo4')\n";
  return code;
}

