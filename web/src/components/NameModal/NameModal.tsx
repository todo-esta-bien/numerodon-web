import { ReactNode } from 'react'
import { useState } from 'react'

interface INameModalProps {
  children: ReactNode
  firstNames: string
  fatherLastNames: string
  motherLastNames: string
}

const NameModal = ({ children, firstNames, fatherLastNames, motherLastNames }: INameModalProps) => {
  const isAnyNameEmpty: boolean =
    firstNames === '' ||
    firstNames === null ||
    fatherLastNames === '' ||
    fatherLastNames === null ||
    motherLastNames === '' ||
    motherLastNames === null

  const [isShown, setIsShown] = useState<boolean>(isAnyNameEmpty)

  return (
    <>
      {/* Put this part before </body> tag */}
      <input
        checked={isShown}
        onChange={(e) => setIsShown(e.target.checked)}
        type="checkbox"
        id="name-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Ingresa tu Nombre Completo</h3>
          <p className="py-4">Debe ser el nombre que viene en tu acta</p>
          {children}
          {!isAnyNameEmpty && (
            <div className="modal-action">
              <label htmlFor="name-modal" className="btn">
                Ok
              </label>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default NameModal
