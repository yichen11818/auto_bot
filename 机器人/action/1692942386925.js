Blockly.Blocks['1692942386925'] = {
  init: function() {
    this.jsonInit({
      "type": "1692942386925",
      "message0": "抱起方块1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692942386925'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,93,55,124,100,120,150,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,136,150,62,100,120,150,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(80,50,149,100,149,150,58,100,120,150,50,100,52,50,142,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,15,149,100,149,150,67,100,140,180,50,100,52,50,133,100,128,78,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,15,149,100,104,132,70,100,140,180,50,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692942386925'] = function(block) {
  let code = "robot.leju_action('抱起方块1')\n";
  return code;
}

