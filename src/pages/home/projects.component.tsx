import React, { useEffect, useState } from 'react'
import { 
    IonGrid, IonRow, IonCol, IonTitle, IonChip
} from '@ionic/react';

import ProjectCardComponent from '../../components/project_card/project_card.component';
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'

import covid from '../../assets/covid.jpg'
import lifeboat from '../../assets/foster.jpg'
import gmc from '../../assets/gmc.jpg'
import k11 from '../../assets/k11.png'
import pizza_inn from '../../assets/pin2.png'
import klm from '../../assets/klm.png'

import './projects.component.scss'

interface ComponentProps { }
const ProjectsComponent:React.FC<ComponentProps> = () => {
    const [selectedFilter, setSelectedFilter] = useState('Web')
    const [onDisplay, setOnDisplay] = useState([])

    const filters = [
        'Web', 'UX/UI Design', 'Mobile', 'Open Source', 
    ]
    const projects = [
        {
            name: 'Great Minds Kenya',
            img: gmc,
            link: 'https://gmc-deployed-app.web.app/',
            description: 'Great Minds Kenya consultncy website.',
            img_styles: {
                objectFit: 'contain',
                // transform: ''
            },
            type: 'Commercial',
            tags: [ 'web', 'ux/ui design', ],
        },
        {
            name: 'KLM Go',
            img: klm,
            link: 'https://github.com/efenstakes/KLMGo',
            description: 'KLM Dutch Airlines GLM Go app.',
            img_styles: {
                // objectFit: 'contain',
                // transform: ''
            },
            type: 'Open Source',
            tags: [ 'web', 'ux/ui design', ],
        },
        {
            name: 'K11',
            img: covid,
            link: 'https://github.com/efenstakes/k11',
            description: 'A COVID-19 passport application that allows people to monitor their tests, vaccinations and location.',
            img_styles: {},
            type: 'Open Source',
            tags: [ 'mobile', 'ux/ui design', 'open source' ],
        },
        {
            name: 'K11 Server',
            img: covid,
            link: 'https://github.com/efenstakes/k11.server',
            description: 'A COVID-19 passport application server that allows people to monitor their tests, vaccinations and location.',
            img_styles: {},
            type: 'Open Source',
            tags: [ 'web', 'open source' ],
        },
        {
            name: 'LifeBoat',
            img: lifeboat,
            link: 'https://github.com/efenstakes/LifeBoat',
            description: 'A foster care management system server for governments and NGOs.',
            img_styles: {},
            tags: [ 'open source' ],
            type: 'Open Source',
        },
        {
            name: 'Kiloko',
            img: covid,
            link: 'https://github.com/TheGoodCollective/Kiloko',
            description: 'A COVID-19 tracking application that allows people to monitor their location and get COVID news.',
            img_styles: {},
            type: 'Open Source',
            tags: [ 'mobile', 'ux/ui design', 'open source' ],
        },
        {
            name: 'Pizza Inn Web',
            img: pizza_inn,
            link: 'https://github.com/efenstakes/pizza_inn',
            description: 'A Pizza Inn website redesign for a better experience.',
            img_styles: {},
            type: 'Open Source',
            tags: [ 'web', 'ux/ui design', ],
        },
        {
            name: 'Pizza Inn Mobile',
            img: pizza_inn,
            link: 'https://github.com/efenstakes/pizza_inn_mobile',
            description: 'A Pizza Inn mobile application concept design and implementation.',
            img_styles: {},
            type: 'Open Source',
            tags: [ 'mobile', 'ux/ui design', ],
        },
    ]


    useEffect(()=> {
        let newDisplay = projects.filter(p=> {
            return p.tags.includes(selectedFilter.toLowerCase())
        })
        setOnDisplay(newDisplay)
    }, [ ])
    useEffect(()=> {
        let newDisplay = projects.filter(p=> {
            return p.tags.includes(selectedFilter.toLowerCase())
        })
        setOnDisplay(newDisplay)
    }, [ selectedFilter ])


    return (
        <div className="projects">
            <IonTitle size="large" className="su_1"
                style={{
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                Projects
            </IonTitle>
            <VSpacerComponent space={2} />

            {/* filters */}
            <div className="projects__filters">
                {
                    filters.map((filter, index)=> {

                        return (
                            <div onClick={
                                    ()=> setSelectedFilter(filter)
                                }
                            >
                            <IonChip
                                key={filter}
                                color={ 
                                    selectedFilter === filter ? 'primary' : 'secondary' 
                                }
                                style={{
                                    padding: '4px 20px',
                                    backgroundColor: selectedFilter === filter ? '#5BBF3F' : 'white',
                                    // paddingLeft: '8px',
                                    // paddingRight: '8px',
                                }}
                                className={`su_${index*2+3}`}
                            >
                                {filter}
                            </IonChip>
                            </div>
                        )
                    })
                }
            </div>
            <VSpacerComponent space={2} />

            <div className="projects__list">
            <IonGrid>
                <IonRow>
                {
                    onDisplay.map((project, index)=> {

                        return (
                            <IonCol 
                                key={project.name} 
                                sizeXs="12" sizeSm="6" sizeMd="4" sizeXl="3"
                                className={`su_${index+3}`}>
                                <ProjectCardComponent
                                    project={project}
                                />
                            </IonCol>
                        )
                    })
                }
                </IonRow>
            </IonGrid>
            </div>
         
        </div>
    )
}

export default ProjectsComponent
