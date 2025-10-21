Blockly.Blocks['SOS-Flag_Language_SOS'] = {
  init: function () {
    this.jsonInit({
      type: 'SOS-Flag_Language_SOS',
      message0: '%{BKY_SOS-FLAG_LANGUAGE_SOS}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['SOS-Flag_Language_SOS'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(92, 55, 99, 100, 93, 55, 124, 100, 106, 104, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(136, 172, 58, 100, 93, 55, 124, 100, 106, 104, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(92, 55, 99, 100, 93, 55, 124, 100, 106, 104, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(1500)',
    'MOTOsetspeed(34)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['SOS-Flag_Language_SOS'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SOS-FLAG_LANGUAGE_SOS'] + "')\n";
  return code;
}

