import './accueil.scss'
import Features from '../../components/Features/features'
import logo1 from '../../designs/img/icon-chat.png'
import logo2 from '../../designs/img/icon-money.png'
import logo3 from '../../designs/img/icon-security.png'

function Accueil() {
  const title = [
    'You are our #1 priority',
    'More savings means higher rates',
    'Security you can trust',
  ];

  const text = [
    'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    'The more you save with us, the higher your interest rate will be!',
    'We use top of the line encryption to make sure your data and money is always safe.',
  ];
    return (
      <>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
        {[logo1, logo2, logo3].map((source, index) => (
          <Features key={index} title={title[index]} text={text[index]} source={source} />
        ))}
      </section>
      </>
    )
}

export default Accueil