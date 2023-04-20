import { ProjectType } from "types";

export type ProjectCardProps = {
  project: ProjectType;
  projectClick: (owner: string, name: string) => void;
};
