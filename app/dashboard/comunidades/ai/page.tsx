import React from "react"
import { CreatePost } from "@/components/community/create-post"
import { PostCard } from "@/components/community/post-card"

export default function AIAutomacoesPage() {
  const posts = [
    {
      author: "Tech Lead PIW",
      time: "2h atrás",
      content: "🎯 Nova Feature: Integração com ChatGPT\n\nAgora você pode conectar sua conta OpenAI diretamente na plataforma!\n\nBenefícios:\n- Respostas instantâneas\n- Análise de dados automatizada\n- Sugestões personalizadas\n\nConfira o tutorial completo de configuração!",
      likes: 156,
      comments: [
        {
          author: "Dev Backend",
          content: "Finalmente! Vai facilitar muito nosso workflow!",
          time: "1h atrás"
        },
        {
          author: "Data Analyst",
          content: "A precisão das análises está impressionante",
          time: "30min atrás"
        }
      ]
    },
    {
      author: "Product Owner",
      time: "5h atrás",
      content: "📊 Resultados do último sprint de automação:\n- 75% de redução no tempo de processamento\n- 90% de precisão nas análises\n- 50% menos intervenção manual\n\nParabéns time! 🚀",
      likes: 89,
      comments: [
        {
          author: "QA Engineer",
          content: "Os testes automatizados estão rodando perfeitamente!",
          time: "3h atrás"
        }
      ]
    },
    {
      author: "DevOps Engineer",
      time: "8h atrás",
      content: "⚡ Nova pipeline de CI/CD implementada! Agora temos deploy automático com zero downtime. Alguma dúvida sobre o processo?",
      likes: 67,
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