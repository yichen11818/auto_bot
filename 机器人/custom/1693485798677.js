Blockly.Blocks['1693485798677'] = {
  init: function() {
    this.jsonInit({
      "type": "1693485798677",
      "message0": "右移一小步1-2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693485798677'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(80,30,101,105,93,55,124,108,120,170,99,114,102,145,76,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,101,105,93,55,124,90,120,170,99,111,102,145,76,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,105,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693485798677'] = function(block) {
  let code = "robot.leju_action('右移一小步1-2')\n";
  return code;
}

