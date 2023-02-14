import React, { useState } from 'react';
import Button from './Button';
import { defaultScreen, defaultSettings } from '../lib/defaultSettings';
import { nextTeam, resetLocalStorage } from '../lib/helpers';
import { useConextIfPopulated } from '../lib/hooks';
import GameContext from '../contexts/gameContext';
import { StyledRoundRecap } from './styles/RoundRecap.styled';
import { StyledBackgroundContiner } from './styles/BackgroundContiner.styled';
import Face from './Face';

type Proptypes = {
  teams: Teams;
  setTeams: React.Dispatch<React.SetStateAction<Teams>>;
  setRound: React.Dispatch<React.SetStateAction<number>>;
  round: number;
  color: string;
};

const RoundRecap = ({ teams, round, setRound, setTeams, color }: Proptypes) => {
  const { setSettings, setScreen }: GameContext =
    useConextIfPopulated(GameContext);
  const [sortedTeams] = useState([...teams].sort((a, b) => b.score - a.score));

  function continueScreen() {
    if (round < 3) {
      setRound(round + 1);
      setScreen('game|round');
      const nextRoundTeamOrder = nextTeam(teams).sort(
        (a, b) => a.score - b.score
      );
      setTeams(nextRoundTeamOrder);
    } else {
      setSettings(defaultSettings);
      setScreen(defaultScreen);
      resetLocalStorage();
    }
  }

  function getWinningMessage(sortedTeams: Teams): string {
    const topScore = sortedTeams[0].score;
    const winnerArray = [];
    for (const team of sortedTeams) {
      if (team.score === topScore) {
        winnerArray.push(team.team.replace(/ /g, '\u00a0'));
      } else {
        break;
      }
    }
    if (winnerArray.length === 1) {
      return `${winnerArray.join('')}!`;
    } else if (winnerArray.length === 2) {
      return `${winnerArray.join(' and ')}!`;
    } else {
      const lastTeam = winnerArray.pop();
      return `${winnerArray.join(', ')}, and ${lastTeam}!`;
    }
  }

  return (
    <StyledBackgroundContiner
      className="background--titlePage"
      background={color}
    >
      <StyledRoundRecap
        color={color}
        className={round === 3 ? 'score--awards-page' : ''}
      >
        {round < 3 ? (
          <h2 className="all-caps">
            Round {round}
            <br />
            Scoreboard
          </h2>
        ) : (
          <>
            <Face round={round + 1} color={color} />
            <h2 className="all-caps">Congratulations</h2>
          </>
        )}
        {round === 3 && <h3>{getWinningMessage(sortedTeams)}</h3>}
        <div className="score__container">
          {/* {sortedTeams.map((team, index) => (
            <div key={index}>
              <div className="score__team">{team.team}</div>
              <div className="score__score">{team.score}</div>
            </div>
          ))} */}
          {sortedTeams.map((team, index) =>
            Object.keys(team).map((property) => (
              <div
                key={`${index}__${property}`}
                className={`score__${property}`}
              >
                {team[property as keyof Team]}
              </div>
            ))
          )}
        </div>
        <Button
          className="button__bottom-aligned"
          handleClick={continueScreen}
          color={color}
        >
          {round < 3 ? 'Continue' : 'End Game'}
        </Button>
      </StyledRoundRecap>
    </StyledBackgroundContiner>
  );
};

export default RoundRecap;
