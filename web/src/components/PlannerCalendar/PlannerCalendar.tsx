import PlannerCalendarDay from 'src/components/PlannerCalendarDay'
import { PlannerProfile } from '@todo-esta-bien/numerodon'
import PlannerSymbol from 'src/components/PlannerCalendar/PlannerSymbol'
import AngelIcon from 'src/components/PlannerCalendar/AngelIcon'
import { BACKGROUND_COLORS, BORDER_COLORS, TEXT_COLORS } from 'src/colors'

interface PlannerCalendarProps {
  name: string
  birthday: Date
  consultingMonth: number
  consultingYear: number
  selectedColor: string
}

const DAYS_OF_WEEK = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']

const getWarningLabel = (personalVibration: number): string => {
  const warnings = {
    1: 'No más excusas, empieza ya.',
    2: 'Vence las dudas e indecisión',
    3: 'Cuida tu lengua, exprésate sin juicios, brilla por ti.',
    4: 'Esfuérzate, sal de tu zona de confort.',
    5: 'Sé flexible, cambios.',
    6: 'Responsabilízate y libérate de crear deudas emocionales.',
    7: 'Relájate, cuida tu salud mental.',
    8: 'Administra tus recursos, sé cauteloso.',
    9: 'Corta las dependencias físicas y emocionales.',
    11: 'Cuidado con el abuso de poder, y los excesos.',
    22: 'Cuidado, el camino corto te puede hacer caer en trampas.',
  }

  return warnings[personalVibration] || ''
}

const MESSAGES = [
  'Nuevos comienzos',
  'Unión / Desunión',
  'Notoriedad / Ventas',
  'Estructura / Acción práctica',
  'Libertad / Tomar riesgos',
  'Relaciones / Responsabilidad',
  'Decidir/enfrentar',
  'Expansión/ Movimientos $$$',
  'Soltar / Concluir',
  'Transformar / Evolucionar / Vencer obstáculos y concretar',
  'Disciplinar / Crecer / Formalizar y planear estrategia',
]

const getMonthName = (numericMonth: number) => {
  if (numericMonth >= 1 && numericMonth <= 12) {
    const date = new Date(2000, numericMonth - 1, 1) // Use any year (e.g., 2000)
    return date.toLocaleDateString(undefined, { month: 'long' })
  } else {
    return 'Invalid month'
  }
}

const calculateLabelIdx = (idx: number) => (idx === 10 ? 11 : idx === 11 ? 22 : idx)

const PlannerCalendar = ({ name, birthday, consultingMonth, consultingYear, selectedColor }: PlannerCalendarProps) => {
  const plannerProfile = new PlannerProfile({
    day: birthday.getUTCDate(),
    month: birthday.getUTCMonth() + 1,
    year: birthday.getUTCFullYear(),
    consultingYear,
    consultingMonth: consultingMonth + 1,
  })

  return (
    <div>
      {/* Datos Perfil */}
      <div className="mb-3 grid grid-cols-3 font-display">
        <p className={`row-start-2 text-2xl font-semibold ${TEXT_COLORS[selectedColor][700]}`}>Planeador</p>
        <div className="row-span-3 mx-auto">
          <PlannerSymbol selectedColor={selectedColor} />
        </div>
        <p className={`col-start-3 row-start-2 text-2xl font-semibold ${TEXT_COLORS[selectedColor][700]}`}>
          Numerológico
        </p>
        <p
          className={`row-start-3 border-b-2 text-sm ${BORDER_COLORS[selectedColor][700]} ${TEXT_COLORS[selectedColor][400]}`}
        >
          {name}
        </p>
        <p
          className={`col-start-3 row-start-3 border-b-2 text-sm ${BORDER_COLORS[selectedColor][700]} ${TEXT_COLORS[selectedColor][400]}`}
        >{`${plannerProfile.day}/${plannerProfile.month}/${plannerProfile.year}`}</p>
      </div>
      {/* Fechas */}
      <div className="mb-4 grid grid-cols-6 gap-x-2 font-display">
        <div className={`flex items-center px-2 text-lg capitalize ${BACKGROUND_COLORS[selectedColor][300]}`}>
          <span className={`font-bold ${TEXT_COLORS[selectedColor][700]}`}>{plannerProfile.consultingYear}</span>
        </div>
        <div></div>
        <div className="col-span-2 flex justify-between">
          <span className={`text-xl ${TEXT_COLORS[selectedColor][700]}`}>Año Personal</span>
          <p
            className={`pr-6 pl-2 font-bold ${BACKGROUND_COLORS[selectedColor][300]} ${TEXT_COLORS[selectedColor][700]}`}
          >
            {plannerProfile.annualVibration}
          </p>
        </div>
        <div className="col-span-2 flex items-end justify-end">
          <span className={`border-b ${BORDER_COLORS[selectedColor][700]}`}>
            {' '}
            <span className={`mr-2 text-xl ${TEXT_COLORS[selectedColor][700]}`}>mes</span>
            <span className={`${TEXT_COLORS[selectedColor][700]}`}>{getMonthName(plannerProfile.consultingMonth)}</span>
          </span>
        </div>
      </div>
      {/* Vibraciones */}
      <div className={`mb-4 grid grid-cols-3 gap-x-2 font-display ${TEXT_COLORS[selectedColor][700]}`}>
        <p className="text-xs">Vibración Universal</p>
        <p className="text-xs">Vibración Personal</p>
        <p className="text-xs">Precaución</p>
        <div className={`flex items-center py-4 px-2 text-lg capitalize ${BACKGROUND_COLORS[selectedColor][300]}`}>
          {getMonthName(plannerProfile.consultingMonth)}{' '}
          <span className="ml-2 font-bold">{plannerProfile.universalVibration}</span>
        </div>
        <div
          className={`bg-white-200 flex items-center border-2 py-4 px-2 text-lg capitalize ${BORDER_COLORS[selectedColor][300]}`}
        >
          {getMonthName(plannerProfile.consultingMonth)}{' '}
          <span className="ml-2 font-bold">{plannerProfile.personalVibration}</span>
        </div>
        <div className={`py-4 px-2 text-sm ${BACKGROUND_COLORS[selectedColor][300]}`}>
          {getWarningLabel(plannerProfile.personalVibration)}
        </div>
      </div>
      {/* Calendario */}
      <div className="mb-3 grid grid-cols-7">
        {DAYS_OF_WEEK.map((day, idx) => (
          <p
            key={idx}
            className={`text-center font-display text-xs font-bold uppercase ${TEXT_COLORS[selectedColor][700]}`}
          >
            {day}
          </p>
        ))}
        {plannerProfile.plannerDays.map((day, idx) => (
          <PlannerCalendarDay
            key={idx}
            selectedColor={selectedColor}
            universalDay={day?.universalDay}
            personalDay={day?.personalDay}
            calendarDay={day?.calendarDay}
          />
        ))}
      </div>
      {/* Footer / Instrucciones */}
      <div
        className={`flex justify-between border p-2 font-display ${BORDER_COLORS[selectedColor][300]} ${TEXT_COLORS[selectedColor][700]}`}
      >
        <div>
          <p className={`mb-2 flex-1 p-1 text-sm ${BACKGROUND_COLORS[selectedColor][300]}`}>
            Crea tu día de acuerdo a tu energía personal diaria.
          </p>
          <div className="flex">
            <div className="flex flex-1 flex-col">
              {MESSAGES.slice(0, 6).map((msg, idx) => (
                <p key={idx} className="text-sm">
                  {idx + 1}. {msg}
                </p>
              ))}
            </div>
            <div className="flex flex-1 flex-col">
              {MESSAGES.slice(6, MESSAGES.length).map((msg, idx) => (
                <p key={idx} className="text-sm">
                  {calculateLabelIdx(idx + 7)}. {msg}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="ml-1 flex min-w-fit flex-col">
          <div className="flex max-h-14 w-full justify-end">
            <AngelIcon selectedColor={selectedColor} />
          </div>
          <div className="flex flex-1 items-center text-sm">
            <div
              className={`flex aspect-square items-center justify-center border-b-2 border-l-2 p-2 ${BORDER_COLORS[selectedColor][300]}`}
            >
              08
            </div>{' '}
            Calendario Gregoriano
          </div>
          <div className="flex flex-1 items-center text-sm">
            <div
              className={`mr-2 flex aspect-square items-center justify-center rounded-full ${BACKGROUND_COLORS[selectedColor][200]}`}
            >
              08
            </div>{' '}
            Vibración Universal
          </div>
          <div className="flex flex-1 items-center text-sm">
            <p className="p-2">08</p> Vibración Personal
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlannerCalendar
