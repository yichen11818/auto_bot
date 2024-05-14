Blockly.Blocks['Back_Bow'] = {
  init: function () {
    this.jsonInit({
      type: 'Back_Bow',
      message0: '%{BKY_BACK_BOW}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Back_Bow'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 35, 160, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(28, 21, 175, 100, 93, 55, 124, 100, 180, 155, 155, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(28, 21, 175, 100, 145, 55, 145, 100, 180, 155, 155, 100, 55, 145, 55, 100)',
    'MOTOwait()',
    'DelayMs(1600)',
    'MOTOsetspeed(21)',
    'MOTOmove16(28, 21, 175, 100, 93, 55, 124, 100, 120, 120, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 40, 160, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Back_Bow'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BACK_BOW'] + "')\n";
  return code;
}

