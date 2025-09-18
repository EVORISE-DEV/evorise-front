import React, { useState } from 'react';
import styles from './requestReset.module.css';
import { requestPasswordReset } from '../../services/password/PasswordService'; // Ajuste o path se necessário

const RequestReset: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      await requestPasswordReset(email);
      setMessage('Se o e-mail estiver cadastrado, você receberá as instruções em instantes.');
      setEmail('');
    } catch (err: any) {
      setError(
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        'Erro ao solicitar redefinição. Tente novamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <div className={styles.container}>
        <div className={styles.title}>Esqueci minha senha</div>
        {message && <div className={styles.message}>{message}</div>}
        {error && <div className={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" className={styles.label}>E-mail cadastrado</label>
            <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Seu e-mail"
            required
            disabled={loading}
            />
            <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar link para o email'}
            </button>
        </form>
        </div>
        <hr className={styles.hr} />
    </div>
  );
};

export default RequestReset;
