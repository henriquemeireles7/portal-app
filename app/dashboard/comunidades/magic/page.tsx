import React from "react"
import { CreatePost } from "@/components/community/create-post"
import { PostCard } from "@/components/community/post-card"

export default function ComunidadeMagicPage() {
  const posts = [
    {
      author: "Mentor Magic",
      time: "1h atrás",
      content: "✨ Meditação Guiada hoje às 20h!\n\nTema: 'Manifestação e Abundância'\n\nPreparação:\n- Ambiente calmo\n- Vela branca (opcional)\n- Caderno para anotações\n\nVamos juntos nessa jornada! 🙏",
      likes: 234,
      comments: [
        {
          author: "Luz Interior",
          content: "Não vejo a hora! As meditações são transformadoras!",
          time: "30min atrás"
        },
        {
          author: "Alma Livre",
          content: "Posso participar mesmo sendo iniciante?",
          time: "15min atrás"
        }
      ]
    },
    {
      author: "Coach Espiritual",
      time: "4h atrás",
      content: "🌟 Compartilhe nos comentários uma conquista da sua semana! Vamos celebrar juntos as pequenas vitórias do dia a dia.",
      likes: 145,
      comments: [
        {
          author: "Buscador",
          content: "Consegui manter minha prática diária de gratidão!",
          time: "2h atrás"
        }
      ]
    },
    {
      author: "Guia Espiritual",
      time: "6h atrás",
      content: "🔮 Workshop 'Desbloqueio Energético' neste sábado! Vagas limitadas, garanta já sua participação!",
      likes: 178,
      comments: []
    }
  ]

  return (
    <div className="space-y-6">
      <CreatePost />
      <div className="space-y-4">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  )
} 