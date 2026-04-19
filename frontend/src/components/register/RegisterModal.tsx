import { useEffect, useId, useState } from 'react'
import { IconLock, IconMail, IconPhone, IconUser } from './RegisterIcons'

type RegisterModalProps = {
  open: boolean
  onClose: () => void
  onNavigateToLogin: () => void
  heroBackgroundSrc: string
}

export function RegisterModal({
  open,
  onClose,
  onNavigateToLogin,
  heroBackgroundSrc,
}: RegisterModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)
  const titleId = useId()

  useEffect(() => {
    if (!open) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  if (!open) {
    return null
  }

  return (
    <div
      className="register-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="register-split">
        <aside
          className="register-aside"
          style={{ backgroundImage: `url(${heroBackgroundSrc})` }}
        >
          <div className="register-aside-scrim" />
          <div className="register-aside-content">
            <p className="register-aside-brand">Jemacash</p>
            <h2 className="register-aside-title">
              Tu aliado en el camino al éxito financiero.
            </h2>
            <p className="register-aside-footer">
              Únete a la comunidad de Jemacash y gestiona tus finanzas con la seguridad de un
              experto.
            </p>
          </div>
        </aside>

        <div className="register-panel">
          <button
            type="button"
            className="register-close"
            onClick={onClose}
            aria-label="Cerrar registro"
          >
            ×
          </button>

          <form
            className="register-form"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <header className="register-form-header">
              <h2 id={titleId}>Crear Usuario</h2>
              <p>Comienza tu viaje financiero hoy mismo.</p>
            </header>

            <div className="register-field">
              <label htmlFor="reg-fullname">Nombre completo</label>
              <div className="register-input-row">
                <span className="register-input-icon">
                  <IconUser />
                </span>
                <input
                  id="reg-fullname"
                  name="fullname"
                  type="text"
                  autoComplete="name"
                  placeholder="Ej. Juan Pérez"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>

            <div className="register-field">
              <label htmlFor="reg-email">Correo electrónico</label>
              <div className="register-input-row">
                <span className="register-input-icon">
                  <IconMail />
                </span>
                <input
                  id="reg-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="nombre@ejemplo.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>

            <div className="register-field">
              <label htmlFor="reg-phone">Número de teléfono</label>
              <div className="register-input-row">
                <span className="register-input-icon">
                  <IconPhone />
                </span>
                <input
                  id="reg-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+51 987 654 321"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </div>

            <div className="register-field">
              <label htmlFor="reg-password">Contraseña</label>
              <div className="register-input-row">
                <span className="register-input-icon">
                  <IconLock />
                </span>
                <input
                  id="reg-password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Mínimo 8 caracteres"
                  minLength={8}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>

            <label className="register-terms">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(event) => setTermsAccepted(event.target.checked)}
              />
              <span>
                Acepto los <a href="#">Términos y Condiciones</a> y la{' '}
                <a href="#">Política de Privacidad</a> de Jemacash.
              </span>
            </label>

            <button type="submit" className="register-submit">
              Crear cuenta
            </button>

            <p className="register-login-prompt">
              ¿Ya tienes cuenta?{' '}
              <button type="button" className="register-login-link" onClick={onNavigateToLogin}>
                Inicia sesión
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
