import React from 'react';
import styles from './eventFilter.module.css';

interface EventFilterProps {
  searchTerm: string;
  selectedLocal: string;
  selectedDate: string;
  selectedDesc: string;
  locals: string[];        // lista de locais pra popular <select>
  dates: string[];
  titles: string[];
  descriptions: string[];  // lista de descrições únicas
  onSearchTermChange: (v: string) => void;
  onLocalChange: (v: string) => void;
  onDateChange: (v: string) => void;
  onDescChange: (v: string) => void;
}

export function EventFilter({
  searchTerm,
  selectedLocal,
  selectedDate,
  selectedDesc,
  locals,
  dates,
  titles,
  descriptions,
  onSearchTermChange,
  onLocalChange,
  onDateChange,
  onDescChange,
}: EventFilterProps) {
  return (
    <form className={styles.filter_container}>
      <input 
        type="text" 
        title='Descrição do evento' 
        placeholder="Digite para pesquisar" value={searchTerm} onChange={e => onSearchTermChange(e.target.value)}
      />

      <select value={selectedLocal} onChange={e => onLocalChange(e.target.value)}>
        <option value="">Local</option>
        {locals.map(loc => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>

      <select value={selectedDate} onChange={e => onDateChange(e.target.value)}>
        <option value="">Todas as datas</option>
        {dates.map(d => {
          const formatted = new Date(d).toLocaleDateString('pt-br', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          });
          return (
            <option key={d} value={d}>
              {formatted}
            </option>
          );
        })}
      </select>

      <select value={selectedDesc} onChange={e => onDescChange(e.target.value)}>
        <option value="">Modalidades</option>
        {titles.map(desc => (
          <option key={desc} value={desc}>
            {desc}
          </option>
        ))}
      </select>

    </form>
  );
}