Blockly.Blocks['1693485051153'] = {
  init: function() {
    this.jsonInit({
      "type": "1693485051153",
      "message0": "左移一小步1-2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693485051153'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,89,98,64,122,90,120,170,99,95,107,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,89,98,64,122,101,120,170,99,95,107,145,76,113,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,97,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693485051153'] = function(block) {
  let code = "robot.leju_action('左移一小步1-2')\n";
  return code;
}

