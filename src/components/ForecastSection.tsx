// 5일 예보

import { useState } from 'react'
import useForecast from '../hooks/useForecast'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface ForecastProps {
  city?: string
}

export default function ForecastSection({ city }: ForecastProps) {
  const [openDate, setOpenDate] = useState<string | null>(null)
  const { data, isLoading, error } = useForecast(city)

  if (isLoading){
    return (
      <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800">
        <Skeleton height={30} width={150} />
        <Skeleton height={80} width={80} circle />
        <Skeleton height={20} count={2} />
      </div>
    )
  }

  if (error) return <p>예보 불러오기 실패 🥲</p>
  if (!data) return null

  // list를 날짜별로 그룹화
  const forecastByDate: Record<string, typeof data.list> = {};
  data.list.forEach(item => {
    const date = item.dt_txt.split(' ')[0]; // "2025-11-22"처럼 날짜만
    if (!forecastByDate[date]) forecastByDate[date] = [];
    forecastByDate[date].push(item);
  });

  // 아코디언 토글
  const toggleDate = (date: string) => {
    setOpenDate(prev => (prev === date ? null : date))
  }

  return (
    <div className="mt-8 w-[80%] p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-semibold mb-4 xs:text-xl">{city} 5일 예보</h2>

      {Object.entries(forecastByDate).map(([date, forecasts]) => (
        <div key={date} className="py-3 border-b border-gray-300 dark:border-gray-600">
          {/* 날짜 헤더 */}
          <div 
            className="flex justify-between items-center cursor-pointer p-2"
            onClick={() => toggleDate(date)}
          >
            <h3 className="text-xl font-semibold xs:text-lg">
              {format(new Date(date), 'yyyy-MM-dd (EEE)', { locale: ko })}
            </h3>
            <span>{openDate === date ? 
              <IoIosArrowUp className='w-5 h-5' /> : 
              <IoIosArrowDown className='w-5 h-5'/>}
            </span>
          </div>

          {/* 카드 영역 */}
          {openDate === date && (
            <div className="flex gap-4 overflow-x-auto p-2">
              {forecasts.map(f => {
                const iconUrl = `https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`
                return (
                  <div 
                    key={f.dt} 
                    className="h-full flex flex-col items-center border border-slate-300 dark:border-gray-900 dark:bg-gray-900 rounded-lg p-2 min-w-[140px] min-h-[320px]"
                  >
                    <div className='flex flex-col items-center flex-1'>
                      <span className="text-sm font-medium mt-2">{f.dt_txt.split(' ')[1].slice(0,5)}</span>
                      <img src={iconUrl} alt={f.weather[0].description} className="w-16 h-16"/>
                      <span className="text-2xl">{Math.round(f.main.temp - 273.15)}°C</span>
                      <span className="text-md text-center mt-1">{f.weather[0].description}</span>
                    </div>

                    <div className='mt-4 mb-3 flex flex-col'>
                      <span className="text-sm">체감온도: {Math.round(f.main.feels_like - 273.15)}°C</span>
                      <span className="text-sm">습도: {f.main.humidity}%</span>
                      <span className="text-sm">강수확률: {Math.round((f.pop || 0)*100)}%</span>
                      <span className="text-sm">강수량: {f.rain?.['3h'] ?? 0} mm</span>
                      <span className="text-sm">적설량: {f.snow?.['3h'] ?? 0} mm</span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
