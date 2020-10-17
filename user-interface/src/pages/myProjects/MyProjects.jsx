import Card from '@material-ui/core/Card';
import React from 'react';

import { CustomNavBar } from '../../components';

import './MyProjects.css';

const MyProjects = ({ myProjects }) => {
  const projects = myProjects.map(({ name }) => (
    <Card className="project-card" raised>
      <span>{ name }</span>
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
