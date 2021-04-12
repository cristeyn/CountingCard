const firstSequence = () => {
  let count = 0;
  const cc = (card) => {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq1",cc(2) + cc(3) + cc(4)+ cc(5)+ cc(6)).textContent = result;
}
const restart = (clear) => {
  document.querySelector("#seq1").textContent = " ";
}

const secondSequence = () => {
  let count = 0;
  const cc = (card) => {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq2",cc(7) + cc(8) + cc(9)).textContent = result;
}
const restartt = (clear) => {
  document.querySelector("#seq2").textContent = " ";
}

const thirdSequence = () => {
  let count = 0;
  const cc = (card) => {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq3",cc(10) + cc('J') + cc('Q') + cc('K') + cc('A')).textContent = result;
}
const restart3 = () => {
  document.querySelector("#seq3").textContent = " ";
}

const fourthSequence = () => {
  let count = 0;
  const cc = (card) => {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq4",cc(3) + cc(7) + cc('Q') + cc(8) + cc('A')).textContent = result;
}
const restart4 = () => {
  document.querySelector("#seq4").textContent = " ";
}
const fifthSequence = () => {
  let count = 0;
  const cc = (card) => {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq5",cc(2) + cc('J') + cc(9) + cc(2) + cc(7)).textContent = result;
}
const restart5 = () => {
  document.querySelector("#seq5").textContent = " ";
}

const sixthSequence = () => {
  let count = 0;
  const cc = (card) => {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq6",cc(2) + cc(2) + cc(10)).textContent = result;
}
const restart6 = () => {
  document.querySelector("#seq6").textContent = " ";
}

const seventhSequence = () => {
  let count = 0;
  const cc = (card) => {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0)? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seq7",cc(3) + cc(2) + cc("A") + cc(10) + cc("K")).textContent = result;
}
const restart7 = () => {
  document.querySelector("#seq7").textContent = " ";
}


