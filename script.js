const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            // display results in the DOM
            result.innerHTML = `
                <div class="word">
                    <h3>${inpWord}</h3>
                </div>
                <div class="firstDetails">
                    <p>${data[0].meanings[0].partOfSpeech}</p>

                <div class="word-meaning text-red-500">
                    <p>1. ${data[0].meanings[0].definitions[0].definition || ""}</p>
                    <p>2. ${data[0].meanings[0].definitions[1].definition || ""}</p>
                    <p>3. ${data[0].meanings[0].definitions[2].definition || ""}</p>
                </div>

                <div class="secondDetails">
                    <p>${data[0].meanings[1].partOfSpeech}</p>

                <div class="word-meaning">
                    <p>1. ${data[0].meanings[1].definitions[0].definition || ""}</p>
                    <p>2. ${data[0].meanings[1].definitions[1].definition || ""}</p>
                    <p>3. ${data[0].meanings[1].definitions[2].definition || ""}</p>
                </div>

                </div>

                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
        })

        // error handling
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});

// audio sound for dictionary words
function playSound() {
    sound.play();
}