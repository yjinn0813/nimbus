// detail page

import { useParams } from 'react-router-dom';
import WeatherCard from '../components/WeatherCard';
import ForecastSection from '../components/ForecastSection';
import useWeather from '../hooks/useWeather';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Detail() {
  const { city } = useParams<{ city: string }>();

  // city가 있으면 훅 호출
  const { data: weather, isLoading, error } = useWeather({ city })

  if (!city) return <p>도시명을 찾을 수 없습니다.</p>;
  if (isLoading) {
    return (
      <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800">
        <Skeleton height={30} width={200} className="mb-2" />
        <Skeleton height={20} width={150} className="mb-1" />
        <Skeleton height={20} width={180} className="mb-1" />
        <Skeleton height={20} width={120} />
      </div>
    );
  }
  if (error || !weather) return <p>현재 날씨를 불러오지 못했습니다.</p>;

  return (
    <div className='flex flex-col items-center w-full'>
      <h1 
        className="text-3xl font-bold mt-10 cursor-pointer"
        title="네이버 날씨로 이동"
        onClick={() => window.open(
            `https://weather.naver.com/`,
            "_blank"
        )}
      >{city}</h1>

      {/* 현재 날씨 */}
      <WeatherCard city={city}/>

      {/* 디테일 페이지 전용 현재 날씨 상세 */}
      <div className="w-[80%] mt-8 p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-semibold mb-4 xs:text-xl">현재 날씨 상세 정보</h2>
        <div className="flex flex-col py-2">
          <div className='flex flex-row justify-around my-3'>
            <div className='flex flex-col items-center'>
              <div>체감온도</div>
              <span className='text-4xl my-2 xs:text-3xl'>{Math.round(weather.main.feels_like - 273.15)}°C</span>
            </div>
            <div className='flex flex-col items-center'>
              <div>최저 기온</div>
              <span className='text-4xl my-2 xs:text-3xl'>{Math.round(weather.main.temp_min - 273.15)}°C</span>
            </div>
            <div className='flex flex-col items-center'>
              <div>최고 기온</div>
              <span className='text-4xl my-2 xs:text-3xl'>{Math.round(weather.main.temp_max - 273.15)}°C</span>
            </div>
          </div>

          <div className='flex flex-row justify-around my-3'>
            <div className='flex flex-col items-center'>
              <div>습도</div>
              <span className='text-4xl my-2 xs:text-3xl'>{weather.main.humidity}%</span>
            </div>
            <div className='flex flex-col items-center'>
              <div>강수량</div>
              <span className='text-4xl my-2 xs:text-3xl'>{weather.rain?.['1h'] ?? 0} mm</span>
            </div>
            <div className='flex flex-col items-center'>
              <div>적설량</div>
              <span className='text-4xl my-2 xs:text-3xl'>{weather.snow?.['1h'] ?? 0} mm</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5일 예보 */}
      <ForecastSection city={city} />
    </div>
  )
}
