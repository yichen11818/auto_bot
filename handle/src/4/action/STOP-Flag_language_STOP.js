Blockly.Blocks['STOP-Flag_language_STOP'] = {
  init: function () {
    this.jsonInit({
      type: 'STOP-Flag_language_STOP',
      message0: '%{BKY_STOP-FLAG_LANGUAGE_STOP}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['STOP-Flag_language_STOP'] = function (block) {
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
    'MOTOmove16(94, 182, 100, 100, 93, 55, 124, 100, 106, 51, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(136, 172, 58, 100, 93, 55, 124, 100, 106, 104, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(94, 182, 100, 100, 93, 55, 124, 100, 106, 104, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(1500)',
    'MOTOsetspeed(34)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['STOP-Flag_language_STOP'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['STOP-FLAG_LANGUAGE_STOP'] + "')\n";
  return code;
}

