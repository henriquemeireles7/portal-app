import { VideoCard } from "@/components/learning-paths/video-card"

export default function AILearningPathPage() {
  const videos = [
    {
      title: "Introdução à Inteligência Artificial",
      description: "Aprenda os conceitos fundamentais de IA e como ela está transformando o mercado",
      duration: "45:20",
      thumbnail: "/thumbnails/ai-intro.jpg",
      level: 1,
      isLocked: false
    },
    {
      title: "Automação com Python e ChatGPT",
      description: "Crie automações poderosas combinando Python e a API do ChatGPT",
      duration: "1:15:00",
      thumbnail: "/thumbnails/python-automation.jpg",
      level: 2,
      isLocked: true
    },
    {
      title: "Machine Learning na Prática",
      description: "Implementação de modelos de ML para análise de dados e previsões",
      duration: "2:30:00",
      thumbnail: "/thumbnails/machine-learning.jpg",
      level: 3,
      isLocked: true
    }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Trilha: AI e Automações</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  )
} 