Blockly.Blocks['Bow'] = {
  init: function () {
    this.jsonInit({
      type: 'Bow',
      message0: '%{BKY_BOW}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Bow'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(18)',
    'MOTOmove16(80, 30, 100, 100, 150, 75, 130, 100, 120, 170, 100, 100, 50, 125, 70, 100)',
    'MOTOwait()',
    'DelayMs(1000)',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Bow'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BOW'] + "')\n";
  return code;
}

Blockly.Blocks['Left_foot_shot'] = {
  init: function () {
    this.jsonInit({
      type: 'Left_foot_shot',
      message0: '%{BKY_LEFT_FOOT_SHOT}',
      previousStatement: null,
      nextStatement: null,
      colour: '#7148F5',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Left_foot_shot'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(8)',
    'MOTOmove16(80, 40, 100, 86, 91, 48, 129, 85, 120, 160, 100, 92, 107, 145, 77, 86)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(80, 40, 100, 86, 142, 112, 104, 83, 120, 160, 100, 95, 87, 145, 70, 85)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(65, 35, 165, 77, 61, 116, 78, 96, 110, 163, 162, 93, 87, 132, 85, 85)',
    'MOTOwait()',
    'MOTOsetspeed(90)',
    'MOTOmove16(81, 45, 101, 77, 102, 95, 81, 88, 121, 161, 100, 95, 87, 140, 76, 85)',
    'MOTOwait()',
    'MOTOsetspeed(110)',
    'MOTOmove16(80, 40, 50, 77, 150, 47, 171, 96, 129, 177, 34, 95, 101, 139, 75, 85)',
    'MOTOwait()',
    'DelayMs(400)',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 40, 100, 77, 130, 78, 131, 83, 120, 160, 100, 95, 108, 144, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 40, 100, 77, 110, 81, 114, 80, 120, 160, 100, 95, 105, 145, 77, 87)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 40, 100, 87, 94, 76, 109, 82, 120, 160, 100, 93, 107, 145, 77, 90)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Left_foot_shot'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LEFT_FOOT_SHOT'] + "')\n";
  return code;
}

Blockly.Blocks['Push-up'] = {
  init: function () {
    this.jsonInit({
      type: 'Push-up',
      message0: '%{BKY_PUSH-UP}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Push-up'] = function (block) {
  const code = [
    'MOTOrigid16(90,90,90,40,40,40,40,40,90,90,90,40,40,40,40,40)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 41, 154, 100, 110, 140, 55, 100, 120, 159, 46, 100, 90, 60, 145, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 41, 157, 98, 156, 140, 44, 100, 120, 159, 43, 99, 43, 59, 156, 99)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(100, 10, 185, 100, 160, 130, 35, 100, 100, 190, 15, 100, 40, 70, 165, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(15, 80, 190, 99, 109, 50, 154, 100, 185, 120, 10, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOrigid16(65,65,65,60,60,60,60,60,65,65,65,60,60,60,60,60)',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(15, 80, 190, 100, 120, 90, 45, 100, 185, 120, 10, 100, 80, 110, 155, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 140, 55, 100, 110, 185, 45, 100, 38, 60, 145, 100)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 140, 55, 100, 110, 185, 45, 100, 38, 60, 145, 100)',
    'MOTOwait()',
    'DelayMs(50)',
    'MOTOsetspeed(42)',
    'MOTOmove16(90, 15, 140, 100, 150, 165, 50, 100, 110, 185, 60, 100, 50, 35, 150, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 113, 100, 130, 165, 46, 100, 120, 170, 87, 100, 70, 35, 158, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 100, 120, 130, 77, 100, 120, 170, 100, 100, 80, 70, 123, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Push-up'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['PUSH-UP'] + "')\n";
  return code;
}

Blockly.Blocks['Spread_wings'] = {
  init: function () {
    this.jsonInit({
      type: 'Spread_wings',
      message0: '%{BKY_SPREAD_WINGS}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Spread_wings'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(78, 105, 99, 99, 92, 56, 124, 99, 121, 90, 100, 101, 106, 142, 75, 99)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(100, 100, 100, 89, 92, 58, 122, 82, 100, 100, 100, 93, 102, 133, 86, 91)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(100, 100, 100, 90, 98, 69, 114, 86, 100, 100, 100, 93, 102, 133, 86, 88)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 88, 98, 145, 74, 87)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 130, 85, 105, 145, 79, 90, 100, 100, 70, 93, 71, 128, 77, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 170, 85, 54, 55, 102, 90, 100, 100, 30, 93, 62, 165, 53, 87)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(140, 150, 170, 85, 54, 55, 102, 90, 60, 50, 30, 93, 50, 170, 48, 88)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 170, 85, 54, 55, 102, 90, 130, 150, 30, 93, 55, 170, 48, 86)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(32)',
    'MOTOmove16(100, 100, 170, 85, 54, 55, 102, 90, 100, 100, 30, 93, 50, 170, 48, 86)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,60,60,60,60,70)',
    'MOTOsetspeed(32)',
    'MOTOmove16(100, 100, 170, 89, 61, 94, 101, 88, 100, 100, 30, 93, 77, 165, 57, 89)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(25)',
    'MOTOmove16(100, 100, 130, 85, 105, 145, 53, 90, 100, 100, 70, 93, 85, 131, 83, 87)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(100, 100, 100, 85, 111, 86, 96, 85, 100, 100, 100, 93, 103, 142, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 100, 89, 92, 50, 121, 85, 100, 100, 100, 93, 102, 139, 83, 92)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,60,60,60,60,40,40,40,40,60,60,60,60,60)',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 35, 100, 100, 93, 55, 124, 100, 120, 165, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Spread_wings'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SPREAD_WINGS'] + "')\n";
  return code;
}

Blockly.Blocks['remote_control'] = {
  init: function () {
    this.jsonInit({
      type: 'remote_control',
      message0: '%{BKY_GAMEPAD} %1 %{BKY_GAMEPAD_VAR} %2',
      args0: [
        {
          type: 'input_dummy',
        },
        {
          type: 'input_value',
          name: 'variable',
          check: 'Variable',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['remote_control'] = function(block) {
  var variable = Blockly.Lua.valueToCode(block, "variable", Blockly.Lua.ORDER_NONE);
  let code = "";
  if(variable) {
    code = `${variable} = HKEY()\n`;
  } else {
    code = `HKEY()\n`;
  }
  return code;
}

Blockly.Python['remote_control'] = function (block) {
  const variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_NONE);
  const code = variable ? `${variable} = get_key.key()\n` : `get_key.key()\n`;
  return code;
}

Blockly.Blocks['aelos_if'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_if',
      message0: '%{BKY_AELOS_IF} %1 %{BKY_AELOS_DO} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'do',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_if'] = function(block) {
  var condition = Blockly.Lua.valueToCode(block, "condition", Blockly.Lua.ORDER_NONE) || "false";
  var do_code = Blockly.Lua.statementToCode(block, "do");

  var code = `if ${condition} then \n${do_code}\nHKEY()\nend\n`;
  return code;
}

Blockly.Python['aelos_if'] = function (block) {
  const condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  const do_code = Blockly.Python.statementToCode(block, 'do') || Blockly.Python.PASS;

  const code = `if ${condition}:\n${do_code}`;
  return code;
}

Blockly.Blocks['aelos_compare'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_compare',
      message0: '%1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'input_1',
          check: ['Number', 'Variable', 'Remote_type'],
        },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['=', 'JNE'],
            ['\u2260', 'JE'],
            ['<', 'JAE'],
            ['\u200f\u2265\u200f', 'JA'],
            ['>', 'JBE'],
            ['\u200f\u2264\u200f', 'JB'],
          ],
        },
        {
          type: 'input_value',
          name: 'input_2',
          check: ['Number', 'Variable', 'Remote_type'],
        },
      ],
      inputsInline: true,
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_compare'] = function(block) {
  var op_map = {
    "JNE": "==",
    "JE": "~=",
    "JAE": "<",
    "JA": "<=",
    "JBE": ">",
    "JB": ">="
  };
  var input_1 = Blockly.Lua.valueToCode(block, "input_1", Blockly.Lua.ORDER_ATOMIC);
  var input_2 = Blockly.Lua.valueToCode(block, "input_2", Blockly.Lua.ORDER_ATOMIC);
  var operation = op_map[block.getFieldValue("OP")];
  var code = "";

  if (input_1 && input_2) {
    code = `${input_1} ${operation} ${input_2}`;
  } else {
    code = "FALSE";
  }

  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['aelos_compare'] = function (block) {
  const op_map = {
    JNE: '==',
    JE: '!=',
    JAE: '<',
    JA: '<=',
    JBE: '>',
    JB: '>=',
  };
  const input_1 = Blockly.Python.valueToCode(block, 'input_1', Blockly.Python.ORDER_ATOMIC);
  const input_2 = Blockly.Python.valueToCode(block, 'input_2', Blockly.Python.ORDER_ATOMIC);
  const operation = op_map[block.getFieldValue('OP')];
  let code = '';

  if (input_1 && input_2) {
    code = `${input_1} ${operation} ${input_2}`;
  } else {
    code = 'False';
  }

  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['remote_control_button'] = {
  init: function () {
    this.jsonInit({
      type: 'remote_control_button',
      message0: '%{BKY_REMOTE_CONTROL_BUTTON_REMOTE}， %1 ，%{BKY_REMOTE_CONTROL_BUTTON_KEY} %2',
      args0: [
        { type: 'field_dropdown', name: 'mode', options: remoteControlMode },
        { type: 'field_dropdown', name: 'key', options: remoteControlKey },
      ],
      output: 'Remote_type',
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['remote_control_button'] = function(block) {
  const mode = block.getFieldValue("mode");
  const key = block.getFieldValue("key");
  const num = HKEYMap[mode][key];
  return [num, 0 > num ? Blockly.Lua.ORDER_UNARY : Blockly.Lua.ORDER_ATOMIC];
}

Blockly.Python['remote_control_button'] = function (block) {
  const mode = block.getFieldValue('mode');
  const key = block.getFieldValue('key');
  const num = HKEYMap[mode][key];
  return [num, 0 > num ? Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC];
}

Blockly.Blocks['color_discrimination'] = {
  init: function () {
    this.jsonInit({
      type: 'color_discrimination',
      message0: '%1 %{BKY_CAMERA} %{BKY_VISUAL_COLOR_DETECTED} %2',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions },
        { type: 'field_dropdown', name: 'color', options: colorOptions },
      ],
      output: 'Boolean',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_discrimination'] = function(block) {
  const color = block.getFieldValue('color');
  const code = `IsColourOfRGB(${color})`;

  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['color_discrimination'] = function (block) {
  const color = block.getFieldValue('color');
  const camera = block.getFieldValue('camera');
  const code = generateHsvCode(HAVE_COLOR, camera, hsvMap[color]);
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['1676273100751'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273100751",
      "message0": "抱起方块1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273100751'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 149, 100, 113, 90, 109, 100, 120, 170, 50, 100, 87, 111, 91, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 136, 150, 62, 100, 120, 170, 50, 100, 72, 50, 138, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 149, 150, 67, 100, 120, 170, 50, 100, 52, 50, 133, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 149, 150, 67, 100, 140, 190, 50, 100, 52, 50, 133, 100, 128, 78, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 100, 104, 132, 70, 100, 140, 190, 50, 100, 93, 69, 130, 100, 128, 78, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 90, 55, 127, 100, 140, 190, 50, 100, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273100751'] = function(block) {
  let code = "base_action.action('抱起方块1')\n";
  return code;
}

Blockly.Blocks['1676273195308'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273195308",
      "message0": "放下方块1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273195308'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 93, 55, 127, 100, 140, 190, 50, 100, 107, 145, 73, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 111, 150, 54, 102, 140, 190, 50, 100, 88, 51, 142, 101, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 101, 150, 42, 102, 140, 190, 50, 100, 99, 51, 158, 101, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 101, 107, 149, 43, 100, 140, 190, 50, 101, 92, 51, 157, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 101, 107, 149, 43, 100, 120, 165, 66, 101, 92, 51, 157, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 100, 111, 150, 54, 102, 120, 165, 66, 100, 88, 51, 142, 101, 128, 71, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273195308'] = function(block) {
  let code = "base_action.action('放下方块1')\n";
  return code;
}

Blockly.Blocks['1676273115472'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273115472",
      "message0": "抱箱前进1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273115472'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 90, 91, 48, 134, 88, 140, 190, 50, 94, 109, 146, 71, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 123, 95, 115, 90, 140, 190, 50, 94, 109, 146, 71, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 121, 37, 161, 88, 140, 190, 50, 94, 109, 146, 72, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 107, 98, 56, 129, 111, 140, 190, 50, 112, 131, 155, 88, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 93, 54, 128, 113, 140, 190, 50, 114, 77, 105, 85, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 91, 54, 128, 111, 140, 190, 50, 114, 89, 163, 39, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 88, 69, 45, 112, 90, 140, 190, 50, 93, 102, 144, 71, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 123, 95, 115, 90, 140, 190, 50, 94, 107, 146, 72, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273115472'] = function(block) {
  let code = "base_action.action('抱箱前进1')\n";
  return code;
}

Blockly.Blocks['1676273110376'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273110376",
      "message0": "抱箱后退1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273110376'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 90, 91, 48, 138, 88, 140, 190, 50, 94, 107, 146, 67, 92, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 90, 95, 94, 90, 140, 190, 50, 94, 107, 146, 67, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 88, 71, 53, 114, 85, 140, 190, 50, 93, 100, 144, 70, 91, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 106, 93, 53, 134, 111, 140, 190, 50, 114, 87, 163, 33, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 95, 53, 133, 113, 140, 190, 50, 114, 110, 105, 105, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 107, 100, 56, 130, 109, 140, 190, 50, 112, 129, 147, 86, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 107, 100, 56, 130, 109, 140, 190, 50, 112, 129, 147, 86, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 86, 113, 37, 167, 90, 140, 190, 50, 94, 107, 147, 67, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 90, 95, 95, 90, 140, 190, 50, 94, 105, 147, 69, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 93, 55, 133, 100, 140, 190, 50, 100, 107, 145, 67, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273110376'] = function(block) {
  let code = "base_action.action('抱箱后退1')\n";
  return code;
}

Blockly.Blocks['1676273135796'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273135796",
      "message0": "抱箱左移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273135796'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 85, 112, 90, 115, 90, 140, 190, 50, 110, 107, 146, 70, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65, 10, 149, 95, 93, 53, 131, 105, 140, 190, 50, 120, 116, 160, 68, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 100, 93, 54, 134, 98, 140, 190, 50, 103, 107, 146, 76, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 134, 95, 140, 190, 50, 100, 107, 145, 76, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 134, 100, 140, 190, 50, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273135796'] = function(block) {
  let code = "base_action.action('抱箱左移1')\n";
  return code;
}

Blockly.Blocks['1676273121186'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273121186",
      "message0": "抱箱右移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273121186'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 90, 93, 54, 130, 100, 140, 190, 50, 115, 88, 110, 85, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65, 10, 149, 80, 84, 40, 138, 70, 140, 190, 50, 105, 107, 147, 69, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 97, 93, 54, 130, 95, 140, 190, 50, 100, 107, 146, 66, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 130, 95, 140, 190, 50, 100, 107, 145, 66, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 130, 100, 140, 190, 50, 100, 107, 145, 66, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273121186'] = function(block) {
  let code = "base_action.action('抱箱右移1')\n";
  return code;
}

Blockly.Blocks['1676273139445'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273139445",
      "message0": "抱箱左转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273139445'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 95, 71, 55, 109, 95, 140, 190, 50, 105, 89, 145, 51, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 95, 80, 55, 109, 92, 140, 190, 50, 105, 81, 145, 51, 108, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273139445'] = function(block) {
  let code = "base_action.action('抱箱左转1')\n";
  return code;
}

Blockly.Blocks['1676273129812'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273129812",
      "message0": "抱箱右转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273129812'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 95, 110, 55, 149, 95, 140, 190, 50, 105, 130, 145, 91, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 95, 118, 55, 149, 92, 140, 190, 50, 105, 121, 145, 91, 108, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 100, 90, 55, 129, 100, 140, 190, 50, 100, 110, 145, 71, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 90, 55, 129, 100, 140, 190, 50, 100, 110, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273129812'] = function(block) {
  let code = "base_action.action('抱箱右转1')\n";
  return code;
}

Blockly.Blocks['Front_Roll'] = {
  init: function () {
    this.jsonInit({
      type: 'Front_Roll',
      message0: '%{BKY_FRONT_ROLL}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Front_Roll'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 98, 97, 145, 41, 99, 120, 170, 100, 100, 98, 53, 159, 99)',
    'MOTOwait()',
    'MOTOsetspeed(32)',
    'MOTOmove16(85, 30, 130, 100, 140, 152, 60, 100, 115, 170, 70, 100, 60, 48, 140, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(100, 10, 185, 100, 165, 145, 35, 100, 100, 190, 15, 100, 35, 55, 165, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(75, 89, 190, 100, 140, 90, 40, 100, 129, 108, 10, 100, 60, 110, 160, 100)',
    'MOTOwait()',
    'MOTOsetspeed(40)',
    'MOTOmove16(57, 79, 131, 100, 140, 90, 40, 100, 138, 131, 66, 100, 60, 110, 160, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(44, 69, 190, 100, 26, 100, 146, 100, 162, 134, 10, 100, 174, 105, 52, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(68)',
    'MOTOmove16(47, 56, 190, 100, 26, 100, 146, 100, 160, 131, 10, 100, 174, 105, 52, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(37)',
    'MOTOmove16(115, 176, 127, 101, 51, 150, 33, 101, 85, 24, 78, 99, 153, 50, 165, 102)',
    'MOTOwait()',
    'MOTOsetspeed(37)',
    'MOTOmove16(116, 177, 160, 101, 51, 150, 33, 101, 84, 24, 43, 99, 153, 50, 165, 102)',
    'MOTOwait()',
    'MOTOsetspeed(37)',
    'MOTOmove16(116, 177, 160, 101, 51, 150, 33, 101, 84, 24, 43, 99, 153, 50, 165, 102)',
    'MOTOwait()',
    'MOTOsetspeed(40)',
    'MOTOmove16(116, 177, 160, 100, 69, 139, 43, 100, 86, 24, 43, 99, 134, 61, 162, 101)',
    'MOTOwait()',
    'MOTOsetspeed(40)',
    'MOTOmove16(97, 25, 170, 100, 102, 149, 61, 100, 122, 164, 29, 100, 104, 50, 148, 99)',
    'MOTOwait()',
    'MOTOsetspeed(37)',
    'MOTOmove16(69, 64, 100, 101, 100, 144, 33, 101, 121, 130, 99, 99, 100, 56, 165, 102)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(20)',
    'MOTOmove16(83, 28, 98, 100, 123, 152, 44, 103, 115, 169, 89, 103, 78, 46, 161, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(15)',
    'MOTOmove16(85, 30, 102, 99, 107, 150, 44, 100, 115, 162, 96, 99, 94, 50, 159, 98)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(85, 30, 102, 102, 110, 73, 116, 101, 115, 162, 96, 106, 91, 122, 84, 99)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Front_Roll'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['FRONT_ROLL'] + "')\n";
  return code;
}

Blockly.Blocks['Back_flip'] = {
  init: function () {
    this.jsonInit({
      type: 'Back_flip',
      message0: '%{BKY_BACK_FLIP}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Back_flip'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 80, 100, 25, 133, 40, 98, 130, 150, 120, 100, 175, 65, 161, 102)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(45, 50, 45, 100, 23, 151, 68, 100, 155, 150, 155, 100, 177, 49, 130, 102)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(70, 50, 35, 100, 160, 11, 121, 97, 130, 150, 165, 100, 40, 186, 81, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 10, 100, 160, 19, 92, 96, 130, 150, 190, 100, 40, 180, 108, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(30, 135, 187, 100, 162, 23, 100, 97, 170, 65, 10, 100, 40, 180, 95, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(30, 135, 190, 90, 80, 80, 70, 100, 170, 65, 10, 110, 120, 120, 130, 100)',
    'MOTOwait()',
    'DelayMs(50)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 10, 160, 63, 162, 145, 33, 75, 110, 190, 40, 137, 38, 55, 167, 125)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 145, 55, 100, 110, 185, 45, 100, 38, 55, 145, 100)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 145, 55, 100, 110, 185, 45, 100, 38, 55, 145, 100)',
    'MOTOwait()',
    'DelayMs(50)',
    'MOTOsetspeed(42)',
    'MOTOmove16(90, 15, 140, 100, 162, 175, 50, 100, 110, 185, 60, 100, 38, 25, 150, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 113, 100, 155, 175, 62, 100, 120, 170, 87, 100, 45, 25, 138, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 100, 142, 145, 77, 100, 120, 170, 100, 100, 58, 55, 123, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Back_flip'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BACK_FLIP'] + "')\n";
  return code;
}

Blockly.Blocks['1676273199273'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273199273",
      "message0": "上台阶",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273199273'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94, 79, 100, 85, 106, 79, 113, 80, 106, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 105, 100, 85, 132, 127, 85, 89, 103, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 150, 100, 85, 160, 50, 180, 95, 100, 100, 100, 95, 85, 100, 99, 90, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 150, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 135, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 145, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 160, 78, 135, 112, 100, 190, 20, 110, 130, 190, 40, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 112, 100, 190, 20, 115, 155, 180, 105, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60,0,0,0)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 100, 100, 106, 93, 55, 124, 112, 103, 95, 100, 115, 68, 73, 115, 111, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 100, 100, 105, 115, 100, 101, 110, 100, 50, 100, 115, 40, 150, 20, 105, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 65, 50, 101, 100, 100, 50, 100, 100, 40, 122, 45, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 55, 50, 101, 100, 100, 100, 100, 100, 40, 122, 45, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 90, 70, 10, 160, 90, 100, 190, 20, 95, 40, 122, 65, 88, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 85, 45, 20, 95, 100, 100, 190, 20, 95, 85, 135, 75, 88, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 85, 130, 90, 105, 100, 100, 190, 20, 95, 95, 135, 75, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 180, 85, 110, 90, 105, 100, 100, 100, 20, 95, 102, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 105, 100, 85, 132, 127, 85, 89, 103, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 150, 100, 85, 160, 50, 180, 95, 100, 100, 100, 95, 85, 100, 99, 90, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 150, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 135, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 145, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 160, 78, 135, 112, 100, 190, 20, 110, 130, 190, 40, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 112, 100, 190, 20, 115, 155, 180, 105, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 180, 102, 79, 32, 137, 108, 100, 100, 20, 108, 121, 165, 70, 108, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 108, 70, 10, 148, 108, 100, 70, 100, 111, 101, 142, 72, 110, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50,0,0,0)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 105, 79, 32, 137, 108, 100, 70, 100, 107, 107, 160, 60, 112, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 100, 79, 35, 130, 100, 100, 70, 100, 102, 107, 160, 65, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 98, 79, 35, 130, 95, 100, 70, 100, 98, 107, 160, 65, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 92, 79, 35, 130, 92, 100, 70, 100, 98, 121, 168, 63, 92, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 95, 55, 123, 100, 120, 170, 100, 100, 105, 145, 77, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273199273'] = function(block) {
  let code = "base_action.action('上台阶')\n";
  return code;
}

Blockly.Blocks['1676273176627'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273176627",
      "message0": "抱起10cm方块",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273176627'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 94, 55, 123, 100, 120, 170, 100, 100, 106, 145, 77, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,30,60,60,60,30,100,100,100,30,60,60,60,30,0,0,0)\n\n\n-- 3\nMOTOsetspeed(20)\nMOTOmove19(110, 155, 100, 100, 142, 145, 77, 100, 90, 45, 100, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 165, 10, 100, 142, 145, 77, 100, 100, 35, 190, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 165, 10, 100, 142, 145, 55, 100, 100, 35, 190, 100, 58, 55, 145, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 165, 10, 100, 142, 25, 125, 100, 100, 35, 190, 100, 58, 175, 75, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 10, 100, 142, 25, 125, 100, 100, 15, 190, 100, 58, 175, 75, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 10, 55, 158, 140, 55, 60, 100, 15, 190, 145, 42, 60, 145, 140, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(100, 185, 10, 50, 138, 150, 55, 60, 100, 15, 190, 150, 62, 50, 145, 140, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(55)\nMOTOmove19(100, 185, 10, 70, 128, 145, 75, 70, 100, 15, 190, 130, 72, 55, 125, 130, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(100, 185, 100, 98, 142, 145, 77, 98, 100, 15, 100, 102, 58, 55, 123, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 98, 122, 40, 152, 98, 100, 15, 100, 102, 78, 160, 48, 102, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 100, 100, 15, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273176627'] = function(block) {
  let code = "base_action.action('抱起10cm方块')\n";
  return code;
}

Blockly.Blocks['1676273185034'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273185034",
      "message0": "放下10cm方块",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273185034'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 98, 93, 55, 124, 98, 100, 15, 100, 102, 107, 145, 76, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 100, 102, 142, 145, 77, 98, 100, 15, 100, 98, 58, 55, 123, 102, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(100, 185, 10, 70, 128, 145, 75, 70, 100, 15, 190, 130, 72, 55, 125, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(90, 185, 10, 55, 158, 140, 55, 60, 110, 15, 190, 145, 42, 60, 145, 140, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(110, 155, 10, 65, 138, 150, 55, 70, 90, 45, 190, 135, 62, 50, 145, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(110, 155, 10, 70, 128, 145, 75, 70, 90, 45, 190, 130, 72, 55, 125, 130, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 165, 100, 98, 142, 145, 77, 98, 120, 35, 100, 102, 58, 55, 123, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 98, 122, 40, 152, 98, 100, 15, 100, 102, 78, 160, 48, 102, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273185034'] = function(block) {
  let code = "base_action.action('放下10cm方块')\n";
  return code;
}

Blockly.Blocks['1676273151408'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273151408",
      "message0": "抱10cm方块前进",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273151408'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 100, 94, 55, 124, 100, 100, 15, 99, 100, 106, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(40,40,40,85,60,60,60,75,40,40,40,85,60,60,60,75,0,0,0)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 105, 93, 55, 124, 105, 100, 15, 99, 111, 102, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 105, 93, 55, 124, 107, 100, 15, 99, 105, 84, 141, 62, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 101, 95, 80, 55, 111, 90, 100, 15, 99, 95, 101, 145, 73, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 95, 116, 59, 138, 90, 100, 15, 99, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 101, 105, 99, 55, 127, 107, 100, 15, 99, 105, 120, 145, 89, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 105, 94, 54, 123, 107, 100, 15, 99, 105, 102, 136, 78, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 100, 94, 55, 123, 98, 100, 15, 99, 100, 106, 145, 77, 102, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273151408'] = function(block) {
  let code = "base_action.action('抱10cm方块前进')\n";
  return code;
}

Blockly.Blocks['1676273147745'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273147745",
      "message0": "抱10cm方块后退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273147745'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 100, 100, 15, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75,0,0,0)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 105, 93, 55, 124, 108, 100, 15, 100, 111, 102, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 100, 105, 93, 55, 124, 107, 100, 15, 100, 108, 125, 145, 94, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 100, 92, 116, 55, 144, 85, 100, 15, 100, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 100, 92, 75, 55, 106, 95, 100, 15, 100, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 100, 105, 93, 55, 124, 107, 100, 15, 100, 108, 84, 141, 56, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 100, 105, 92, 55, 124, 107, 100, 15, 100, 111, 107, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 98, 100, 15, 100, 100, 107, 145, 76, 102, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273147745'] = function(block) {
  let code = "base_action.action('抱10cm方块后退')\n";
  return code;
}

Blockly.Blocks['1676273159353'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273159353",
      "message0": "抱10cm方块左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273159353'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 89, 98, 64, 122, 90, 100, 15, 99, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 95, 93, 54, 124, 90, 100, 15, 99, 105, 107, 146, 76, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(100, 185, 101, 98, 93, 54, 123, 102, 100, 15, 99, 109, 107, 146, 76, 112, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 98, 93, 54, 123, 102, 100, 15, 99, 103, 105, 139, 81, 109, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 98, 93, 54, 123, 102, 100, 15, 99, 103, 105, 139, 81, 109, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 100, 93, 55, 124, 100, 100, 15, 99, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273159353'] = function(block) {
  let code = "base_action.action('抱10cm方块左移')\n";
  return code;
}

Blockly.Blocks['1676273155676'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273155676",
      "message0": "抱10cm方块右移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273155676'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 105, 93, 55, 124, 108, 100, 15, 99, 111, 102, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 94, 93, 54, 124, 100, 100, 15, 100, 106, 107, 146, 76, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(100, 185, 100, 91, 93, 54, 124, 88, 100, 15, 100, 102, 107, 146, 77, 98, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 97, 95, 61, 119, 91, 100, 15, 100, 102, 107, 146, 77, 98, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 97, 95, 61, 119, 91, 100, 15, 100, 102, 107, 146, 77, 98, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 100, 100, 15, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273155676'] = function(block) {
  let code = "base_action.action('抱10cm方块右移')\n";
  return code;
}

Blockly.Blocks['1676447440168'] = {
  init: function() {
    this.jsonInit({
      "type": "1676447440168",
      "message0": "前倒地",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676447440168'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 起\nMOTOsetspeed(40)\nMOTOmove19(80, 90, 101, 101, 93, 57, 124, 101, 131, 100, 98, 102, 107, 143, 77, 99, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(37, 92, 182, 85, 64, 41, 98, 99, 153, 107, 19, 130, 142, 160, 92, 103, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 63, 160, 136, 46, 86, 150, 147, 19, 137, 44, 67, 152, 117, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85, 12, 172, 62, 160, 146, 47, 75, 119, 189, 31, 139, 43, 54, 154, 123, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 66, 149, 146, 55, 63, 150, 147, 19, 158, 48, 60, 146, 140, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 70, 126, 145, 53, 68, 150, 147, 19, 138, 74, 60, 147, 135, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54, 47, 190, 79, 113, 140, 50, 78, 150, 147, 19, 126, 72, 60, 135, 125, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 100, 125, 140, 62, 100, 120, 170, 87, 100, 75, 60, 138, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 104, 127, 133, 71, 100, 120, 170, 87, 103, 70, 67, 128, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 102, 128, 104, 97, 100, 120, 170, 87, 102, 74, 91, 104, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80, 37, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676447440168'] = function(block) {
  let code = "base_action.action('前倒地')\n";
  return code;
}

Blockly.Blocks['1676447448574'] = {
  init: function() {
    this.jsonInit({
      "type": "1676447448574",
      "message0": "后倒地",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676447448574'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35, 130, 20, 101, 131, 126, 170, 100, 165, 70, 180, 99, 69, 74, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21, 105, 21, 101, 131, 126, 170, 100, 179, 95, 180, 99, 69, 74, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 16, 46, 100, 80, 150, 60, 100, 108, 184, 154, 100, 120, 50, 140, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 18, 58, 100, 73, 150, 40, 100, 108, 182, 142, 100, 127, 50, 160, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 25, 135, 100, 124, 150, 50, 100, 108, 175, 65, 100, 76, 50, 150, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676447448574'] = function(block) {
  let code = "base_action.action('后倒地')\n";
  return code;
}

Blockly.Blocks['1677548683339'] = {
  init: function() {
    this.jsonInit({
      "type": "1677548683339",
      "message0": "下台阶",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1677548683339'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 93, 93, 55, 123, 86, 105, 95, 100, 93, 106, 143, 75, 89, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 85, 125, 100, 117, 91, 105, 95, 100, 95, 106, 143, 75, 88, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 90, 145, 60, 117, 91, 105, 95, 100, 95, 106, 143, 75, 88, 128, 71, 99)\nMOTOwait()\nMOTOrigid16(25,25,25,50,50,50,50,50,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(86, 105, 100, 85, 103, 27, 165, 90, 105, 95, 100, 94, 134, 100, 124, 85, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(86, 105, 100, 85, 102, 10, 190, 90, 105, 95, 100, 94, 118, 80, 153, 85, 128, 71, 99)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(100, 167, 100, 105, 120, 10, 181, 110, 100, 100, 100, 120, 105, 91, 145, 125, 128, 71, 99)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(15)\nMOTOmove19(100, 167, 100, 105, 120, 10, 175, 113, 100, 100, 100, 120, 100, 96, 145, 120, 128, 71, 99)\nMOTOwait()\nDelayMs(150)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,50,50,50,50,50,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 75, 10, 145, 113, 100, 60, 100, 120, 160, 175, 105, 129, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 75, 10, 145, 113, 100, 60, 100, 130, 150, 190, 105, 129, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 68, 10, 148, 112, 100, 60, 100, 135, 110, 91, 145, 129, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 52, 10, 139, 112, 100, 60, 100, 125, 89, 69, 145, 116, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 52, 10, 139, 112, 100, 60, 100, 113, 107, 145, 76, 110, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 30, 100, 107, 91, 48, 129, 107, 120, 150, 100, 113, 107, 145, 76, 110, 128, 71, 99)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOsetspeed(18)\nMOTOmove19(80, 30, 100, 107, 91, 48, 129, 107, 120, 150, 100, 113, 107, 145, 76, 110, 128, 71, 99)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1677548683339'] = function(block) {
  let code = "base_action.action('下台阶')\n";
  return code;
}

Blockly.Blocks['aelos_while'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_while',
      message0: '%{BKY_AELOS_WHILE} %1 %{BKY_AELOS_DO} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'do',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_while'] = function(block) {
    var condition = Blockly.Lua.valueToCode(block, "condition", Blockly.Lua.ORDER_NONE) || "FALSE";
    var do_code = Blockly.Lua.statementToCode(block, "do") || "  pass\n";

    var code = `while (${condition})\ndo\n${do_code}\nHKEY()\nend\n`;
    return code;
}

Blockly.Python['aelos_while'] = function (block) {
  var condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  var do_code = Blockly.Python.statementToCode(block, 'do') || Blockly.Python.PASS;

  var code = `while ${condition}:\n${do_code}`;
  return code;
}

Blockly.Blocks['1677554203595'] = {
  init: function() {
    this.jsonInit({
      "type": "1677554203595",
      "message0": "翻墙稳定1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1677554203595'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(90, 105, 190, 100, 128, 10, 170, 100, 110, 95, 10, 100, 72, 190, 30, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(90, 10, 190, 100, 108, 10, 170, 100, 110, 190, 10, 100, 92, 190, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 118, 10, 170, 100, 110, 190, 10, 100, 82, 190, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 169, 100, 110, 190, 10, 100, 72, 190, 31, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 168, 100, 110, 190, 10, 100, 72, 190, 32, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 164, 100, 110, 190, 10, 100, 72, 190, 36, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 130, 10, 164, 100, 110, 190, 10, 100, 70, 190, 36, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 130, 10, 161, 100, 110, 190, 10, 100, 70, 190, 39, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 130, 10, 159, 100, 110, 190, 10, 100, 70, 190, 41, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 132, 10, 159, 100, 110, 190, 10, 100, 68, 190, 41, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 132, 10, 157, 100, 110, 190, 10, 100, 68, 190, 43, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 132, 10, 154, 100, 110, 190, 10, 100, 68, 190, 46, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(87, 14, 190, 100, 132, 10, 154, 100, 113, 186, 10, 100, 68, 190, 46, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOrigid16(90,90,100,30,60,60,60,30,90,90,100,30,60,60,60,30,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(50, 50, 190, 100, 132, 10, 154, 100, 150, 150, 10, 100, 68, 190, 46, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(50, 50, 165, 100, 10, 95, 108, 100, 150, 150, 35, 100, 65, 190, 40, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(50, 50, 165, 100, 10, 95, 108, 100, 150, 150, 35, 100, 165, 190, 40, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 修改\nMOTOsetspeed(135)\nMOTOmove19(43, 40, 190, 100, 10, 95, 108, 100, 166, 160, 10, 100, 190, 175, 10, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 8\nMOTOsetspeed(99)\nMOTOmove19(50, 50, 190, 100, 90, 95, 170, 100, 150, 150, 10, 100, 110, 105, 30, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 9\nMOTOsetspeed(40)\nMOTOmove19(89, 182, 110, 100, 10, 95, 93, 100, 111, 18, 90, 100, 190, 105, 107, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 10\nMOTOsetspeed(40)\nMOTOmove19(90, 160, 190, 100, 10, 95, 63, 100, 110, 40, 10, 100, 190, 105, 137, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70,0,0,0)\n\n\n-- 12\nMOTOsetspeed(24)\nMOTOmove19(90, 50, 190, 100, 142, 145, 77, 100, 110, 150, 10, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 13\nMOTOsetspeed(24)\nMOTOmove19(90, 50, 190, 100, 142, 145, 77, 100, 110, 150, 10, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1677554203595'] = function(block) {
  let code = "base_action.action('翻墙稳定1')\n";
  return code;
}

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

Blockly.Python['Salute_one'] = function(block) {
  var code = "robot.leju_action('" + Blockly.Msg['SALUTE_ONE'] + "')\n";
  return code;
}

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

Blockly.Python['Back_Bow'] = function(block) {
  var code = "robot.leju_action('" + Blockly.Msg['BACK_BOW'] + "')\n";
  return code;
}

Blockly.Blocks['Beat_wooden_drum'] = {
  init: function () {
    this.jsonInit({
      type: 'Beat_wooden_drum',
      message0: '%{BKY_BEAT_WOODEN_DRUM}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Beat_wooden_drum'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 100, 106, 142, 50, 100, 120, 170, 100, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(79, 30, 138, 100, 106, 142, 50, 100, 121, 170, 19, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(24)',
    'MOTOmove16(79, 30, 138, 100, 106, 142, 50, 100, 121, 170, 19, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(79, 38, 103, 98, 105, 141, 51, 99, 108, 170, 90, 115, 96, 62, 147, 114)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(24)',
    'MOTOmove16(79, 38, 103, 93, 105, 73, 115, 94, 108, 170, 90, 108, 93, 126, 79, 106)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(24)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Beat_wooden_drum'] = function(block) {
  var code = "robot.leju_action('" + Blockly.Msg['BEAT_WOODEN_DRUM'] + "')\n";
  return code;
}

Blockly.Blocks['music_plugin'] = {
  init: function() {
    this.jsonInit({
      "type": "music_plugin",
      "message0": "%{BKY_AELOS_MUSIC} %1",
      "args0": [{
        "type": "field_input",
        "name": "music_name",
        "text": "%{BKY_DEFAULT_MUSIC_INPUT}",
        "spellcheck": false
      }],
      "inputsInline": true,
      "output": "Music",
      "colour": '#F144B2',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['music_plugin'] = function(block) {
  const music_name = block.getFieldValue("music_name");
  let code = `Play_AI_music('')\n`;

  if (music_name) {
    code = `Play_AI_music('0:/music/${music_name}.mp3')\n`;
  }

  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['music_plugin'] = function (block) {
  let musicName = block.getFieldValue('music_name');
  const isInputted = Boolean(musicName) && musicName !== Blockly.Msg['DEFAULT_MUSIC_INPUT'];
  const code = !isInputted ? 'None' : `'${musicName}'`;
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['music'] = {
  init: function() {
    this.jsonInit({
      "type": "music",
      "message0": "%{BKY_AELOS_MUSIC} %1",
      "args0": [{
        "type": "field_input",
        "name": "music_name",
        "text": "%{BKY_DEFAULT_MUSIC_INPUT}",
        "spellcheck": false
      }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#F144B2',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['music'] = function(block) {
  const music_name = block.getFieldValue("music_name");
  let code = `Play_AI_music('')\n`;
    
  if (music_name) {
    code = `Play_AI_music('0:/music/${music_name}.mp3')\n`;
  }

  return code;
}

Blockly.Python['music'] = function (block) {
  let musicName = block.getFieldValue('music_name');
  const isInputted = Boolean(musicName) && musicName !== Blockly.Msg['DEFAULT_MUSIC_INPUT'];
  musicName = !isInputted ? 'None' : `'${musicName}'`;
  const code = `robot.play_music(${musicName})\n`;
  return code;
}

Blockly.Blocks['music_stop_control'] = {
  init: function() {
    this.jsonInit({
      "type": "music_stop_control",
      "message0": "%{BKY_AELOS_MUSIC_STOP_CONTROL}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#F144B2',
      "toolip": "",
      "helpUrl": ""
    })
  }
};

Blockly.Lua['music_stop_control'] = function(block) {
  const code = `stopWAV_mp3()\n`;
  return code;
}

Blockly.Python['music_stop_control'] = function(block) {
  var code = `robot.stop_music()\n`
  return code
}

Blockly.Blocks['1711115355500'] = {
  init: function() {
    this.jsonInit({
      "type": "1711115355500",
      "message0": "抱箱子后退5帧",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711115355500'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,90,91,48,138,88,140,190,50,94,107,146,67,92,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,86,90,95,94,90,140,190,50,94,107,146,67,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,88,71,53,114,85,140,190,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(66,12,147,88,73,80,93,100,138,189,49,90,110,142,68,102,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711115355500'] = function(block) {
  let code = "robot.leju_action('抱箱子后退5帧')\n";
  return code;
}

Blockly.Blocks['run_smooth_forward'] = {
  init: function() {
    this.jsonInit({
      type: 'run_smooth_forward',
      message0: '%{BKY_RUN_SMOOTH} %1 %{BKY_ISPEED_SMOOTH}，%2 %{BKY_STEP}',
      args0: [
        {
          type: 'field_dropdown',
          name: 'direction',
          options: [
            ['%{BKY_FORWARD}', 'forward'],
            ['%{BKY_BACKWARD}', 'backward'],
          ],
        },
        {
          "type": "input_value",
          "name": "step",
          "check": [
            "Number",
            "Variable"
          ]
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['run_smooth_forward'] = function(block) {
  const direction = block.getFieldValue('direction');
  var step = Blockly.Lua.valueToCode(block, "step", Blockly.Lua.ORDER_NONE);

  let code = '';

  code =
    direction !== 'backward'
      ? `fast_forward_smooth_step(${step})`
      : `fast_backward_smooth_step(${step})`;

  return code.concat('\n');
}

Blockly.Python['run_smooth_forward'] = function(block) {
  return generateGoStraightCode({ block, speedStatus: SPEED_STATUS.fast, smooth: true });
}

Blockly.Blocks['math_number_pro'] = {
  init: function() {
    this.jsonInit({
      "type": "math_number_pro",
      "message0": "%1",
      "args0": [{
        "type": "field_number",
        "name": "NUM",
        "value": 0,
        "min": -65536,
        "max": 65536,
        "precision": 0.001,
      }],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Msg.MathHUE,
      "helpUrl": "%{BKY_MATH_NUMBER_HELPURL}",
      "tooltip": "%{BKY_MATH_NUMBER_TOOLTIP}",
      "extensions": ["parent_tooltip_when_inline"]
    });
  }
};

Blockly.Lua['math_number_pro'] = function(block) {
  const num = parseInt(block.getFieldValue("NUM"));
  return [num, 0 > num ? Blockly.Lua.ORDER_UNARY : Blockly.Lua.ORDER_ATOMIC];
}

Blockly.Python['math_number_pro'] = function (block) {
  const num = parseInt(block.getFieldValue('NUM'));
  return [num, 0 > num ? Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC];
}

Blockly.Blocks['1712843621086'] = {
  init: function() {
    this.jsonInit({
      "type": "1712843621086",
      "message0": "抱箱后退2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1712843621086'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,90,91,48,138,88,140,190,50,94,107,146,67,92,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,86,90,95,94,90,140,190,50,94,107,146,67,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,88,71,53,114,85,140,190,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,106,93,53,134,111,140,190,50,114,87,163,33,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,106,95,53,133,113,140,190,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,107,100,56,130,109,140,190,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,107,100,56,130,109,140,190,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,86,113,37,167,90,140,190,50,94,107,147,67,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,86,90,95,95,90,140,190,50,94,105,147,69,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,93,55,133,100,140,190,50,100,107,145,67,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1712843621086'] = function(block) {
  let code = "robot.leju_action('抱箱后退2')\n";
  return code;
}

Blockly.Blocks['1712843905676'] = {
  init: function() {
    this.jsonInit({
      "type": "1712843905676",
      "message0": "抱箱后退3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1712843905676'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,90,91,48,138,88,140,190,50,94,107,146,67,92,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,86,90,95,94,90,140,190,50,94,107,146,67,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,88,71,53,114,85,140,190,50,93,100,144,70,91,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(65,10,149,106,93,53,134,111,140,190,50,114,87,163,33,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,106,95,53,133,113,140,190,50,114,110,105,105,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,107,100,56,130,109,140,190,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,107,100,56,130,109,140,190,50,112,129,147,86,115,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(65,10,149,86,113,37,167,90,140,190,50,94,107,147,67,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,86,90,95,95,90,140,190,50,94,105,147,69,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,93,55,133,100,140,190,50,100,107,145,67,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1712843905676'] = function(block) {
  let code = "robot.leju_action('抱箱后退3')\n";
  return code;
}

Blockly.Blocks['face_combination'] = {
  init: function() {
      this.jsonInit({
        "type": "face_combination",
        "lastDummyAlign0": "RIGHT",
        "message0": "%{BKY_VISUAL_FACE_DETECTED} %1 %{BKY_VISUAL_FACE_SECONDS} ,%{BKY_VISUAL_FACE_GENDER} %2 ,%{BKY_VISUAL_FACE_AGE} %3 ,%{BKY_VISUAL_FACE_EXPRESSION} %4",
        "args0": [
          {
            "type": "field_number",
            "name": "time",
            "value": 10,
            "min": 0,
            "max": 20
          },
          {
            "type": "field_dropdown",
            "name": "sex",
            "options": [
              [
                "%{BKY_VISUAL_ANY}",
                "any"
              ],
              [
                "%{BKY_VISUAL_MALE}",
                "male"
              ],
              [
                "%{BKY_VISUAL_FEMALE}",
                "female"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "ages",
            "options": [
              [
                "%{BKY_VISUAL_ANY}",
                "any"
              ],
              [
                "%{BKY_VISUAL_CHILDREN}",
                "children"
              ],
              [
                "%{BKY_VISUAL_TEENAGER}",
                "teenager"
              ],
              [
                "%{BKY_VISUAL_YOUTH}",
                "youth"
              ],
              [
                "%{BKY_VISUAL_MIDDLE_AGE}",
                "middle-age"
              ],
              [
                "%{BKY_VISUAL_ELDER}",
                "elder"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "emotion",
            "options": [
              [
                "%{BKY_VISUAL_ANY}",
                "any"
              ],
              [
                "%{BKY_VISUAL_SAD}",
                "sadness"
              ],
              [
                "%{BKY_VISUAL_NATURAL}",
                "neutral"
              ],
              [
                "%{BKY_VISUAL_SCORNFUL}",
                "contempt"
              ],
              [
                "%{BKY_VISUAL_ABHORRENT}",
                "disgust"
              ],
              [
                "%{BKY_VISUAL_ANGRY}",
                "angry"
              ],
              [
                "%{BKY_VISUAL_SURPRISE}",
                "surprise"
              ],
              [
                "%{BKY_VISUAL_SCARED}",
                "fear"
              ],
              [
                "%{BKY_VISUAL_HAPPY}",
                "happiness"
              ]
            ]
          }
        ],
        "output": "Boolean",
        "colour": Blockly.Msg.VisualHUE,
        "tooltip": "",
        "helpUrl": ""
      });
  }
};

Blockly.Lua['face_combination'] = function(block) {
  const time = block.getFieldValue('time');
  const sex = block.getFieldValue('sex');
  const ages = block.getFieldValue('ages');
  const emotion = block.getFieldValue('emotion');
  const code = `IsPersonIncamera(${time}, '${sex}', '${ages}', '${emotion}')`;
  return [code, Blockly.Lua.ORDER_NONE]
}

Blockly.Python['face_combination'] = function (block) {
  const time = block.getFieldValue('time');
  const sex = block.getFieldValue('sex');
  const ages = block.getFieldValue('ages');
  const emotion = block.getFieldValue('emotion');
  const code = `robot.vision.get_parameter_of_person(${time}, '${sex}', '${ages}', '${emotion}')`;
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['gripper'] = {
  init: function() {
        this.jsonInit({
          "type": "gripper",
          "message0": "%1 %{BKY_GRASP_EXECUTION} %2",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "point",
              "options": [
                [
                  "%{BKY_LEFT}",
                  "left"
                ],
                [
                  "%{BKY_RIGHT}",
                  "right"
                ],
                [
                  "%{BKY_DOUBLE}",
                  "double"
                ]
              ]
            },
            {
              "type": "field_dropdown",
              "name": "angle",
              "options": [
                [
                  "%{BKY_SPREAD}",
                  "60"
                ],
                [
                  "%{BKY_PINCH}",
                  "20"
                ]
              ]
            }
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#3ABDFB",
          "tooltip": "",
          "helpUrl": ""
        });
    }
};

Blockly.Lua['gripper'] = function(block) {
  const point = block.getFieldValue("point");
  const angle = block.getFieldValue("angle");
  let leftAngle = ajustGripperFactor + parseInt(angle);
  let rightMirrorAngle = mirrorGripperMax - leftAngle;
  if (point === 'left'){//左抓 17 号舵机
    let code = `MOTOmove19(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,${leftAngle},0,0)\nMOTOwait()\n`;
    return code;
  }else if (point === 'right'){//右抓 18 号舵机
    let code = `MOTOmove19(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,${rightMirrorAngle},0)\nMOTOwait()\n`;
    return code;
  }
  let code = `MOTOmove19(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,${leftAngle},${rightMirrorAngle},0)\nMOTOwait()\n`;
  return code;
}

Blockly.Python['gripper'] = function (block) {
  const point = block.getFieldValue('point');
  const angle = block.getFieldValue('angle');
  return `robot.leju_action('${point}_paw', ${angle})\n`;
}

Blockly.Blocks['1713432274951'] = {
  init: function() {
    this.jsonInit({
      "type": "1713432274951",
      "message0": "张大手臂抱起箱子",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713432274951'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,30,149,100,93,55,124,100,120,170,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,149,100,113,90,109,100,120,170,50,100,87,111,91,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,149,100,136,150,62,100,120,170,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,149,100,149,150,67,100,120,170,50,100,52,50,133,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,149,100,149,150,67,100,140,190,50,100,52,50,133,100,128,78,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,100,104,132,70,100,140,190,50,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713432274951'] = function(block) {
  let code = "robot.leju_action('张大手臂抱起箱子')\n";
  return code;
}

Blockly.Blocks['1713432859754'] = {
  init: function() {
    this.jsonInit({
      "type": "1713432859754",
      "message0": "抱起箱子2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713432859754'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,40,149,100,93,55,124,100,120,160,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,149,100,113,90,109,100,120,170,50,100,87,111,91,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,149,100,136,150,62,100,120,170,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,149,100,149,150,67,100,120,170,50,100,52,50,133,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,149,100,149,150,67,100,140,190,50,100,52,50,133,100,128,78,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,100,104,132,70,100,140,190,50,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713432859754'] = function(block) {
  let code = "robot.leju_action('抱起箱子2')\n";
  return code;
}

Blockly.Blocks['1713433052693'] = {
  init: function() {
    this.jsonInit({
      "type": "1713433052693",
      "message0": "抱起箱子4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713433052693'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,40,149,100,93,55,124,100,120,160,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,149,100,113,90,109,100,120,170,50,100,87,111,91,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,149,100,136,150,62,100,120,170,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,149,100,149,150,67,100,120,170,50,100,52,50,133,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,149,100,149,150,67,100,140,190,50,100,52,50,133,100,128,78,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,100,104,132,70,100,140,190,50,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713433052693'] = function(block) {
  let code = "robot.leju_action('抱起箱子4')\n";
  return code;
}

Blockly.Blocks['1713433339128'] = {
  init: function() {
    this.jsonInit({
      "type": "1713433339128",
      "message0": "抱起箱子5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713433339128'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,93,55,124,100,120,150,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,50,149,100,113,90,109,100,120,150,50,100,87,111,91,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,50,149,100,136,150,62,100,120,150,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,50,149,100,149,150,67,100,120,150,50,100,52,50,133,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,100,149,150,67,100,140,180,50,100,52,50,133,100,128,78,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,10,149,100,104,132,70,100,140,190,50,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,90,55,127,100,140,190,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713433339128'] = function(block) {
  let code = "robot.leju_action('抱起箱子5')\n";
  return code;
}

Blockly.Blocks['1713433879052'] = {
  init: function() {
    this.jsonInit({
      "type": "1713433879052",
      "message0": "左转快5s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713433879052'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(19)\nMOTOmove19(65,10,149,95,71,55,109,95,140,190,50,105,89,145,51,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,10,149,95,80,55,109,92,140,190,50,105,81,145,51,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(65,10,149,100,91,55,129,100,140,190,50,100,109,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(35)\nMOTOmove19(65,10,149,100,91,55,129,100,140,190,50,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713433879052'] = function(block) {
  let code = "robot.leju_action('左转快5s')\n";
  return code;
}

Blockly.Blocks['1713433920458'] = {
  init: function() {
    this.jsonInit({
      "type": "1713433920458",
      "message0": "左转快5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713433920458'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(19)\nMOTOmove19(65,10,149,95,71,55,109,95,140,190,50,105,89,145,51,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,10,149,95,80,55,109,92,140,190,50,105,81,145,51,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(65,10,149,100,91,55,129,100,140,190,50,100,109,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(35)\nMOTOmove19(65,10,149,100,91,55,129,100,140,190,50,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713433920458'] = function(block) {
  let code = "robot.leju_action('左转快5')\n";
  return code;
}

Blockly.Blocks['1713433970719'] = {
  init: function() {
    this.jsonInit({
      "type": "1713433970719",
      "message0": "右转快5",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713433970719'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(19)\nMOTOmove19(65,10,149,95,110,55,149,95,140,190,50,105,130,145,91,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,10,149,95,118,55,149,92,140,190,50,105,121,145,91,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(65,10,149,100,90,55,129,100,140,190,50,100,110,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(35)\nMOTOmove19(65,10,149,100,90,55,129,100,140,190,50,100,110,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713433970719'] = function(block) {
  let code = "robot.leju_action('右转快5')\n";
  return code;
}

Blockly.Blocks['1713434238407'] = {
  init: function() {
    this.jsonInit({
      "type": "1713434238407",
      "message0": "抱箱左移修改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713434238407'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(75)\nMOTOmove19(65,10,149,85,112,90,115,90,140,190,50,110,107,146,70,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(85)\nMOTOmove19(65,10,149,95,93,53,131,105,140,190,50,120,116,160,68,130,128,71,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(65,10,149,100,93,54,134,98,140,190,50,103,107,146,76,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(65,10,149,100,93,55,134,95,140,190,50,100,107,145,76,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(50)\nMOTOmove19(65,10,149,100,93,55,134,100,140,190,50,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713434238407'] = function(block) {
  let code = "robot.leju_action('抱箱左移修改')\n";
  return code;
}

Blockly.Blocks['1713434293665'] = {
  init: function() {
    this.jsonInit({
      "type": "1713434293665",
      "message0": "抱箱右移修改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713434293665'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(75)\nMOTOmove19(65,10,149,90,93,54,130,100,140,190,50,115,88,110,85,110,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(85)\nMOTOmove19(65,10,149,80,84,40,138,70,140,190,50,105,107,147,69,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(65,10,149,97,93,54,130,95,140,190,50,100,107,146,66,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(65,10,149,100,93,55,130,95,140,190,50,100,107,145,66,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(50)\nMOTOmove19(65,10,149,100,93,55,130,100,140,190,50,100,107,145,66,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713434293665'] = function(block) {
  let code = "robot.leju_action('抱箱右移修改')\n";
  return code;
}

Blockly.Blocks['1713434820321'] = {
  init: function() {
    this.jsonInit({
      "type": "1713434820321",
      "message0": "抱箱左移修改1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713434820321'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(75)\nMOTOmove19(65,10,149,85,112,90,115,90,140,190,50,110,107,146,70,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(85)\nMOTOmove19(65,10,149,95,93,53,131,105,140,190,50,120,116,160,68,130,128,71,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(65,10,149,100,93,54,134,98,140,190,50,103,107,146,76,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(65,10,149,100,93,55,125,98,140,190,50,100,107,145,76,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(50)\nMOTOmove19(65,10,149,100,93,55,125,98,140,190,50,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713434820321'] = function(block) {
  let code = "robot.leju_action('抱箱左移修改1')\n";
  return code;
}

Blockly.Blocks['1713435961232'] = {
  init: function() {
    this.jsonInit({
      "type": "1713435961232",
      "message0": "抱起箱子新",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713435961232'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,50,149,100,93,55,124,100,120,150,50,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,50,149,100,113,90,109,100,120,150,50,100,87,111,91,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,50,149,100,136,150,62,100,120,150,50,100,72,50,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,50,149,100,149,150,67,100,120,150,50,100,52,50,133,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,100,149,150,67,100,140,180,50,100,52,50,133,100,128,78,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,20,149,100,104,132,70,100,140,180,50,100,93,69,130,100,128,78,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713435961232'] = function(block) {
  let code = "robot.leju_action('抱起箱子新')\n";
  return code;
}

Blockly.Blocks['1713436065505'] = {
  init: function() {
    this.jsonInit({
      "type": "1713436065505",
      "message0": "抱箱子左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713436065505'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(75)\nMOTOmove19(65,20,149,85,112,90,115,90,140,180,50,110,107,146,70,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(85)\nMOTOmove19(65,20,149,95,93,53,131,105,140,180,50,120,116,160,68,130,128,71,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(65,20,149,100,93,54,134,98,140,180,50,103,107,146,76,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(65,20,149,100,93,55,125,98,140,180,50,100,107,145,76,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(50)\nMOTOmove19(65,20,149,100,93,55,125,98,140,180,50,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713436065505'] = function(block) {
  let code = "robot.leju_action('抱箱子左移')\n";
  return code;
}

Blockly.Blocks['1713436145592'] = {
  init: function() {
    this.jsonInit({
      "type": "1713436145592",
      "message0": "抱箱右移动",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713436145592'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(75)\nMOTOmove19(65,20,149,90,93,54,130,100,140,180,50,115,88,110,85,110,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(85)\nMOTOmove19(65,20,149,80,84,40,138,70,140,180,50,105,107,147,69,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(65,20,149,97,93,54,130,95,140,180,50,100,107,146,66,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(65,20,149,100,93,55,130,95,140,180,50,100,107,145,66,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(50)\nMOTOmove19(65,20,149,100,93,55,130,100,140,180,50,100,107,145,66,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713436145592'] = function(block) {
  let code = "robot.leju_action('抱箱右移动')\n";
  return code;
}

Blockly.Blocks['1714055540534'] = {
  init: function() {
    this.jsonInit({
      "type": "1714055540534",
      "message0": "快步走改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714055540534'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(79, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 91, 94, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 91, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 91, 66, 109, 102, 120, 170, 120, 101, 85, 101, 97, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 110, 100, 120, 170, 120, 101, 90, 126, 79, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 94, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 120, 96, 95, 70, 110, 100, 120, 170, 120, 102, 109, 146, 75, 96, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714055540534'] = function(block) {
  let code = "robot.leju_action('快步走改')\n";
  return code;
}

