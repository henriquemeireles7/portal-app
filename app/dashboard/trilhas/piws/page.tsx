import { VideoCard } from "@/components/learning-paths/video-card"

export default function PIWsLearningPathPage() {
  const videos = [
    {
      title: "Como Criar seu Primeiro PIW",
      description: "Guia completo para criar e monetizar seu Produto Info Web",
      duration: "2:10:00",
      thumbnail: "/thumbnails/piw-intro.jpg",
      level: 1,
      isLocked: false
    },
    {
      title: "Marketing Digital Avançado",
      description: "Estratégias avançadas de marketing para escalar seu PIW",
      duration: "1:45:00",
      thumbnail: "/thumbnails/marketing.jpg",
      level: 2,
      isLocked: true
    },
    {
      title: "Copywriting que Converte",
      description: "Técnicas de copywriting para aumentar suas vendas",
      duration: "1:30:00",
      thumbnail: "/thumbnails/copywriting.jpg",
      level: 2,
      isLocked: true
    }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Trilha: PIWs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  )
} 