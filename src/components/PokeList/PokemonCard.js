import React from "react";
import { Grid, Image, Label, Icon } from "semantic-ui-react";
import { MAIN_COLOR, FAV_COLOR } from "../../utils/constants";
const PokemonCard = () => {
  return (
    <div className='PokemonCard'>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Icon name='favorite' color={FAV_COLOR} />
        <Image centered src='' alt='Pokemon image' />
        <h3 className='PokemonCard-title'>Pomkemon Name </h3>
        <Label color={MAIN_COLOR}>Pokemon Type</Label>
      </Grid.Column>
    </div>
  );
};

export default PokemonCard;
