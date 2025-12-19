import { BORDER_COLORS, BACKGROUND_COLORS, TEXT_COLORS } from 'src/colors'

export type PlannerCalendarDayProps = {
  universalDay: number
  personalDay: number
  calendarDay: number
  selectedColor: string
}

const PlannerCalendarDay = ({ universalDay, personalDay, calendarDay, selectedColor }: PlannerCalendarDayProps) => {
  const shouldRender = universalDay && personalDay && calendarDay

  return (
    <div
      className={`min-w-32 border font-display ${BORDER_COLORS[selectedColor][300]} ${TEXT_COLORS[selectedColor][700]}`}
    >
      <div className="flex justify-between p-2">
        {shouldRender && (
          <>
            <div
              className={`mr-2 flex aspect-square w-full items-center justify-center rounded-full text-lg ${BACKGROUND_COLORS[selectedColor][200]}`}
            >
              {universalDay}
            </div>
            <div
              className={`flex aspect-square items-center justify-center border-b-2 border-l-2 p-2 ${BORDER_COLORS[selectedColor][500]}`}
            >
              {calendarDay}
            </div>
          </>
        )}
      </div>
      <p className="p-2 text-4xl">{personalDay}</p>
    </div>
  )
}

export default PlannerCalendarDay
