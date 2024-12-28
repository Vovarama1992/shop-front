import { LineChart, lineElementClasses, markElementClasses } from '@mui/x-charts'
import { Chart, registerables } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(...registerables)
Chart.register(ChartDataLabels)

interface ChartComponentProps {
  points: any
}

export const ChartComponent: React.FC<ChartComponentProps> = ({ points }) => {
  return (
    <>
      <LineChart
        series={[
          {
            area: true,
            // Применяем ссылку на градиент для заливки области под графиком
            color: 'url(#gradient-fill)',
            curve: 'natural',
            data: points,
          },
        ]}
        sx={{
          // Стили для фона оси Y (серый фон на числовых метках)
          '.MuiAxis-root .MuiAxisTicks-root .MuiTypography-root': {
            backgroundColor: '#f0f0f0', // Серый фон для числовых меток
          },
          // Стили для пунктирной линии
          '.MuiLineElement-series-pvId': {
            fill: 'url(#gradient-fill)', // Ссылка на градиент
            strokeDasharray: '5 5', // Пунктирная линия
          },
          '.MuiLineElement-series-uvId': {
            fill: '#1b1b1b',
            strokeDasharray: '3 4 5 2', // Другой вариант пунктирной линии (если требуется)
          },
          [`& .${markElementClasses.highlighted}`]: {
            stroke: 'none',
          },
          // Стили для всей линии графика
          [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
            stroke: '#1b1b1b',
            strokeWidth: 2, // Толщина линии
          },
          [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
            fill: '#1b1b1b',
          },
        }}
        xAxis={[
          {
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            scaleType: 'point',
          },
        ]}
        yAxis={[
          {
            colorMap: {
              color: ['#fff', '#ebebeb'],
              max: Math.max(...points),
              min: 0,
              type: 'continuous',
            },
          },
        ]}
      >
        <defs>
          {/* Определение линейного градиента с переходом от черного к белому */}
          <linearGradient id={'gradient-fill'} x1={'0'} x2={'0'} y1={'0'} y2={'1'}>
            <stop offset={'0%'} stopColor={'#1b1b1b'} />
            <stop offset={'100%'} stopColor={'#ffffff'} />
          </linearGradient>
        </defs>
      </LineChart>
    </>
  )
}
