Blockly.Blocks['1724485588256'] = {
  init: function() {
    this.jsonInit({
      "type": "1724485588256",
      "message0": "右转6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1724485588256'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(69, 10, 149, 100, 122, 44, 165, 100, 139, 189, 51, 100, 141, 143, 113, 100, 127, 78, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(69, 10, 149, 100, 90, 55, 127, 100, 139, 189, 51, 100, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1724485588256'] = function(block) {
  let code = "robot.leju_action('右转6')\n";
  return code;
}

