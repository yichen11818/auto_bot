Blockly.Blocks['1718884720290'] = {
  init: function() {
    this.jsonInit({
      "type": "1718884720290",
      "message0": "放下新",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718884720290'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(20)\nMOTOmove19(52,18,149,100,93,55,127,100,142,189,57,100,107,145,73,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(52,15,149,100,111,150,50,102,142,189,57,100,88,51,153,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(64,18,154,100,128,149,41,101,120,189,53,99,74,53,161,99,128,71,99)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(10)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718884720290'] = function(block) {
  let code = "robot.leju_action('放下新')\n";
  return code;
}

