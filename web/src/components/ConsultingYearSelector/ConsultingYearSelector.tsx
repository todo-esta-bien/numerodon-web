interface IConsultingYearSelector {
  consultingYear: number
  setConsultingYear: (consultingYear: number) => void
}

const ConsultingYearSelector = ({ consultingYear, setConsultingYear }: IConsultingYearSelector) => {
  return (
    <div className="navbar flex-wrap justify-center rounded-2xl bg-base-100 shadow-lg">
      <h2 className="text-xl">
        Selecciona el año de consulta:
        <span className="px-2">
          <input
            className="rounder-md px-2"
            type="number"
            value={consultingYear}
            onChange={(e) => setConsultingYear(+e.target.value)}
          />
        </span>
      </h2>
    </div>
  )
}

export default ConsultingYearSelector
