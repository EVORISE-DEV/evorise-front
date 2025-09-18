// resetPassword.tsx
import React, { useState } from 'react';
import styles from './resetPassword.module.css';
import { passwordReset } from 'src/services/password/PasswordService';

const ResetPassword: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const [password, setpassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleClose = () => setShowModal(false);

  const token = new URLSearchParams(window.location.search).get('token');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!password || !confirmpassword) {
      setError('Preencha todos os campos.');
      return;
    }
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    if (password !== confirmpassword) {
      setError('As senhas não coincidem.');
      return;
    }
    try {
        const res = await passwordReset(token || '' , password);

        const data = await res.json(); 

        if (res.ok) {
            setSuccess('Senha redefinida com sucesso!');
            setTimeout(() => 
                window.close()
            , 2300);
        } else if (res.status === 400) {
            setError(data.message || 'Token expirado ou inválido!');
        } else if (res.status === 404) {
            setError('Token não encontrado. Solicite nova redefinição.');
        } else {
            setError(data.message || 'Erro ao redefinir senha. Tente novamente.');
        }
        } catch(error: any) {
            setError(error.response?.data?.error || error);
        }

  };

  if (!showModal) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.title}>Defina uma Nova Senha</div>
        {error && <div className={styles.error}>{error}</div>}
        {success && <div className={styles.success}>{success}</div>}
        <form onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="password">Nova Senha</label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={e => setpassword(e.target.value)}
            minLength={6}
            autoFocus
            required
          />

          <label className={styles.label} htmlFor="confirmpassword">Confirmar Senha</label>
          <input
            type="password"
            id="confirmpassword"
            className={styles.input}
            value={confirmpassword}
            onChange={e => setConfirmpassword(e.target.value)}
            minLength={6}
            required
          />

          <button type="submit" className={styles.button}>
            Salvar Nova Senha
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
