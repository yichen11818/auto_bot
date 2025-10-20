Blockly.Blocks['1680500267955'] = {
  init: function() {
    this.jsonInit({
      "type": "1680500267955",
      "message0": "左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680500267955'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(65,20,149,85,112,90,115,90,140,180,50,110,107,146,70,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,20,149,95,93,53,131,105,140,180,50,120,116,160,68,130,128,71,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,20,149,100,93,54,134,98,140,180,50,103,107,146,76,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,20,149,100,93,55,134,95,140,180,50,100,107,145,76,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,20,149,100,93,55,134,100,140,180,50,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

