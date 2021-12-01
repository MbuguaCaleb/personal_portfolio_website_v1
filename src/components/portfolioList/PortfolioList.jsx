import './portfolioList.scss'

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? 'porfolioList active' : 'porfolioList'}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  )
}
