export interface ServicesType {
  title: string
  content: string
  Image?: string
}

export interface ProjectSolutionType {
  id: string
  title: string
  description?: string
  image: string
  solutions: SolutionItem[]
}

export interface SolutionItem {
  id: number
  category: string
  description?: string
}

export interface ProductBenefitType {
  id: number
  number: string
  title: string
  subtitle?: string
  description?: string
  details?: BenefitDetail[]
}

export interface BenefitDetail {
  id: number
  text: string
}