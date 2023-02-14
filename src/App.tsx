import { getWikiArticles } from './lib/getWikiData';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import Settings from './components/Settings';
import GameContext from './contexts/gameContext';
import { defaultSettings, defaultScreen } from './lib/defaultSettings';
import { useLocalStorage } from './lib/hooks';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/global';
import { StyledBackgroundContiner } from './components/styles/BackgroundContiner.styled';
import { StyledBackgroundImage } from './components/styles/BackgroundImage.styled';
import { ReactComponent as BackgroudImage } from './images/monikers_characters.svg';
import { ReactComponent as LoadingImage } from './images/loading.svg';
import { StyledLoadingImageContainer } from './components/styles/LoadingImageContainer.styled';

function App() {
  const [wikiData, setWikiData] = useState<Article[] | null>(null);
  const [settings, setSettings] = useLocalStorage(defaultSettings, 'settings');
  const [screen, setScreen] = useLocalStorage(defaultScreen, 'screen');

  useEffect(() => {
    const wikiData = getWikiArticles();
    wikiData.then((data) => setWikiData(data));
  }, []);

  function newGame(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setScreen('settings');
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GameContext.Provider
        value={{
          settings,
          screen,
          setSettings,
          setScreen,
          wikiData,
        }}
      >
        {!wikiData ? (
          <StyledBackgroundContiner
            className="background--centeredContent"
            background="blue"
          >
            <StyledLoadingImageContainer>
              <LoadingImage />
            </StyledLoadingImageContainer>
          </StyledBackgroundContiner>
        ) : (
          <>
            {(screen === 'settings' || screen.startsWith('game')) && (
              <Settings />
            )}
            {screen === 'home' && (
              <>
                <StyledBackgroundContiner
                  className="background--centeredContent"
                  background="beige"
                >
                  <Button
                    className="button__centered-circle"
                    handleClick={newGame}
                    color="blue"
                  >
                    <h1>Monikers</h1>
                    New Game
                  </Button>
                </StyledBackgroundContiner>
                <StyledBackgroundImage>
                  <BackgroudImage className="background-image" />
                </StyledBackgroundImage>
              </>
            )}
          </>
        )}
      </GameContext.Provider>
    </ThemeProvider>
  );
}

export default App;
