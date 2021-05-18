import { 
    IonItem, IonLabel, IonTitle, IonAvatar, IonIcon, IonChip, IonButton
} from '@ionic/react';

import { 
    logoLinkedin, logoGithub, 
    logoFigma, mail, 
} from 'ionicons/icons';

import VSpacerComponent from '../../components/v_spacer/v_spacer.component'


import './contacts.component.scss'

const ContactsComponent = () => {
    return (
        <div className="contacts">
            
            <IonTitle size="large" className="su_1 contacts_container__title">
                My Links
            </IonTitle>
            <VSpacerComponent space={2} />

            <div className="contacts__links">

                <IonButton color="primary" className="app_button su_3">
                    <IonIcon icon={mail} color="dark" />
                    <div style={{ marginLeft: '6px' }}/>
                    <IonLabel color="dark">
                        efenstakes101@gmail.com
                    </IonLabel>
                </IonButton>
                
                <IonButton 
                    href="https://www.linkedin.com/in/felix-ndunda-0ba841108/"
                    target="_blank"
                    className="app_button su_4"
                    color="secondary"
                >
                    <IonIcon icon={logoLinkedin} color="dark" />
                    <div style={{ marginLeft: '6px' }}/>
                    <IonLabel color="dark">
                        LinkedIn
                    </IonLabel>
                </IonButton>
                
                <IonButton 
                    href="https://github.com/efenstakes" 
                    target="_blank"
                    className="app_button su_5"
                >
                    <IonIcon icon={logoGithub} color="dark" />
                    <div style={{ marginLeft: '6px' }}/>
                    <IonLabel color="dark">
                        Github
                    </IonLabel>
                </IonButton>
            </div>


        </div>
    )
}

export default ContactsComponent
