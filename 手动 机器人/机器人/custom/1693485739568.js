Blockly.Blocks['1693485739568'] = {
  init: function() {
    this.jsonInit({
      "type": "1693485739568",
      "message0": "左移一小步1-3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693485739568'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,85,98,64,122,90,120,170,99,95,107,145,76,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,100,89,93,55,122,101,120,170,99,95,107,145,80,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,98,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693485739568'] = function(block) {
  let code = "robot.leju_action('左移一小步1-3')\n";
  return code;
}

