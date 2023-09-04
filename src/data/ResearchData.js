const researchData = [
    {
        id: 1,
        publication: 'Publications: Papers',
        papers: [
            {
                id: 'One',
                title: 'Elacqua, G., Munevar, I., Sanchez, F., & Santos, H. (2021). The impact of decentralized decision-making on student outcomes and teacher quality: Evidence from Colombia. World Development, 141, 105378.',
                text: 'This paper evaluates the effects of the administrative decentralization of education on teacher quality and student outcomes in Colombia. In 2001, the government established an arbitrary rule that granted municipalities with a 2002 population >100,000 almost complete autonomy to provide education services (certification). This analysis takes advantage of this rule to evaluate, using difference-in-differences and regression discontinuity methodologies, the effect of municipal autonomy on teacher quality and student outcomes, including achievement and enrollment. The control group is made up of municipalities for which the provision of education was centralized and managed by the departmental authorities. The results indicate that administrative decentralization (being certified) improves both school enrollment and student achievement as well as the quality of teachers, as measured by teachers’ education level and scores on teachers’ entry competency exams. Using a mediation analysis, the paper finds that higher-quality teachers hired by the certified municipalities partially explained the improvement in student achievement. This analysis also shows that “certified” municipalities invest more local resources in education which also contributes to explain to a much lesser extent their superior educational outcomes. Finally, the results suggest that achieving better student outcomes is less related to the amount of resources that decentralized municipalities managed and more associated with the fact that those resources seem to have been better allocated, generating significant efficiency gains. These gains may be the consequence of lower transaction costs of matching local preferences with local educational interventions.',
                src: 'https://www.sciencedirect.com/science/article/abs/pii/S0305750X20305064?via%3Dihub',
                target: 'collapseOne'
            }
        ]
    },
    {
        id: 2,
        publication: 'Publications: Policy Briefs',
        papers: [
            {
                id: 'Two',
                title: 'Álvarez, H., Elacqua, G., Mendez, C., Munevar, I., Vásquez, D. Hablemos de política educativa en América Latina y el Caribe #8: Colegios privados en tiempos de COVID-19. (2021). Itermaerican Development Bank.',
                text: 'La pandemia ocasionada por el COVID-19 ha afectado considerablemente a las escuelas privadas de América Latina y el Caribe, poniendo en riesgo la continuidad del servicio educativos de millones de estudiantes, ya que muchas escuelas han cerrado o podrían cerrar. Si esto pasa el sistema educativo debe garantizar la absorción de los estudiantes que podrían quedarse sin escuela. En este contexto, proponemos y discutimos alternativas a los gobiernos que van desde fortalecer el sistema público educativo hasta subsidiar la oferta o demanda de colegios privados. La estrategia más adecuada para cada país dependerá de su contexto, y de la ponderación de sus costos y beneficios, pero, sí enfatizamos que es importante que los países actúen de una manera u otra, con el fin de garantizar que los millones de estudiantes de escuelas privadas puedan continuar sus estudios en instituciones de calidad.',
                src: 'https://publications.iadb.org/es/hablemos-de-politica-educativa-en-america-latina-y-el-caribe-8-colegios-privados-en-tiempos-de'
            },
            {
                id: 'Three',
                title: 'Bertoni, E., Elacqua, G., Mendez, C., Montalva, V., Munevar, I., Olses, A., Roman, A. (2020). Seleccionar y asignar docentes en América Latina y el Caribe: Un camino para la calidad y equidad en educación. Interamerican Development Bank.',
                text: 'Considerando los desafíos que la región enfrenta en seleccionar y asignar los mejores docentes a las escuelas que más los necesitan, en este documento tratamos de responder a dos preguntas fundamentales: ¿cómo identificamos y seleccionamos a los mejores docentes? y ¿cómo los asignamos a las escuelas de una manera eficiente y equitativa? Para responder a estas preguntas recopilamos información sobre la forma en que 12 sistemas de América Latina y el Caribe (ALC) seleccionan y asignan a sus docentes: Barbados, Chile, Colombia, Costa Rica, Ecuador, Honduras, Jamaica, Panamá, Perú, la Ciudad Autónoma de Buenos Aires (CABA - Argentina), la municipalidad de Río de Janeiro (Brasil) y el estado de Pernambuco (Brasil), y destacamos las ventajas de los sistemas que implementan estos procesos de forma centralizada.',
                src: 'https://publications.iadb.org/es/seleccionar-y-asignar-docentes-en-america-latina-y-el-caribe-un-camino-para-la-calidad-y-equidad-en',
                target: 'collapseTwo'
            }
        ]
    },
    {
        id: 3,
        publication: 'Publications: Book Chapters',
        papers: [
            {
                id: 'Seven',
                title: 'Chegwin, V., Munevar, I. and Sanchez, F. (2023). Local autonomy and the provision of local public goods: Evidence from a Colombian natural experiment. J.P. Faguet and S. Pal. (Ed.). Global Perspectives on Decentralized Governance: Ways to Create Effective and Democratic Political Systems. London, United Kingdom, LSE Press. (Forthcoming September 2023)',
                text: 'A substantial decentralisation reform occurred in Colombia school education in 2001. The government established an arbitrary rule that granted municipalities with a population greater than 100,000 almost complete autonomy to provide education services (certifica- tion). Going beyond some mechanisms identified in previous policy evaluations (such as a higher proportion of higher-quality teachers) we analysed how reform a!ected the investment of local resources in education and the distribution of the total budget in key areas of the school system. Certified municipalities experienced an increase in education expenditure, after discounting teachers’ payroll, because of increased eðciency in the management of total resources, both locally raised and central government transfers. This allowed higher expenditures in school infrastructure, education quality, and other education-related programmes, all key components of education policy. In addition, after 2002 the competitiveness of public schools increased in certified municipalities, compared to non-certified areas. Achieving better student outcomes was primarily explained by changes in the allocation of resources in certified municipalities that resulted in increased eðciency after gaining autonomy. Lastly, certification enhances competitiveness of public schools as against private ones.',
                src: 'https://publications.iadb.org/es/hablemos-de-politica-educativa-en-america-latina-y-el-caribe-8-colegios-privados-en-tiempos-de'
            }
        ]
    },
    {
        id: 4,
        publication: 'Work in progress',
        papers: [
            {
                id: 'Five',
                title: 'Are Catholic Schools the real deal? What about gender differentials?',
                text: '',
                src: '',
                target: 'collapseFour'
            },
            {
                id: 'Six',
                title: 'Child Care and Academic Performance in the Long Term: Evidence for Colombia. (With Raquel Bernal and Fabio Sanchez)',
                text: '',
                src: '',
                target: 'collapseFive'
            },
            {
                id: 'Seven',
                title: 'The effect of lengthening the school day in the mother´s labor supply. (With Valentina Chegwin & Fabio Sanchez)',
                text: '',
                src: '',
                target: 'collapseSix'
            },
        ]
    }
]

export default researchData;