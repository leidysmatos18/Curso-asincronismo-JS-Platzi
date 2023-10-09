// const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=20';
const url = "https://rickandmortyapi.com/api/character"
const content = null || document.getElementById("content")

const fetchData = async (urlParams) => {
  const response = await fetch(urlParams)
  const data = await response.json()
  console.log({ data })
  return data
}


(async () => {
  try {
    const rickAndMorty = await fetchData(url)

    let view = `${rickAndMorty.results.map(character => `
      <div class="group relative w-[200px]">
        <div
          class="w-full bg-red-400 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${character.image}" alt="${character.name}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700 font-bold">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${character.name}
          </h3>
          <h3 class="text-sm text-gray-700">
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${character.status}
        </h3>
        </div>
      </div>
    `)}`
    content.innerHTML = view;
  } catch (error) {
    console.log(error)
  }
})()
