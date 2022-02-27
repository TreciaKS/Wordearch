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

                <div class="py-8 flex flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-gray-700">${data[0].meanings[0].partOfSpeech}</span>
                    </div>
                    <div class="md:flex-grow">
                        <p class="leading-relaxed">1. ${data[0].meanings[0].definitions[0].definition || ""}</p>
                        <p class="mt-5 leading-relaxed">2. ${data[0].meanings[0].definitions[1].definition || ""}</p>
                        <p class="mt-5 leading-relaxed">3. ${data[0].meanings[0].definitions[2].definition || ""}</p>
                    </div>
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