import { useState } from 'react'
import { 
    IonContent, IonHeader, IonPage, 
    IonTitle, IonToolbar,
    IonGrid, IonRow, IonCol,
    IonFab, IonFabButton, IonIcon,
    IonButton,
    IonItem,
    IonLabel,
    IonInput, IonTextarea,
    IonRadioGroup, IonRadio, IonText
  } from '@ionic/react';

  
import AppBarComponent from '../../components/appbar/appbar.component';
import VSpacerComponent from '../../components/v_spacer/v_spacer.component';
import ContactSuccessComponent from './contact_success.component';


import './contact_me.page.scss'
import ContactFormComponent from './contact_form.component';



const initialState = {
    name: '',
    email: '',
    individual_or_company: 'INDIVIDUAL',
    description: '',
}
const ContactMePage = () => {
    const [formData, setFormData] = useState(initialState)
    const [isSuccessful, setIsSuccessful] = useState(false)

    const setFormValue = ({ target }) => {

    }// setFormValue

    const sendRequest = ()=> {
        setIsSuccessful(true)
    }// sendRequest

    return (
        <IonPage>
      
        <AppBarComponent />

        <IonContent fullscreen forceOverscroll={true}>
            <IonHeader collapse="condense">
            <IonToolbar>
                <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
            </IonHeader>

            <IonGrid>
                <IonRow>
                    <IonCol sizeXs="0" sizeSm="1" sizeMd="2" sizeLg="3"></IonCol>
                    <IonCol sizeXs="12" sizeSm="10" sizeMd="8" sizeLg="6">

                        {
                            isSuccessful
                              ? <ContactSuccessComponent />
                              : <ContactFormComponent 
                                    setIsSuccessful={setIsSuccessful}
                                />
                        }

                    </IonCol>
                    <IonCol sizeXs="0" sizeSm="1" sizeMd="2" sizeLg="3"></IonCol>
                </IonRow>
            </IonGrid>
            


        </IonContent>


        </IonPage>
    )
}

export default ContactMePage
