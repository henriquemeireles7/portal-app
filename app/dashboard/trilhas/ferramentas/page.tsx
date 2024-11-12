import { VideoCard } from "@/components/learning-paths/video-card"

export default function FerramentasLearningPathPage() {
  const videos = [
    {
      title: "Dominando o Notion",
      description: "Aprenda a usar o Notion para organizar projetos e aumentar sua produtividade",
      duration: "1:30:00",
      thumbnail: "/thumbnails/notion.jpg",
      level: 1,
      isLocked: false
    },
    {
      title: "Automação com Zapier",
      description: "Crie automações poderosas entre suas ferramentas favoritas",
      duration: "1:15:00",
      thumbnail: "/thumbnails/zapier.jpg",
      level: 2,
      isLocked: true
    },
    {
      title: "Suite Adobe para Criadores",
      description: "Domine as principais ferramentas Adobe para criação de conteúdo",
      duration: "3:20:00",
      thumbnail: "/thumbnails/adobe.jpg",
      level: 3,
      isLocked: true
    }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Trilha: Ferramentas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  )
} 