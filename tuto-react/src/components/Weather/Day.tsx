interface Temperature {
  max: number,
  min: number
}

interface DayProps {
  name: String
  temperature: Temperature
  iconCode: String
}

export default function Day({ name, temperature = {min: 0, max: 100},iconCode }: DayProps) {

  const {min, max } = temperature
  const weatherIconUrl = ``

  return (
    <div className="p-4 rounded-xl bg-blue-50 text-center space-y-1">
      {name && <h3 className="text-lg font-semibold text-gray-700">{name}</h3>}
      {/* {temp !== undefined && (
        <p className="text-3xl font-bold text-blue-600">{temp.toFixed(1)}°C</p>
      )} */}
      {(max !== undefined || min !== undefined) && (
        <p className="text-sm text-gray-500">
          {max !== undefined && `最高 ${max.toFixed(1)}°C`}
          {max !== undefined && min !== undefined && ' / '}
          {min !== undefined && `最低 ${min.toFixed(1)}°C`}
        </p>
      )}
    </div>
  )
}
