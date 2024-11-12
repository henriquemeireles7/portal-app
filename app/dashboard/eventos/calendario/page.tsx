import { Card, CardContent } from "@/components/ui/card";
import { CalendarWrapper } from "./calendar-wrapper";

type Event = {
  title: string;
  time: string;
  status: "soon" | "scheduled";
};

const events: Record<string, Event[]> = {
  "2024-03-15": [
    { title: "Workshop TypeScript", time: "09:00 - 11:00", status: "soon" },
    {
      title: "Live Coding: API REST",
      time: "14:00 - 16:00",
      status: "scheduled",
    },
  ],
  "2024-03-18": [
    { title: "React Performance", time: "10:00 - 12:00", status: "scheduled" },
  ],
  "2024-03-20": [
    { title: "Next.js Masters", time: "15:00 - 17:00", status: "scheduled" },
    { title: "Code Review Session", time: "18:00 - 19:00", status: "soon" },
  ],
};

export default function CalendarPage() {
  return (
    <div className="h-full w-full p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Calendário de Eventos</h1>
        <Card>
          <CardContent className="p-6">
            <CalendarWrapper events={events} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
