Blockly.Blocks['1717509807480'] = {
  init: function() {
    this.jsonInit({
      "type": "1717509807480",
      "message0": "抱箱左转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717509807480'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(53,23,150,100,50,40,100,93,142,180,58,100,75,146,43,95,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(53,23,150,100,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717509807480'] = function(block) {
  let code = "robot.leju_action('抱箱左转1')\n";
  return code;
}

