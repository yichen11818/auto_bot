Blockly.Blocks['Salute_two'] = {
  init: function () {
    this.jsonInit({
      type: 'Salute_two',
      message0: '%{BKY_SALUTE_TWO}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Salute_two'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(68)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 47, 49, 103, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(2000)',
    'MOTOsetspeed(64)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Salute_two'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SALUTE_TWO'] + "')\n";
  return code;
}

