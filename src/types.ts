export interface Topic {
  id: string;
  title: string;
  description: string;
  links: {
    html: string;
    pdf: string;
    docs: string;
  }
  githubUrl: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  topics: Topic[];
  color: string;
}
