Blockly.Blocks['1693485984745'] = {
  init: function() {
    this.jsonInit({
      "type": "1693485984745",
      "message0": "抱大方块左移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693485984745'] = function(block) {
  let code = "MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(100,185,100,85,98,64,122,90,100,15,99,95,107,145,76,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,185,100,89,93,55,122,101,100,15,99,95,107,145,80,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,185,100,100,93,55,124,100,100,15,100,98,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693485984745'] = function(block) {
  let code = "robot.leju_action('抱大方块左移1')\n";
  return code;
}

