"use client";

export default function DashboardPage() {
  return (
    <div className="h-full p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold">Bem-vindo ao Dashboard</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Gerencie seus cursos, eventos e progresso em um só lugar.
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">Cursos em Andamento</h2>
            <p className="mt-2 text-muted-foreground">Continue de onde parou nos seus cursos.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">Próximos Eventos</h2>
            <p className="mt-2 text-muted-foreground">Confira os eventos ao vivo agendados.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">Seu Progresso</h2>
            <p className="mt-2 text-muted-foreground">Acompanhe sua evolução nos estudos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
