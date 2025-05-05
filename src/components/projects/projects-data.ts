
interface ProjectsData {
  title: string,
  description: string,
  imgUrl: string,
  link: string,
  tools: string[]
}

export const ProjectsDB: ProjectsData[] = [
  {
    title: 'PlanejAI',
    description: "Esse projeto é uma ERP desenvolvida para gestão de microempresas consistindo na administração de fornecedores, clientes, produtos e também inclui um ChatBot interativo integrado com a API do ChatGPT. Foi desenvolido utilizando PHP7.4 e Laravel 7.",
    imgUrl: '/planeja.svg',
    link: 'https://guinafelix.com.br/planejai',
    tools: ['php', 'laravel', 'eloquent', 'Integração ChatGPT API']
  }
]