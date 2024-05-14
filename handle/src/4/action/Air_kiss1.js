Blockly.Blocks['Air_kiss1'] = {
  init: function () {
    this.jsonInit({
      type: 'Air_kiss1',
      message0: '%{BKY_AIR_KISS1}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Air_kiss1'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(150, 160, 28, 100, 93, 55, 124, 100, 44, 36, 159, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(6)',
    'MOTOmove16(150, 149, 32, 100, 105, 55, 130, 100, 44, 40, 159, 100, 93, 145, 72, 100)',
    'MOTOwait()',
    'DelayMs(800)',
    'MOTOsetspeed(42)',
    'MOTOmove16(101, 132, 16, 100, 93, 55, 124, 100, 91, 54, 174, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(22)',
    'MOTOmove16(119, 96, 13, 100, 93, 55, 124, 100, 102, 84, 174, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(22)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Air_kiss1'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['AIR_KISS1'] + "')\n";
  return code;
}

