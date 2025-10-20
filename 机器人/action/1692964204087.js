Blockly.Blocks['1692964204087'] = {
  init: function() {
    this.jsonInit({
      "type": "1692964204087",
      "message0": "放小方块1_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692964204087'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,15,149,100,93,55,127,100,140,180,50,100,107,145,73,100,128,71,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,15,149,100,111,150,54,102,140,180,50,100,88,51,142,101,128,71,100)\nMOTOwait()\n\n\n-- 放\nMOTOsetspeed(5)\nMOTOmove19(65,15,149,101,120,149,43,100,140,180,50,101,77,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(10)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692964204087'] = function(block) {
  let code = "robot.leju_action('放小方块1_1')\n";
  return code;
}

