import { useState } from 'react'
import { 
    IonButton,
    IonItem,
    IonLabel,
    IonInput, IonTextarea,
    IonRadioGroup, IonRadio, 
} from '@ionic/react';

import VSpacerComponent from '../../components/v_spacer/v_spacer.component';


interface ComponentProps {
    setIsSuccessful: Function,
}
const ContactFormComponent:React.FC<ComponentProps> = ({ setIsSuccessful }) => {
    const initialState = {
        name: '',
        email: '',
        individual_or_company: 'INDIVIDUAL',
        description: '',
    }
    const [formData, setFormData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const setFormValue = (event: any) => {
        const { target } = event
        console.log('event ', event)
        const name = target.name
        const value = target.value
        setFormData({ ...formData, [name]: value })
    }// setFormValue


    
    const sendRequest = async ()=> {
        setError(null)
        const url = 'https://murmuring-refuge-79435.herokuapp.com/contact'

        setIsLoading(true)
        console.log('formData ', formData)
        return
        const request = await fetch(url, {
            method: 'post',
            body: JSON.stringify(formData)
        })
        
        if( request.status != 200 ) {
            setIsLoading(false)
            setError('Error making your request. Try again after a while')
            return
        }

        const response = await request.json() 
        
        if( !response['sent'] ) {
            setIsLoading(false)
            setError('Error making your request. Try again after a while')
            return
        }

        setIsLoading(false)
        setIsSuccessful(true)
    }// sendRequest


    return (
        <div>

            <h2 className="text_centered">
                            Hello,
            </h2>
            {/* <h3 className="su_1 text_centered">
                Welcome to my Contact Page
            </h3> */}
            <p className="text_centered ">
                Once your request gets to me I will get back to you soon.
            </p>
            <VSpacerComponent space={5} />

            {/* name */}
            <IonItem>
                <IonLabel position="floating">
                    Enter your name or company name
                </IonLabel>
                <IonInput 
                    value={formData.name}
                    name="name"
                    autoCapitalize="true"
                    autofocus={true}
                    className="form_input"
                    onChange={setFormValue}
                />
            </IonItem>
            <VSpacerComponent space={3} />

            {/* email */}
            <IonItem>
                <IonLabel position="floating">
                    Enter your email or company email
                </IonLabel>
                <IonInput 
                    value={formData.email}
                    onChange={setFormValue}
                    name="email"
                    inputMode="email"
                    autoCapitalize="true"
                    autofocus={false}
                />
            </IonItem>
            <VSpacerComponent space={3} />

            {/* individual or company */}
            <p className="">
                Are you an individual or company.
            </p>
            <IonRadioGroup 
                name="individual_or_company"
                value={formData.individual_or_company}
                onChange={
                    (e: any)=> console.log('e ', e)
                }
            >
                <IonItem className="individual_or_company__input"
                    onClick={
                        ()=> setFormValue({
                            target: {
                                value: 'INDIVIDUAL',
                                name: 'individual_or_company__input'
                            }
                        })
                    }
                >
                    <IonRadio 
                        value="INDIVIDUAL" 
                    />
                    <div style={{ marginLeft: '10px'}} />
                    <IonLabel>
                        Individual
                    </IonLabel>
                </IonItem>
                <IonItem
                    className="individual_or_company__input"
                    onClick={
                        ()=> setFormValue({
                            target: {
                                value: 'INDIVIDUAL',
                                name: 'individual_or_company__input'
                            }
                        })
                    }
                >
                    <IonRadio value="COMPANY" />
                    <div style={{ marginLeft: '10px'}} />
                    <IonLabel>
                        Company
                    </IonLabel>
                </IonItem>
            </IonRadioGroup>
            <VSpacerComponent space={3} />

            
            {/* description */}
            <IonItem>
                <IonLabel position="floating">
                    What can I help you with?
                </IonLabel>
                <IonTextarea 
                    value={formData.name}
                    onChange={setFormValue}
                    name="description"
                    inputMode="text"
                    autoCapitalize="true"
                    autofocus={false}
                />
            </IonItem>
            <VSpacerComponent space={4} />

            <IonButton
                expand="block"
                className="app_button"
                onClick={sendRequest}
            >
                {
                    isLoading ? "Sending Contact Request" : "Contact Me"
                }
            </IonButton>
            
        </div>
    )
}

export default ContactFormComponent

