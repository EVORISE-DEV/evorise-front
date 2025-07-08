import React, { FormEvent, useState } from 'react';
import { IAddress } from '../../services/address/AddressService';

interface AddressFormProps {
  onSubmit: (addressData: IAddress) => void;
  onCancel: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onSubmit, onCancel }) => {
  const [addressForm, setAddressForm] = useState<IAddress>({
    address_name: '',
    country: '',
    state: '',
    city: '',
    cep: '',
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(addressForm);
    // Limpar o formulário após submissão (opcional)
    setAddressForm({
      address_name: '',
      country: '',
      state: '',
      city: '',
      cep: '',
    });
  }

  return (
    <form onSubmit={handleSubmit} className="address-form">
      <div className="form-group">
        <label htmlFor="address_name">Endereço:</label>
        <input 
          type="text" 
          id="address_name" 
          value={addressForm.address_name} 
          onChange={(e) => setAddressForm({ ...addressForm, address_name: e.target.value })}
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="country">País:</label>
        <input 
          type="text" 
          id="country" 
          value={addressForm.country} 
          onChange={(e) => setAddressForm({ ...addressForm, country: e.target.value })}
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">Estado:</label>
        <input 
          type="text" 
          id="state" 
          value={addressForm.state} 
          onChange={(e) => setAddressForm({ ...addressForm, state: e.target.value })}
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">Cidade:</label>
        <input 
          type="text" 
          id="city" 
          value={addressForm.city} 
          onChange={(e) => setAddressForm({ ...addressForm, city: e.target.value })}
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="cep">CEP:</label>
        <input 
          type="text" 
          id="cep" 
          value={addressForm.cep} 
          onChange={(e) => setAddressForm({ ...addressForm, cep: e.target.value })}
          required 
        />
      </div>
      <button type="submit" className="save-address-btn">Salvar Endereço</button>
      <button type="button" onClick={onCancel} className="cancel-btn">Cancelar</button>
    </form>
  );
};

export default AddressForm;
