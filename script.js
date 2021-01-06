document.getElementById('button-id').addEventListener('click', calculate)

const aoutput = document.getElementById('output-id-a')
const coutput = document.getElementById('output-id-c')

function calculate () {
  const d = document.getElementById('input-id').value
  if (isNaN(d)) {
    aoutput.innerHTML = 'please enter a valid number'
    coutput.innerHTML = 'please enter a valid number'
  } else {
    const r = d / 2
    const area = (3.14 * r * r)
    console.log(area)
    aoutput.innerHTML = area
    const curc = (2 * 3.14 * r)
    coutput.innerHTML = curc
  }
}
