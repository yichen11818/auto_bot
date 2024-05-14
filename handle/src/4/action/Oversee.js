Blockly.Blocks['Oversee'] = {
  init: function () {
    this.jsonInit({
      type: 'Oversee',
      message0: '%{BKY_OVERSEE}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Oversee'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,50,50,75,70,50,25,25,25,50,50,75,70,50)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(120, 62, 98, 91, 100, 57, 127, 101, 41, 105, 98, 108, 122, 178, 64, 120)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(92, 37, 96, 93, 79, 23, 140, 80, 41, 47, 118, 115, 82, 106, 97, 98)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(92, 37, 96, 91, 118, 102, 99, 90, 41, 47, 118, 107, 82, 98, 101, 107)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(92, 37, 96, 85, 118, 94, 103, 102, 41, 47, 118, 108, 121, 175, 59, 123)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(92, 37, 96, 91, 118, 102, 99, 90, 41, 47, 118, 107, 82, 98, 101, 107)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(92, 37, 96, 93, 79, 23, 140, 80, 41, 47, 118, 115, 82, 106, 97, 98)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(92, 37, 96, 91, 118, 102, 99, 90, 41, 47, 118, 107, 82, 98, 101, 107)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(92, 37, 96, 85, 118, 94, 103, 102, 41, 47, 118, 107, 121, 177, 60, 120)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(250)',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Oversee'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['OVERSEE'] + "')\n";
  return code;
}

