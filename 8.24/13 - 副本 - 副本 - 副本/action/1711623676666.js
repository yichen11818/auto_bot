Blockly.Blocks['1711623676666'] = {
  init: function() {
    this.jsonInit({
      "type": "1711623676666",
      "message0": "Box_forward2s4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711623676666'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 90, 105, 100, 132, 187, 10, 101, 119, 134, 89, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 105, 132, 187, 10, 101, 95, 107, 92, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 95, 132, 187, 10, 102, 119, 146, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 85, 55, 124, 100, 132, 187, 10, 100, 115, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711623676666'] = function(block) {
  let code = "base_action.action('Box_forward2s4')\n";
  return code;
}

