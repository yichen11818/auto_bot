Blockly.Blocks['Kick'] = {
  init: function () {
    this.jsonInit({
      type: 'Kick',
      message0: '%{BKY_KICK}',
      previousStatement: null,
      nextStatement: null,
      colour: '#7148F5',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Kick'] = function (block) {
  const code = [
    'MOTOrigid16(65,65,65,70,70,70,70,70,65,65,65,50,50,50,50,50)',
    'MOTOsetspeed(12)',
    'MOTOmove16(80, 30, 100, 97, 93, 55, 124, 95, 120, 170, 100, 103, 107, 145, 76, 105)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 105, 120, 170, 100, 105, 117, 163, 68, 125)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(80, 30, 100, 105, 93, 55, 124, 110, 120, 170, 100, 110, 117, 163, 68, 115)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(80, 30, 100, 105, 93, 55, 124, 110, 120, 170, 100, 110, 117, 163, 68, 115)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 97, 85, 50, 125, 110, 122, 150, 101, 119, 70, 60, 118, 103)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 97, 93, 56, 125, 110, 122, 150, 101, 117, 46, 72, 107, 104)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 97, 93, 56, 125, 110, 122, 150, 101, 119, 42, 109, 11, 114)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 97, 100, 56, 125, 110, 123, 150, 101, 118, 93, 101, 32, 105)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 97, 103, 56, 125, 110, 123, 150, 101, 119, 92, 94, 107, 124)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 100, 98, 56, 125, 110, 123, 150, 101, 119, 94, 131, 75, 126)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 100, 98, 56, 125, 110, 123, 150, 101, 109, 107, 145, 76, 126)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 100, 93, 54, 124, 95, 123, 150, 101, 100, 107, 146, 76, 105)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(80, 30, 100, 105, 93, 54, 124, 100, 120, 170, 100, 95, 107, 146, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Kick'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['KICK'] + "')\n";
  return code;
}

