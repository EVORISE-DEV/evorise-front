
import React, { useEffect, useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import line1 from '../../../assets/svg/descoberta.svg';
import line2 from '../../../assets/svg/evolucao.svg';
import line3 from '../../../assets/svg/performance.svg';
import img8 from '../../../assets/svg/image 8.svg';
import video from '../../../assets/svg/video_play.svg';
import styles from './section2.module.css';
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoPlayCircle } from "react-icons/io5";
import Video from './video/video.tsx';

export const Section2: React.FC = () => {
    return (
        <section id="section3" className={styles.landing_section3}>

            <div className={styles.section3_video}>
                <div className={styles.section3_video_content}>
                    <div className={styles.section3_video_content_h3} >
                        <h3>O melhor conteúdo sobre corrida e performance, com aulas abrangendo 
                        todas as habilidades que você precisa para evoluir no esporte.</h3>
                    </div>
                    <div style={{ width: '100%', margin: ' auto', padding: '0 1rem' }}>
                        <h2>Assista ao nosso tutorial</h2>
                        {/* Passe aqui o ID do vídeo do YouTube que você quer embedar */}
                        <Video videoId="Ly_6G9oBGgw" title="Tutorial EVORISE" />
                    </div>
                    <div className={styles.section3_video_content_mp4} >
                        {/* <div className={styles.mp4_video}>

                            <div className={styles.mp4_video_loading}>
                                <div className={styles.mp4_video_img}>
                                    <img src={video} alt="video_img" />
                                </div>
                                <div className={styles.play_icon}>
                                    <IoPlayCircle  className={styles.play_icon_svg}/>
                                </div>
                            </div>
                        </div> */}
                        <div className={styles.mp4_video_button}>
                            <button className={styles.mp4_button}>Comece Agora</button>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className={styles.success_father}>
            
                <div className={styles.success_child1}>
                    <h3>O Sucesso na Corrida Pode Ser Replicado</h3>
                    <h4>Analisamos cada detalhe da jornada dos nossos corredores e identificamos 
                        3 perfis que se destacam na busca pela alta performance.</h4>
                </div>
                <div className={styles.child_container}>
                    <div className={styles.success_child2}>
                        <div className={styles.success_child2_title}>
                            <h3>Descoberta</h3>
                        </div>
                        <div className={styles.line_image_content}>
                            <img src={line1} alt="E-books e Guias Práticos" className={styles.line_image} />
                        </div>
                        <div className={styles.success_child_h5_container}>
                            <h5 className={styles.h5_transparent}>Pessoas iniciantes estão descobrindo o 
                                mundo da corrida e dando seus primeiros passos no esporte.</h5>
                            <h5>Foco na adaptação e nos fundamentos básicos da corrida.</h5>
                            <h5>Para evoluir, é essencial criar disciplina nos treinos, ajustar 
                                a postura e controlar a respiração para evitar lesões.</h5>
                        </div>
                    </div>
                    <div className={styles.success_child3}>
                        <div className={styles.success_child3_title}>
                            <h3>Evolução</h3>
                        </div>
                        <div className={styles.line_image_content}>
                            <img src={line2} alt="E-books e Guias Práticos" className={styles.line_image} />
                        </div>
                        <div className={styles.success_child_h5_container}>
                            <h5 className={styles.h5_transparent}>Corredores intermediários buscam aprimorar 
                                sua performance e aumentar a resistência.</h5>
                            <h5>Aprofundar a técnica e fortalecer a mentalidade de atleta.</h5>
                            <h5>Nutrição estratégica, recuperação eficiente e participação 
                                em desafios são fundamentais para essa fase.</h5>
                        </div>
                    </div>
                    <div className={styles.success_child4}>
                        <div className={styles.success_child4_title}>
                            <h3>Alta Performance</h3>
                        </div>
                        <div className={styles.line_image_content}>
                            <img src={line3} alt="E-books e Guias Práticos" className={styles.line_image} />
                        </div> 
                        <div className={styles.success_child_h5_container}>
                            <h5 className={styles.h5_transparent}>Atletas avançados estão focados na alta 
                                performance e em superar seus limites.</h5>
                            <h5>Monitoramento de desempenho e estratégias avançadas são essenciais.</h5>
                            <h5>Treinos extremos, explosão muscular e liderança na comunidade definem esse estágio.</h5>
                        </div>
                    </div>

                </div>
                <div className={styles.child_container2}>
                    <div className={styles.child_container2_text}>
                        <h4 className={styles.child_container2_h4} >Método EVORISE</h4>
                        <div>
                            <p className={styles.pColor1} >Nossa metodologia é baseada em <br /><span className={styles.pColor2}>
                                aprendizado, prática e 
                                evolução contínua.</span></p>
                            <p>Criamos um ecossistema único para corredores, 100% focado em transformar seu 
                                desempenho na corrida, desde o primeiro passo até a alta performance.</p>
                            <p>Com uma única assinatura, você tem acesso a tudo o que 
                            precisa para aprimorar sua técnica, ganhar resistência, evoluir fisicamente
                            e mentalmente, e alcançar seus melhores tempos.</p>
                        </div>
                        <button >Assine Já</button>
                    </div>
                    <div className={styles.child_container2_img}>
                        <img src={img8} alt="img8"  />
                    </div>
                </div>
            </div>  
      </section>
    );
}