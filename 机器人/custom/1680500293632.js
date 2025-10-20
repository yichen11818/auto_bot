Blockly.Blocks['1680500293632'] = {
  init: function() {
    this.jsonInit({
      "type": "1680500293632",
      "message0": "右移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680500293632'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(65,20,149,90,93,54,130,100,140,180,50,115,88,110,85,110,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,20,149,80,84,40,138,70,140,180,50,105,107,147,69,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,20,149,97,93,54,130,95,140,180,50,100,107,146,66,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,20,149,100,93,55,130,95,140,180,50,100,107,145,66,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,20,149,100,93,55,130,100,140,180,50,100,107,145,66,100,128,71,100)\nMOTOwait()\n";
  return code;
}

