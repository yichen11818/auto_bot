Blockly.Blocks['1692961468091'] = {
  init: function() {
    this.jsonInit({
      "type": "1692961468091",
      "message0": "抱箱子右移1_2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692961468091'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(65,15,149,75,90,55,127,100,140,180,50,100,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692961468091'] = function(block) {
  let code = "robot.leju_action('抱箱子右移1_2')\n";
  return code;
}

