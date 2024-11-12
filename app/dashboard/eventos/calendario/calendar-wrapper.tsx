'use client'

import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { format } from 'date-fns'

interface Event {
  title: string
  time: string
  status: "soon" | "scheduled"
}

interface CalendarWrapperProps {
  events: Record<string, Event[]>
}

export function CalendarWrapper({ events }: CalendarWrapperProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const formatDateKey = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDayOfMonth = getFirstDayOfMonth(currentDate)
  const monthYear = currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

  const days = Array.from({ length: 42 }, (_, i) => {
    const dayNumber = i - firstDayOfMonth + 1
    return dayNumber > 0 && dayNumber <= daysInMonth ? new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNumber) : null
  })

  const getEventsForDay = (day: Date | null): Event[] | undefined => {
    if (!day) return undefined
    const dateKey = formatDateKey(day.getFullYear(), day.getMonth(), day.getDate())
    return events[dateKey]
  }

  const hasEvents = (day: Date | null): boolean => {
    if (!day) return false
    const dateKey = formatDateKey(day.getFullYear(), day.getMonth(), day.getDate())
    return !!events[dateKey]
  }

  return (
    <div className="calendar-container">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">
          {monthYear}
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={previousMonth}
            aria-label="Mês anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextMonth}
            aria-label="Próximo mês"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-muted-foreground py-2"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, i) => (
          <div
            key={i}
            className={cn(
              "min-h-[100px] p-2 border rounded-lg",
              "hover:bg-muted/50 transition-colors",
              !day && "bg-muted/10",
              hasEvents(day) && "border-primary/50"
            )}
          >
            {day && (
              <>
                <span className="text-sm font-medium">{format(day, 'd')}</span>
                {getEventsForDay(day)?.map((event, index) => (
                  <div
                    key={index}
                    className={cn(
                      "mt-1 p-1 text-xs rounded",
                      "truncate cursor-pointer",
                      event.status === "soon" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"
                    )}
                  >
                    {event.title}
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}