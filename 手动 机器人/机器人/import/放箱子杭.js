Blockly.Blocks['1724086758345'] = {
  init: function() {
    this.jsonInit({
      "type": "1724086758345",
      "message0": "放箱子杭",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1724086758345'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- RIGEND\nMOTOsetspeed(50)\nMOTOmove19(70, 10, 158, 100, 93, 55, 127, 100, 124, 190, 50, 100, 107, 145, 73, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(20)\nMOTOmove19(70, 10, 158, 100, 111, 150, 54, 102, 124, 190, 50, 100, 88, 51, 142, 101, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(70, 10, 158, 100, 101, 150, 42, 102, 124, 190, 50, 100, 99, 51, 158, 101, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(15)\nMOTOmove19(70, 10, 158, 101, 107, 149, 43, 100, 124, 190, 50, 101, 92, 51, 157, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(87, 12, 138, 101, 127, 149, 43, 100, 122, 185, 68, 101, 75, 51, 157, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74, 25, 137, 101, 127, 149, 43, 100, 132, 172, 68, 101, 75, 51, 157, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(74, 31, 137, 101, 127, 149, 43, 100, 132, 163, 68, 101, 75, 51, 157, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(77, 31, 138, 101, 107, 149, 43, 100, 121, 163, 68, 101, 92, 51, 157, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(5)\nMOTOmove19(79, 31, 139, 100, 111, 150, 54, 102, 120, 165, 66, 100, 88, 51, 142, 101, 128, 71, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1724086758345'] = function(block) {
  let code = "robot.leju_action('放箱子杭')\n";
  return code;
}

