Blockly.Blocks['1724090044130'] = {
  init: function() {
    this.jsonInit({
      "type": "1724090044130",
      "message0": "后退备用",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1724090044130'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,142,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(73,10,158,98,95,50,137,84,134,190,51,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(69,18,40,70,70,70,70,70,142,180,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(73,10,158,98,90,95,94,90,134,190,51,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(73,10,158,88,71,53,114,85,134,190,51,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(73,10,158,100,71,53,114,107,134,190,51,104,103,143,64,103,128,71,100)\nMOTOwait()\nMOTOrigid16(69,18,40,70,70,70,70,70,142,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(73,10,158,100,93,53,134,111,134,190,51,107,101,163,40,106,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(73,10,158,98,95,54,133,99,134,190,51,99,103,145,67,100,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1724090044130'] = function(block) {
  let code = "robot.leju_action('后退备用')\n";
  return code;
}

