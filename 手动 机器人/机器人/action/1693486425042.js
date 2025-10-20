Blockly.Blocks['1693486425042'] = {
  init: function() {
    this.jsonInit({
      "type": "1693486425042",
      "message0": "推前进1-7",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693486425042'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(50)\nMOTOmove19(73,109,190,98,99,150,54,99,109,100,10,99,100,50,148,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,76,176,99,80,45,54,99,121,128,24,99,119,155,148,99,128,71,99)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 3\nMOTOsetspeed(50)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(84,125,99,98,99,73,124,99,106,72,98,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693486425042'] = function(block) {
  let code = "robot.leju_action('推前进1-7')\n";
  return code;
}

