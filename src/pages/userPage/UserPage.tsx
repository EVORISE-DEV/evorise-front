import React, { useEffect, useState, FormEvent } from 'react';
import { getUserById, updateUser } from '../../services/user/UserTestService.tsx';
import { isAuthenticated } from '../../services/session/SessionService.tsx';
import { createAddress, IAddress } from '../../services/address/AddressService.tsx';
import { createContact, IContact } from '../../services/contact/ContactService.tsx';
import AddressForm from '../../components/Form/AddressForm.tsx';
import ContactForm from '../../components/Form/ContactForm.tsx';
import styles from './UserPage.module.css';
import { useAuth } from 'src/context/AuthContext.tsx';

export function UsersPage() {
  const [userAuth, setUser] = useState<any>({
    id: '',
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    oldPassword: '',
    profile: undefined,
    contact: undefined,
    address: undefined
  });
  const { user , logout } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const [showAddressForm, setShowAddressForm] = useState<boolean>(false);
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [editingAddress, setEditingAddress] = useState(false);
  const [editingContact, setEditingContact] = useState(false);
  const [activeTab, setActiveTab] = useState<'Perfil' | 'Contato' | 'Endereço'>('Perfil');

  const [addressForm, setAddressForm] = useState<IAddress>({
    address_name: user?.address?.address_name || '',
    country: user?.address?.country || '',
    state: user?.address?.state || '',
    city: user?.address?.city || '',
    cep: user?.address?.cep || '',
  });

  const [contactForm, setContactForm] = useState<IContact>({
    telephone: user?.contact?.telephone || '',
    smartphone: user?.contact?.smartphone || ''
  });

  useEffect(() => {
    if (user) {
      setAddressForm({
        address_name: user?.address?.address_name || '',
        country: user?.address?.country || '',
        state: user?.address?.state || '',
        city: user?.address?.city || '',
        cep: user?.address?.cep || '',
      });
      setContactForm({
        telephone: user.contact?.telephone || '',
        smartphone: user.contact?.smartphone || ''
      });
    }
  }, [user]);

  async function handleAddressSave(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      // await updateUser(user.id, { address: addressForm });
      setSuccess('Endereço atualizado com sucesso!');
    } catch (err) {
      setError('Falha ao atualizar endereço.');
    } finally {
      setLoading(false);
    }
  }

  async function handleContactSave(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      // await updateUser(user.id, { contact: contactForm });
      setSuccess('Contato atualizado com sucesso!');
    } catch (err) {
      setError('Falha ao atualizar contato.');
    } finally {
      setLoading(false);
    }
  }
  function renderContent() {
    if (activeTab === 'Perfil') {
      return (
        <div className={styles.profileSection}>
          <div className={styles.fieldGroup}>
            <label>Nome</label>
            <div>{user?.name} {user?.surname}</div>
          </div>
          <div className={styles.fieldGroup}>
            <label>Email</label>
            <div>{user?.email}</div>
          </div>
          <div className={styles.fieldGroup}>
            <label>Assinatura</label>
            <div>{user?.signature?.name}</div>
          </div>
          <button className={styles.logoutBtn} onClick={logout}>Sair</button>
        </div>
      );
    } else if (activeTab === 'Contato') {
      return (
        <form className={styles.form} onSubmit={handleContactSave}>
          <label>Telefone</label>
          <input
            type="text"
            value={contactForm.telephone}
            onChange={e => setContactForm(prev => ({ ...prev, telephone: e.target.value }))}
            placeholder="(XX) XXXXX-XXXX"
            className={styles.input}
          />
          <label>Celular</label>
          <input
            type="text"
            value={contactForm.smartphone}
            onChange={e => setContactForm(prev => ({ ...prev, smartphone: e.target.value }))}
            placeholder="(XX) XXXXX-XXXX"
            className={styles.input}
          />
          {error && <div className={styles.error}>{error}</div>}
          {success && <div className={styles.success}>{success}</div>}
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.buttonPrimary} disabled={loading}>
              {loading ? 'Salvando...' : 'Salvar'}
            </button>
            <button type="button" className={styles.buttonSecondary} onClick={() => setActiveTab('Perfil')}>
              Cancelar
            </button>
          </div>
        </form>
      );
    } else {
      return (
        <form className={styles.form} onSubmit={handleAddressSave}>
          <label>Endereço</label>
          <input
            type="text"
            value={addressForm.address_name}
            onChange={e => setAddressForm(prev => ({ ...prev, address_name: e.target.value }))}
            placeholder="Rua, número, complemento"
            className={styles.input}
          />
          <label>Cidade</label>
          <input
            type="text"
            value={addressForm.city}
            onChange={e => setAddressForm(prev => ({ ...prev, city: e.target.value }))}
            className={styles.input}
          />
          <label>Estado (UF)</label>
          <input
            type="text"
            value={addressForm.state}
            onChange={e => setAddressForm(prev => ({ ...prev, state: e.target.value }))}
            className={styles.input}
          />
          <label>CEP</label>
          <input
            type="text"
            value={addressForm.cep}
            onChange={e => setAddressForm(prev => ({ ...prev, cep: e.target.value }))}
            className={styles.input}
          />
          {error && <div className={styles.error}>{error}</div>}
          {success && <div className={styles.success}>{success}</div>}
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.buttonPrimary} disabled={loading}>
              {loading ? 'Salvando...' : 'Salvar'}
            </button>
            <button type="button" className={styles.buttonSecondary} onClick={() => setActiveTab('Perfil')}>
              Cancelar
            </button>
          </div>
        </form>
      );
    }
  }



  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Área do Usuário</h1>
      <nav className={styles.tabs}>
        {['Perfil', 'Contato', 'Endereço'].map(tab => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab as any)}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
}

export default UsersPage;
