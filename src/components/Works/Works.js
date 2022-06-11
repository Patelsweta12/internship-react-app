import {
    WorksContainer,
    WorksContent,
    WorksTitle,
    WorksCardContent,
    WorksCard,
    WorksIconContainer,
    WorksIcon1,
    WorksIcon2,
    WorksIcon3,
    WorksCardTitle,
    WorksCardText
} from './works.styles';
import React from 'react';
import { useTheme } from '../../hooks/useTheme'

// styles
import './Works.css'

const Works = () => {
    const { mode } = useTheme()
    return (
        <div className={`Works ${mode}`}>
            <WorksContent>
                <WorksContainer>
                    <WorksTitle> How it works</WorksTitle>
                    <WorksCardContent>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon1 className="Icon"/>
                            </WorksIconContainer>
                            <WorksCardTitle>Create a trip</WorksCardTitle>
                            <WorksCardText>
                                There are is a form to be used to fill out to add your personalized desired new trip to the plan list.
                            </WorksCardText>
                        </WorksCard>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon2/>
                            </WorksIconContainer>
                            <WorksCardTitle>View it</WorksCardTitle>
                            <WorksCardText>
                               Choose your favorite trip that you want to plan. 
                               Pick the trip you love. 
                            </WorksCardText>
                        </WorksCard>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon3/>
                            </WorksIconContainer>
                            <WorksCardTitle>Search it</WorksCardTitle>
                            <WorksCardText>
                               Search your trip using keywords.
                               Results can be viwed straight in simplified manner.
                            </WorksCardText>
                        </WorksCard>
                    </WorksCardContent>
                </WorksContainer>
            </WorksContent>
        </div>
    )
}

export default Works;
