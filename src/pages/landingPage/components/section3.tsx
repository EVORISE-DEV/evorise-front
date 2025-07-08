
import React, { useEffect, useRef, useState } from 'react';
import img9 from '../../../assets/svg/image 9.svg';
import evorise from '../../../assets/svg/EVORISE_shadow.svg';
import success from '../../../assets/svg/success.svg';
import cancel from '../../../assets/svg/cancel.svg';
import styles from './section3.module.css'

export const Section3: React.FC = () => {
    return (
        <section id="section4" className={styles.landing_section}>
            <div className={styles.section4_container}>
                <div className={styles.section4_container_wp}>
                    <div className={styles.section4_container_wp_text}>
                        <div>
                            <h4>Ainda tem dúvidas?</h4>
                        </div>
                        <div>
                            <p>Fale com um de nossos consultores! <br /> Eles estão prontos para 
                                responder a qualquer dúvida. <br /> É só tocar no botão abaixo.</p>
                        </div>
                        <div>
                            <button >Whatsapp da Evorise</button>
                        </div>
                    </div>
                    <div className={styles.section4_container_wp_img}>
                        <img src={img9} alt="img9"  />
                    </div>
                </div>
                <div className={styles.section4_container_h4}>
                    <h4>Uma escola sempre atual e dinâmica, do jeito que a internet exige.</h4>
                </div>
                <div className={styles.section4_container_evorise}>
                    <div className={styles.section4_container_evorise_table1}>
                        <table className={styles.table1}>
                            <tr>
                                <th colSpan={1} className={styles.th_1}>
                                </th>
                                <th className={styles.th_2}>
                                <h4>Ensino tradicional</h4>

                                </th>
                            </tr>
                            <tr>
                                <td className={styles.type}>Conteúdo</td>
                                <td>
                                <img className={styles.cancel} src={cancel} alt="evorise" />
                                Genérico e sem adaptação às necessidades dos corredores.
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.type}>Treinadores</td>
                                <td>
                                <img className={styles.cancel} src={cancel} alt="evorise" />
                                Métodos ultrapassados, sem suporte especializado para evolução real.
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.type}>Investimento</td>
                                <td>
                                <img className={styles.cancel} src={cancel} alt="evorise" />
                                Alto custo com pouca personalização e retorno incerto.
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.type}>Flexibilidade</td>
                                <td>
                                <img className={styles.cancel} src={cancel} alt="evorise" />
                                Treinos rígidos e pouco adaptáveis à rotina do corredor.
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.type}>Metodologia</td>
                                <td>
                                <img className={styles.cancel} src={cancel} alt="evorise" />
                                Abordagem engessada, sem integração de tecnologia e inovação.
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.type}>Comunidade</td>
                                <td>
                                <img className={styles.cancel} src={cancel} alt="evorise" />
                                Falta de suporte e ambiente motivacional para crescimento.
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.type}>Performance</td>
                                <td>
                                <img className={styles.cancel} src={cancel} alt="evorise" />
                                Sem acompanhamento preciso, dificultando evolução contínua.
                                </td>
                            </tr>

                        </table>
                    </div>
                    <div className={styles.section4_container_evorise_table2}>
                        <table id="table2">
                            <tr>
                                <th colSpan={2}>
                                <img src={evorise} className={styles.img_evorise}  alt="evorise"  />
                                </th>
                            </tr>
                            <tr><td className={styles.type2}>
                                <img className={styles.success} src={success} alt="evorise" />
                                Treinos personalizados e atualizados para todos os níveis.
                            </td></tr>

                            <tr><td className={styles.type2}>
                                <img className={styles.success} src={success} alt="evorise" />
                                Especialistas em corrida para guiar sua evolução.
                            </td></tr>

                            <tr><td className={styles.type2}>
                                <img className={styles.success} src={success} alt="evorise" />
                                Metodologia eficaz com retorno garantido na performance.
                            </td></tr>

                            <tr><td className={styles.type2}>
                                <img className={styles.success} src={success} alt="evorise" />
                                Treinos flexíveis para evolução sem comprometer a rotina.
                            </td></tr>

                            <tr><td className={styles.type2}>
                                <img className={styles.success} src={success} alt="evorise" />
                                Treinos estruturados com tecnologia e métricas para acompanhar o progresso.
                            </td></tr>

                            <tr><td className={styles.type2}>
                                <img className={styles.success} src={success} alt="evorise" />
                                Comunidade de corredores com suporte, desafios e conexões.
                            </td></tr>

                            <tr><td className={styles.type2}>
                                <img className={styles.success} src={success} alt="evorise" />
                                Monitoramento e evolução constante para resultados reais e superação de limites.
                            </td></tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}