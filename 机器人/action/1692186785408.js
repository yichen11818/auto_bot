Blockly.Blocks['1692186785408'] = {
  init: function() {
    this.jsonInit({
      "type": "1692186785408",
      "message0": "抱小箱子后退一步",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692186785408'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(69,14,149,98,95,50,137,84,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,98,90,95,94,90,136,184,50,99,107,146,67,90,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,88,71,53,114,85,136,184,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,71,53,114,107,136,184,50,104,103,143,64,103,128,71,100)\nMOTOwait()\nMOTOrigid16(69,14,40,70,70,70,70,70,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(69,14,149,100,93,53,134,111,136,184,50,107,87,163,33,111,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(69,14,149,106,95,53,133,113,136,184,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,14,147,98,95,54,133,99,136,184,51,99,106,145,67,97,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692186785408'] = function(block) {
  let code = "robot.leju_action('抱小箱子后退一步')\n";
  return code;
}

