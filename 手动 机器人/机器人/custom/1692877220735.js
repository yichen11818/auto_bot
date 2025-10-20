Blockly.Blocks['1692877220735'] = {
  init: function() {
    this.jsonInit({
      "type": "1692877220735",
      "message0": "推前进1_2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692877220735'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(73,109,190,98,99,150,54,99,109,101,10,99,100,50,148,99,128,71,99)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(74,76,176,99,80,53,54,99,121,128,24,99,119,145,148,99,128,71,99)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692877220735'] = function(block) {
  let code = "robot.leju_action('推前进1_2')\n";
  return code;
}

