Blockly.Blocks['LOVE-Flag_language_LOVE'] = {
  init: function () {
    this.jsonInit({
      type: 'LOVE-Flag_language_LOVE',
      message0: '%{BKY_LOVE-FLAG_LANGUAGE_LOVE}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['LOVE-Flag_language_LOVE'] = function (block) {
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
    'MOTOmove16(98, 132, 101, 100, 93, 55, 124, 100, 105, 149, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(126, 170, 58, 100, 93, 55, 124, 100, 105, 108, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(93, 46, 97, 100, 93, 55, 124, 100, 111, 25, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(92, 134, 98, 100, 93, 55, 124, 100, 110, 178, 101, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(1500)',
    'MOTOsetspeed(34)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['LOVE-Flag_language_LOVE'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LOVE-FLAG_LANGUAGE_LOVE'] + "')\n";
  return code;
}

