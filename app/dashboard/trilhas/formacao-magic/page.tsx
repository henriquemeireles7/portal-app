import { VideoCard } from "@/components/learning-paths/video-card"

export default function FormacaoMagicPage() {
  const videos = [
    {
      title: "Fundamentos da Transformação",
      description: "Descubra os princípios fundamentais para iniciar sua jornada de transformação",
      duration: "1:20:00",
      thumbnail: "/thumbnails/magic-basics.jpg",
      level: 1,
      isLocked: false
    },
    {
      title: "Meditação e Mindfulness",
      description: "Técnicas avançadas de meditação para elevação da consciência",
      duration: "55:30",
      thumbnail: "/thumbnails/meditation.jpg",
      level: 2,
      isLocked: true
    },
    {
      title: "Manifestação Consciente",
      description: "Como alinhar pensamentos e ações para manifestar seus objetivos",
      duration: "1:45:00",
      thumbnail: "/thumbnails/manifestation.jpg",
      level: 3,
      isLocked: true
    }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Trilha: Formação Magic</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  )
} 