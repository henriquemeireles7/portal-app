import { Avatar } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { ThumbsUp, MessageCircle } from "lucide-react"

interface PostCardProps {
  author: string
  time: string
  content: string
  likes: number
  comments: {
    author: string
    content: string
    time: string
  }[]
}

export function PostCard({ author, time, content, likes, comments }: PostCardProps) {
  return (
    <Card className="px-6 py-4">
      <div className="flex gap-3">
        <Avatar className="h-10 w-10" />
        <div className="flex-1">
          {/* Author and Time */}
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-sm">{author}</span>
            <span className="text-xs text-gray-500">{time}</span>
          </div>

          {/* Content */}
          <div className="text-sm text-gray-900 whitespace-pre-line mb-3">
            {content}
          </div>

          {/* Likes and Comments Count */}
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <span>{likes} curtidas</span>
              <span>•</span>
              <span>{comments.length} comentários</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 border-y py-1 mb-3">
            <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 flex-1 justify-center py-2 rounded-md">
              <ThumbsUp className="h-4 w-4" />
              <span className="text-sm">Curtir</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 flex-1 justify-center py-2 rounded-md">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">Comentar</span>
            </button>
          </div>

          {/* Comments */}
          {comments.length > 0 && (
            <div className="space-y-3">
              {comments.map((comment, index) => (
                <div key={index} className="flex gap-2">
                  <Avatar className="h-8 w-8" />
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-2xl px-3 py-2">
                      <div className="font-semibold text-sm">{comment.author}</div>
                      <div className="text-sm">{comment.content}</div>
                    </div>
                    <div className="flex gap-4 text-xs text-gray-500 mt-1 px-3">
                      <button>Curtir</button>
                      <button>Responder</button>
                      <span>{comment.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  )
} 