Blockly.Blocks['1680678082798'] = {
  init: function() {
    this.jsonInit({
      "type": "1680678082798",
      "message0": "左侧移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680678082798'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(45)\nMOTOmove19(65,10,149,100,90,55,127,95,140,190,50,120,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

