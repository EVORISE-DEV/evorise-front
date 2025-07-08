import React, { useEffect, useState, FormEvent } from 'react';
import { getUserById, IUser, updateUser } from '../../services/user/UserTestService.tsx';
import { isAuthenticated } from '../../services/session/SessionService.tsx';
import { createAddress, IAddress } from '../../services/address/AddressService.tsx';
import { createContact, IContact } from '../../services/contact/ContactService.tsx';
import AddressForm from '../../components/Form/AddressForm.tsx';
import ContactForm from '../../components/Form/ContactForm.tsx';
import './UserPage.css';

export function UsersPage() {
  const [user, setUser] = useState<IUser>({
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
  const [loading, setLoading] = useState<boolean>(true);
  const [showAddressForm, setShowAddressForm] = useState<boolean>(false);
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  useEffect(() => {
    async function fetchUser() {
      if (isAuthenticated()) {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const userObj: IUser = JSON.parse(storedUser);
          try {
            const fetchedUser = await getUserById(userObj.id);
            if (fetchedUser) {
              setUser(fetchedUser);
            } else {
              setUser(userObj);
            }
          } catch (error) {
            console.error('Erro ao buscar usuário no servidor:', error);
            setUser(userObj);
          }
        }
      }
      setLoading(false);
    }
    fetchUser();
  }, []);

  async function handleAddressSubmit(addressData: IAddress) {
    try {
      const currentUser = user;
      const newAddress = await createAddress(addressData);
      const updatedUserData = { ...currentUser, address: newAddress };
      const updatedUser = await updateUser(updatedUserData.id, updatedUserData);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setShowAddressForm(false);
    } catch (error) {
      console.error('Erro ao atualizar endereço', error);
    }
  }

  async function handleContactSubmit(contactData: IContact) {
    try {
      const newContact: IContact = await createContact(contactData);
      const updatedUserData = { ...user, contact: newContact };
      const updatedUser = await updateUser(updatedUserData.id, updatedUserData);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setShowContactForm(false);
    } catch (error) {
      console.error('Erro ao criar contato:', error);
    }
  }

  if (!isAuthenticated()) {
    return (
      <div className="user-container">
        <p>Você precisa estar logado para acessar esta área.</p>
      </div>
    );
  }

  if (loading) {
    return <div className="loading">Carregando informações...</div>;
  }

  return (
    <div className="user-container">
      <div className="card-user-container">
        <div className="main-user-info">
          <h2>Bem-vindo{user ? `, ${user.name} ${user.surname}` : ''}!</h2>
          {user && <p><strong>Email:</strong> {user.email}</p>}
          {user && user.profile && <p><strong>Perfil:</strong> {user.profile.name}</p>}
        </div>
        <div className="address-user-info">
          <div className="header-address">
            <h3>Endereço</h3>
            {(!user?.address) && (
              <button 
                className="add-address-btn" 
                onClick={() => setShowAddressForm(!showAddressForm)}
                title="Adicionar Endereço"
              >
                +
              </button>
            )}
          </div>
          {user && user.address ? (
            <div className="address-details">
              <p><strong>Endereço:</strong> {user.address.address_name}</p>
              <p><strong>País:</strong> {user.address.country}</p>
              <p><strong>Estado:</strong> {user.address.state}</p>
              <p><strong>Cidade:</strong> {user.address.city}</p>
              <p><strong>CEP:</strong> {user.address.cep}</p>
            </div>
          ) : (
            showAddressForm && (
              <AddressForm 
                onSubmit={handleAddressSubmit}
                onCancel={() => setShowAddressForm(false)}
              />
            )
          )}
        </div>
        <div className="contact-user-info">
          <h3>Contatos</h3>
          {(!user?.contact) && (
            <button 
              className="add-address-btn" 
              onClick={() => setShowContactForm(!showContactForm)}
              title="Adicionar Contato"
            >
              +
            </button>
          )}
        </div>
        {user && user.contact ? (
          <div className="address-details">
            <p><strong>Telefone:</strong> {user.contact.telephone}</p>
            <p><strong>Smartphone:</strong> {user.contact.smartphone}</p>
          </div>
        ) : (
          showContactForm && (
            <ContactForm 
              onSubmit={handleContactSubmit}
              onCancel={() => setShowContactForm(false)}
            />
          )
        )}
      </div>
      <div className="signature-user-container">
        <div className="signature-user">
          <h3>Assinatura</h3>
          {user && user.signature ? (
            <p><strong>Assinatura:</strong> {user.signature.name}</p>
          ) : (
            <p>Nenhuma assinatura cadastrada.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
