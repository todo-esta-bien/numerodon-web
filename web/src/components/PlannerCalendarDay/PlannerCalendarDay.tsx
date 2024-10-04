export type PlannerCalendarDayProps = {
  universalDay: String
  personalDay: String
  calendarDay: String
}

const PlannerCalendarDay = ({ universalDay, personalDay, calendarDay }: PlannerCalendarDayProps) => {
  return (
    <div className="min-w-32 border border-gray-300 font-display">
      <div className="flex justify-between p-2">
        <div className="mr-2 flex aspect-square w-full items-center justify-center rounded-full bg-red-200 text-lg">
          {universalDay}
        </div>
        <div className="flex aspect-square items-center justify-center border-b-2 border-l-2 border-l-gray-500 border-b-gray-500 p-2">
          {calendarDay}
        </div>
      </div>
      <p className="p-2 text-4xl">{personalDay}</p>
    </div>
  )
}

export default PlannerCalendarDay
