import DashboardCard from 'src/components/DashboardCard'
import { DiamondProfile, reduceNumberDigits } from '@todo-esta-bien/numerodon'
import './DiamondDiagram.css'

interface IDiamondDiagram {
  birthday: Date
}

const DiamondDiagram = ({ birthday }: IDiamondDiagram) => {
  const diamondProfile = new DiamondProfile({
    day: birthday.getUTCDate(),
    month: birthday.getUTCMonth() + 1,
    year: birthday.getUTCFullYear(),
  })

  const numberReducer = (num: number): number => {
    const result = reduceNumberDigits({
      sumRecursively: true,
      stopNumbers: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    })(num)
    return result === 0 ? 22 : result
  }

  const displayReducedNumber = (reducedNumber: number): string => {
    return reducedNumber === 0
      ? '22'
      : reducedNumber > 22
      ? `${reducedNumber}/${numberReducer(reducedNumber)}`
      : `${reducedNumber}`
  }

  return (
    <DashboardCard>
      <span className="prose">
        <h2>Diagrama Diamante</h2>
      </span>
      <div>
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 500 612">
          <g>
            <path
              className="st0"
              d="M486.19,367.34H174.85L330.52,124.5L486.19,367.34z M180.33,364.34H480.7L330.52,130.06L180.33,364.34z"
            />
          </g>
          <path
            className="st1"
            d="M428.89,221.01l-32.98-25.15c-0.1-0.39-0.36-0.73-0.73-0.92l-32.4-16.83c-0.21-0.11-0.44-0.16-0.67-0.16h-64.8
	c-0.23,0-0.46,0.06-0.67,0.16l-32.4,16.83c-0.19,0.1-0.35,0.24-0.48,0.41c-0.09,0.05-0.17,0.1-0.25,0.17l-31.01,25.53
	c-0.27,0.23-0.45,0.54-0.51,0.89c-0.47,0.48-0.56,1.25-0.17,1.83l97.02,144.45c0.27,0.4,0.72,0.64,1.2,0.64s0.94-0.24,1.2-0.64
	l97.02-144.45c0.03-0.04,0.05-0.09,0.07-0.13l0.33-0.17c0.44-0.23,0.73-0.67,0.78-1.16C429.5,221.79,429.28,221.31,428.89,221.01z"
          />
          <path
            d="M428.89,221.01l-32.98-25.15c-0.1-0.39-0.36-0.73-0.73-0.92l-32.4-16.83c-0.21-0.11-0.44-0.16-0.67-0.16h-64.8
	c-0.23,0-0.46,0.06-0.67,0.16l-32.4,16.83c-0.19,0.1-0.35,0.24-0.48,0.41c-0.09,0.05-0.17,0.1-0.25,0.17l-31.01,25.53
	c-0.27,0.23-0.45,0.54-0.51,0.89c-0.47,0.48-0.56,1.25-0.17,1.83l97.02,144.45c0.27,0.4,0.72,0.64,1.2,0.64s0.94-0.24,1.2-0.64
	l97.02-144.45c0.03-0.04,0.05-0.09,0.07-0.13l0.33-0.17c0.44-0.23,0.73-0.67,0.78-1.16C429.5,221.79,429.28,221.31,428.89,221.01z
	 M296.89,214.44c0.14,0.04,0.28,0.06,0.42,0.06h63.89l15.35,31.73H282.8L296.89,214.44z M279.42,248.72l44.38,106.76l-87.34-130.02
	L279.42,248.72z M282.74,249.14h93.96l-46.64,113.82L282.74,249.14z M379.52,245.71l-15.49-32.02l30.03-15.6l31.25,23.83
	L379.52,245.71z M297.67,180.85h64.09l29.6,15.38l-29.6,15.38h-64.09l-29.6-15.38L297.67,180.85z M265.1,197.96l29.2,15.16
	l-14.43,32.54l-43.86-23.75L265.1,197.96z M336.19,355.64L380,248.73l43-22.33L336.19,355.64z"
          />
          <text transform="matrix(1 0 0 1 298.3 240.3379)" className="st2 st3">
            FE
          </text>
          <g>
            <text transform="matrix(1 0 0 1 298.3002 202.3315)" className="st2 st3">
              FR
            </text>
          </g>
          <text transform="matrix(1 0 0 1 324.8513 276.8158)" className="st2 st3">
            R
          </text>
          <text transform="matrix(1 0 0 1 366.8328 355.3526)" className="st2 st3">
            RC
          </text>
          <path className="st4" d="M301.79,328.18" />
          <text transform="matrix(1 0 0 1 218.768 355.3527)" className="st2 st3">
            P
          </text>
          <text transform="matrix(1 0 0 1 326.3454 202.1113)" className="st2 st5">
            {displayReducedNumber(diamondProfile.radiationSource)}
          </text>
          <text transform="matrix(1 0 0 1 325.4462 239.8129)" className="st2 st5">
            {displayReducedNumber(diamondProfile.starFacet)}
          </text>
          <text transform="matrix(1 0 0 1 311.7498 297.8519)" className="st2 st5">
            {displayReducedNumber(diamondProfile.reflect)}
          </text>
          <text transform="matrix(1 0 0 1 406.8838 355.7993)" className="st2 st5">
            {displayReducedNumber(diamondProfile.keyResource)}
          </text>
          <text transform="matrix(1 0 0 1 241.6145 355.7993)" className="st2 st5">
            {displayReducedNumber(diamondProfile.deepPersonality)}
          </text>
        </svg>
      </div>
    </DashboardCard>
  )
}

export default DiamondDiagram
