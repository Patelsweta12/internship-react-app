import {
    WelcomeContentText,
    WelcomeContentTitle,
    WelcomeText
} from './Home.styles';
import React from 'react';
import { useTheme } from '../../hooks/useTheme'
import Works from '../../components/Works/Works';

// styles
import './Home.css'

export default function Welcome() {
    const { mode } = useTheme()

    return (
        <div className={`Home-theme ${mode}`}>
            <WelcomeContentText>
                 <WelcomeContentTitle>Welcome</WelcomeContentTitle>
                <br></br>
                <WelcomeText>
                    Trip Planner is a great way to make and manage travel plans that is enjoyable.
                    We have variety of features to help you add and manage existing travel plans while utilizing
                    modern and intuitive ways.
                </WelcomeText>
                <WelcomeText>
                    We are a growing our community to regularly participate in customer feedback for 
                    improving our products and services for better user experience.
                </WelcomeText>
                <Works></Works>
            </WelcomeContentText> 
        </div>
    )
}
