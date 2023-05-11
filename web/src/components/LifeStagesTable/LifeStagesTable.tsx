import { PythagoreanPinnacle as PythagoreanNumPinnacle } from '@todo-esta-bien/numerodon'
import DashboardCard from 'src/components/DashboardCard'

interface ILifeStagesTable {
  birthday: Date
}

const LifeStagesTable = ({ birthday }: ILifeStagesTable) => {
  const pythagoreanPinnacle: PythagoreanNumPinnacle = new PythagoreanNumPinnacle({
    day: birthday.getUTCDate(),
    month: birthday.getUTCMonth() + 1,
    year: birthday.getUTCFullYear(),
  })

  return (
    <DashboardCard>
      <div className="prose">
        <h2>Tabla Etapas de Vida y Realización</h2>
        <table className="table-zebra table-compact table table-auto">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1era Etapa de Vida de</td>
              <td>0</td>
              <td>a los</td>
              <td>{pythagoreanPinnacle.firstLifeStage} años</td>
            </tr>
            <tr>
              <td>1era Realización (E)</td>
              <td>{pythagoreanPinnacle.firstRealization}</td>
              <td>1era Meta (K):</td>
              <td>{pythagoreanPinnacle.firstGoal}</td>
            </tr>
            <tr>
              <td>2da Etapa de Vida de</td>
              <td>{pythagoreanPinnacle.firstLifeStage}</td>
              <td>a los</td>
              <td>{pythagoreanPinnacle.secondLifeStage} años</td>
            </tr>
            <tr>
              <td>2da Realización (F)</td>
              <td>{pythagoreanPinnacle.secondRealization}</td>
              <td>2da Meta (L):</td>
              <td>{pythagoreanPinnacle.secondGoal}</td>
            </tr>
            <tr>
              <td>3er Etapa de Vida de</td>
              <td>{pythagoreanPinnacle.secondLifeStage}</td>
              <td>a los</td>
              <td>{pythagoreanPinnacle.thirdLifeStage} años</td>
            </tr>
            <tr>
              <td>3era Realización (G)</td>
              <td>{pythagoreanPinnacle.thirdRealization}</td>
              <td>3era Meta (M):</td>
              <td>{pythagoreanPinnacle.thirdGoal}</td>
            </tr>
            <tr>
              <td>4ta Etapa de Vida de</td>
              <td>{pythagoreanPinnacle.thirdLifeStage}</td>
              <td>a los</td>
              <td>Inf</td>
            </tr>
            <tr>
              <td>4ta Realización (H)</td>
              <td>{pythagoreanPinnacle.fourthRealization}</td>
              <td>4ta Meta (N):</td>
              <td>{pythagoreanPinnacle.fourthGoal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardCard>
  )
}

export default LifeStagesTable
