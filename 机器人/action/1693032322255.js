Blockly.Blocks['1693032322255'] = {
  init: function() {
    this.jsonInit({
      "type": "1693032322255",
      "message0": "倒楼梯",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693032322255'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,93,55,150,99,119,165,10,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,130,10,170,99,119,165,10,99,70,123,31,99,128,71,101)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693032322255'] = function(block) {
  let code = "robot.leju_action('倒楼梯')\n";
  return code;
}

