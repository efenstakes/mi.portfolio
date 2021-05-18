import React from 'react'
import { 
    IonCard, IonCardHeader, IonCardSubtitle, 
    IonCardTitle, IonCardContent, 
    IonItem, IonIcon, IonLabel, IonButton, IonChip 
} from '@ionic/react';


import './project_card.component.scss'

interface ComponentProps {
    project: any,
}
const ProjectCardComponent:React.FC<ComponentProps> = ({ project }) => {
    return (
        <IonCard href={project.link} 
                 target="_blank"
                 className="project_card">

            <img 
                src={project.img} 
                className="project_card__image"
                style={{
                    ...project.img_styles
                }}
            />
            <IonCardHeader style={{ paddingLeft: '0' }}>
            {/* <div className=""> */}
                <IonCardTitle>
                    { project.name }
                </IonCardTitle>
                <small className="project_card__title_type"> { project.type }  </small>
                {/* <IonChip color="primary"
                    style={{
                        padding: '0px 12px',
                    }}>
                    { project.type }
                </IonChip> */}
            {/* </div> */}
            </IonCardHeader>
            {/* <IonCardContent> */}
                <p className="project_card__description">
                    { project.description }
                </p>
            {/* </IonCardContent> */}
        </IonCard> 
    )
}

export default ProjectCardComponent
