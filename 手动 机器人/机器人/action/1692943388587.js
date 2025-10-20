Blockly.Blocks['1692943388587'] = {
  init: function() {
    this.jsonInit({
      "type": "1692943388587",
      "message0": "抱箱子前进1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692943388587'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(6)\nMOTOmove19(65,15,149,95,91,48,134,80,140,180,50,98,109,146,71,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,95,123,95,115,90,140,180,50,98,109,146,71,87,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,95,121,37,161,88,140,180,50,98,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,15,149,107,98,56,129,111,140,180,50,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,93,54,128,113,140,180,50,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,106,91,54,128,111,140,180,50,114,89,163,39,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,15,149,95,69,45,112,90,140,180,50,98,102,144,71,89,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,95,123,95,115,90,140,180,50,98,107,146,72,87,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(15)\nMOTOmove19(65,15,149,100,91,55,129,100,140,180,50,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692943388587'] = function(block) {
  let code = "robot.leju_action('抱箱子前进1')\n";
  return code;
}

