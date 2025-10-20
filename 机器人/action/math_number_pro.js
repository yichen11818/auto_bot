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

