function getCards(settings: Settings, wikiData: Article[]): Cards {
  let cards: Cards = [];

  if (settings.cardType === 'written') {
    const wordArray: string[] = settings.cardText
      .trim()
      .split('\n')
      .filter((n) => n);
    cards = wordArray.map((word) => {
      return {
        word: word,
        description: '',
      };
    });
  } else {
    if (settings.cardCount > wikiData.length) throw Error('Too many cards.');
    const arrayOfNumbers = Array.from(Array(wikiData.length).keys());
    const generateRandomIndex = (max: number) => {
      return Math.floor(Math.random() * max);
    };
    const cleanupDescription = (description: string) => {
      let cleanedDescription = description.replace(/\s\([^)]*\)/g, '');
      cleanedDescription = cleanedDescription.replace(/\n/g, ' ');
      return cleanedDescription;
    };
    for (let i = 1; i <= settings.cardCount; i++) {
      const index = generateRandomIndex(arrayOfNumbers.length);
      cards.push({
        word: wikiData[arrayOfNumbers[index]].title,
        description: cleanupDescription(
          wikiData[arrayOfNumbers[index]].extract
        ),
      });
      arrayOfNumbers.splice(index, 1);
    }
  }
  return cards;
}

export default getCards;
