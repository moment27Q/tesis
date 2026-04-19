import { useCallback, useState } from 'react'
import heroImg from '../imagen/istockphoto-1849172463-612x612.jpg'
import { BlogPage } from './components/blog/BlogPage'
import { LoanCalculator } from './components/LoanCalculator'
import { LoginModal } from './components/login/LoginModal'
import { SiteHeader } from './components/layout/SiteHeader'
import { RegisterModal } from './components/register/RegisterModal'
import { partnerLogos } from './data/partnerLogos'
import { workflowSteps } from './data/workflowSteps'
import './App.css'

type AuthModal = null | 'register' | 'login'

function App() {
  const [page, setPage] = useState<'home' | 'blog'>('home')
  const [authModal, setAuthModal] = useState<AuthModal>(null)
  const [amountNeeded, setAmountNeeded] = useState('17000')
  const [weeklyPayment, setWeeklyPayment] = useState('850')
  const [weeksTerm, setWeeksTerm] = useState('24')

  const openRegister = useCallback(() => setAuthModal('register'), [])
  const closeAuthModals = useCallback(() => setAuthModal(null), [])
  const goToLogin = useCallback(() => setAuthModal('login'), [])
  const goToRegister = useCallback(() => setAuthModal('register'), [])

  return (
    <>
      <main className={`landing${page === 'blog' ? ' landing--blog' : ''}`}>
        <SiteHeader
          activePage={page}
          onGoHome={() => setPage('home')}
          onGoBlog={() => setPage('blog')}
          onPidePrestamo={openRegister}
        />

        {page === 'home' ? (
          <>
            <section className="hero-section" aria-label="Hero de préstamo Jemacash">
              <div className="hero-copy" data-tone="left">
                <h1>
                  Tu préstamo al
                  <br />
                  toque con
                  <br />
                  <em>Jemacash</em>
                </h1>

                <p>
                  Convertimos tus activos en liquidez inmediata con la precisión de nuestra
                  inteligencia artificial. Sin trámites eternos, sin complicaciones.
                </p>

                <LoanCalculator
                  amountNeeded={amountNeeded}
                  onAmountNeededChange={setAmountNeeded}
                  weeklyPayment={weeklyPayment}
                  onWeeklyPaymentChange={setWeeklyPayment}
                  weeksTerm={weeksTerm}
                  onWeeksTermChange={setWeeksTerm}
                />
              </div>

              <div className="hero-visual" data-tone="right">
                <img className="hero-photo" src={heroImg} alt="Cliente usando la app Jemacash" />
                <p className="photo-caption">Cliente usando la app Jemacash</p>
                <div className="trust-card">
                  <span aria-hidden="true">✓</span>
                  <div>
                    <strong>100% Seguro</strong>
                    <small>Regulado por CNV</small>
                  </div>
                </div>
              </div>
            </section>

            <section className="benefit-strip" aria-label="Entidades asociadas">
              <h3>Aliados principales</h3>
              <div className="logo-carousel">
                <div className="logo-track">
                  {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                    <div className="logo-item" key={`${logo.alt}-${index}`}>
                      <img src={logo.src} alt={logo.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="workflow-promo-block">
              <section className="workflow-section" aria-labelledby="workflow-heading">
                <div className="workflow-section-inner">
                  <header className="workflow-header">
                    <h2 id="workflow-heading">Precision Workflow</h2>
                    <p className="subtitle">Tu dinero en tres pasos simples impulsados por IA</p>
                  </header>

                  <ol className="workflow-grid">
                    {workflowSteps.map((item) => (
                      <li key={item.step}>
                        <article className="workflow-card">
                          <div className="card-head">
                            <span className="chip" aria-hidden="true">
                              ✓
                            </span>
                            <span className="step-watermark" aria-hidden="true">
                              {item.step}
                            </span>
                          </div>
                          <p className="step-eyebrow">Paso {item.step}</p>
                          <h3 className="workflow-title">{item.title}</h3>
                          <p className="workflow-body">{item.text}</p>
                        </article>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

              <section className="promo-section" aria-label="Valor y soporte">
                <div className="promo-section-inner">
                  <article className="promo-main">
                    <h3>
                      Valuación en segundos,
                      <br />
                      dinero en minutos.
                    </h3>
                    <p>
                      Nuestra tecnología de punta analiza el mercado global para darte siempre el
                      precio más justo por tus artículos electrónicos.
                    </p>
                    <button type="button">Descarga la App</button>
                  </article>

                  <aside className="promo-side">
                    <article className="promo-stat">
                      <strong>+500,000</strong>
                      <span>Usuarios satisfechos en todo Perú</span>
                    </article>

                    <article className="promo-help">
                      <h4>¿Necesitas ayuda?</h4>
                      <p>Nuestros asesores están disponibles 24/7 para apoyarte.</p>
                      <a href="#">Contactar soporte →</a>
                    </article>
                  </aside>
                </div>
              </section>
            </div>
          </>
        ) : (
          <BlogPage featuredBackgroundSrc={heroImg} />
        )}
      </main>

      <RegisterModal
        open={authModal === 'register'}
        onClose={closeAuthModals}
        onNavigateToLogin={goToLogin}
        heroBackgroundSrc={heroImg}
      />
      <LoginModal
        open={authModal === 'login'}
        onClose={closeAuthModals}
        onNavigateToRegister={goToRegister}
      />
    </>
  )
}

export default App
