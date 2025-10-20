Blockly.Blocks['1693033914956'] = {
  init: function() {
    this.jsonInit({
      "type": "1693033914956",
      "message0": "前上楼梯",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693033914956'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,93,55,100,100,120,170,30,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,90,170,100,93,55,100,100,120,110,30,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,90,100,100,93,55,100,100,120,110,100,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,40,130,100,93,55,100,100,120,160,70,100,107,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,40,130,100,60,55,100,100,120,160,70,100,140,145,100,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,40,130,99,95,10,71,100,120,160,70,100,105,190,129,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693033914956'] = function(block) {
  let code = "robot.leju_action('前上楼梯')\n";
  return code;
}

