//starting button listener
document.getElementById('button-id').addEventListener('click', calculate)
//defining output variables
const aoutput = document.getElementById('output-id-a')
const coutput = document.getElementById('output-id-c')
//defining function to calculate area and circumference
function calculate () {
  //getting diameter input from user
  const d = document.getElementById('input-id').value
  //checking if user dosent input in proper format
  if (isNaN(d)) {
    //outputing invalid
    aoutput.innerHTML = 'please enter a valid number'
    coutput.innerHTML = 'please enter a valid number'
  } else {
    //calculating area and circumference
    const r = d / 2
    const area = (3.14 * r * r)
    console.log(area)
    //outputig area
    aoutput.innerHTML = area
    const curc = (2 * 3.14 * r)
    //outputing circumference
    coutput.innerHTML = curc
  }
}
