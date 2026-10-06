// weather card

import useWeather from '../hooks/useWeather'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface WeatherCardProps {
  city?: string;
  coords?: { lat: number; lon: number };
  onClick?: (cityName: string) => void;
}

export default function WeatherCard({ city, coords, onClick }: WeatherCardProps) {
  const { data, isLoading, error } = useWeather({ coords, city });

  if (isLoading){
    return (
      <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800">
        <Skeleton height={30} width={150} />
        <Skeleton height={80} width={80} circle />
        <Skeleton height={20} count={2} />
      </div>
    )
  }

  if (error) return <p>에러 발생 🥲</p>
  if (!data) return null

  // 아이콘 추출
  const weather = data;
  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="flex flex-col mt-10 w-[80%] px-5 py-6 rounded-lg shadow-sm bg-white dark:bg-gray-800 cursor-pointer"
      onClick={() => onClick?.(weather.name)}>
      <div className='text-xl'>{weather.name}</div>
      <div className='flex flex-row items-end justify-between'>
        <div className='my-6'>
          <div className='text-2xl'>{weather.weather[0].description}</div>
          <div className='text-6xl mt-2 xs:text-5xl'>{Math.round(weather.main.temp - 273.15)}°C</div>
        </div>
        <img className='w-30 h-30' src={iconUrl} alt={weather.weather[0].description} />
      </div>
    </div>
  )
}