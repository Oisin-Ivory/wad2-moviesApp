import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import {Card,Flag,Container,Segment,Menu,Header,Icon} from 'semantic-ui-react'


const SiteHeader = () => {

  return (
    	<nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <Icon name="video" size='large' id = "white"></Icon>
      <span className="navbar-text text-light">
        For Movie Enthusiast
      </span>
      <Icon name="film" size='large'  id = "white"></Icon>
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/toprated">
              Top Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Up Coming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/watchlater">
              Watch Later
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
	
  );
};

export default SiteHeader ;