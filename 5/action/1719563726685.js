Blockly.Blocks['1719563726685'] = {
  init: function() {
    this.jsonInit({
      "type": "1719563726685",
      "message0": "Getcube",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1719563726685'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(80,50,149,100,93,55,124,100,120,150,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,50,149,100,127,150,62,100,120,150,50,100,72,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,50,149,100,149,150,58,100,120,150,50,100,52,50,142,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(62,15,153,100,149,150,58,100,135,188,52,100,52,50,142,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(62,15,155,100,149,150,67,100,135,188,50,100,52,50,133,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(62,15,155,100,110,132,70,100,135,188,50,100,88,69,130,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(62,15,155,100,100,55,127,100,135,188,50,100,100,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(62,15,190,98,102,77,115,100,135,188,18,99,99,123,86,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1719563726685'] = function(block) {
  let code = "base_action.action('Getcube')\n";
  return code;
}

