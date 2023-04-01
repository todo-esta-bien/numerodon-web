import { useState } from 'react'
import {
  EvolutiveProfile as EvolutiveNumProfile,
  EvolutiveNumbers,
  reduceNumberDigits,
  repeatArrayElements,
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

  const [columnsAmount, setColumnsAmount] = useState<number>(9)

  const colorsArray = [
    '#C7F5AB',
    '#A4ECF4',
    '#AA9CD6',
    '#EBAFAE',
    '#B1D496',
    '#B0F3F5',
    '#BDB0F7',
    '#D6A1A3',
    '#EAD7B1',
  ]

  const repeatedColors = repeatArrayElements(colorsArray, columnsAmount)
  const repeatedResidents = repeatArrayElements(evolutiveProfile.residents, columnsAmount)
  const repeatedCycles = repeatArrayElements(
    Array.from({ length: 9 }, (_, idx) => idx + 1),
    columnsAmount
  )

  return (
    <section className="prose">
      <h2>Ciclos de Vida - Tabla Evolutiva</h2>
      <div className="flex justify-end">
        <button
          className="btn-xs btn-circle btn mr-1"
          onClick={() => setColumnsAmount((prevAmount) => prevAmount - (prevAmount > 1 ? 1 : 0))}
        >
          -
        </button>
        <button className="btn-xs btn-circle btn" onClick={() => setColumnsAmount((prevAmount) => prevAmount + 1)}>
          +
        </button>
      </div>
      <table className="table-zebra table-compact m-0 table table-auto border-collapse">
        <thead>
          <tr>
            <th>Habitantes</th>
            <th></th>
            <th></th>
            {repeatedResidents.map((resident, idx) => (
              <th key={idx}>{resident}</th>
            ))}
          </tr>
          <tr>
            <th>Ciclos</th>
            <th></th>
            <th></th>
            {repeatedCycles.map((cycle, idx) => (
              <th
                key={idx}
                className="font-normal"
                style={{
                  backgroundColor: repeatedColors[idx],
                }}
              >
                {cycle}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {evolutiveProfile.personalYears.map((personalYear, rowIdx) => {
            const colValues: EvolutiveNumbers = Array.from(
              { length: columnsAmount },
              (_, idx) => rowIdx + 9 * idx
            ) as EvolutiveNumbers
            const residentIdx: number = reduceNumberDigits({ sumRecursively: true })(personalYear) - 1
            return (
              <tr key={rowIdx}>
                <td></td>
                <td className="font-bold">{evolutiveProfile.residents[residentIdx]}</td>
                <td
                  style={{
                    backgroundColor: colorsArray[residentIdx],
                  }}
                >
                  {personalYear}
                </td>
                {colValues.map((colValue, idx) => (
                  <td key={idx} className="border border-slate-700">
                    <div className="flex flex-col">
                      <span className="font-light">{colValue}</span>
                      <span>{evolutiveProfile.year + colValue}</span>
                    </div>
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default EvolutiveProfile
