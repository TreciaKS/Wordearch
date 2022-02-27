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
                <div class="text-xl text-center text-indigo-500 text-decoration-underline pt-2 pb-2">
                    <h3>${inpWord}</h3>
                </div>

                <div class="py-8 flex flex-wrap md:flex-nowrap shadow-lg">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-indigo-500">${data[0].meanings[0].partOfSpeech}</span>
                    </div>
                    <div class="md:flex-grow text-gray-200">
                        <p class="leading-relaxed">1. ${data[0].meanings[0].definitions[0].definition || ""}</p>
                        <p class="mt-5 leading-relaxed">2. ${data[0].meanings[0].definitions[1].definition || ""}</p>
                        <p class="mt-5 leading-relaxed">3. ${data[0].meanings[0].definitions[2].definition || ""}</p>
                    </div>
                </div>
                
                <div class="py-8 flex flex-wrap md:flex-nowrap shadow-lg">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-indigo-500">${data[0].meanings[1].partOfSpeech}</span>
                    </div>
                    <div class="md:flex-grow text-gray-200">
                        <p class="leading-relaxed">1. ${data[0].meanings[1].definitions[0].definition || ""}</p>
                        <p class="mt-5 leading-relaxed">2. ${data[0].meanings[1].definitions[1].definition || ""}</p>
                        <p class="mt-5 leading-relaxed">3. ${data[0].meanings[1].definitions[2].definition || ""}</p>
                    </div>
                </div>

                <div class="py-8 flex flex-wrap md:flex-nowrap shadow-lg">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-indigo-500">Example</span>
                    </div>
                    <div class="md:flex-grow text-gray-200">
                        <p class="leading-relaxed">1. ${data[0].meanings[0].definitions[0].example || ""}</p>
                    </div>
                </div>`
        })

        // error handling
        .catch(() => {
            result.innerHTML = `<h3 class="error text-center text-2xl text-gray-500 mt-10">I can't access the word 🥺</h3>`;
        });

        // clear out form
        inpWord.innerHTML = ""
});