import fetchData from './fetch';

const generatedWordCount = 10;
const randomWordGeneratorUrl = `https://random-word-api.herokuapp.com/word?number=${generatedWordCount}&lang=en`;

export default async function getRandomWords() {
  const wordList = await fetchData(randomWordGeneratorUrl);
}
