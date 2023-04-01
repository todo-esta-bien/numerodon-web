import {
  EvolutiveProfile as EvolutiveNumProfile,
  EvolutiveNumbers,
  reduceNumberDigits,
} from '@todo-esta-bien/numerodon'

interface IEvolutiveProfile {
  birthday: Date
  firstNames: string
  fatherLastNames: string
  motherLastNames: string
}

const EvolutiveProfile = ({ birthday, firstNames, fatherLastNames, motherLastNames }: IEvolutiveProfile) => {
  const evolutiveProfile = new EvolutiveNumProfile({
    day: birthday.getUTCDate(),
    month: birthday.getUTCMonth() + 1,
    year: birthday.getUTCFullYear(),
    names: firstNames,
    fatherLastNames: fatherLastNames,
    motherLastNames: motherLastNames,
  })

  return (
    <div className="prose">
      <h2>Ciclos de Vida - Tabla Evolutiva</h2>
      <table className="table-zebra table-compact table table-auto">
        <thead>
          <tr>
            <th>Habitantes</th>
            <th></th>
            {evolutiveProfile.residents.map((resident, idx) => (
              <th key={idx}>{resident}</th>
            ))}
          </tr>
          <tr>
            <th>Ciclos</th>
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
          </tr>
        </thead>
        <tbody>
          {evolutiveProfile.personalYears.map((personalYear, rowIdx) => {
            const colValues: EvolutiveNumbers = new Array(9)
              .fill(0)
              .map((_, colIdx) => rowIdx + 9 * colIdx) as EvolutiveNumbers
            const residentIdx: number = reduceNumberDigits({ sumRecursively: true })(personalYear) - 1
            return (
              <tr key={rowIdx}>
                <td>{evolutiveProfile.residents[residentIdx]}</td>
                <td>{personalYear}</td>
                {colValues.map((colValue, innerIdx) => (
                  <td key={innerIdx}>
                    <div className="flex flex-col">
                      <span>{colValue}</span>
                      <span>{evolutiveProfile.year + colValue}</span>
                    </div>
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default EvolutiveProfile
