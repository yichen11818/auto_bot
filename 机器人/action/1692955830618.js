Blockly.Blocks['1692955830618'] = {
  init: function() {
    this.jsonInit({
      "type": "1692955830618",
      "message0": "推右转弯1_6",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692955830618'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(73,86,145,70,100,87,123,99,121,117,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(73,86,145,70,99,60,123,99,121,117,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,86,143,98,99,73,124,99,121,117,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692955830618'] = function(block) {
  let code = "robot.leju_action('推右转弯1_6')\n";
  return code;
}

