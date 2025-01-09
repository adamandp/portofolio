export interface DataAboutType {
  id: number;
  experience: string;
  status: string;
  startDate: string;
  endDate: string;
  location: string;
  companyName: string;
  descriptions: {
    id: number;
    description: string;
  }[];
}

export interface dataProjectsType {
  id?: number;
  img?: string;
  title?: string;
  to?: string;
  tools?: {
    id?: number;
    title?: string;
    link?: string;
  }[];
}
