Blockly.Blocks['1676271795032'] = {
  init: function() {
    this.jsonInit({
      "type": "1676271795032",
      "message0": "抱箱右转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676271795032'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,10,149,95,110,55,149,95,140,190,50,105,130,145,91,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,95,118,55,149,92,140,190,50,105,121,145,91,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,10,149,100,90,55,129,100,140,190,50,100,110,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,90,55,129,100,140,190,50,100,110,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

