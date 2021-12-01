import './testimonials.scss'

function Testimonials() {
  const data = [
    {
      id: 1,
      name: 'Zack Githinji',
      title: 'Team Leader & CEO Wizglobal Kenya',
      img: 'assets/testimonials/zack_githinji.jpg',
      icon: 'assets/linkedin.png',
      desc: 'Kudos! It is incredible how thorough your work is #GoingAboveAndBeyond',
      response:
        "Thank you sir! You are the best team Lead..Right from internship up to now, you've guided us so well! Blessed to be in such a brilliant team!! 💪",
      featured: true,
    },
  ]
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>

      <div className='container'>
        {data.map((p) => {
          return (
            <div className={p.featured ? 'card featured' : 'card'} key={p.id}>
              <div className='top'>
                <img src={p.icon} className='left' alt='' />

                <img className='user' src={p.img} alt='' />

                <img className='right' src='assets/youtube.png' alt='' />
              </div>

              <div className='center'>{p.desc}</div>

              <div className='center'>{p.response}</div>

              <div className='bottom'>
                <h3>{p.name}</h3>
                <h4>{p.title} </h4>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials
