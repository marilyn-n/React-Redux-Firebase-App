import React from 'react';

const ProjectDetails = (props) => {
  console.log(props);
  const id = props.match.params.id;
  
  return (
    <div className="card-footer text-muted">
      2 days ago {id}
    </div>      
  );
}

export default ProjectDetails;
