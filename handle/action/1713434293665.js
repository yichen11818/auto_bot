Blockly.Blocks['1713434293665'] = {
  init: function() {
    this.jsonInit({
      "type": "1713434293665",
      "message0": "抱箱右移修改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713434293665'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(75)\nMOTOmove19(65,10,149,90,93,54,130,100,140,190,50,115,88,110,85,110,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(85)\nMOTOmove19(65,10,149,80,84,40,138,70,140,190,50,105,107,147,69,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(65,10,149,97,93,54,130,95,140,190,50,100,107,146,66,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(65,10,149,100,93,55,130,95,140,190,50,100,107,145,66,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(50)\nMOTOmove19(65,10,149,100,93,55,130,100,140,190,50,100,107,145,66,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713434293665'] = function(block) {
  let code = "robot.leju_action('抱箱右移修改')\n";
  return code;
}

