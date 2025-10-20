Blockly.Blocks['1693032892998'] = {
  init: function() {
    this.jsonInit({
      "type": "1693032892998",
      "message0": "倒楼梯1_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693032892998'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,99,95,55,150,99,119,120,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,93,55,150,99,119,165,120,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,80,99,128,55,150,99,119,165,120,99,71,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,81,100,128,134,160,99,119,164,118,100,71,65,38,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,29,90,100,128,134,160,99,119,164,116,100,71,65,38,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1693032892998'] = function(block) {
  let code = "robot.leju_action('倒楼梯1_1')\n";
  return code;
}

