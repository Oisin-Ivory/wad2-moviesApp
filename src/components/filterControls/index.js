import React, { useContext } from "react";
import "./filterControls.css";
import { GenresContext } from '../../contexts/genresContext' 
import { faRubleSign } from "@fortawesome/free-solid-svg-icons";
import {Menu,Input,Dropdown,Select,Grid,Divider,Header,Icon} from 'semantic-ui-react'

const FilterControls = props => {
  const context = useContext(GenresContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };


 
  function GenreOptions(){
    const genreOptions = []
    context.genres.map(genre => {
        genreOptions.push({key:genre.id,text:genre.name,value:genre.id})
    })
    return genreOptions;
  };

  return (
    <Menu id = "menu" >

    <Menu.Item id = "menuitem">
      <Icon name="filter"/>
    </Menu.Item>

    <Menu.Item id = "menuitem">
      Filter By:
    </Menu.Item>
    <Menu.Item id = "menuitem">
      Name
    </Menu.Item>

    <Menu.Item id = "menuitem">
    <Input  type="text" icon='film' onChange={handleTextChange} iconPosition='left' placeholder='Search movies...' />
     
    </Menu.Item>

    <Menu.Item id = "menuitem">
      Genres
    </Menu.Item>

    <Menu.Item id = "menuitem">
    <select id="genre" onChange={handleGenreChange}>
        {context.genres.map(genre => {
          return (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </select>
    </Menu.Item>
</Menu>
  );
};

export default FilterControls;