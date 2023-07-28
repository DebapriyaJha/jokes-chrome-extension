const jokeElement = document.getElementById('jokeElement');

function fetchJoke() {
    fetch('https://icanhazdadjoke.com/slack')
        .then(response => response.json())
        .then(jokeData => {
            const jokeText = jokeData.attachments[0].text;
            jokeElement.innerText = jokeText;
        })
        .catch(error => {
            jokeElement.innerText = 'Failed to fetch joke :(';
            console.error(error);
        });
}

// Fetch a joke when the page loads
fetchJoke();
