Blockly.Blocks['1718544996458'] = {
  init: function() {
    this.jsonInit({
      "type": "1718544996458",
      "message0": "Box_move_right1gai1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718544996458'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(50)\nMOTOmove19(60,15,190,90,95,54,127,90,132,187,10,115,85,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,130,78,132,187,10,105,107,147,74,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718544996458'] = function(block) {
  let code = "base_action.action('Box_move_right1gai1')\n";
  return code;
}

