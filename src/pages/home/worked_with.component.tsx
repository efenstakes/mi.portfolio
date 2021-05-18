import { useState } from 'react'
import {
    IonGrid, IonRow, IonCol, IonTitle, 
    IonItem, IonLabel, IonAvatar,
    IonButton, IonChip,
} from '@ionic/react'


import WorkedWithCardComponent from '../../components/worked_with_card/worked_with_card.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'



import img_1 from '../../assets/apf.png'
import img_2 from '../../assets/klm.jpg'
import img_3 from '../../assets/gmc.jpg'


import './worked_with.component.scss'
import clsx from 'clsx'
import { any } from 'prop-types'

interface ComponentProps {
    
}
const WorkedWithComponent: React.FC<ComponentProps> = ({  }) => {
    const [onDisplay, setOnDisplay] = useState(null)
    
    const orgs = [
        {
            name: 'Microsoft AppFactory',
            image_url: img_1,
            responsibilities: [
                'Team Lead',
                'Backend Development Lead',
                'Intergration Developer',
            ],
            tech: [
                'Flutter', 'Python', 'Angular', 'Ionic', 
                'Docker', 
            ],
            when: '2019 Sep - 2019 Dec'
        },
        {
            name: 'KLM Dutch Airlines',
            image_url: img_2,
            responsibilities: [
                'Team Lead',
                'Backend Development Lead',
                'Intergration and DevOps Developer',
                'Mobile Developer',
            ],
            tech: [
                'Flutter', 'NodeJS', 'Angular', 'Ionic', 
                'Docker', 'Erlang'
            ],
            when: '2019 Sep - 2019 Dec'
        },
        {
            name: 'Great Minds Kenya',
            image_url: img_3,
            responsibilities: [
                'Branding and Digital Strategy',
                'UX/UI Design',
                'Systems Developer',
            ],
            tech: [
                'NodeJS', 'React', 'AWS', 'Docker', 'Firebase'
            ],
            when: '2020 Feb - now'
        },
    ]


    const onClickOrg = (org: any)=> {
        clearOrg()
        setOnDisplay(org)
    }
    const clearOrg = ()=> {
        setOnDisplay(null)
    }

    return (
        <div className="worked_with">
            <IonTitle size="large" className="fd_3 worked_with__title">
                Experience
            </IonTitle>
            <VSpacerComponent space={2} />
            <IonGrid>
                <IonRow>

                    {
                        orgs.map((org, index)=> {
                            return (
                                <IonCol key={org.name}
                                    className={`su_${index*3}`}>
                                    <WorkedWithCardComponent
                                        org={org}
                                        onClick={onClickOrg}
                                    />
                                </IonCol>
                            )
                        })
                    }

                </IonRow>
            </IonGrid>
            
            <VSpacerComponent space={2} />

            {
                onDisplay &&
                    <MoreDetailsComponent 
                        org={onDisplay}
                        clearOrg={clearOrg}
                    />
            }

        </div>
    );
};



interface MDComponentProps {
    org: any,
    clearOrg: Function,
}
const MoreDetailsComponent: React.FC<MDComponentProps> = ({ org, clearOrg })=> {
    
    return (
        <div className="experience_details" title="click to see details">
            <IonGrid>
                <IonRow>

                    {/* info */}
                    <IonCol sizeXs="12" sizeMd="6">
                        <h3 className="su_1">
                            { org.name }
                        </h3>
                        <small className="fd_2">
                            { org.when }
                        </small>
                        <VSpacerComponent space={1} />
                        
                        
                        <h6 className="su_3">
                            Responsibilities
                        </h6>
                        {
                            org.responsibilities.map((resp, index)=> {

                                return (
                                    <IonItem key={index} lines="none"
                                        className={
                                            clsx([
                                                "experience_details__item",
                                                `su_${index*2}`
                                            ])
                                        }
                                    >
                                        <IonAvatar slot="start"  className="avatar">
                                            {index}
                                        </IonAvatar>
                                        <IonLabel>
                                            {resp}
                                        </IonLabel>
                                    </IonItem>
                                )
                            })
                        }
                        <VSpacerComponent space={1} />
                        <IonButton fill="clear" color="secondary"
                            onClick={
                                ()=> clearOrg()
                            }>
                            Hide
                        </IonButton>
                    </IonCol>
                    {/* info */}

                    {/* tools */}
                    <IonCol sizeXs="12" sizeMd="6">
                        
                        <div className="experience_details__tech">
                            <h6 className="su_4" 
                                style={{
                                    marginLeft: '8px',
                                    fontWeight: 'bold',
                                }}>
                                Tech
                            </h6>
                            <div className="experience_details__tech__chips">
                            {
                                org.tech.map((tech, index)=> {

                                    return (
                                        <div className="">
                                            <IonChip
                                                key={tech}
                                                color={ 
                                                    (index%2 === 0) ? 'primary' : 'secondary' 
                                                }
                                                style={{
                                                    padding: '4px 20px',
                                                    backgroundColor: (index%2 === 0) ? '#5BBF3F' : '#30BAD9',
                                                    // paddingLeft: '8px',
                                                    // paddingRight: '8px',
                                                }}
                                                className={`su_${index*4+1}`}
                                            >
                                                {tech}
                                            </IonChip>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </IonCol>
                    {/* tools */}

                </IonRow>
            </IonGrid>
        </div>
    )
}


export default WorkedWithComponent;
