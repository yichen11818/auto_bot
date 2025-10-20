Blockly.Blocks['1718885306827'] = {
  init: function() {
    this.jsonInit({
      "type": "1718885306827",
      "message0": "宝箱前进",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718885306827'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(6)\nMOTOmove19(49,18,149,95,91,48,134,80,142,180,58,98,109,146,71,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,95,123,95,115,90,142,180,58,98,109,146,71,87,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,95,121,37,161,88,142,180,58,98,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(49,18,149,107,98,56,129,111,142,180,58,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,100,93,54,128,113,142,180,58,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,106,91,54,128,111,142,180,58,114,89,163,39,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(49,18,149,95,69,45,112,90,142,180,58,98,102,144,71,89,128,71,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,95,123,95,115,90,142,180,58,98,107,146,72,87,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(49,18,149,100,91,55,129,87,142,180,58,100,109,145,71,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(49,18,149,100,91,55,129,100,142,180,58,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718885306827'] = function(block) {
  let code = "robot.leju_action('宝箱前进')\n";
  return code;
}

