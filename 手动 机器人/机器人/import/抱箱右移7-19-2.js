Blockly.Blocks['1721485159714'] = {
  init: function() {
    this.jsonInit({
      "type": "1721485159714",
      "message0": "抱箱右移7-19-2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721485159714'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(100)\nMOTOmove19(64, 12, 149, 60, 90, 55, 127, 100, 141, 184, 52, 105, 110, 145, 73, 105, 127, 78, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(100)\nMOTOmove19(64, 12, 149, 105, 90, 55, 127, 100, 141, 184, 52, 100, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1721485159714'] = function(block) {
  let code = "robot.leju_action('抱箱右移7-19-2')\n";
  return code;
}

