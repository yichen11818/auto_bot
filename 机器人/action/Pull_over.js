Blockly.Blocks['Pull_over'] = {
  init: function () {
    this.jsonInit({
      type: 'Pull_over',
      message0: '%{BKY_PULL_OVER}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Pull_over'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(48)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(81, 30, 100, 100, 93, 57, 126, 101, 121, 190, 53, 102, 109, 145, 78, 101)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(94, 181, 64, 100, 93, 57, 126, 101, 121, 190, 53, 102, 109, 145, 78, 101)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(94, 181, 64, 100, 93, 57, 126, 101, 140, 190, 53, 102, 109, 145, 78, 101)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(94, 181, 64, 100, 93, 57, 126, 101, 108, 190, 54, 102, 109, 145, 78, 101)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(94, 181, 64, 100, 93, 57, 126, 101, 140, 190, 53, 102, 109, 145, 78, 101)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(94, 181, 64, 100, 93, 57, 126, 101, 108, 190, 54, 102, 109, 145, 78, 101)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

