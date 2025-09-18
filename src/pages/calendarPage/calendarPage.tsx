// src/pages/calendarPage.tsx
import React, { useState, useEffect, useCallback } from 'react';
import './calendarPage.css'
import eventJson from "./events.json";  

import calendar from '../../assets/svg/event_calendar.svg';
import {EventFilter} from  './eventFilter.tsx';

import arrow from '../../assets/svg/arrow.svg';
import ob_zoom from '../../assets/svg/ob_zoom.svg';
import calendar_svg from '../../assets/svg/calendar.svg';
import local_pin from '../../assets/svg/local_pin.svg';

import { Event, EventCalendar, EventFilters } from '../interfaces/event.tsx';
import { getEvents } from 'src/services/calendar/CalendarService.tsx';

import styles from './calendarPage.module.css';
  

  
  const CalendarPage: React.FC =  () => {
    const [eventCalendar, setEventCalendar] = useState<EventCalendar[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLocal, setSelectedLocal] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedDesc, setSelectedDesc] = useState("");
    const [events, setEvents] = useState<EventCalendar[]>([]);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(3);
    const [total, setTotal] = useState<number>();
    const [totalPages, setTotalPages] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    
    const [filters, setFilters] = useState<EventFilters>({
      title: '',
      description: '',
      local: '',
      date: '',
      time: ''
    });
    const [debouncedFilters, setDebouncedFilters] = useState<EventFilters>(filters);
    
    useEffect(() => {
      const h = setTimeout(() => {
        setDebouncedFilters(filters);
        setPage(1); 
      }, 350);
      return () => clearTimeout(h);
    }, [filters]);

    const fetchEvents = useCallback(async () => {
      setLoading(true);
      try {
        const data = await getEvents(page, limit, debouncedFilters);
        setEvents(data.events);
        setTotal(data.total);
        setPage(data.page);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      } finally {
        setLoading(false);
      }
    }, [page, limit, debouncedFilters]);
    
    useEffect(() => {
      fetchEvents();
    }, [fetchEvents]);

    function handlePrev() {
      if (page > 1) setPage(page - 1);
    }

    function handleNext() {
      if (page < totalPages) setPage(page + 1);
    }

    function handleLimitChange(e: React.ChangeEvent<HTMLSelectElement>) {
      setLimit(Number(e.target.value));
      setPage(1); 
    }

    function onFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = e.target;
      setFilters(prev => ({ ...prev, [name]: value }));
    }
    function clearFilters() {
      setFilters({ title: '', description: '', local: '', date: '', time: '' });
    }
  
    const [showModal, setShowModal] = useState(false);

    function closeModal() {
      setShowModal(false);
    }
    
    const filteredEvents = events.filter((event) => {
      return (
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedLocal ? event.local === selectedLocal : true) &&
        (selectedDate ? event.date === selectedDate : true) &&
        (selectedDesc ? event.title === selectedDesc : true)
      );
    });
  
    return (
      <section id="section1-calendar" className="section1-calendar"> 
        <div className="calendar-container">
          <div className="calendar-container-img">
            <img src={calendar} alt="event" className="calendar-img" />
          </div>
          <div className={styles.filtersBar}>
            {/* Desktop/Large: filtros inline */}
            <div className={styles.filtersInline}>
              <div className={styles.input_group}>
                <img src={ob_zoom} alt="title" />
                <input name="title" placeholder="Digite para pesquisar" value={  filters.title || ''} onChange={onFilterChange} />
              </div>
              {/* <div className={styles.input_group}>
                <img src={ob_zoom} alt="title" />
                <input name="description" placeholder="Descrição" value={filters.description || ''} onChange={onFilterChange} />

              </div> */}
              <div className={styles.input_group}>
                <img src={local_pin} alt="title" />
                <input name="local" placeholder="Local" value={filters.local || ''} onChange={onFilterChange} />

              </div>
              <div className={styles.input_group}>
                <img src={calendar_svg} alt="title" />
                <input name="date" type="date" placeholder='Todas as Datas' value={filters.date || ''} onChange={onFilterChange} />

              </div>
              <div className={styles.input_group}>
                <img src={arrow} alt="title" />
                <input name="time" type="time" value={filters.time || ''} onChange={onFilterChange} />
                
              </div>
              <button className={styles.clearBtn} onClick={clearFilters}>Limpar</button>
            </div>

            {/* Mobile/Small: apenas ações (abre modal) */}
            <div className={styles.filtersMobileActions}>
              <button className={styles.applyBtn} onClick={() => setShowModal(true)}>Filtrar</button>
              <button className={styles.clearBtn} onClick={clearFilters}>Limpar</button>
            </div>
          </div>
          
          <div className="calendar-results">
              <div className="calendar-results-container">
                    {loading ? <div>Carregando...</div> : (
                      <ul className="calendar-results-cards">
                        {filteredEvents.map((event) => {

                          const cover = event.photos.find(photo => photo.caption === 'capa');
                          const distance = event.distances.map(d => d.distance/1000);
                          const formatted = new Date(event.date).toLocaleDateString('pt-br', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric'
                          });
                          

                        return (
                          <li key={event.id} className={styles.cardsInfo}>
                            <div className="results-cards-img">
                              {cover && (
                                <img
                                  key={cover.id}
                                  src={cover.cover_url}
                                  alt={cover.caption}
                                />
                              )}
                            </div>
                            <div className={styles.info}>
                              <h4 className={styles.eventType}>{event.title}</h4>
                              <h3>{event.description}</h3>
                              <div className={styles.info}>
                                <p>Data: {formatted}</p>
                                <p>Local: {event.local}</p>
                                <p>Horário: {event.time}</p>
                                {distance && <p>Distância: <b></b>
                                  {distance.map(d=> `${d} km ` )+ ''} </p>
                                }
                              </div>
                            </div>
                          </li>
                          )
                        })}
                      </ul>
                    )}
              </div>
              {/* PAGINAÇÃO */}
              <div className={styles.paginationRow}>
                <button onClick={handlePrev} disabled={page <= 1}>Anterior</button>
                <p>Página {page} de {totalPages}</p>
                <button onClick={handleNext} disabled={page >= totalPages}>Próxima</button>

                <div className={styles.limit}>
                  <p>Itens por página:{' '}</p>
                  
                  <select value={limit} onChange={handleLimitChange}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                  </select>
                  <div> <p>Total: {total}</p> </div>
                </div>
              </div>
          </div>
          {showModal && (
            <div
              className={styles.modalBackdrop}
              onClick={closeModal}
              onKeyDown={(e) => e.key === 'Escape' && closeModal()}
              role="dialog"
              aria-modal="true"
            >
              <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h3>Filtrar eventos</h3>
                <input name="title" placeholder="Título" value={filters.title || ''} onChange={onFilterChange} />
                <input name="description" placeholder="Descrição" value={filters.description || ''} onChange={onFilterChange} />
                <input name="local" placeholder="Local" value={filters.local || ''} onChange={onFilterChange} />
                <input name="date" type="date" value={filters.date || ''} onChange={onFilterChange} />
                <input name="time" type="time" value={filters.time || ''} onChange={onFilterChange} />

                <div className={styles.modalActions}>
                  <button className={styles.secondary} onClick={closeModal}>Cancelar</button>
                  {/* o filtro já é aplicado onChange; “Aplicar” só fecha */}
                  <button className={styles.primary} onClick={closeModal}>Aplicar</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };
  
  export default CalendarPage;
