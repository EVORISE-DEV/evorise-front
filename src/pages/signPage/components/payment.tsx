import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './payment.module.css';

/**
 * Tipagem mínima para armazenar os dados que nos interessam
 * (você pode estender conforme necessidade).
 */
interface FormData {
  fullName: string;
  email: string;
  confirmEmail: string;
  cpfCnpj: string;
  phoneCountry: string;
  phoneNumber: string;
  cep: string;
  paymentMethod: PaymentMethod;
  cardNumber: string;
  cardHolderName: string;
  cardMonth: string;
  cardYear: string;
  cardCvv: string;
  installments: string;
}

type PaymentMethod = 'card' | 'pix' | 'hotmart' | 'boleto';

export const PaymentForm: React.FC = () => {
  // Estado que guarda todos os valores do formulário
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    confirmEmail: '',
    cpfCnpj: '',
    phoneCountry: 'BR +55',
    phoneNumber: '',
    cep: '',
    paymentMethod: 'card',
    cardNumber: '',
    cardHolderName: '',
    cardMonth: '',
    cardYear: '',
    cardCvv: '',
    installments: '12x de R$ 49,90/ano',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Muda o método de pagamento (card, pix, hotmart ou boleto)
  const handlePaymentMethod = (method: PaymentMethod) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: method,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aqui você chamaria a lógica de checkout/Stripe etc.
    console.log('Enviar formData:', formData);
    alert('Formulário enviado (simulação)');
  };

  return (
    <div className={styles.divContainer}>   
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.logoBox}>
            <span className={styles.logoIcon}>
                🏃‍♂️
            </span>
            <div>
              <p className={styles.planLabel}>Assinatura EVORISE</p>
              <p className={styles.planPrice}>12 x de R$ 49,90 / ano</p>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <button
            type="button"
            className={styles.changeCountryBtn}
          >
            BR Alterar país ▼
          </button>
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="fullName">Nome completo</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Digite seu nome completo"
          value={formData.fullName}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="email">Seu email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email para receber a compra"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="confirmEmail">Confirme seu email</label>
        <input
          type="email"
          id="confirmEmail"
          name="confirmEmail"
          placeholder="Digite novamente o seu email"
          value={formData.confirmEmail}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.twoColumns}>
        <div className={styles.fieldGroup}>
          <label htmlFor="cpfCnpj">CPF/CNPJ</label>
          <input
            type="text"
            id="cpfCnpj"
            name="cpfCnpj"
            placeholder="Digite o número do seu CPF ou CNPJ"
            value={formData.cpfCnpj}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="phoneNumber">Celular</label>
          <div className={styles.phoneWrapper}>
            <select
              id="phoneCountry"
              name="phoneCountry"
              value={formData.phoneCountry}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="BR +55">BR +55</option>
              <option value="US +1">US +1</option>
            </select>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="(62) 9921-9931"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="cep">Código postal (CEP)</label>
        <div className={styles.cepWrapper}>
          <input
            type="text"
            id="cep"
            name="cep"
            placeholder="Digite aqui seu CEP"
            value={formData.cep}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <button type="button" className={styles.searchCepBtn}>
            🔍
          </button>
        </div>
      </div>

      <div className={styles.paymentMethods}>
        <button
          type="button"
          className={
            formData.paymentMethod === 'card'
              ? `${styles.methodBtn} ${styles.methodBtnActive}`
              : styles.methodBtn
          }
          onClick={() => handlePaymentMethod('card')}
        >
          💳 Cartão de crédito
        </button>
        <button
          type="button"
          className={
            formData.paymentMethod === 'pix'
              ? `${styles.methodBtn} ${styles.methodBtnActive}`
              : styles.methodBtn
          }
          onClick={() => handlePaymentMethod('pix')}
        >
          🔷 PIX
        </button>
        <button
          type="button"
          className={
            formData.paymentMethod === 'hotmart'
              ? `${styles.methodBtn} ${styles.methodBtnActive}`
              : styles.methodBtn
          }
          onClick={() => handlePaymentMethod('hotmart')}
        >
          🏢 Conta Hotmart
        </button>
        <button
          type="button"
          className={
            formData.paymentMethod === 'boleto'
              ? `${styles.methodBtn} ${styles.methodBtnActive}`
              : styles.methodBtn
          }
          onClick={() => handlePaymentMethod('boleto')}
        >
          🎫 Boleto
        </button>
      </div>

      {formData.paymentMethod === 'card' && (
        <div className={styles.cardSection}>
          <h3 className={styles.sectionTitle}>Dados do cartão</h3>
          <div className={styles.fieldGroup}>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="Digite somente números"
              value={formData.cardNumber}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="cardHolderName">Nome do titular</label>
            <input
              type="text"
              id="cardHolderName"
              name="cardHolderName"
              placeholder="Digite o nome impresso no cartão"
              value={formData.cardHolderName}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.threeColumns}>
            <div className={styles.fieldGroup}>
              <label htmlFor="cardMonth">Mês</label>
              <select
                id="cardMonth"
                name="cardMonth"
                value={formData.cardMonth}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">MM</option>
                {Array.from({ length: 12 }, (_, i) => {
                  const m = (i + 1).toString().padStart(2, '0');
                  return (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="cardYear">Ano</label>
              <select
                id="cardYear"
                name="cardYear"
                value={formData.cardYear}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">AA</option>
                {Array.from({ length: 10 }, (_, i) => {
                  const year = new Date().getFullYear() + i;
                  return (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="cardCvv">
                CVV <span className={styles.infoCvv} title="Código de segurança">
                  ℹ️
                </span>
              </label>
              <input
                type="password"
                id="cardCvv"
                name="cardCvv"
                placeholder="CVV"
                value={formData.cardCvv}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="installments">Selecione o número de parcelas</label>
            <select
              id="installments"
              name="installments"
              value={formData.installments}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="12x de R$ 49,90/ano">12 x de R$ 49,90 / ano</option>
            </select>
          </div>
        </div>
      )}

      {(formData.paymentMethod === 'pix' ||
        formData.paymentMethod === 'hotmart' ||
        formData.paymentMethod === 'boleto') && (
        <div className={styles.otherMethodsSection}>
          {formData.paymentMethod === 'pix' && (
            <p>Você selecionou **PIX**. (Aqui pode aparecer um QR Code ou instruções.)</p>
          )}
          {formData.paymentMethod === 'hotmart' && (
            <p>
              Você selecionou **Conta Hotmart**. (Aqui podem ir dados da conta/endereço de
              pagamento.)
            </p>
          )}
          {formData.paymentMethod === 'boleto' && (
            <p>
              Você selecionou **Boleto**. (Aqui pode aparecer o PDF ou link para download.)
            </p>
          )}
        </div>
      )}
      <div className={styles.purchaseDetails}>
        <div className={styles.detailsLeft}>
          <p className={styles.detailLabel}>Detalhes da compra</p>
          <p className={styles.detailItem}>Assinatura EVORISE</p>
        </div>
        <div className={styles.detailsRight}>
          <p className={styles.detailLabel}>&nbsp;</p>
          <p className={styles.detailItem}>12 x de R$ 49,90 / ano</p>
        </div>
      </div>

      <button type="submit" className={styles.buyButton}>
        Comprar agora
      </button>
    </form>
    </div>
  );
};

export default PaymentForm;
