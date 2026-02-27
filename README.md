# Nimbus ☁

## 1. 프로젝트 소개 & 기획 의도
- 글로벌 날씨 정보 웹 애플리케이션
- React 실력 유지 및 포트폴리오 활용
- API 연동 및 UI/UX 경험 강화

<br>

## 2. 개발 기간 & 단계
### 1차 개발 (Initial Release)
- **기간**: 2025.06 ~ 2025.12
- **내용**
  - 전세계 도시 검색 기반 날씨 조회 기능 구현 (OpenWeatherMap API)
  - Geolocation API를 활용한 현재 위치 기반 날씨 위젯 구현
  - TanStack Query를 사용한 비동기 데이터 요청, 캐싱 및 로딩 상태 관리
  - 데이터 로딩 전 Skeleton UI 적용으로 사용자 경험 개선
  - 다크모드 전역 상태 관리 및 LocalStorage 연동
  - 검색 결과(도시명)에 따른 상세 페이지 동적 라우팅 및 404 페이지 예외 처리

### 2차 개선 (Migration & Enhancement)
- **기간**: 2026.02
- **내용**
  - CRA → Vite 마이그레이션으로 빌드 속도 및 구조 최적화
  - Github Actions 기반 CI 환경 구성 (TS 타입 체크 & ESLint 자동 실행)
  - 전체 프로젝트 구조 안정화 및 디렉토리 정리

<br>

## [3. 주요 기능 및 페이지 구성](https://github.com/hjinn0813/nimbus/wiki/Step-01.-%EA%B8%B0%ED%9A%8D-%EB%B0%8F-%EC%B4%88%EA%B8%B0-%EC%84%B8%ED%8C%85)

<br>

## 4. 사용 기술 스택

| 스택/패키지  | 용도  |
| --- | --- |
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) | 컴포넌트 기반 UI 개발 및 SPA 구조 구현 |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white) | 정적 타입 검사를 통한 안정적인 코드 작성 |
| ![ReactQuery](https://img.shields.io/badge/React_Query-FF4154?style=flat&logo=reactquery&logoColor=white) | 서버 상태 관리 및 API 데이터 캐싱 |
| ![axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white) | REST API 통신 및 요청 처리 |
| ![tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=TailwindCSS&logoColor=white) | 유틸리티 기반 반응형 UI 스타일링 |
| ![vite](https://img.shields.io/badge/vite-646CFF?style=flat&logo=vite&logoColor=white) | 빠른 개발 서버 및 번들링 환경 구성 |
| `react-router-dom` | 페이지 라우팅 및 SPA 네비게이션 관리 |
| `react-icons`  | UI 아이콘 구성 |
| `date-fns`  | 날짜 포맷팅 및 예보 데이터 처리 |
| `react-loading-skeleton` | 로딩 상태 UX 개선을 위한 스켈레톤 UI |
| `OpenWeatherMap API` | 실시간 날씨 및 예보 데이터 제공 |
| `Geolocation API` | 사용자 현재 위치 정보 조회 |
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white) | 코드 스타일 통일 및 잠재적 오류 사전 검출 |
| ![GitHub Actions](https://img.shields.io/badge/Github_Actions-2088FF?style=flat&logo=githubactions&logoColor=white) | TypeScript 검사 및 ESLint 자동 실행 CI 환경 구축 |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) | 자동 빌드 및 배포 환경 제공 |

<br>

## [5. 개발 기록 아카이빙](https://github.com/hjinn0813/nimbus/wiki/Step-01.-%EA%B8%B0%ED%9A%8D-%EB%B0%8F-%EC%B4%88%EA%B8%B0-%EC%84%B8%ED%8C%85)

<br>

## 6. 디렉토리 구조
```
📦nimbus
 ┣ 📂public
 ┃ ┣ 📂favicon
 ┃ ┃ ┣ 📜android-chrome-192x192.png
 ┃ ┃ ┣ 📜android-chrome-512x512.png
 ┃ ┃ ┣ 📜apple-touch-icon.png
 ┃ ┃ ┣ 📜favicon-16x16.png
 ┃ ┃ ┣ 📜favicon-32x32.png
 ┃ ┃ ┗ 📜favicon.ico
 ┃ ┗ 📂fonts
 ┃ ┃ ┗ 📜PretendardStdVariable.woff2
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜crying-face.png
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜DarkMode.tsx
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜ForecastSection.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜SearchBar.tsx
 ┃ ┃ ┗ 📜WeatherCard.tsx
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜cities.ts
 ┃ ┃ ┗ 📜default.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜useForecast.tsx
 ┃ ┃ ┗ 📜useWeather.tsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜Detail.tsx
 ┃ ┃ ┣ 📜Main.tsx
 ┃ ┃ ┗ 📜NotFound.tsx
 ┃ ┣ 📂styles
 ┃ ┃ ┗ 📜global.css
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜formatDate.ts
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜images.d.ts
 ┃ ┣ 📜main.tsx
 ┃ ┗ 📜queryClient.tsx
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.cjs
 ┣ 📜tailwind.config.cjs
 ┣ 📜tsconfig.json
 ┗ 📜vite.config.ts
```