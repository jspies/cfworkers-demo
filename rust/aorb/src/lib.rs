extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

//use rand::prelude::*;


#[wasm_bindgen]
pub fn aorb() -> String {
  return String::from("This is my wasm message");
}