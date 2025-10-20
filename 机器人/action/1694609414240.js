Blockly.Blocks['1694609414240'] = {
  init: function() {
    this.jsonInit({
      "type": "1694609414240",
      "message0": "新侧面拿高台1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1694609414240'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 94, 55, 123, 100, 120, 170, 100, 100, 106, 145, 77, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,30,60,60,60,30,100,100,100,30,60,60,60,30,0,0,0)\n\n\n-- 伸手\nMOTOsetspeed(20)\nMOTOmove19(110, 83, 100, 100, 93, 55, 124, 100, 103, 106, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(104, 155, 15, 100, 93, 55, 124, 100, 94, 58, 183, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(102, 158, 59, 100, 148, 48, 116, 102, 96, 50, 144, 98, 56, 157, 79, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(102, 139, 111, 100, 145, 48, 122, 99, 100, 50, 92, 99, 55, 144, 84, 99, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129, 159, 108, 101, 144, 49, 122, 99, 80, 41, 91, 99, 56, 144, 84, 99, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(138, 159, 107, 101, 144, 49, 122, 99, 68, 44, 91, 99, 56, 144, 84, 99, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(138, 159, 108, 103, 139, 51, 92, 99, 68, 44, 91, 101, 60, 144, 111, 103, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(138, 159, 108, 102, 148, 129, 137, 97, 68, 41, 91, 101, 60, 144, 111, 103, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(138, 159, 108, 102, 142, 131, 130, 97, 68, 41, 91, 100, 56, 61, 70, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(138, 159, 108, 104, 134, 138, 137, 96, 68, 41, 91, 100, 64, 51, 69, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 放箱子\nMOTOsetspeed(30)\nMOTOmove19(138, 158, 45, 102, 134, 138, 137, 96, 68, 41, 153, 100, 64, 51, 69, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(110, 142, 40, 102, 134, 138, 137, 96, 100, 46, 156, 100, 64, 51, 69, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(113, 142, 35, 101, 152, 141, 47, 100, 101, 57, 169, 99, 45, 52, 158, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(127, 141, 10, 100, 136, 143, 42, 99, 70, 56, 190, 98, 64, 50, 160, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(127, 141, 10, 101, 153, 142, 70, 98, 70, 56, 190, 98, 47, 50, 136, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(113, 142, 35, 101, 104, 150, 42, 100, 101, 57, 169, 98, 96, 50, 160, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(101, 94, 102, 101, 112, 150, 42, 100, 101, 117, 95, 98, 88, 50, 160, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\n";
  return code;
}

Blockly.Python['1694609414240'] = function(block) {
  let code = "robot.leju_action('新侧面拿高台1')\n";
  return code;
}

