Blockly.Blocks['1724484426559'] = {
  init: function() {
    this.jsonInit({
      "type": "1724484426559",
      "message0": "左移备用",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1724484426559'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(73,10,158,93,90,55,127,89,134,190,51,145,110,145,73,102,127,78,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(73,10,158,100,90,55,127,100,134,190,51,95,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1724484426559'] = function(block) {
  let code = "robot.leju_action('左移备用')\n";
  return code;
}

