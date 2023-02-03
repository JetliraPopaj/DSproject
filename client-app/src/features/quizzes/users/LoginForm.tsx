import { Formik, Form } from 'formik';
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import MyTextInput from '../../../app/common/MyTextInput';



export  default function LoginFunction()
{
    return (
        <Formik
        initialValues={{email:'', password: ''}}
        onSubmit={values => console.log(values)}
        >
        {({handleSubmit}) => (
            <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                <MyTextInput name='email' placeholder='Email'/>
                <MyTextInput name='password' placeholder='password' type='password' />
                <Button icon labelPosition='left'  inverted color='green'size='huge' type='submit'  fluid>
                 <Icon name = 'sign-in'/>
                  Login
                 </Button>
                      
            </Form>
        )}
        </Formik>
    )

}