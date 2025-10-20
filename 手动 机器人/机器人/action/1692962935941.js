Blockly.Blocks['1692962935941'] = {
  init: function() {
    this.jsonInit({
      "type": "1692962935941",
      "message0": "右移一小步",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692962935941'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(15)\nMOTOmove19(80,30,101,105,93,55,124,108,120,170,99,111,102,136,78,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,94,93,54,124,100,120,170,100,106,107,146,76,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(80,30,100,91,93,54,124,88,120,170,100,102,107,146,77,98,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(15)\nMOTOmove19(80,30,100,97,95,61,119,91,120,170,100,102,107,146,77,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(6)\nMOTOmove19(80,30,100,105,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692962935941'] = function(block) {
  let code = "robot.leju_action('右移一小步')\n";
  return code;
}

