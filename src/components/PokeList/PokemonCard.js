import React, { useState } from "react";
import { Grid, Image, Label, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { setFavorite, deleteFavorite } from "../../redux/actions";
import {
  MAIN_COLOR,
  FAV_SELECTED_COLOR,
  FAV_DEFAULT_COLOR,
} from "../../utils/constants";
const PokemonCard = (props) => {
  const dispatch = useDispatch();
  const { pokemon } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      dispatch(deleteFavorite(pokemon.id));
    } else {
      dispatch(setFavorite(pokemon));
    }
  };
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokemonCard'>
        <button className='PokemonCard-favoriteButton' onClick={handleFavorite}>
          <Icon
            name='favorite'
            color={isFavorite ? FAV_SELECTED_COLOR : FAV_DEFAULT_COLOR}
          />
        </button>

        <Image
          centered
          src={pokemon.sprites.front_default}
          alt='Pokemon image'
        />
        <h3 className='PokemonCard-title'>{pokemon.name}</h3>
        <>
          {pokemon.types.map((type, index) => (
            <Label key={index} color={MAIN_COLOR}>
              {type.type.name}
            </Label>
          ))}
        </>
      </div>
    </Grid.Column>
  );
};

export default PokemonCard;
