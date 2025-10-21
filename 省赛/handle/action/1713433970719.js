Blockly.Blocks['1713433970719'] = {
  init: function() {
    this.jsonInit({
      "type": "1713433970719",
      "message0": "右转快5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713433970719'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(19)\nMOTOmove19(65,10,149,95,110,55,149,95,140,190,50,105,130,145,91,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,10,149,95,118,55,149,92,140,190,50,105,121,145,91,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(65,10,149,100,90,55,129,100,140,190,50,100,110,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(35)\nMOTOmove19(65,10,149,100,90,55,129,100,140,190,50,100,110,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713433970719'] = function(block) {
  let code = "robot.leju_action('右转快5')\n";
  return code;
}

