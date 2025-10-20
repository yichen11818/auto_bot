Blockly.Blocks['1719564324104'] = {
  init: function() {
    this.jsonInit({
      "type": "1719564324104",
      "message0": "BoxBack1-1gai",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1719564324104'] = function(block) {
  let code = "MOTOsetspeed(45)\nMOTOmove19(60,15,190,100,93,55,130,100,132,188,18,100,107,145,70,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,105,93,55,130,108,132,188,18,111,102,136,70,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,105,93,55,134,107,132,188,18,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,92,106,55,144,90,132,188,18,90,117,145,76,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,130,98,132,188,18,100,107,145,70,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1719564324104'] = function(block) {
  let code = "base_action.action('BoxBack1-1gai')\n";
  return code;
}

