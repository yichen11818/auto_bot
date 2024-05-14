Blockly.Blocks['Easy&Attention'] = {
  init: function () {
    this.jsonInit({
      type: 'Easy&Attention',
      message0: '%{BKY_EASY&ATTENTION}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Easy&Attention'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 169, 100, 107, 99, 163, 56, 112)',
    'MOTOwait()',
    'DelayMs(1500)',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Easy&Attention'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['EASY&ATTENTION'] + "')\n";
  return code;
}

