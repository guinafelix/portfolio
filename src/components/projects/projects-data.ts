
interface ProjectsData {
  title: string,
  description: string,
  imgUrl: string,
  link: string,
  tools: string[]
}

export const ProjectsDB: ProjectsData[] = [
  {
    title: 'projeto1',
    description: 'descriocao projeto 1',
    imgUrl: '/image.png',
    link: 'link de teste',
    tools: ['php', 'laravel', 'eloquent']
  }
]