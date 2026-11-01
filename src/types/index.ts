export type Language = 'ru' | 'en';

export type ProjectCategory = 'all' | '3d-models' | 'architecture' | 'interior' | 'automotive';

export interface ProjectItem {
  id: string;
  slotNumber: string; // e.g. "01", "02"
  titleRu: string;
  titleEn: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabelRu: string;
  categoryLabelEn: string;
  descriptionRu: string;
  descriptionEn: string;
  software: string[];
  year: string;
  image?: string; // Optional real image URL if user adds one later
  aspectRatio?: 'tall' | 'wide' | 'square';
  isPlaceholder: boolean; // Flag indicating it's an awaiting project slot
  subtitleRu?: string;
  subtitleEn?: string;
  featuresRu?: string[];
  featuresEn?: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  titleRu: string;
  titleEn: string;
  taglineRu: string;
  taglineEn: string;
  descriptionRu: string;
  descriptionEn: string;
  highlightsRu: string[];
  highlightsEn: string[];
  software: string[];
}

export interface SoftwareItem {
  name: string;
  roleRu: string;
  roleEn: string;
  descriptionRu: string;
  descriptionEn: string;
  category: '3d' | '2d';
  iconType: 'blender' | 'sketchup' | 'photoshop' | 'illustrator';
}

export interface ProcessStage {
  step: string;
  titleRu: string;
  titleEn: string;
  summaryRu: string;
  summaryEn: string;
  detailsRu: string[];
  detailsEn: string[];
}
