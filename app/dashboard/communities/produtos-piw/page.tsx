import React from "react"
import { CreatePost } from "@/components/community/create-post"
import { PostCard } from "@/components/community/post-card"

export default function ProdutosPIWPage() {
  const posts = [
    {
      author: "Gerente de Produtos",
      time: "3h atrás",
      content: "🚀 LANÇAMENTO: Curso Avançado de Marketing Digital\n\nDestaques:\n- 12 módulos completos\n- Certificação internacional\n- Mentorias ao vivo\n- Suporte exclusivo\n\nBônus para os 100 primeiros inscritos! 🎯",
      likes: 312,
      comments: [
        {
          author: "Aluno Expert",
          content: "Os bônus estão incríveis! Já garantir minha vaga!",
          time: "2h atrás"
        },
        {
          author: "Marketing Pro",
          content: "A ementa está sensacional! Parabéns pelo conteúdo",
          time: "1h atrás"
        }
      ]
    },
    {
      author: "Suporte Técnico",
      time: "5h atrás",
      content: "📱 Nova atualização do app disponível!\n- Interface renovada\n- Modo offline\n- Melhor performance\n\nAtualize agora para aproveitar todas as novidades!",
      likes: 145,
      comments: [
        {
          author: "Beta Tester",
          content: "O novo design ficou muito mais intuitivo!",
          time: "3h atrás"
        }
      ]
    },
    {
      author: "Customer Success",
      time: "8h atrás",
      content: "💡 Pesquisa: Qual tema você gostaria de ver em nosso próximo curso? Deixe sua sugestão nos comentários!",
      likes: 89,
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