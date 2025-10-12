let initial_value = "0";

let display_value = "";
display_val = document.getElementById("display");
display_val.value = initial_value;

function get_data(data) {
  if (display_value == 0) {
    display_value = "";
  }
  display_value += data;
  display_val = document.getElementById("display");
  display_val.value = display_value;
}

// function display(display) {
//   data = Document.getelementBy.id("display");
// }

function all_clear() {
  display_value = "0";
  display_val = document.getElementById("display");
  display_val.value = display_value;
}

function clear_value() {
  display_value = display_value.substring(0, display_value.length - 1);
  display_val = document.getElementById("display");
  if (display_value == 0) {
    display_val.value = "0";
  } else {
    display_val.value = display_value;
  }
}

function calculate() {
  display_value = eval(display_value);
  display_val = document.getElementById("display");
  display_val.value = display_value;
}
