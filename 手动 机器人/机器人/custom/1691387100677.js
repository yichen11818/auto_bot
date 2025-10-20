Blockly.Blocks['1691387100677'] = {
  init: function() {
    this.jsonInit({
      "type": "1691387100677",
      "message0": "抱大箱子右移改2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691387100677'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(6)\nMOTOmove19(80,30,101,105,93,55,124,108,100,170,99,111,102,136,78,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,94,93,54,124,100,100,170,100,106,107,146,76,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(80,30,100,91,93,54,124,88,100,170,100,102,107,146,77,98,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(80,30,100,97,95,61,119,91,100,170,100,102,107,146,77,98,128,71,100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(9)\nMOTOmove19(80,30,100,97,95,61,119,91,100,170,100,102,107,146,77,98,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(80,30,100,100,93,55,124,100,100,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691387100677'] = function(block) {
  let code = "robot.leju_action('抱大箱子右移改2')\n";
  return code;
}

