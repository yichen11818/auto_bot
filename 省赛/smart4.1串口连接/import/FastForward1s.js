Blockly.Blocks['1680752269543'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752269543",
      "message0": "FastForward1s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752269543'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 80, 96, 95, 70, 110, 100, 120, 170, 80, 102, 109, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752269543'] = function(block) {
  let code = "base_action.action('FastForward1s')\n";
  return code;
}

