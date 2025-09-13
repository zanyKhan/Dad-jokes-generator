const btn = document.getElementById("btn");
const jokeParagrapgh = document.getElementById("joke");

const apiKey = "w3iX0w1PPBOKZel1JIXJcA==euZFemeGxQIEzG8j";

const options = {
    method : "GET",
    headers : {
        "X-Api-Key" : apiKey
    },
};

const apiUrl = "https://api.api-ninjas.com/v1/jokes?category=dad"

async function getJoke() {
    try {
        jokeParagrapgh.innerText = "Updating..."
        btn.disabled = true;
        btn.innerText = "Loading...";

        const response = await fetch(apiUrl, options)
        const data = await response.json()

        btn.disabled = false;
        btn.innerText = "Tell me a joke";

        jokeParagrapgh.innerText = data[0].joke;
            
    } catch (error) {
        jokeParagrapgh.innerText = "An error occured, try again later!"
        btn.disabled = false;
        btn.innerText = "Tell me a joke";
    }

    
}




btn.addEventListener("click", getJoke);