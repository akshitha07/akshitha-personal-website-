export interface ProjectSubCard {
  title: string;
  img: string;
  desc: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  image: string;
  subCards?: ProjectSubCard[];
  github?: string;
  live?: string;
}

export interface AnalysisData {
  show: string[];
  explain: {
    problem: string;
    uiDecisions: string;
    componentStructure: string;
    responsiveness: string;
    stateHandling: string;
    challengesSolved: string;
  };
  mention: string[];
  outcome: {
    value: string;
    label: string;
  };
}

export interface SkillGroups {
  high: string[];
  medium: string[];
  low: string[];
}

export interface TimelineItem {
  title: string;
  date: string;
  desc: string;
  tags: string[];
}
