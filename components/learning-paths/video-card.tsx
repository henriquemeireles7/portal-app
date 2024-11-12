import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Lock } from "lucide-react"

interface VideoCardProps {
  title: string
  description: string
  duration: string
  thumbnail: string
  isLocked?: boolean
  level?: number
  isOnline?: boolean
}

export function VideoCard({
  title,
  description,
  duration,
  thumbnail,
  isLocked = false,
  level = 1,
  isOnline = true
}: VideoCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer">
      {/* Thumbnail Container */}
      <div className="relative aspect-video">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          {isLocked ? (
            <Lock className="h-12 w-12 text-white" />
          ) : (
            <Play className="h-12 w-12 text-white" />
          )}
        </div>
        {/* Duration Badge */}
        <Badge variant="secondary" className="absolute bottom-2 right-2">
          {duration}
        </Badge>
        {/* Online Status */}
        {isOnline && (
          <Badge variant="success" className="absolute top-2 left-2">
            ONLINE
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold leading-tight">{title}</h3>
          {level > 1 && (
            <Badge variant="outline">Nível {level}</Badge>
          )}
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Card>
  )
} 