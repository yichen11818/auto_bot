Blockly.Blocks['1680500382458'] = {
  init: function() {
    this.jsonInit({
      "type": "1680500382458",
      "message0": "左转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680500382458'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,20,149,95,71,55,109,95,140,180,50,105,89,145,51,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,20,149,95,80,55,109,92,140,180,50,105,81,145,51,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,20,149,100,91,55,129,100,140,180,50,100,109,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,100,91,55,129,100,140,180,50,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

