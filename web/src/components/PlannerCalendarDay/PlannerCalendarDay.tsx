import { BORDER_COLORS_300, BACKGROUND_COLORS_200, BORDER_COLORS_500, TEXT_COLORS_700 } from 'src/colors'

export type PlannerCalendarDayProps = {
  universalDay: number
  personalDay: number
  calendarDay: number
  selectedColor: string
}

const PlannerCalendarDay = ({ universalDay, personalDay, calendarDay, selectedColor }: PlannerCalendarDayProps) => {
  return (
    <div
      className={`min-w-32 border font-display ${BORDER_COLORS_300[selectedColor]} ${TEXT_COLORS_700[selectedColor]}`}
    >
      <div className="flex justify-between p-2">
        <div
          className={`mr-2 flex aspect-square w-full items-center justify-center rounded-full text-lg ${BACKGROUND_COLORS_200[selectedColor]}`}
        >
          {universalDay}
        </div>
        <div
          className={`flex aspect-square items-center justify-center border-b-2 border-l-2 p-2 ${BORDER_COLORS_500[selectedColor]}`}
        >
          {calendarDay}
        </div>
      </div>
      <p className="p-2 text-4xl">{personalDay}</p>
    </div>
  )
}

export default PlannerCalendarDay
