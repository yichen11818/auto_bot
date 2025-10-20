Blockly.Blocks['1693209905388'] = {
  init: function() {
    this.jsonInit({
      "type": "1693209905388",
      "message0": "抱箱子左移2-3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693209905388'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,90,55,127,93,140,180,50,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(300)\n";
  return code;
}

Blockly.Python['1693209905388'] = function(block) {
  let code = "robot.leju_action('抱箱子左移2-3')\n";
  return code;
}

