Blockly.Blocks['1680678871975'] = {
  init: function() {
    this.jsonInit({
      "type": "1680678871975",
      "message0": "右转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680678871975'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,100,122,44,165,100,140,190,50,100,141,143,109,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680678871975'] = function(block) {
  let code = "robot.leju_action('右转')\n";
  return code;
}

