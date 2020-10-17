import Card from '@material-ui/core/Card';
import React from 'react';
import { Link } from 'react-router-dom';

import { CustomNavBar } from '../../components';

import './MyProjects.css';

const MyProjects = ({ myProjects }) => {
  const projects = myProjects.map(({ _id, name }) => (
      <Card onClick={() => console.log(_id)} className="project-card" raised>
        <Link to={'/issues/' + _id}>
          <span>{ name }</span>
        </Link>
      </Card>
  ));

  return (
    <>
      <CustomNavBar />
      <div className="my-projects">
        <span className="project-title">My Projects</span>
        <div className="projects-container">{projects}</div>
      </div>
    </>
  );
};

export default MyProjects;
