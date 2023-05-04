import {Base22Profile} from '@todo-esta-bien/numerodon'
import './Base22Diagram.css'

interface IBase22Diagram {
  birthday: Date
}

const Base22Diagram = ({birthday}: IBase22Diagram) => {

  const base22Profile = new Base22Profile({
    day: birthday.getUTCDate(),
    month: birthday.getUTCMonth() + 1,
    year: birthday.getUTCFullYear(),
  })

  return (
    <div className="">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 428 628">
        <polyline points="186.8,405.1 393.2,366 341.4,405.7" className="st0" />
        <polyline points="201.2,337.1 377.7,316.6 337.2,411.9" className="st0" />
        <polyline points="96.2,297.6 185.6,225.6 263.6,296.7" className="st0" />
        <polyline points="98.8,536.5 188.2,608.5 266.2,537.4" className="st0" />
        <polyline points="94.7,398.6 96.2,297.6 186.8,412.8" className="st0" />
        <polyline points="97.3,425.2 98.8,526.2 189.5,411" className="st0" />
        <polyline points="265.3,398.6 263.7,304.4 173.1,411.9" className="st0" />
        <polyline points="266.2,425.3 264.8,519.5 182.4,412" className="st0" />
        <polyline points="100.3,408.3 186.4,332.5 264.7,407.7" className="st0" />
        <polyline points="102.1,412.3 188.2,488.1 266.5,412.9" className="st0" />
        <line x1="38" x2="187.1" y1="225.2" y2="161.2" className="st0" />
        <line x1="178.1" x2="327.1" y1="159.6" y2="223.6" className="st0" />
        <line x1="41.3" x2="190.4" y1="152.9" y2="88.9" className="st0" />
        <line x1="181.4" x2="330.4" y1="87.3" y2="151.3" className="st0" />
        <line x1="44.2" x2="193.2" y1="79.1" y2="15" className="st0" />
        <line x1="184.3" x2="333.3" y1="13.4" y2="77.4" className="st0" />
        <line x1="38.2" x2="174.5" y1="225.5" y2="226.6" className="st0" />
        <line x1="203.4" x2="339.7" y1="226.6" y2="227.7" className="st0" />
        <line x1="96" x2="337.2" y1="410.8" y2="411.9" className="st0" />
        <line x1="35.2" x2="338.4" y1="598.7" y2="599.7" className="st0" />
        <line x1="35" x2="338.2" y1="89.6" y2="90.7" className="st0" />
        <line x1="337.5" x2="337.8" y1="78" y2="606.2" className="st0" />
        <line x1="34" x2="34.3" y1="75.1" y2="603.3" className="st0" />
        <line x1="38" x2="187.1" y1="159.6" y2="223.6" className="st0" />
        <line x1="178.1" x2="327.1" y1="225.2" y2="161.2" className="st0" />
        <line x1="39.7" x2="188.8" y1="98.6" y2="162.7" className="st0" />
        <line x1="179.8" x2="328.8" y1="164.3" y2="100.2" className="st0" />
        <circle cx="33.9" cy="409.2" r="14.5" className="st2" />
        <circle cx="100.3" cy="409.2" r="14.5" className="st2" />
        <circle cx="186.6" cy="409.2" r="14.5" className="st2" />
        <circle cx="262.5" cy="409.2" r="14.5" className="st2" />
        <circle cx="16.1" cy="394.7" r="7.8" className="st2" />
        <circle cx="51.7" cy="394.7" r="7.8" className="st2" />
        <circle cx="82.5" cy="394.7" r="7.8" className="st2" />
        <circle cx="118.1" cy="394.7" r="7.8" className="st2" />
        <circle cx="168.9" cy="394.7" r="7.8" className="st2" />
        <circle cx="204.4" cy="394.7" r="7.8" className="st2" />
        <circle cx="244.4" cy="395.3" r="7.8" className="st2" />
        <circle cx="279.3" cy="394.7" r="7.8" className="st2" />
        <circle cx="186.6" cy="337.1" r="14.5" className="st1" />
        <circle cx="168.9" cy="322.6" r="7.8" className="st2" />
        <circle cx="204.4" cy="322.6" r="7.8" className="st2" />
        <circle cx="100.3" cy="297.6" r="14.5" className="st3" />
        <circle cx="82.5" cy="283" r="7.8" className="st2" />
        <circle cx="118.1" cy="283" r="7.8" className="st2" />
        <circle cx="260.6" cy="298.5" r="14.5" className="st4" />
        <circle cx="242.8" cy="283.9" r="7.8" className="st2" />
        <circle cx="278.4" cy="283.9" r="7.8" className="st2" />
        <circle cx="392.2" cy="367.1" r="14.5" className="st2" />
        <circle cx="374.5" cy="352.5" r="7.8" className="st2" />
        <circle cx="410" cy="352.5" r="7.8" className="st2" />
        <circle cx="167.1" cy="458" r="7.8" className="st2" />
        <circle cx="207.2" cy="458" r="7.8" className="st2" />
        <circle cx="105" cy="533.8" r="14.5" className="st3" />
        <circle cx="264.2" cy="533.8" r="14.5" className="st4" />
        <circle cx="87.2" cy="519.3" r="7.8" className="st2" />
        <circle cx="122.8" cy="519.3" r="7.8" className="st2" />
        <circle cx="246.1" cy="519.9" r="7.8" className="st2" />
        <circle cx="281" cy="519.3" r="7.8" className="st2" />
        <circle cx="187.8" cy="600.2" r="14.5" className="st5" />
        <circle cx="170.1" cy="585.6" r="7.8" className="st2" />
        <circle cx="205.6" cy="585.6" r="7.8" className="st2" />
        <circle cx="337.6" cy="598.7" r="14.5" className="st6" />
        <circle cx="319.8" cy="584.1" r="7.8" className="st2" />
        <circle cx="355.2" cy="584.8" r="7.8" className="st2" />
        <circle cx="34.5" cy="599.4" r="14.5" className="st7" />
        <circle cx="16.8" cy="584.9" r="7.8" className="st2" />
        <circle cx="52.3" cy="584.9" r="7.8" className="st2" />
        <circle cx="186.3" cy="92.5" r="14.5" className="st2" />
        <circle cx="168.6" cy="78" r="7.8" className="st2" />
        <circle cx="204.1" cy="78" r="7.8" className="st2" />
        <circle cx="186.1" cy="22.8" r="14.5" className="st2" />
        <circle cx="168.3" cy="8.3" r="7.8" className="st2" />
        <circle cx="203.9" cy="8.3" r="7.8" className="st2" />
        <circle cx="186.3" cy="161.2" r="14.5" className="st2" />
        <circle cx="168.6" cy="146.6" r="7.8" className="st2" />
        <circle cx="204.1" cy="146.6" r="7.8" className="st2" />
        <circle cx="34" cy="158.3" r="14.5" className="st2" />
        <circle cx="16.2" cy="143.8" r="7.8" className="st2" />
        <circle cx="51.8" cy="143.8" r="7.8" className="st2" />
        <circle cx="337.2" cy="159.4" r="14.5" className="st2" />
        <circle cx="319.4" cy="144.8" r="7.8" className="st2" />
        <circle cx="355" cy="144.8" r="7.8" className="st2" />
        <circle cx="186.6" cy="227" r="14.5" className="st5" />
        <circle cx="168.9" cy="212.4" r="7.8" className="st2" />
        <circle cx="204.4" cy="212.4" r="7.8" className="st2" />
        <circle cx="34" cy="89.6" r="14.5" className="st2" />
        <circle cx="16.2" cy="75.1" r="7.8" className="st2" />
        <circle cx="51.8" cy="75.1" r="7.8" className="st2" />
        <circle cx="337.2" cy="90.7" r="14.5" className="st2" />
        <circle cx="319.4" cy="76.2" r="7.8" className="st2" />
        <circle cx="355" cy="76.2" r="7.8" className="st2" />
        <circle cx="337.5" cy="225.2" r="14.5" className="st6" />
        <circle cx="319.8" cy="210.6" r="7.8" className="st2" />
        <circle cx="355.3" cy="210.6" r="7.8" className="st2" />
        <circle cx="34.3" cy="224.1" r="14.5" className="st7" />
        <circle cx="16.6" cy="209.6" r="7.8" className="st2" />
        <circle cx="52.1" cy="209.6" r="7.8" className="st2" />
        <circle cx="320.3" cy="394.7" r="7.8" className="st2" />
        <circle cx="355.2" cy="394.1" r="7.8" className="st2" />
        <circle cx="392.2" cy="316.6" r="14.5" className="st2" />
        <circle cx="374.5" cy="302" r="7.8" className="st2" />
        <circle cx="410" cy="302" r="7.8" className="st2" />
        <rect width="24.7" height="13.7" x="87.8" y="365.8" className="st2" />
        <rect width="24.7" height="13.7" x="174.3" y="365.8" className="st2" />
        <rect width="24.7" height="13.7" x="249.1" y="365.8" className="st2" />
        <polygon points="186.1,455.9 138,485.4 186.9,514.2 235.6,485" className="st1" />
        <polygon points="338.7,382.5 313.1,422.2 362.4,422.2" className="st2" />

        {/* Textos Abajo */}

        <text className="st8 st9 st10" transform="translate(186 429.4)">
          <tspan x="0" dy="0" text-anchor="middle">
            Yo
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(262 429.34)">
          <tspan x="0" dy="0" text-anchor="middle">
            Mensaje
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Padre
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(100 429.34)">
          <tspan x="0" dy="0" text-anchor="middle">
            Mensaje
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Madre
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(34 429.34)">
          <tspan x="0" dy="0" text-anchor="middle">
            Número de
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Resistencia
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(337 428.01)">
          <tspan x="0" dy="0" text-anchor="middle">
            Personalidad
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Profunda
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(394 388.15)">
          <tspan x="0" dy="0" text-anchor="middle">
            Búsqueda
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Espiritual
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(261 318.41)">
          <tspan x="0" dy="0" text-anchor="middle">
            Comportamiento
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Externo Social
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(100 318.68)">
          <tspan x="0" dy="0" text-anchor="middle">
            Comportamiento
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Interno Social
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(188 523.63)">
          <tspan x="0" dy="0" text-anchor="middle">
            Nudo de Dolor
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(103 554.83)">
          <tspan x="0" dy="0" text-anchor="middle">
            Comportamiento
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Interior de
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Defensa
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(265 554.88)">
          <tspan x="0" dy="0" text-anchor="middle">
            Comportamiento
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Exterior de
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Defensa
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(188 621.71)">
          <tspan x="0" dy="0" text-anchor="middle">
            Personalidad
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Exterior Defensa
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(336 621.47)">
          <tspan x="0" dy="0" text-anchor="middle">
            Búsqueda de Salida
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Exterior (de Escape)
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(35 621.47)">
          <tspan x="0" dy="0" text-anchor="middle">
            Número de
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Huida
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(170.74 355)">
          <tspan x="0" dy="0" text-anchor="middle">
            Nudo
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Emocional
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(382.72 337.03)">
          <tspan x="0" dy="0" text-anchor="middle">
            Búsqueda
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Emocional
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(183 249.9)">
          <tspan x="0" dy="0" text-anchor="middle">
            Personalidad Externa Social
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Pilar Profesional
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(338 248.17)">
          <tspan x="0" dy="0" text-anchor="middle">
            Búsqueda
          </tspan>
          <tspan x="0" dy="1.2em" text-anchor="middle">
            Armonía
          </tspan>
        </text>
        <text className="st8 st9 st10" transform="translate(25.93 248.12)">
          Emerger
        </text>

        {/* Variables Abajo */}

        <text className="st11 st12 st14" transform="translate(90.29 376.52)">
          DIA
        </text>
        <text className="st11 st12 st14" transform="translate(250.51 377.27)">
          AÑO
        </text>
        <text className="st11 st12 st14" transform="translate(176.32 377.23)">
          MES
        </text>

        <text className="st11 st12 st13" transform="translate(385.01 320.97)">
          {base22Profile.emotionalSearch}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(370 308)">
          {Math.abs(21 - base22Profile.emotionalSearch)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(405 308)">
          {Math.abs(22 - base22Profile.emotionalSearch)}
        </text>

        <text className="st11 st12 st13" transform="translate(383.58 372.53)">
          {base22Profile.spiritualSearch}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(370 358)">
          {Math.abs(21 - base22Profile.spiritualSearch)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(405 358)">
          {Math.abs(22 - base22Profile.spiritualSearch)}
        </text>

        <text className="st11 st12 st13" transform="translate(176.64 25)">
          {base22Profile.thirdSpiritualBaseA}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(163 13)">
          {Math.abs(21 - base22Profile.thirdSpiritualBaseA)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(199 13)">
          {Math.abs(22 - base22Profile.thirdSpiritualBaseA)}
        </text>

        <text className="st11 st12 st13" transform="translate(330.77 95)">
          {base22Profile.secondSpiritualBaseC}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(314 80)">
          {Math.abs(21 - base22Profile.secondSpiritualBaseC)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(350 80)">
          {Math.abs(22 - base22Profile.secondSpiritualBaseC)}
        </text>

        <text className="st11 st12 st13" transform="translate(176.64 95)">
          {base22Profile.secondSpiritualBaseB}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(161 82)">
          {Math.abs(21 - base22Profile.secondSpiritualBaseB)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(199 82)">
          {Math.abs(22 - base22Profile.secondSpiritualBaseB)}
        </text>

        <text className="st11 st12 st13" transform="translate(27.76 95)">
          {base22Profile.secondSpiritualBaseA}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(11 80)">
          {Math.abs(21 - base22Profile.secondSpiritualBaseA)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(45 80)">
          {Math.abs(22 - base22Profile.secondSpiritualBaseA)}
        </text>

        <text className="st11 st12 st13" transform="translate(330.77 165)">
          {base22Profile.firstSpiritualBaseC}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(314 148)">
          {Math.abs(21 - base22Profile.firstSpiritualBaseC)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(350 148)">
          {Math.abs(22 - base22Profile.firstSpiritualBaseC)}
        </text>

        <text className="st11 st12 st13" transform="translate(176.64 165)">
          {base22Profile.firstSpiritualBaseB}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(161 150)">
          {Math.abs(21 - base22Profile.firstSpiritualBaseB)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(199 150)">
          {Math.abs(22 - base22Profile.firstSpiritualBaseB)}
        </text>

        <text className="st11 st12 st13" transform="translate(27.76 165)">
          {base22Profile.firstSpiritualBaseA}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(11 148)">
          {Math.abs(21 - base22Profile.firstSpiritualBaseA)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(45 148)">
          {Math.abs(22 - base22Profile.firstSpiritualBaseA)}
        </text>

        <text className="st11 st12 st13" transform="translate(330.77 230.18)">
          {base22Profile.harmonySearch}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(314 216)">
          {Math.abs(21 - base22Profile.harmonySearch)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(350 216)">
          {Math.abs(22 - base22Profile.harmonySearch)}
        </text>

        <text className="st11 st12 st13" transform="translate(176.64 230.65)">
          {base22Profile.externalSocialPersonality}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(161 216)">
          {Math.abs(21 - base22Profile.externalSocialPersonality)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(199 216)">
          {Math.abs(22 - base22Profile.externalSocialPersonality)}
        </text>

        <text className="st11 st12 st13" transform="translate(27.76 227)">
          {base22Profile.emerge}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(11 214)">
          {Math.abs(21 - base22Profile.emerge)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(45 214)">
          {Math.abs(22 - base22Profile.emerge)}
        </text>

        <text className="st11 st12 st13" transform="translate(250.61 301.69)">
          {base22Profile.externalSocialBehavior}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(242 287)">
          {Math.abs(21 - base22Profile.externalSocialBehavior)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(277 287)">
          {Math.abs(22 - base22Profile.externalSocialBehavior)}
        </text>

        <text className="st11 st12 st13" transform="translate(90.58 302.88)">
          {base22Profile.internalSocialBehavior}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(76 287)">
          {Math.abs(21 - base22Profile.internalSocialBehavior)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(112 287)">
          {Math.abs(22 - base22Profile.internalSocialBehavior)}
        </text>

        <text className="st11 st12 st13" transform="translate(178.87 341.21)">
          {base22Profile.emotionalKnot}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(161 327)">
          {Math.abs(21 - base22Profile.emotionalKnot)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(199 327)">
          {Math.abs(22 - base22Profile.emotionalKnot)}
        </text>

        <text className="st11 st12 st13" transform="translate(332.4 413.47)">
          {base22Profile.deepPersonality}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(312 400)">
          {Math.abs(21 - base22Profile.deepPersonality)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(348 400)">
          {Math.abs(22 - base22Profile.deepPersonality)}
        </text>

        <text className="st11 st12 st13" transform="translate(259.46 413.91)">
          {base22Profile.reducedYear}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(242 400)">
          {Math.abs(21 - base22Profile.reducedYear)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(277 400)">
          {Math.abs(22 - base22Profile.reducedYear)}
        </text>

        <text className="st11 st12 st13" transform="translate(178.87 413.77)">
          {base22Profile.reducedMonth}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(161 400)">
          {Math.abs(21 - base22Profile.reducedMonth)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(199 400)">
          {Math.abs(22 - base22Profile.reducedMonth)}
        </text>

        <text className="st11 st12 st13" transform="translate(94.2 412.81)">
          {base22Profile.reducedDay}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(76 400)">
          {Math.abs(21 - base22Profile.reducedDay)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(111 400)">
          {Math.abs(22 - base22Profile.reducedDay)}
        </text>

        <text className="st11 st12 st13" transform="translate(25.52 412.81)">
          {base22Profile.resistanceNumber}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(11 400)">
          {Math.abs(21 - base22Profile.resistanceNumber)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(45 400)">
          {Math.abs(22 - base22Profile.resistanceNumber)}
        </text>

        <text className="st11 st12 st13" transform="translate(179.29 488.2)">
          {base22Profile.painKnot}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(160 462)">
          {Math.abs(21 - base22Profile.painKnot)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(200 462)">
          {Math.abs(22 - base22Profile.painKnot)}
        </text>

        <text className="st11 st12 st13" transform="translate(253 538.1)">
          {base22Profile.externalDefenseBehavior}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(242 525)">
          {Math.abs(21 - base22Profile.externalDefenseBehavior)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(277 525)">
          {Math.abs(22 - base22Profile.externalDefenseBehavior)}
        </text>

        <text className="st11 st12 st13" transform="translate(94.2 538.1)">
          {base22Profile.internalDefenseBehavior}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(80 525)">
          {Math.abs(21 - base22Profile.internalDefenseBehavior)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(115 525)">
          {Math.abs(22 - base22Profile.internalDefenseBehavior)}
        </text>

        <text className="st11 st12 st13" transform="translate(331.73 604.42)">
          {base22Profile.externalExitSearch}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(312 590)">
          {Math.abs(21 - base22Profile.externalExitSearch)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(348 590)">
          {Math.abs(22 - base22Profile.externalExitSearch)}
        </text>

        <text className="st11 st12 st13" transform="translate(176.85 604.29)">
          {base22Profile.externalDefensePersonality}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(165 590)">
          {Math.abs(21 - base22Profile.externalDefensePersonality)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(200 590)">
          {Math.abs(22 - base22Profile.externalDefensePersonality)}
        </text>

        <text className="st11 st12 st13" transform="translate(27.29 603.29)">
          {base22Profile.escapeNumber}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(11 590)">
          {Math.abs(21 - base22Profile.escapeNumber)}
        </text>
        <text className="st11 st12 st13 st10" transform="translate(45 590)">
          {Math.abs(22 - base22Profile.escapeNumber)}
        </text>
      </svg>
    </div>
  )
}

export default Base22Diagram
