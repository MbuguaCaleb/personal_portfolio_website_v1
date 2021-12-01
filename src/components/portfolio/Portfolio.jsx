import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import { useState, useEffect } from 'react'
import {
  featuredPortfolio,
  htmlAndCSSPortfolio,
  vanillaJavascriptPortfolio,
  frontEndPortfolio,
  laravelPortfolio,
  pythonPortfolio,
  nodeJSPortfolio,
} from '../../data'

export default function Portfolio() {
  const [selected, setSelected] = useState('featured')

  const [data, setData] = useState([])
  const list = [
    {
      id: 'featured',
      name: 'Featured',
    },
    {
      id: 'htmlandcss',
      name: 'HTML and CSS',
    },
    {
      id: 'vanillajavascript',
      name: 'Vanilla Javascript',
    },
    {
      id: 'frontend',
      name: 'Front End(React,Angular & Vue)',
    },
    {
      id: 'laravel',
      name: 'Laravel',
    },
    {
      id: 'python',
      name: 'Python',
    },
    {
      id: 'nodejs',
      name: 'Node Js',
    },
  ]

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio)
        break
      case 'htmlandcss':
        setData(htmlAndCSSPortfolio)
        break
      case 'vanillajavascript':
        setData(vanillaJavascriptPortfolio)
        break
      case 'frontend':
        setData(frontEndPortfolio)
        break
      case 'laravel':
        setData(laravelPortfolio)
        break
      case 'python':
        setData(pythonPortfolio)
        break
      case 'nodejs':
        setData(nodeJSPortfolio)
        break
      default:
        setData(featuredPortfolio)
        break
    }
  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            id={item.id}
            title={item.name}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>

      <div className='container'>
        {data.map((d) => {
          return (
            <div className='item' key={d.id}>
              <img src={d.img} alt={d.title} />
              <h3>{d.title}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}
