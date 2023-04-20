import React, { useState } from "react";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box, Container, Grid, Paper } from "@mui/material";

import ProjectCard from "components/ProjectCard";
import { FormSearch } from "components/formSearch";
import ControlChart from "components/ControlChart";

import { findOccurrences, formatDataChart } from "utils";
import { ProjectType, ProjectTypeData } from "types";

export const Graf = () => {
  const [userName, setUserName] = useState<string>("");
  const [languages, setLanguages] = useState<object[]>([]);
  const [chartName, setChartName] = useState<string>("");
  const [chartType, setChartType] = useState<string>("column");
  const [projects, setProjects] = useState<ProjectType[]>([]);

  const options = {
    chart: {
      type: chartType,
    },
    title: {
      text: chartName,
    },
    xAxis: {
      type: "category",
    },
    tooltip: {
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>',
    },
    accessibility: {
      enabled: false,
    },
    series: [
      {
        name: "languages",
        colorByPoint: true,
        data: languages,
      },
    ],
  };

  const projectClick = async (userName: string, projectName: string) => {
    const { data } = await axios.get(
      `https://api.github.com/repos/${userName}/${projectName}/languages`
    );

    setLanguages(formatDataChart(data));
    setChartName("Languages project");
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let dataProjects: any = [];
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}/repos`
    );

    data.map((project: ProjectTypeData) => {
      return (dataProjects = [
        ...dataProjects,
        {
          id: project.id,
          owner: project.owner.login,
          name: project.name,
          create: project.created_at,
          size: project.size,
        },
      ]);
    });

    setProjects(dataProjects);

    const arr = data
      .filter((el: any) => el.language !== null)
      .map((el: any) => el.language);

    setLanguages(findOccurrences(arr));
    setChartName("Total languages projects");
  };

  return (
    <Container>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={1}>
            <FormSearch handleSubmit={handleSubmit} setUserName={setUserName} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Paper elevation={1}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr" },
                gap: 2,
              }}
            >
              <ControlChart chartType={chartType} setChartType={setChartType} />
            </Box>
          </Paper>
        </Grid>
        {projects.length !== 0 && (
          <Grid item xs={12}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr 1fr 1fr" },
                gap: 2,
              }}
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  projectClick={projectClick}
                />
              ))}
            </Box>
          </Grid>
        )}
        {languages.length !== 0 && (
          <Grid item xs={12}>
            <Paper elevation={1}>
              <Box
                sx={{
                  p: 2,
                }}
              >
                <HighchartsReact highcharts={Highcharts} options={options} />
              </Box>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
