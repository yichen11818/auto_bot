Blockly.Blocks['1691412130905'] = {
  init: function() {
    this.jsonInit({
      "type": "1691412130905",
      "message0": "右移改2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1691412130905'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,75,90,55,127,100,140,190,50,100,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(50)\nMOTOmove19(65,10,149,105,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1691412130905'] = function(block) {
  let code = "robot.leju_action('右移改2')\n";
  return code;
}

