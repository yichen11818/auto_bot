Blockly.Blocks['1717766257878'] = {
  init: function() {
    this.jsonInit({
      "type": "1717766257878",
      "message0": "test2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717766257878'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,105,90,105,100,132,187,10,101,119,134,89,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,100,74,123,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(60,15,190,99,81,66,111,105,132,187,10,101,95,107,93,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,89,132,187,10,101,100,126,78,94,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,94,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717766257878'] = function(block) {
  let code = "base_action.action('test2')\n";
  return code;
}

