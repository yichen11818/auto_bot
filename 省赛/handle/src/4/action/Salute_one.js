Blockly.Blocks['Salute_one'] = {
  init: function () {
    this.jsonInit({
      type: 'Salute_one',
      message0: '%{BKY_SALUTE_ONE}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Salute_one'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(64)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 59, 31, 130, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(2000)',
    'MOTOsetspeed(64)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Salute_one'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SALUTE_ONE'] + "')\n";
  return code;
}

