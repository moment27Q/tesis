import { useEffect, useId, useState } from 'react'
import { IconEye, IconEyeOff, IconGoogle, IconPasskey } from './LoginIcons'

type LoginModalProps = {
  open: boolean
  onClose: () => void
  onNavigateToRegister: () => void
}

export function LoginModal({ open, onClose, onNavigateToRegister }: LoginModalProps) {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const titleId = useId()
  const passwordId = useId()

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
      className="login-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="login-split">
        <aside className="login-aside" aria-label="Jemacash">
          <div className="login-aside-building" aria-hidden="true" />
          <div className="login-aside-scrim" />
          <div className="login-aside-content">
            <p className="login-aside-brand">Jemacash</p>
            <div className="login-aside-copy">
              <h2 className="login-aside-title">Tu futuro financiero comienza hoy.</h2>
              <p className="login-aside-sub">
                Gestione su capital con la elegancia y seguridad que solo Jemacash puede ofrecer.
                Rápida y eficiente.
              </p>
            </div>
            <div className="login-social-pill">
              <div className="login-avatar-stack" aria-hidden="true">
                <span className="login-avatar" />
                <span className="login-avatar" />
                <span className="login-avatar" />
              </div>
              <div className="login-social-text">
                <strong>+10k Usuarios</strong>
                <span>Confían en nuestra plataforma</span>
              </div>
            </div>
          </div>
        </aside>

        <div className="login-panel">
          <button type="button" className="login-close" onClick={onClose} aria-label="Cerrar">
            ×
          </button>

          <form
            className="login-form"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <header className="login-form-header">
              <h2 id={titleId}>Iniciar Sesión</h2>
              <p>Bienvenido de nuevo. Acceda a su panel de control.</p>
            </header>

            <div className="login-field">
              <label htmlFor="login-identifier">Correo electrónico o Teléfono</label>
              <input
                id="login-identifier"
                name="identifier"
                type="text"
                autoComplete="username"
                placeholder="nombre@ejemplo.com"
                value={identifier}
                onChange={(event) => setIdentifier(event.target.value)}
              />
            </div>

            <div className="login-field">
              <div className="login-label-row">
                <label htmlFor={passwordId}>Contraseña</label>
                <a className="login-link-inline" href="#">
                  ¿Olvidó su contraseña?
                </a>
              </div>
              <div className="login-password-wrap">
                <input
                  id={passwordId}
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  type="button"
                  className="login-toggle-visibility"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPassword ? <IconEyeOff /> : <IconEye />}
                </button>
              </div>
            </div>

            <label className="login-remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
              />
              <span>Mantenerme conectado</span>
            </label>

            <button type="submit" className="login-submit">
              Iniciar sesión <span aria-hidden="true">→</span>
            </button>

            <div className="login-divider">
              <span>O continuar con</span>
            </div>

            <div className="login-oauth-row">
              <button type="button" className="login-oauth-btn">
                <IconGoogle className="login-oauth-icon" />
                Google
              </button>
              <button type="button" className="login-oauth-btn">
                <IconPasskey className="login-oauth-icon login-oauth-icon--stroke" />
                Passkey
              </button>
            </div>

            <p className="login-register-prompt">
              ¿No tiene una cuenta?{' '}
              <button type="button" className="login-register-link" onClick={onNavigateToRegister}>
                Regístrese gratis
              </button>
            </p>

            <nav className="login-legal" aria-label="Enlaces legales">
              <a href="#">Ayuda</a>
              <a href="#">Privacidad</a>
              <a href="#">Términos</a>
            </nav>
          </form>
        </div>
      </div>
    </div>
  )
}
