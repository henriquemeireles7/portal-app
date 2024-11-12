import React from "react"
import { CreatePost } from "@/components/community/create-post"
import { PostCard } from "@/components/community/post-card"

export default function ComunicadosPage() {
  const posts = [
    {
      author: "Admin PIW",
      time: "2h atrás",
      content: "🎉 Nova atualização da plataforma disponível! Confira as novidades:\n\n- Interface renovada\n- Novo sistema de busca\n- Melhorias de performance\n\nAcesse agora e explore todas as novidades!",
      likes: 45,
      comments: [
        {
          author: "Maria Silva",
          content: "Adorei as mudanças! A plataforma está muito mais intuitiva.",
          time: "1h atrás"
        },
        {
          author: "João Santos",
          content: "O novo sistema de busca está incrível! Parabéns pelo trabalho!",
          time: "30min atrás"
        }
      ]
    },
    {
      author: "Coordenador de Comunidade",
      time: "5h atrás",
      content: "📢 Lembrete: Amanhã teremos nossa live semanal às 19h! O tema será 'Tendências de Mercado 2024'. Não percam!",
      likes: 32,
      comments: [
        {
          author: "Ana Costa",
          content: "Já agendei! As lives sempre trazem conteúdos incríveis.",
          time: "4h atrás"
        }
      ]
    },
    {
      author: "Suporte PIW",
      time: "1d atrás",
      content: "⚠️ Manutenção programada: No próximo domingo, das 02h às 04h, realizaremos uma atualização em nossos servidores.",
      likes: 28,
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