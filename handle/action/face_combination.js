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

