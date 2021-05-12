import clsx from 'clsx'
import { IonChip, IonCol, IonGrid, IonRow, IonText, IonTitle } from '@ionic/react';

import './skills.component.css';
import VSpacerComponent from '../v_spacer/v_spacer.component';


interface ComponentProps {
    title: string,
    skills: Array<string>,
    isAlt: Boolean,
}
const SkillsComponent: React.FC<ComponentProps> = ({ title, skills, isAlt=false }) => {
  return (
    <div className="skills_container">
        <IonGrid>
            
            <IonRow className="skills_container__grid">

                {/* title */}
                <IonCol sizeXs="12" sizeMd="12" sizeLg="12" className="skills_container__title_container">
                    <IonTitle size="large" className="skills_container__title_container__title">
                        { title }
                    </IonTitle>
                    <VSpacerComponent space={2} />
                </IonCol>

                {/* skills */}
                <IonCol size="12"
                        className={
                            clsx([
                                "skills_container__skills",
                            ])
                        }
                        style={{
                            maxWidth: '560px',
                            // backgroundColor: 'red'
                        }}
                >
                {
                    skills.map((skill, index)=> {

                        return (
                            <IonChip
                                key={index}
                                color={ 
                                    (index%2 === 0) ? 'primary' : 'secondary' 
                                }
                                style={{
                                    padding: '4px 20px'
                                    // paddingLeft: '8px',
                                    // paddingRight: '8px',
                                }}
                            >
                                {skill}
                            </IonChip>
                        )
                    })
                }
                </IonCol>

            </IonRow>
        </IonGrid>
    </div>
  );
};

export default SkillsComponent;
