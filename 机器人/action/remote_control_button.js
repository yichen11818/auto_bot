Blockly.Blocks['remote_control_button'] = {
  init: function () {
    this.jsonInit({
      "type": "remote_control_button",
      "message0": "%{BKY_REMOTE_CONTROL_BUTTON_REMOTE}， %1 ，%{BKY_REMOTE_CONTROL_BUTTON_KEY} %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "mode",
          "options": [
            [
              "%{BKY_REMOTE_CONTROL_BUTTON_MODE_1}",
              "Perform"
            ],
            [
              "%{BKY_REMOTE_CONTROL_BUTTON_MODE_2}",
              "Football"
            ],
            [
              "%{BKY_REMOTE_CONTROL_BUTTON_MODE_3}",
              "Boxing"
            ],
            [
              "%{BKY_REMOTE_CONTROL_BUTTON_MODE_4}",
              "Compatible"
            ]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "key",
          "options": [
            [
              "1",
              "1"
            ],
            [
              "2",
              "2"
            ],
            [
              "3",
              "3"
            ],
            [
              "4",
              "4"
            ],
            [
              "X",
              "X"
            ],
            [
              "Y",
              "Y"
            ],
            [
              "A",
              "A"
            ],
            [
              "B",
              "B"
            ],
            [
              "LT",
              "LT"
            ],
            [
              "LB",
              "LB"
            ],
            [
              "RT",
              "RT"
            ],
            [
              "RB",
              "RB"
            ]
          ]
        }
      ],
      "output": "Remote_type",
      "colour": "#3ABDFB",
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['remote_control_button'] = function (block) {
  const mode = block.getFieldValue("mode");
  const key = block.getFieldValue("key");
  const num = HKEYMap[mode][key];
  return [num, 0 > num ? Blockly.Lua.ORDER_UNARY : Blockly.Lua.ORDER_ATOMIC];
}

