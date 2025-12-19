import { BACKGROUND_COLORS } from 'src/colors'

interface IColorSelector {
  selectedColor: string
  setSelectedColor: (selectedColor: string) => void
}

const colors = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]

const ColorSelector = ({ selectedColor, setSelectedColor }: IColorSelector) => {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor="color-select" className="text-xl">
        Selecciona el color:
      </label>
      <select
        id="color-select"
        className="rounded-md border p-2"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <div className={`h-8 w-8 rounded-full ${BACKGROUND_COLORS[selectedColor][300]}`} />
    </div>
  )
}

export default ColorSelector
