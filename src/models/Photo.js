const { Schema, model } = require("mongoose");

const photoSchema = new Schema({
  title: String,
  description: String,  
  imageURL: String,
  public_id: String,
});

module.exports =  model("Photo", photoSchema, "photo-gallery");