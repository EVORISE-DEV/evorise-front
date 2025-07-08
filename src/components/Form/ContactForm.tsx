import React, { FormEvent, useState } from 'react';
import InputMask from 'react-input-mask';
import { IContact } from '../../services/contact/ContactService.tsx';

interface ContactFormProps {
  onSubmit: (contactData: IContact) => void;
  onCancel: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, onCancel }) => {
  const [contactForm, setContactForm] = useState<IContact>({
    telephone: '',
    smartphone: '',
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(contactForm);
    // Limpar o formulário após submissão (opcional)
    setContactForm({ telephone: '', smartphone: '' });
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="telephone">Telefone:</label>
        <InputMask
          mask="(99) 9999-9999"
          value={contactForm.telephone || ''}
          onChange={(e) =>
            setContactForm({ ...contactForm, telephone: e.target.value })
          }
          placeholder="Digite o telefone (opcional)"
        >
          {(inputProps: any) => <input type="text" id="telephone" {...inputProps} />}
        </InputMask>
      </div>
      <div className="form-group">
        <label htmlFor="smartphone">Smartphone:</label>
        <InputMask
          mask="(99) 99999-9999"
          value={contactForm.smartphone}
          onChange={(e) =>
            setContactForm({ ...contactForm, smartphone: e.target.value })
          }
          placeholder="Digite o número do smartphone"
          required
        >
          {(inputProps: any) => <input type="text" id="smartphone" {...inputProps} />}
        </InputMask>
      </div>
      <button type="submit" className="btn-submit">
        Salvar Contato
      </button>
      <button type="button" onClick={onCancel} className="cancel-btn">
        Cancelar
      </button>
    </form>
  );
};

export default ContactForm;
