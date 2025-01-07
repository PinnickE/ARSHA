// Print pattern
let rows, columns, display;



for (rows = 1; rows < 7; rows++) {
  for (columns = 1; columns < rows; columns++) {
    display += "*"
  }
  console.log(display)
  display = ""
}