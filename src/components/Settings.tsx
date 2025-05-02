import { useCallback } from 'react';
import GameContext from '../contexts/gameContext';
import { defaultSettings } from '../lib/defaultSettings';
import { checkNumber, setASetting } from '../lib/helpers';
import { useConextIfPopulated } from '../lib/hooks';
import Button from './Button';
import Game from './Game';
import Header from './Header';
import { StyledBackgroundContiner } from './styles/BackgroundContiner.styled';
import { StyledContainer } from './styles/Container.styled';
import { StyledSettings } from './styles/Settings.styled';
import ReactGA from 'react-ga4';

const Settings = () => {
  const { screen, settings, setSettings, setScreen, wikiData }: GameContext = useConextIfPopulated(GameContext);

  function startGame(e: React.MouseEvent<HTMLButtonElement>) {
    ReactGA.event('start_game', {
      card_type: settings.cardType,
      team_count: settings.teams.length,
      timer: settings.timer,
      allow_skips: settings.allowSkips,
      generated_card_count: settings.cardType === 'generate' ? settings.cardCount : null,
    });
    e.preventDefault();
    setScreen('game|round');
  }
  function addTeam(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const tempTeams = [...settings.teams];
    tempTeams.push(`Team ${tempTeams.length + 1}`);
    setSettings({
      ...settings,
      teams: tempTeams,
    });
  }
  function removeTeam(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const tempTeams = [...settings.teams];
    tempTeams.pop();
    setSettings({
      ...settings,
      teams: tempTeams,
    });
  }

  const clearTeamOnFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement, Element>, index: number) => {
      if (settings.teams[index] === `Team ${index + 1}`) {
        const tempTeams = [...settings.teams];
        tempTeams[index] = '';
        setSettings({ ...settings, [e.target.name]: tempTeams });
      }
    },
    [setSettings, settings]
  );

  const defaultTeamOnBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement, Element>, index: number) => {
      const tempTeams = [...settings.teams];
      if (!settings.teams[index].trim()) {
        tempTeams[index] = `Team ${index + 1}`;
        setSettings({
          ...settings,
          [e.target.name]: tempTeams,
        });
      } else {
        tempTeams[index] = e.target.value.trim();
        setSettings({
          ...settings,
          [e.target.name]: tempTeams,
        });
      }
    },
    [setSettings, settings]
  );

  return (
    <>
      {screen.startsWith('game') ? (
        <Game />
      ) : (
        <StyledBackgroundContiner className="background--scroll" background={'blue'}>
          <StyledContainer>
            <Header title="New Game" />
            <StyledSettings>
              <h3 className="heading">Settings</h3>
              <form>
                <div className="settings__group">
                  <label className="all-caps" htmlFor="team1">
                    Teams
                  </label>
                  {settings.teams.map((team, index) => (
                    <div className="team-container" key={`team${index + 1}`}>
                      <input
                        id={`team${index + 1}`}
                        data-index={index}
                        className="team"
                        name="teams"
                        type="text"
                        value={team}
                        onChange={(e) => setASetting(settings, setSettings, e)}
                        onBlur={(e) => defaultTeamOnBlur(e, index)}
                        onFocus={(e) => clearTeamOnFocus(e, index)}
                      />
                    </div>
                  ))}
                  <div className="button-container">
                    <Button handleClick={addTeam} width="50%" color="blue">
                      Add
                    </Button>
                    <Button className="button--reverse" handleClick={removeTeam} width="50%" color="blue" disabled={settings.teams.length <= 2 ? true : false}>
                      Remove
                    </Button>
                  </div>
                </div>
                <div className="settings__group">
                  <div className="input__container--split">
                    <label className="all-caps" htmlFor="timer">
                      Timer
                      <br />
                      <span>(in seconds)</span>
                    </label>
                    <input
                      className="input--narrow"
                      id="timer"
                      name="timer"
                      type="number"
                      value={settings.timer}
                      min="1"
                      max="999"
                      onChange={(e) => setASetting(settings, setSettings, e)}
                      onBlur={(e) => checkNumber(settings, setSettings, e)}
                    />
                  </div>
                </div>
                <div className="settings__group">
                  <div className="input__container--split">
                    <label className="all-caps" htmlFor="allowSkips">
                      Allow Skips?
                    </label>
                    <input
                      id="allowSkips"
                      name="allowSkips"
                      type="checkbox"
                      onChange={(e) => setASetting(settings, setSettings, e)}
                      checked={settings.allowSkips}
                    />
                  </div>
                </div>
                <div className="settings__group">
                  <label className="all-caps">Cards</label>
                  <div className="tabber">
                    <label htmlFor="cardType__generate" className={settings.cardType === 'generate' ? 'label--checked' : ''}>
                      Generated
                    </label>
                    <input
                      id="cardType__generate"
                      name="cardType"
                      type="radio"
                      value="generate"
                      checked={settings.cardType === 'generate'}
                      onChange={(e) => setASetting(settings, setSettings, e)}
                    />
                    <label htmlFor="cardType__written" className={settings.cardType === 'written' ? 'label--checked' : ''}>
                      Written
                    </label>
                    <input
                      id="cardType__written"
                      name="cardType"
                      type="radio"
                      value="written"
                      checked={settings.cardType === 'written'}
                      onChange={(e) => setASetting(settings, setSettings, e)}
                    />
                    <div className="slider"></div>
                  </div>
                  {settings.cardType === 'generate' && (
                    <div className="input__container--split">
                      <label className="all-caps" htmlFor="cardCount">
                        Card Count
                      </label>
                      <input
                        id="cardCount"
                        className="input--narrow"
                        name="cardCount"
                        type="number"
                        min="1"
                        max={wikiData?.length}
                        value={settings.cardCount}
                        onChange={(e) => setASetting(settings, setSettings, e)}
                        onBlur={(e) => checkNumber(settings, setSettings, e)}
                      />
                    </div>
                  )}
                  {settings.cardType === 'written' && (
                    <textarea
                      id="cardText"
                      name="cardText"
                      value={settings.cardText}
                      onChange={(e) => setASetting(settings, setSettings, e)}
                      onBlur={(e) =>
                        !settings.cardText.trim()
                          ? setSettings({
                              ...settings,
                              [e.target.name]: defaultSettings.cardText,
                            })
                          : setSettings({
                              ...settings,
                              [e.target.name]: e.target.value.trim(),
                            })
                      }
                      onFocus={(e) => settings.cardText === defaultSettings.cardText && setSettings({ ...settings, [e.target.name]: '' })}
                    />
                  )}
                </div>
                <Button handleClick={startGame} color="blue" type="submit">
                  Start Game
                </Button>
              </form>
            </StyledSettings>
          </StyledContainer>
        </StyledBackgroundContiner>
      )}
    </>
  );
};

export default Settings;
