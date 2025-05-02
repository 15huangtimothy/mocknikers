import React, { SetStateAction } from 'react';
import { defaultSettings } from './defaultSettings';

export const stringToBoolean = (string: string): boolean => {
  if (string === 'true') {
    return true;
  } else if (string === 'false') {
    return false;
  } else {
    throw Error("stringToBoolean function must take in only strings of 'true' or 'false'.");
  }
};

export const shuffleCards = (array: Cards): Cards => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const getStateFromLocalStorgage = (defaultValue: string | number | {} | [] | null, key: string) => {
  const storage = localStorage.getItem(key);
  if (storage) return JSON.parse(storage);
  return defaultValue;
};

export const setASetting = (
  settings: Settings,
  setSettings: React.Dispatch<React.SetStateAction<Settings>>,
  e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
) => {
  if (e.target.type === 'number') {
    setSettings({
      ...settings,
      [e.target.name]: parseInt(e.target.value),
    });
  } else if (e.target.name === 'teams') {
    if (e.target.dataset.index) {
      const tempTeams = [...settings.teams];
      tempTeams[parseInt(e.target.dataset.index)] = e.target.value;
      setSettings({
        ...settings,
        [e.target.name]: tempTeams,
      });
    } else {
      throw Error('Team input must have a index dataset.');
    }
  } else if (e.target.type === 'text' || e.target.tagName.toLowerCase() === 'textarea') {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  } else if (e.target.type === 'checkbox') {
    setSettings({
      ...settings,
      [e.target.name]: !settings[e.target.name as keyof Settings],
    });
  } else if (e.target.type === 'radio') {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  } else {
    throw Error('Element or input type is not set up to update the settings.');
  }
};

export const checkNumber = (settings: Settings, setSettings: React.Dispatch<SetStateAction<Settings>>, e: React.ChangeEvent<HTMLInputElement>) => {
  const max = e.target.getAttribute('max') ? parseInt(e.target.getAttribute('max') as string) : null;
  const min = e.target.getAttribute('min') ? parseInt(e.target.getAttribute('min') as string) : null;

  if (e.target.value === '') {
    setSettings({
      ...settings,
      [e.target.name]: defaultSettings[e.target.name as keyof Settings],
    });
  } else if (max && parseInt(e.target.value) > max) {
    setSettings({
      ...settings,
      [e.target.name]: max,
    });
  } else if (min && parseInt(e.target.value) < min) {
    setSettings({
      ...settings,
      [e.target.name]: min,
    });
  }
};

export const nextTeam = (teams: Teams): Teams => {
  const newTeamsOrder = [...teams];
  const currentTeam = newTeamsOrder.splice(0, 1);
  newTeamsOrder.push(currentTeam[0]);
  return newTeamsOrder;
};

export const resetLocalStorage = (): void => {
  const keysToReset = ['round', 'cards', 'remainingCards', 'paused', 'remainingTime', 'teams', 'firstPlayerInRound'];
  keysToReset.forEach((key) => localStorage.removeItem(key));
};

export const chooseColor = (round: number): string => {
  if (round === 1) {
    return 'green';
  } else if (round === 2) {
    return 'purple';
  } else {
    return 'red';
  }
};

export const nextCard = (remainingCards: Cards, setRemainingCards: React.Dispatch<React.SetStateAction<Cards>>): void => {
  const remainingCardsTemp = [...remainingCards];
  remainingCardsTemp.splice(0, 1);
  setRemainingCards(remainingCardsTemp);
};

export const skipCard = (remainingCards: Cards, setRemainingCards: React.Dispatch<React.SetStateAction<Cards>>) => {
  const remainingCardsTemp = [...remainingCards];
  remainingCardsTemp.splice(0, 1);
  remainingCardsTemp.push(remainingCards[0]);
  setRemainingCards(remainingCardsTemp);
};
