import React from 'react'
import { IonItem, IonImg, IonLabel, IonThumbnail } from '@ionic/react'

import './worked_with_card.component.scss'
import VSpacerComponent from '../v_spacer/v_spacer.component'

interface ComponentProps {
    org: any,
    onClick: Function,
}
const WorkedWithCardComponent: React.FC<ComponentProps> = ({ org, onClick }) => {
    return (
        <div className="worked_with_card" onClick={ ()=> onClick(org) }>

            <div className="worked_with_card__main_content">
                <div className="worked_with_card__main_content__image_wrapper">
                    <IonImg 
                        className="worked_with_card__main_content__image"
                        src={org.image_url} 
                    />
                </div>
                <VSpacerComponent space={1} />
                <IonLabel>{org.name}</IonLabel>
            </div>
            
        </div>
    )
}


export default WorkedWithCardComponent
