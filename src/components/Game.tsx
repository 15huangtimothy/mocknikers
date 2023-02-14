import { useEffect, useState } from 'react';
import GameContext from '../contexts/gameContext';
import getCards from '../lib/getCards';
import { useConextIfPopulated, useLocalStorage } from '../lib/hooks';
import Card from './Card';
import Round from './Round';
import PauseMenu from './PauseMenu';
import Timer from './Timer';
import Button from './Button';
import {
  chooseColor,
  getStateFromLocalStorgage,
  nextCard,
  skipCard,
} from '../lib/helpers';
import SwitchPlayer from './SwitchPlayer';
import RoundRecap from './RoundRecap';
import { StyledBackgroundContiner } from './styles/BackgroundContiner.styled';
import { StyledContainer } from './styles/Container.styled';
import Header from './Header';
import { StyledCardContainer } from './styles/CardContainer.styled';

const Game = () => {
  const { settings, screen, setScreen, wikiData }: GameContext =
    useConextIfPopulated(GameContext);
  const [round, setRound] = useLocalStorage(1, 'round');
  const [cards, setCards] = useLocalStorage(null, 'cards');
  const [teams, setTeams] = useLocalStorage(null, 'teams');
  const [remainingCards, setRemainingCards] = useLocalStorage(
    null,
    'remainingCards'
  );
  const [paused, setPaused] = useLocalStorage(false, 'paused');
  const [firstPlayerInRound, setfirstPlayerInRound] = useLocalStorage(
    true,
    'firstPlayerInRound'
  );
  const [remainingTime, setRemainingTime] = useState<number>(
    getStateFromLocalStorgage(settings.timer, 'remainingTime')
  );
  const [color, setColor] = useState<string>('green');

  useEffect(() => {
    setColor(chooseColor(round));
  }, [round]);

  useEffect(() => {
    if (!cards && wikiData) {
      setCards(getCards(settings, wikiData));
    }
  }, [cards, setCards, settings, wikiData]);

  useEffect(() => {
    if (!teams) {
      setTeams(
        settings.teams.map((team) => ({
          team: team,
          score: 0,
        }))
      );
    }
  }, [setTeams, settings.teams, teams]);

  const pauseGame = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPaused(!paused);
  };

  const next = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const tempTeams = [...teams];
    tempTeams[0].score++;
    setTeams(tempTeams);
    if (remainingCards.length > 1) {
      nextCard(remainingCards, setRemainingCards);
    } else {
      setRemainingCards(null);
      setRemainingTime(settings.timer);
      setfirstPlayerInRound(true);
      setScreen('game|round-recap');
    }
  };

  const skip = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    skipCard(remainingCards, setRemainingCards);
  };

  return (
    <>
      {cards ? (
        <>
          {screen === 'game' && (
            <>
              {paused && (
                <PauseMenu
                  paused={paused}
                  setPaused={setPaused}
                  color={color}
                />
              )}
              <StyledBackgroundContiner background={`${color}`}>
                <StyledContainer>
                  <Header title={`Round ${round}`}>
                    <Button
                      className="button__pause"
                      handleClick={pauseGame}
                      color={`${color}`}
                    >
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Pause"
                      >
                        <rect x="1" y="0" width="3" height="15" fill="white" />
                        <rect x="9" y="0" width="3" height="15" fill="white" />
                      </svg>
                    </Button>
                  </Header>
                  <StyledCardContainer>
                    <Timer
                      paused={paused}
                      remainingTime={remainingTime}
                      setRemainingTime={setRemainingTime}
                      setTeams={setTeams}
                      teams={teams}
                      color={color}
                      remainingCards={remainingCards}
                      setRemainingCards={setRemainingCards}
                    />
                    <Card card={remainingCards[0] as Card} />
                    <div className="button-container">
                      {settings.allowSkips && (
                        <Button
                          className="button__half button__half--left button--reverse"
                          handleClick={skip}
                          color={`${color}`}
                          disabled={remainingCards.length === 1}
                        >
                          Skip
                        </Button>
                      )}
                      <Button
                        className={
                          settings.allowSkips
                            ? 'button__half button__half--right'
                            : ''
                        }
                        handleClick={next}
                        color={`${color}`}
                      >
                        Next
                      </Button>
                    </div>
                  </StyledCardContainer>
                </StyledContainer>
              </StyledBackgroundContiner>
            </>
          )}
          {screen === 'game|round' && (
            <Round
              round={round}
              setRemainingCards={setRemainingCards}
              setRemainingTime={setRemainingTime}
              cards={cards}
              color={color}
            />
          )}
          {screen === 'game|round-recap' && (
            <RoundRecap
              setRound={setRound}
              teams={teams}
              round={round}
              setTeams={setTeams}
              color={color}
            />
          )}
          {screen === 'game|switch-player' && (
            <SwitchPlayer
              firstPlayerInRound={firstPlayerInRound}
              setfirstPlayerInRound={setfirstPlayerInRound}
              round={round}
              setRemainingTime={setRemainingTime}
              teams={teams}
              color={color}
            />
          )}
        </>
      ) : (
        'loading...'
      )}
    </>
  );
};

export default Game;
