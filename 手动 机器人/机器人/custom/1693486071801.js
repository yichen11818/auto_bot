Blockly.Blocks['1693486071801'] = {
  init: function() {
    this.jsonInit({
      "type": "1693486071801",
      "message0": "抱大方块右移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693486071801'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(100,185,100,105,93,55,124,108,100,15,100,114,102,145,76,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,185,100,105,93,55,124,90,100,15,100,111,102,145,76,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,185,100,105,93,55,124,100,100,15,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693486071801'] = function(block) {
  let code = "robot.leju_action('抱大方块右移1')\n";
  return code;
}

