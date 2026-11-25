// Modifie ce fichier pour mettre à jour le site : plus besoin de toucher aux composants.
export const profile = {
  name: 'Mendrika',
  email: 'mendrikavamet@gmail.com',
  github: 'https://github.com/valisoamendrika',
  linkedin: null, // ex : 'https://www.linkedin.com/in/ton-profil'
  portrait: '/portrait.svg', // remplace par /portrait.webp (800 px, < 100 Ko)
}

export const specialties = ['Applications web', 'Backend et API', 'Applications mobiles', 'Bases de données']

export const projects = [
  {
    title: 'BiteRush',
    description: 'Application de commande de repas avec rôles client, restaurant et livreur.',
    tags: ['Spring Boot', 'React', 'TypeScript'],
    image: null, // ex : '/projects/biterush.webp'
    repo: null, // ex : 'https://github.com/valisoamendrika/biterush'
    live: null,
  },
  {
    title: 'JiramaSante',
    description: 'Application de gestion de dossiers médicaux.',
    tags: ['NestJS', 'Prisma', 'Angular'],
    image: null,
    repo: null,
    live: null,
  },
  {
    title: 'Mood Player',
    description: "Lecteur de musique qui classe l'humeur avec l'IA.",
    tags: ['Flutter'],
    image: null,
    repo: null,
    live: null,
  },
]
