import React from 'react';
import { StyledBackgroundContiner } from './styles/BackgroundContiner.styled';
import { StyledInterstitialContainer } from './styles/Container-Interstitial.styled';
import Button from './Button';

interface DraftingTransitionProps {
    currentPlayer: number;
    onContinue: () => void;
}

const DraftingTransition = ({ currentPlayer, onContinue }: DraftingTransitionProps) => {
    return (
        <StyledBackgroundContiner className="background--titlePage" background="blue">
            <StyledInterstitialContainer>
                <div>
                    <h2 className="all-caps"><strong>Player {currentPlayer}'s Turn</strong></h2>
                    <p>Pass the device to Player {currentPlayer}.</p>
                    <p>You will select cards to add to the game deck.</p>
                </div>
                <Button className="button__bottom-aligned" color="blue" handleClick={onContinue}>
                    Begin
                </Button>
            </StyledInterstitialContainer>
        </StyledBackgroundContiner>
    );
};

export default DraftingTransition;