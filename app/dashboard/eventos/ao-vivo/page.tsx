import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Youtube } from "lucide-react"

export default function LiveEventsPage() {
  return (
    <div className="h-full w-full p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Eventos ao Vivo</h1>
        
        <div className="grid gap-6">
          <Card className="border-2 border-red-500/20">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-2xl">Workshop React Avançado</CardTitle>
              <Badge className="bg-red-500 px-4 py-1 text-base">AO VIVO</Badge>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-lg">Com João Silva - Especialista em React</p>
              <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <Youtube className="h-32 w-32 text-slate-600" />
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="flex-1">Entrar na Transmissão</Button>
                <Button size="lg" variant="outline" className="flex-1">Ver Detalhes</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Introdução ao Next.js 14</CardTitle>
                <p className="text-muted-foreground mt-2">Com Maria Santos - Dev Advocate</p>
              </div>
              <Badge variant="secondary" className="px-4 py-1 text-base">EM BREVE</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <p className="text-lg text-muted-foreground">Começa em 2 horas</p>
                <Button variant="outline">Definir Lembrete</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 