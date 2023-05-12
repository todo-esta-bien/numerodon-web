import { ReactNode } from 'react'

interface IDateModalProps {
  children: ReactNode
}

const DateModal = ({ children }: IDateModalProps) => {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="date-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Ingresa tu Fecha de Nacimiento</h3>
          <p className="py-4">Debe ser la fecha de nacimiento que esté en tu acta porque es la que te representa</p>
          {children}
          <div className="modal-action">
            <label htmlFor="date-modal" className="btn">Ok</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default DateModal
