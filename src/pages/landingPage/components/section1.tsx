
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowUpWideShort } from 'react-icons/fa6';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './section1.module.css';
import logo from '../../../assets/images/teste4.jpg';
import logo2 from '../../../assets/images/teste2.jpg';
import logo3 from '../../../assets/images/teste3.jpg'; 
import logo4 from '../../../assets/images/ranking.jpg';
import cta from '../../../assets/svg/cta_image.svg';
import training from '../../../assets/svg/training.svg';
import running from '../../../assets/svg/running.svg';
import challenge from '../../../assets/svg/challenge.svg';
import award from '../../../assets/svg/awards.svg';
import ranking from '../../../assets/svg/ranking.svg';
import recorded from '../../../assets/svg/recorded.svg';
import Video from './video/video';

export const Section1: React.FC = () => {
    
    const baseCards  = [
        {
            href: "/treinos-presenciais",
            img: training,
            alt: "Treinos Presenciais",
            description: "Treinos com especialistas",
        },
        {
            href: "/corridas-semanais",
            img: running,
            alt: "Corridas Semanais",
            description: "Corridas semanais",
        },
        {
            href: "/conteudo",
            img: recorded,
            alt: "Conteúdos Gravados",
            description: "Conteúdos Gravados",
        },
        {
            href: "/ebooks-guias",
            img: award,
            alt: "Premiações",
            description: "Premiações",
        },
        {
            href: "/desafios-competitivos",
            img: challenge,
            alt: "Desafios Competitivos",
            description: "Desafios Competitivos",
        },
        // {
        //     href: "/treinos-presenciais",
        //     img: logo5,
        //     alt: "Treinos Presenciais",
        //     description: "Treinos",
        // },
        {
            href: "/ranking",
            img: ranking,
            alt: "Rankings e Ligas",
            description: "Rankings e Competições",
        },
    ];  

    const sliderRef = useRef<HTMLDivElement>(null);


    const [cards, setCards] = useState(baseCards);
    
    const appended = useRef(false);

    useEffect(() => {
        let lastTime = performance.now();

    const animate = () => {
        const slider = sliderRef.current;
        if (slider) {
            const now = performance.now();
            const delta = now - lastTime;
            lastTime = now;

            const distance = (5000 / 1000) * delta;
            slider.scrollLeft += distance;

            if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 100) {
                if (!appended.current) {

                const gapElement = document.createElement('div');
                gapElement.style.width = '100px';
                slider.appendChild(gapElement);

                setCards(prevCards => [...prevCards, ...baseCards]);
                appended.current = true;
                }
            } else if (slider.scrollLeft < 10) {

                appended.current = false;
            }
        }
        requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    }, []);

    const scrollToHeader = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <section id="section1" className={styles.landing_section}>

                <button onClick={scrollToHeader} className={styles.scroll_top_button}>
                    <FaArrowUpWideShort></FaArrowUpWideShort>
                </button>

                <div className={styles.section1_content}>
                    <div className={styles.section1_content_left}>
                        <div className={styles.section1_content_left_h1}>
                            <h1 className={styles.h1_1}>Corra com<br /> <span className={styles.h1_2}>companhia,<br /></span> supere com <span className={styles.h1_2}>união!</span></h1> 
                        </div>

                        <div className={styles.section1_content_left_h4}>
                            <h4>Supere limites com desafios, treinos presenciais e uma comunidade que inspira!</h4>
                        </div>
                        <div className={styles.section1_content_left_button}>
                            <button>Quero ser aluno</button>
                        </div>
                    </div>
                    <div className={styles.carousel_placeholder}>                
                        <Swiper 
                            cssMode={true}
                            navigation={false}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                            autoplay={{
                            delay: 5500,
                            disableOnInteraction: false,
                            }}
                            slidesPerView = {1}
                            loop = {true}
                        >
                                <img src={cta} alt="Treinos Presenciais" className={styles.carousel_image} />
                            {/* <SwiperSlide>
                                <img src={cta} alt="Treinos Presenciais" className={styles.carousel_image} />
                            </SwiperSlide> */}
                            {/* <SwiperSlide>
                                <img src={logo2} alt="Corridas Semanais" className={styles.carousel_image} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={logo3} alt="Conteúdos Gravados" className={styles.carousel_image} />
                            </SwiperSlide> */}
                            {/* Adicione mais slides conforme necessário */}
                        </Swiper>
                    </div>
                </div>

                <div className={styles.cards_container} ref={sliderRef}>
                    {cards.map((card, index) => (
                    <button key={index}  className={styles.card}>
                        <div className="post-card">
                        <img src={card.img} alt={card.alt} className={styles.card_image} />
                        <div className={styles.card_description}>{card.description}</div>
                        </div>
                    </button>
                    ))}
                </div>
            </section>
            <div className={styles.title2}>
                <h3 className={styles.title2_h3}>Tudo o que você vai ter acesso dentro do nosso ecossistema</h3>
            </div>
        </div>
    );
}