Blockly.Blocks['1623376203724'] = {
  init: function() {
    this.jsonInit({
      "type": "1623376203724",
      "message0": "DownBridge2mm_610",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1623376203724'] = function(block) {
  var code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 93, 93, 55, 123, 86, 105, 95, 100, 93, 106, 143, 75, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 85, 125, 100, 117, 91, 105, 95, 100, 95, 106, 143, 75, 88, 128, 71, 100)\nMOTOwait()\nMOTOmove19(86, 105, 100, 90, 145, 60, 117, 91, 105, 95, 100, 95, 106, 143, 75, 88, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOrigid16(25,25,25,50,50,50,50,50,25,25,25,90,90,90,90,90)\nMOTOsetspeed(25)\n\n\n-- 3\nMOTOmove19(86, 105, 100, 85, 103, 27, 165, 90, 105, 95, 100, 94, 134, 100, 124, 85, 128, 71, 100)\nMOTOwait()\nMOTOmove19(86, 105, 100, 85, 135, 33, 190, 90, 105, 95, 100, 94, 118, 70, 153, 85, 128, 71, 100)\nMOTOwait()\n\n\n-- 7\n\n\n-- 11\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(15)\nMOTOmove19(100, 167, 100, 105, 125, 33, 165, 110, 100, 100, 100, 115, 101, 95, 143, 125, 128, 71, 100)\nMOTOwait()\nDelayMs(150)\nMOTOmove19(100, 167, 100, 105, 125, 33, 165, 113, 100, 100, 100, 115, 100, 96, 145, 120, 128, 71, 100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(15)\n\n\n-- 12\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,50,50,50,50,50)\nMOTOmove19(100, 100, 100, 105, 75, 10, 145, 113, 100, 60, 100, 120, 160, 175, 105, 129, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 105, 75, 10, 145, 113, 100, 60, 100, 130, 150, 190, 105, 129, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 68, 10, 148, 112, 100, 60, 100, 135, 110, 91, 145, 129, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 105, 52, 10, 139, 112, 100, 60, 100, 125, 89, 69, 145, 116, 128, 71, 100)\nMOTOwait()\nMOTOmove19(100, 100, 100, 105, 52, 10, 139, 112, 100, 60, 100, 113, 107, 145, 76, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(18)\n\n\n-- MOTORA,107,71,152,91,93\nMOTOmove19(80, 30, 100, 107, 91, 48, 129, 107, 120, 150, 100, 113, 107, 145, 76, 110, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85)\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1623376203724'] = function(block) {
  let code = "robot.leju_action('DownBridge2mm_610')\n";
  return code;
}

