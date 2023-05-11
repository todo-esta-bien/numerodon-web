import { PythagoreanProfile as PythagoreanNumProfile } from '@todo-esta-bien/numerodon'
import DashboardCard from 'src/components/DashboardCard'

interface IPythagoreanProfile {
  birthday: Date
  firstNames: string
  fatherLastNames: string
  motherLastNames: string
}

const PythagoreanProfile = ({
  birthday,
  firstNames,
  fatherLastNames,
  motherLastNames,
}: IPythagoreanProfile) => {
  const pythagoreanProfile = new PythagoreanNumProfile({
    day: birthday.getUTCDate(),
    month: birthday.getUTCMonth() + 1,
    year: birthday.getUTCFullYear(),
    names: firstNames,
    fatherLastNames: fatherLastNames,
    motherLastNames: motherLastNames,
  })

  const tableRows = [
    {
      name: 'Alma',
      value: pythagoreanProfile.soul,
    },
    {
      name: 'Personalidad',
      value: pythagoreanProfile.personality,
    },
    {
      name: 'Expresión',
      value: pythagoreanProfile.expression,
    },
    {
      name: 'Equilibrio',
      value: pythagoreanProfile.balance,
    },
    {
      name: 'Camino de Vida',
      value: pythagoreanProfile.lifePath,
    },
    {
      name: 'Fuerza',
      value: pythagoreanProfile.strength,
    },
    {
      name: 'Misión Cósmica',
      value: pythagoreanProfile.cosmicMission,
    },
    {
      name: 'Iniciación Espiritual',
      value: pythagoreanProfile.spiritualInitiation,
    },
  ]

  return (
  <DashboardCard>
    <div className="prose">
      <h2>Tabla Pitagórica</h2>
      <table className="table-zebra table-compact table table-auto">
        <thead>
          <tr>
            <th>Tipo de Número</th>
            <th>Vibración</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </DashboardCard>
  )
}

export default PythagoreanProfile
