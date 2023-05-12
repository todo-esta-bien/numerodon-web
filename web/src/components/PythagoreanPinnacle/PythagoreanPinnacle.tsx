import { PythagoreanPinnacle as PythagoreanNumPinnacle } from '@todo-esta-bien/numerodon'
import DashboardCard from 'src/components/DashboardCard'

interface IPythagoreanPinnacle {
  birthday: Date
}

interface IPinnacleAttribute {
  key: keyof PythagoreanNumPinnacle
  alias: string
}

const pinnacleAttributes: IPinnacleAttribute[] = [
  {
    key: 'karma',
    alias: 'Karma',
  },
  {
    key: 'personal',
    alias: 'Personal',
  },
  {
    key: 'pastLife',
    alias: 'Vida Pasada',
  },
  {
    key: 'personality',
    alias: 'Personalidad',
  },
  {
    key: 'firstRealization',
    alias: '1er Realización',
  },
  {
    key: 'secondRealization',
    alias: '2da Realización',
  },
  {
    key: 'thirdRealization',
    alias: '3era Realización',
  },
  {
    key: 'fourthRealization',
    alias: '4ta Realización',
  },
  {
    key: 'destiny',
    alias: 'Destino',
  },
  {
    key: 'subconscious',
    alias: 'Subconsciente',
  },
  {
    key: 'unconscious',
    alias: 'Incosciente',
  },
  {
    key: 'firstGoal',
    alias: '1er Meta',
  },
  {
    key: 'secondGoal',
    alias: '2da Meta',
  },
  {
    key: 'thirdGoal',
    alias: '3er Meta',
  },
  {
    key: 'fourthGoal',
    alias: '4ta Meta',
  },
  {
    key: 'negativeUnconscious',
    alias: 'Insconsciente Negativo',
  },
  {
    key: 'shadow',
    alias: 'Sombra',
  },
  {
    key: 'familyInferiorBeing',
    alias: 'Ser Inferior Familiar',
  },

  {
    key: 'consciousInferiorBeing',
    alias: 'Ser Inferior Consciente',
  },
  {
    key: 'latentInferiorBeing',
    alias: 'Ser Inferior Latente',
  },
  ,
  {
    key: 'absences',
    alias: 'Ausencias',
  },
  ,
  {
    key: 'triplicities',
    alias: 'Triplicidades',
  },
]

const getFormattedAttribute = (pinnacleValue: number | number[]): string =>
  typeof pinnacleValue === 'number'
    ? `${pinnacleValue}`
    : pinnacleValue.join(', ')

const PythagoreanPinnacle = ({ birthday }: IPythagoreanPinnacle) => {
  const pythagoreanPinnacle: PythagoreanNumPinnacle =
    new PythagoreanNumPinnacle({
      day: birthday.getUTCDate(),
      month: birthday.getUTCMonth() + 1,
      year: birthday.getUTCFullYear(),
    })

  return (
  <DashboardCard>
    <div className="prose">
      <h2>Tabla Pináculo Pitagórico</h2>
      <div className='overflow-x-auto'>
      <table className="table-zebra table-compact table table-auto">
        <thead>
          <tr>
            <th>Tipo de Número</th>
            <th>Vibración</th>
          </tr>
        </thead>
        <tbody>
          {pinnacleAttributes.map(({ key, alias }) => (
            <tr key={key}>
              <td>{alias}</td>
              <td>{getFormattedAttribute(pythagoreanPinnacle[key])}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
    </div>
  </DashboardCard>
  )
}

export default PythagoreanPinnacle
