Blockly.Blocks['Oblique_Embrace'] = {
  init: function () {
    this.jsonInit({
      type: 'Oblique_Embrace',
      message0: '%{BKY_OBLIQUE_EMBRACE}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Oblique_Embrace'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(42)',
    'MOTOmove16(80, 60, 100, 90, 91, 48, 129, 88, 120, 150, 40, 92, 107, 146, 76, 92)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 60, 100, 90, 94, 55, 124, 85, 120, 150, 40, 98, 102, 135, 81, 92)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 50, 160, 75, 109, 85, 108, 90, 120, 150, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(50, 50, 160, 75, 109, 85, 108, 90, 150, 150, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(80, 55, 160, 75, 109, 85, 108, 90, 120, 145, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(50, 50, 160, 75, 109, 85, 108, 90, 150, 150, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(80, 55, 160, 75, 109, 85, 108, 90, 120, 145, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(50, 50, 160, 75, 109, 85, 108, 90, 150, 150, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(80, 55, 160, 75, 109, 85, 108, 90, 120, 145, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(50, 50, 160, 75, 109, 85, 108, 90, 150, 150, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(80, 55, 160, 75, 109, 85, 108, 90, 120, 145, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(50, 50, 160, 75, 109, 85, 108, 90, 150, 150, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(80, 55, 160, 75, 109, 85, 108, 90, 120, 145, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(50, 50, 160, 75, 109, 85, 108, 90, 150, 150, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(80, 55, 160, 75, 109, 85, 108, 90, 120, 145, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 40, 100, 90, 94, 55, 124, 85, 120, 140, 40, 98, 102, 135, 81, 92)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 40, 100, 90, 91, 48, 129, 88, 110, 140, 60, 92, 107, 146, 76, 92)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 40, 100, 95, 93, 54, 125, 95, 110, 140, 60, 92, 107, 146, 76, 91)',
    'MOTOwait()',
    'MOTOsetspeed(11)',
    'MOTOmove16(80, 30, 100, 98, 93, 55, 124, 95, 120, 170, 100, 102, 107, 145, 76, 105)',
    'MOTOwait()',
    'MOTOsetspeed(11)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Oblique_Embrace'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['OBLIQUE_EMBRACE'] + "')\n";
  return code;
}

