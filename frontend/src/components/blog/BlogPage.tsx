import { useRef, useState } from 'react'
import { blogCategories, featuredPost, recentPosts } from '../../data/blogContent'
import './BlogPage.css'

type BlogPageProps = {
  featuredBackgroundSrc: string
}

function IconClock() {
  return (
    <svg className="blog-icon-clock" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5.5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function BlogPage({ featuredBackgroundSrc }: BlogPageProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const scrollStories = (direction: -1 | 1) => {
    scrollerRef.current?.scrollBy({
      left: direction * Math.min(360, scrollerRef.current.clientWidth * 0.88),
      behavior: 'smooth',
    })
  }

  return (
    <div className="blog-page">
      <section className="blog-featured" aria-labelledby="blog-featured-heading">
        <div className="blog-featured-grid">
          <div className="blog-featured-visual">
            <img src={featuredBackgroundSrc} alt="" decoding="async" />
            <div className="blog-featured-visual-frame" aria-hidden="true" />
          </div>
          <div className="blog-featured-copy">
            <p className="blog-kicker">Texto largo · edición</p>
            <h1 id="blog-featured-heading" className="blog-featured-title">
              {featuredPost.title}
            </h1>
            <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>
            <a className="blog-featured-cta" href="#">
              Seguir leyendo
            </a>
          </div>
        </div>
      </section>

      <div className="blog-layout">
        <div className="blog-main">
          <div className="blog-section-head">
            <h2 className="blog-section-title">Lo último</h2>
            <div className="blog-carousel-nav" aria-label="Desplazar lista">
              <button type="button" onClick={() => scrollStories(-1)} aria-label="Anterior">
                ←
              </button>
              <button type="button" onClick={() => scrollStories(1)} aria-label="Siguiente">
                →
              </button>
            </div>
          </div>

          <div className="blog-cards-scroller" ref={scrollerRef}>
            <ul className="blog-cards-track">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <article className="blog-card">
                    <div
                      className={`blog-card-thumb blog-card-thumb--${post.thumbTone}`}
                      aria-hidden="true"
                    />
                    <div className="blog-card-body">
                      <p className="blog-card-category">{post.category}</p>
                      <h3 className="blog-card-title">{post.title}</h3>
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                      <div className="blog-card-footer">
                        <span className="blog-card-meta">
                          <IconClock />
                          {post.readMinutes} min
                        </span>
                        <a className="blog-card-more" href="#">
                          Abrir
                        </a>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="blog-sidebar" aria-label="Barra lateral">
          <div className="blog-widget blog-widget--categories">
            <h3 className="blog-widget-title">Temas</h3>
            <ul className="blog-category-list">
              {blogCategories.map((cat) => (
                <li key={cat}>
                  <button type="button" className="blog-category-link">
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="blog-widget blog-widget--newsletter">
            <h3 className="blog-widget-newsletter-title">Carta quincenal</h3>
            <p className="blog-widget-newsletter-text">
              Un correo corto: lo que leímos, un aviso si aparece algo raro en el sector y un solo
              enlace útil. Sin cadenas de “marketing”.
            </p>
            <label className="blog-newsletter-label" htmlFor="blog-newsletter-email">
              Correo
            </label>
            <input
              id="blog-newsletter-email"
              type="email"
              className="blog-newsletter-input"
              placeholder="tu@correo.com"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              autoComplete="email"
            />
            <button type="button" className="blog-newsletter-submit">
              Apuntarme
            </button>
            <p className="blog-newsletter-foot">
              Puedes salirte cuando quieras; no compartimos la lista con terceros.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
