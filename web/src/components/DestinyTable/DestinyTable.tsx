import DashboardCard from 'src/components/DashboardCard'
import { DestinyTable as DestinyTableProfile } from '@todo-esta-bien/numerodon'

interface IDestinyTable {
  birthday: Date
  firstNames: string
  fatherLastNames: string
  motherLastNames: string
}

const DestinyTable = ({ birthday, firstNames, fatherLastNames, motherLastNames }: IDestinyTable) => {
  const TABLE_WIDTH = 23
  const SECTION_NUMBER = 5

  if (firstNames === '' || fatherLastNames === '' || motherLastNames === '') return null

  const destinyTable = new DestinyTableProfile({
    day: birthday.getUTCDate(),
    month: birthday.getUTCMonth() + 1,
    year: birthday.getUTCFullYear(),
    names: firstNames,
    fatherLastNames: fatherLastNames,
    motherLastNames: motherLastNames,
    yearExpansionLimit: TABLE_WIDTH * SECTION_NUMBER,
  })

  const rows = [
    {
      extraClasses: 'text-xs font-light',
      rowName: 'Año',
      destinyTableKey: 'expandedYears',
    },
    {
      extraClasses: 'text-xs font-light',
      rowName: 'Edad',
      destinyTableKey: 'expandedAge',
    },
    {
      extraClasses: 'font-semibold bg-stone-200',
      rowName: 'PM',
      destinyTableKey: 'expandedMentalPlane',
    },
    {
      extraClasses: 'text-xs font-light italic',
      rowName: 'Valor Letra',
      destinyTableKey: 'expandedMentalPlaneLetterValues',
    },
    {
      extraClasses: 'text-xs font-medium',
      rowName: 'Periodicidad',
      destinyTableKey: 'expandedMentalPlaneLetterCount',
    },
    {
      extraClasses: 'font-semibold text-cyan-700 bg-stone-200',
      rowName: 'PF',
      destinyTableKey: 'expandedPhysicalPlane',
    },
    {
      extraClasses: 'text-xs font-light italic',
      rowName: 'Valor Letra',
      destinyTableKey: 'expandedPhysicalPlaneLetterValues',
    },
    {
      extraClasses: 'text-xs font-medium',
      rowName: 'Periodicidad',
      destinyTableKey: 'expandedPhysicalPlaneLetterCount',
    },
    {
      extraClasses: 'font-semibold text-red-600 bg-stone-200',
      rowName: 'PEm',
      destinyTableKey: 'expandedEmotionalPlane',
    },
    {
      extraClasses: 'text-xs font-light italic',
      rowName: 'Valor Letra',
      destinyTableKey: 'expandedEmotionalPlaneLetterValues',
    },
    {
      extraClasses: 'text-xs font-medium',
      rowName: 'Periodicidad',
      destinyTableKey: 'expandedEmotionalPlaneLetterCount',
    },
    {
      extraClasses: 'font-semibold text-purple-600 bg-stone-200',
      rowName: 'PE = Tránsito',
      destinyTableKey: 'expandedSpiritualPlane',
    },
    {
      extraClasses: 'text-xs font-light',
      rowName: 'Año Personal',
      destinyTableKey: 'expandedPersonalYears',
    },
    {
      extraClasses: 'text-xs font-light text-blue-600 bg-stone-200',
      rowName: 'Número Destino',
      destinyTableKey: 'expandedDestinyNumber',
    },
    {
      extraClasses: 'text-xs font-light',
      rowName: 'Realización',
      destinyTableKey: 'expandedRealizationNumbers',
    },
  ]

  return (
    <DashboardCard>
      <span className="prose">
        <h2>Tabla del Destino</h2>
      </span>
      <div className="overflow-x-auto">
        <table className="table-compact mb-6 table">
          <thead>
            <tr>
              <td>Num Letras</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>{firstNames}</td>
              <td>{fatherLastNames}</td>
              <td>{motherLastNames}</td>
              <td>Total:</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{firstNames.replace(/\s/g, '').length}</td>
              <td>{motherLastNames.replace(/\s/g, '').length}</td>
              <td>{fatherLastNames.replace(/\s/g, '').length}</td>
              <td>
                {firstNames.replace(/\s/g, '').length +
                  motherLastNames.replace(/\s/g, '').length +
                  fatherLastNames.replace(/\s/g, '').length}
              </td>
            </tr>
          </tbody>
        </table>
        {Array.from({ length: SECTION_NUMBER }, (_, idx) => idx).map((sectionNumber) => (
          <table className="table-compact my-3 table shadow">
            <thead>
              <tr>
                <th>
                  De {sectionNumber * TABLE_WIDTH} a {sectionNumber * TABLE_WIDTH + TABLE_WIDTH - 1} años
                </th>
                {Array.from({ length: TABLE_WIDTH }, (_) => 0).map((_, index) => (
                  <th key={index}></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  <td className={`text-right ${row.extraClasses}`}>{row.rowName}</td>
                  {destinyTable[row.destinyTableKey]
                    .slice(sectionNumber * TABLE_WIDTH, sectionNumber * TABLE_WIDTH + TABLE_WIDTH)
                    .map((value, index) => (
                      <td className={`border border-slate-700 ${row.extraClasses}`} key={index}>
                        {value}
                      </td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </DashboardCard>
  )
}

export default DestinyTable
