import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { ProjectCardProps } from "./ProjectCardType";

const ProjectCard = ({ project, projectClick }: ProjectCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h1" sx={{ fontSize: 14 }} color="text.secondary">
          {project.name}
        </Typography>
        <Typography>Create: {project.create}</Typography>
        <Typography>Size: {project.size}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => projectClick(project.owner, project.name)}
        >
          Show languages
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
