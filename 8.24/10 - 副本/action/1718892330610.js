Blockly.Blocks['1718892330610'] = {
  init: function() {
    this.jsonInit({
      "type": "1718892330610",
      "message0": "Back1run",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718892330610'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(15)\nMOTOmove19(80,35,100,85,91,50,128,88,120,165,100,95,117,168,62,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,35,100,88,91,48,129,88,120,165,100,94,107,146,76,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(90)\nMOTOmove19(80,35,110,86,90,95,84,90,120,165,110,94,107,146,78,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80,35,110,88,74,53,105,85,120,165,110,93,101,144,79,91,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(80,35,110,106,93,53,124,107,120,165,110,114,87,164,45,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(90)\nMOTOmove19(80,35,110,106,93,53,124,107,120,165,110,109,97,117,88,108,0,0,100)\nMOTOwait()\nMOTOsetspeed(90)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718892330610'] = function(block) {
  let code = "base_action.action('Back1run')\n";
  return code;
}

