Blockly.Blocks['1724039582313'] = {
  init: function() {
    this.jsonInit({
      "type": "1724039582313",
      "message0": "宝箱1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1724039582313'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(30)\nMOTOmove19(80,50,149,100,93,55,124,100,120,150,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,136,150,62,100,120,150,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(80,50,149,99,151,150,60,99,120,150,50,99,43,50,133,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(52,21,149,100,149,150,67,100,142,179,57,100,40,50,133,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(52,18,149,100,104,132,70,100,142,189,57,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(52,18,149,100,90,55,127,100,142,189,57,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1724039582313'] = function(block) {
  let code = "robot.leju_action('宝箱1')\n";
  return code;
}

