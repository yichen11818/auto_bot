Blockly.Blocks['Continuous_punches'] = {
  init: function () {
    this.jsonInit({
      type: 'Continuous_punches',
      message0: '%{BKY_CONTINUOUS_PUNCHES}',
      previousStatement: null,
      nextStatement: null,
      colour: '#377DFD',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Continuous_punches'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(26)',
    'MOTOmove16(10, 131, 186, 91, 115, 113, 98, 94, 190, 62, 15, 108, 158, 146, 123, 112)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 61, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 135, 190, 21, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 62, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 143, 190, 23, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 61, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 135, 190, 21, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 62, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 143, 190, 23, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 61, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 135, 190, 21, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 62, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 143, 190, 23, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(22)',
    'MOTOmove16(10, 131, 186, 91, 115, 113, 98, 94, 190, 62, 15, 108, 158, 146, 123, 112)',
    'MOTOwait()',
    'MOTOsetspeed(22)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Continuous_punches'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['CONTINUOUS_PUNCHES'] + "')\n";
  return code;
}

