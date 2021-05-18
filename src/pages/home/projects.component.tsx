import React from 'react'
import { 
    IonGrid, IonRow, IonCol, IonTitle
} from '@ionic/react';

import ProjectCardComponent from '../../components/project_card/project_card.component';
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'

import covid from '../../assets/covid.jpg'
import lifeboat from '../../assets/foster.jpg'
import gmc from '../../assets/gmc.jpg'
import k11 from '../../assets/k11.png'


interface ComponentProps { }
const ProjectsComponent:React.FC<ComponentProps> = () => {
    const projects = [
        {
            name: 'Great Minds Kenya',
            img: gmc,
            link: 'https://gmc-deployed-app.web.app/',
            description: 'Great Minds Kenya consultncy website.',
            type: 'Commercial',
            img_styles: {
                objectFit: 'contain',
                // transform: ''
            }
        },
        {
            name: 'K11',
            img: covid,
            link: 'https://github.com/efenstakes/k11',
            description: 'A COVID-19 passport application that allows people to monitor their tests, vaccinations and location.',
            type: 'Open Source',
            img_styles: {}
        },
        {
            name: 'LifeBoat',
            img: lifeboat,
            link: 'https://github.com/efenstakes/LifeBoat',
            description: 'A foster care management system server for governments and NGOs.',
            type: 'Open Source',
            img_styles: {},
            tags: [

            ]
        },
        {
            name: 'Kiloko',
            img: covid,
            link: 'https://github.com/TheGoodCollective/Kiloko',
            description: 'A COVID-19 tracking application that allows people to monitor their location and get COVID news.',
            type: 'Open Source',
            img_styles: {}
        },
    ]


    return (
        <div className="projects">
            {/* <h6 className="su_4" 
                style={{
                    marginLeft: '8px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                Projects
            </h6> */}
            <IonTitle size="large" className="su_1"
                style={{
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                Projects
            </IonTitle>
            <VSpacerComponent space={2} />

            <div className="projects__list">
            <IonGrid>
                <IonRow>
                {
                    projects.map((project, index)=> {

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
