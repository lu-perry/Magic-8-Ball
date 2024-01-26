// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
async function fetchAnswer() {
    try {
        const response = await fetch(API_ENDPOINT);
        const jResponse = await response.json();
        const yesNo = jResponse.answer;
        const node = document.createTextNode(yesNo);
        let ans = document.getElementById('answer');
        ans.appendChild(node);
    } catch (error) {
        const node = document.createTextNode('Oops! No answer');
        let ans = document.getElementById('answer');
        ans.appendChild(node);
    }
}

function clearAnswer() {
    let ans = document.getElementById('answer');
    while (ans.firstChild) {
        ans.removeChild(ans.firstChild);
    }
}

let answerButton = document.getElementById('button');
console.log(answerButton);

function handleClick() {
    fetchAnswer();
    setTimeout(clearAnswer, 3000);
}

answerButton.addEventListener('click', handleClick);
