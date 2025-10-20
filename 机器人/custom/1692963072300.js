Blockly.Blocks['1692963072300'] = {
  init: function() {
    this.jsonInit({
      "type": "1692963072300",
      "message0": "左移一小步",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692963072300'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(15)\nMOTOmove19(80,30,100,89,98,64,122,90,120,170,99,95,107,145,76,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,95,93,54,124,90,120,170,99,105,107,146,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,30,101,98,93,54,123,102,120,170,99,109,107,146,76,112,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(80,30,101,98,93,54,123,102,120,170,99,103,105,139,81,109,128,71,100)\nMOTOwait()\nMOTOsetspeed(6)\nMOTOmove19(80,30,101,100,93,55,124,100,120,170,99,95,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692963072300'] = function(block) {
  let code = "robot.leju_action('左移一小步')\n";
  return code;
}

