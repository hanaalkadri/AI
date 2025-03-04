function showAnswer(response) {
  let joke = response.data.answer;
  prompt(joke);
}

let apiKey = "4bct0a285594fb6ecbc0c311f8fdc3fo";
let context = "be funny and provide an exact answer";
let promptText = "tell me a joke";

function handleClick() {
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${promptText}&context=${context}&key=${apiKey}`;

  console.log("Fetching a new joke...");
  axios
    .get(apiUrl)
    .then(showAnswer)
    .catch((error) => {
      console.error("Error fetching joke:", error);
      alert("Failed to load a joke. Please try again!");
    });
}

let buttonElement = document.querySelector("#JokeButton");
buttonElement.addEventListener("click", handleClick);
