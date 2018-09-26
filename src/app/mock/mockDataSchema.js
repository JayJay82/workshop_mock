var schema = {
    "type": "object",
    "properties": {
      "competitorUnloading": {
        "type": "array",
        "minItems": 10,
        "maxItems": 30,
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "unique": true,
              "minimum": 1
            },
            "plant": {
              "type": "string",
              "faker": "name.firstName"
            },
            "competitor": {
              "type": "string",
              "faker": "name.lastName"
            },
            "product": {
              "type": "integer",
              "unique": true,
              "minimum": 1
            }
          },
          "required": ["id", "plant", "competitor", "product"]
        }
      }
    },
    "required": ["competitorUnloading"]
  };
  
  module.exports = schema;