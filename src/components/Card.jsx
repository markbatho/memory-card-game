export default function Card({
  country,
  countryId,
  flagId,
  shuffle,
  flagsClicked,
  setFlagsClicked,
  score,
  setScore,
  bestScore,
  setBestScore,
  setIsGameOver,
}) {
  function handleClick(countryId) {
    shuffle();

    if (flagsClicked.find((elem) => elem === countryId)) {
      setScore(0);
      setIsGameOver(true);
      return;
    }

    if (score === bestScore) setBestScore(bestScore + 1);

    setScore(score + 1);
    setFlagsClicked([...flagsClicked, countryId]);
  }

  return (
    <div className="card" onClick={() => handleClick(countryId)}>
      <div className="image">
        <img src={process.env.PUBLIC_URL + 'images/' + flagId + '.webp'} />
      </div>
      <h1>{country}</h1>
    </div>
  );
}
