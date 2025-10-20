Blockly.Blocks['1693468356942'] = {
  init: function() {
    this.jsonInit({
      "type": "1693468356942",
      "message0": "倒地准备推1-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693468356942'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,94,55,123,100,120,170,100,100,106,145,77,100,128,71,100)\nMOTOwait()\nMOTOrigid16(100,100,100,30,60,60,60,30,100,100,100,30,60,60,60,30)\n\n\n-- 3\nMOTOsetspeed(20)\nMOTOmove19(110,155,100,100,142,145,77,100,90,45,100,100,58,55,123,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,165,10,100,142,145,77,100,100,35,190,100,58,55,123,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,165,10,100,142,145,55,100,100,35,190,100,58,55,145,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(99,97,10,100,142,145,55,100,100,97,189,100,58,55,145,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(81,92,132,100,93,55,124,100,120,106,69,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693468356942'] = function(block) {
  let code = "robot.leju_action('倒地准备推1-1')\n";
  return code;
}

