import PlannerCalendarDay from 'src/components/PlannerCalendarDay'
import { PlannerProfile } from '@todo-esta-bien/numerodon'
import PlannerSymbol from 'src/components/PlannerCalendar/PlannerSymbol'
import AngelIcon from 'src/components/PlannerCalendar/AngelIcon'

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

const backgroundColors300 = {
  slate: 'bg-slate-300',
  gray: 'bg-gray-300',
  zinc: 'bg-zinc-300',
  neutral: 'bg-neutral-300',
  stone: 'bg-stone-300',
  red: 'bg-red-300',
  orange: 'bg-orange-300',
  amber: 'bg-amber-300',
  yellow: 'bg-yellow-300',
  lime: 'bg-lime-300',
  green: 'bg-green-300',
  emerald: 'bg-emerald-300',
  teal: 'bg-teal-300',
  cyan: 'bg-cyan-300',
  sky: 'bg-sky-300',
  blue: 'bg-blue-300',
  indigo: 'bg-indigo-300',
  violet: 'bg-violet-300',
  purple: 'bg-purple-300',
  fuchsia: 'bg-fuchsia-300',
  pink: 'bg-pink-300',
  rose: 'bg-rose-300',
}

const textColors300 = {
  slate: 'text-slate-300',
  gray: 'text-gray-300',
  zinc: 'text-zinc-300',
  neutral: 'text-neutral-300',
  stone: 'text-stone-300',
  red: 'text-red-300',
  orange: 'text-orange-300',
  amber: 'text-amber-300',
  yellow: 'text-yellow-300',
  lime: 'text-lime-300',
  green: 'text-green-300',
  emerald: 'text-emerald-300',
  teal: 'text-teal-300',
  cyan: 'text-cyan-300',
  sky: 'text-sky-300',
  blue: 'text-blue-300',
  indigo: 'text-indigo-300',
  violet: 'text-violet-300',
  purple: 'text-purple-300',
  fuchsia: 'text-fuchsia-300',
  pink: 'text-pink-300',
  rose: 'text-rose-300',
}

const textColors400 = {
  slate: 'text-slate-400',
  gray: 'text-gray-400',
  zinc: 'text-zinc-400',
  neutral: 'text-neutral-400',
  stone: 'text-stone-400',
  red: 'text-red-400',
  orange: 'text-orange-400',
  amber: 'text-amber-400',
  yellow: 'text-yellow-400',
  lime: 'text-lime-400',
  green: 'text-green-400',
  emerald: 'text-emerald-400',
  teal: 'text-teal-400',
  cyan: 'text-cyan-400',
  sky: 'text-sky-400',
  blue: 'text-blue-400',
  indigo: 'text-indigo-400',
  violet: 'text-violet-400',
  purple: 'text-purple-400',
  fuchsia: 'text-fuchsia-400',
  pink: 'text-pink-400',
  rose: 'text-rose-400',
}

const textColors700 = {
  slate: 'text-slate-700',
  gray: 'text-gray-700',
  zinc: 'text-zinc-700',
  neutral: 'text-neutral-700',
  stone: 'text-stone-700',
  red: 'text-red-700',
  orange: 'text-orange-700',
  amber: 'text-amber-700',
  yellow: 'text-yellow-700',
  lime: 'text-lime-700',
  green: 'text-green-700',
  emerald: 'text-emerald-700',
  teal: 'text-teal-700',
  cyan: 'text-cyan-700',
  sky: 'text-sky-700',
  blue: 'text-blue-700',
  indigo: 'text-indigo-700',
  violet: 'text-violet-700',
  purple: 'text-purple-700',
  fuchsia: 'text-fuchsia-700',
  pink: 'text-pink-700',
  rose: 'text-rose-700',
}

const borderColors700 = {
  slate: 'border-slate-700',
  gray: 'border-gray-700',
  zinc: 'border-zinc-700',
  neutral: 'border-neutral-700',
  stone: 'border-stone-700',
  red: 'border-red-700',
  orange: 'border-orange-700',
  amber: 'border-amber-700',
  yellow: 'border-yellow-700',
  lime: 'border-lime-700',
  green: 'border-green-700',
  emerald: 'border-emerald-700',
  teal: 'border-teal-700',
  cyan: 'border-cyan-700',
  sky: 'border-sky-700',
  blue: 'border-blue-700',
  indigo: 'border-indigo-700',
  violet: 'border-violet-700',
  purple: 'border-purple-700',
  fuchsia: 'border-fuchsia-700',
  pink: 'border-pink-700',
  rose: 'border-rose-700',
}

const borderColors300 = {
  slate: 'border-slate-300',
  gray: 'border-gray-300',
  zinc: 'border-zinc-300',
  neutral: 'border-neutral-300',
  stone: 'border-stone-300',
  red: 'border-red-300',
  orange: 'border-orange-300',
  amber: 'border-amber-300',
  yellow: 'border-yellow-300',
  lime: 'border-lime-300',
  green: 'border-green-300',
  emerald: 'border-emerald-300',
  teal: 'border-teal-300',
  cyan: 'border-cyan-300',
  sky: 'border-sky-300',
  blue: 'border-blue-300',
  indigo: 'border-indigo-300',
  violet: 'border-violet-300',
  purple: 'border-purple-300',
  fuchsia: 'border-fuchsia-300',
  pink: 'border-pink-300',
  rose: 'border-rose-300',
}

const calculateLabelIdx = (idx: number) => (idx === 10 ? 11 : idx === 11 ? 22 : idx)

const PlannerCalendarV2 = ({
  name,
  birthday,
  consultingMonth,
  consultingYear,
  selectedColor,
}: PlannerCalendarProps) => {
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
        <p className={`row-start-2 text-2xl font-semibold ${textColors700[selectedColor]}`}>Planeador</p>
        <div className="row-span-3 mx-auto">
          <PlannerSymbol />
        </div>
        <p className={`col-start-3 row-start-2 text-2xl font-semibold ${textColors700[selectedColor]}`}>Numerológico</p>
        <p
          className={`row-start-3 border-b-2 text-sm ${borderColors700[selectedColor]} ${textColors400[selectedColor]}`}
        >
          {name}
        </p>
        <p
          className={`col-start-3 row-start-3 border-b-2 text-sm ${borderColors700[selectedColor]} ${textColors400[selectedColor]}`}
        >{`${plannerProfile.day}/${plannerProfile.month}/${plannerProfile.year}`}</p>
      </div>
      {/* Fechas */}
      <div className="mb-4 grid grid-cols-6 gap-x-2 font-display">
        <div className={`flex items-center px-2 text-lg capitalize ${backgroundColors300[selectedColor]}`}>
          <span className={`font-bold ${textColors700[selectedColor]}`}>{plannerProfile.consultingYear}</span>
        </div>
        <div></div>
        <div className="col-span-2 flex justify-between">
          <span className={`text-xl ${textColors700[selectedColor]}`}>Año Personal</span>
          <p className={`pr-6 pl-2 font-bold ${backgroundColors300[selectedColor]} ${textColors700[selectedColor]}`}>
            {plannerProfile.annualVibration}
          </p>
        </div>
        <div className="col-span-2 flex items-end justify-end">
          <span className={`border-b ${borderColors700[selectedColor]}`}>
            {' '}
            <span className={`mr-2 text-xl ${textColors700[selectedColor]}`}>mes</span>
            <span className={`${textColors700[selectedColor]}`}>{getMonthName(plannerProfile.consultingMonth)}</span>
          </span>
        </div>
      </div>
      {/* Vibraciones */}
      <div className={`mb-4 grid grid-cols-3 gap-x-2 font-display ${textColors700[selectedColor]}`}>
        <p className="text-xs">Vibración Universal</p>
        <p className="text-xs">Vibración Personal</p>
        <p className="text-xs">Precaución</p>
        <div className={`flex items-center py-4 px-2 text-lg capitalize ${backgroundColors300[selectedColor]}`}>
          {getMonthName(plannerProfile.consultingMonth)}{' '}
          <span className="ml-2 font-bold">{plannerProfile.universalVibration}</span>
        </div>
        <div
          className={`bg-white-200 flex items-center border-2 py-4 px-2 text-lg capitalize ${borderColors300[selectedColor]}`}
        >
          {getMonthName(plannerProfile.consultingMonth)}{' '}
          <span className="ml-2 font-bold">{plannerProfile.personalVibration}</span>
        </div>
        <div className={`py-4 px-2 text-sm ${backgroundColors300[selectedColor]}`}>
          {getWarningLabel(plannerProfile.personalVibration)}
        </div>
      </div>
      {/* Calendario */}
      <div className="mb-3 grid grid-cols-7">
        {DAYS_OF_WEEK.map((day, idx) => (
          <p key={idx} className="text-center font-display text-xs font-bold uppercase text-zinc-600">
            {day}
          </p>
        ))}
        {plannerProfile.plannerDays.map((day, idx) => (
          <PlannerCalendarDay
            key={idx}
            universalDay={day?.universalDay}
            personalDay={day?.personalDay}
            calendarDay={day?.calendarDay}
          />
        ))}
      </div>
      {/* Footer / Instrucciones */}
      <div className="flex justify-between border border-zinc-300 p-2 font-display">
        <div>
          <p className="mb-2 flex-1 bg-red-300 p-1 text-sm">Crea tu día de acuerdo a tu energía personal diaria.</p>
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
            <AngelIcon />
          </div>
          <div className="flex flex-1 items-center text-sm">
            <div className="flex aspect-square items-center justify-center border-b-2 border-l-2 border-l-gray-500 border-b-gray-500 p-2">
              08
            </div>{' '}
            Calendario Gregoriano
          </div>
          <div className="flex flex-1 items-center text-sm">
            <div className="mr-2 flex aspect-square items-center justify-center rounded-full bg-red-200">08</div>{' '}
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

export default PlannerCalendarV2
