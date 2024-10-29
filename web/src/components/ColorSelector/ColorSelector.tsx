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

const bgColors = {
  sltate: 'bg-slate-300',
  gray: 'bg-gray-300',
  zinc: 'bg-zinc-300',
  neutral: 'bg-neutral-300',
  stone: 'bg-stone-300',
  red: 'bg-red-300',
  orange: 'bg-orange-300',
  amber: 'bg-amber-300',
  yellow: 'bg-yellow-300',
  lime: 'bg-lime-300',
  green: 'bg-green-300',
  emerald: 'bg-emerald-300',
  teal: 'bg-teal-300',
  cyan: 'bg-cyan-300',
  sky: 'bg-sky-300',
  blue: 'bg-blue-300',
  indigo: 'bg-indigo-300',
  violet: 'bg-violet-300',
  purple: 'bg-purple-300',
  fuchsia: 'bg-fuchsia-300',
  pink: 'bg-pink-300',
  rose: 'bg-rose-300',
}

const ColorSelector = ({ selectedColor, setSelectedColor }: IColorSelector) => {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor="color-select" className="font-semibold text-gray-700">
        Select Color:
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
      <div className={`h-8 w-8 rounded-full ${bgColors[selectedColor]}`} />
    </div>
  )
}

export default ColorSelector
