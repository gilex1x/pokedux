import React from "react";
import { Grid, Image, Label, Icon } from "semantic-ui-react";
import { MAIN_COLOR, FAV_COLOR } from "../../utils/constants";
const PokemonCard = (props) => {
  const { pokemon } = props;
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokemonCard'>
        <Icon name='favorite' color={FAV_COLOR} />
        <Image
          centered
          src={pokemon.sprites.front_default}
          alt='Pokemon image'
        />
        <h3 className='PokemonCard-title'>{pokemon.name}</h3>
        <>
          {pokemon.types.map((type,index) => (
            <Label key={index}color={MAIN_COLOR}>{type.type.name}</Label>
          ))}
        </>
      </div>
    </Grid.Column>
  );
};

export default PokemonCard;
