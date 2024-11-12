import { Avatar } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CreatePost() {
  return (
    <Card className="px-6 py-4 mb-6">
      <div className="flex gap-3">
        <Avatar className="h-10 w-10" />
        <div className="flex-1">
          <div className="border rounded-lg bg-gray-50 hover:bg-gray-100 cursor-text p-3">
            <span className="text-gray-500">Escreva algo...</span>
          </div>
        </div>
      </div>
    </Card>
  )
} 