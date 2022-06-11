import {
    FooterSection,
    FooterContainer,
    FooterLinkContainer,
    FooterLinksWrapper,
    FooterLinks,
    FooterLinkTitle,
    FooterLink,
    FooterCopyRight
} from './Footer.styles';
import React from 'react'
import { useTheme } from '../../hooks/useTheme'

function Footer() {
    const { color } = useTheme()

    return (
        <div style={{ background: color }}>
            <FooterSection>
                <FooterContainer>
                    <FooterLinkContainer>
                        <FooterLinksWrapper>
                            <FooterLinks>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/'></FooterLink>
                                <FooterLink to='/'>Our Planners</FooterLink>
                                <FooterLink to='/'>Our Tips</FooterLink>
                                <FooterLink to='/'>Testimonials</FooterLink>
                                <FooterLink to='/'>Terms of service</FooterLink>
                            </FooterLinks>
                            <FooterLinks>
                                <FooterLinkTitle>Services</FooterLinkTitle>
                                <FooterLink to='/'></FooterLink>
                                <FooterLink to='/'>How it works</FooterLink>
                                <FooterLink to='/'>Trip prep help</FooterLink>
                                <FooterLink to='/'>Gift cards</FooterLink>
                                <FooterLink to='/'>Orders</FooterLink>
                            </FooterLinks>

                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinks>
                                <FooterLinkTitle>Resources</FooterLinkTitle>
                                <FooterLink to='/'></FooterLink>
                                <FooterLink to='/'>Travel Types</FooterLink>
                                <FooterLink to='/'>Plans</FooterLink>
                                <FooterLink to='/'>FAQ &amp; Support</FooterLink>
                                <FooterLink to='/'>Affiliate Program</FooterLink>
                            </FooterLinks>
                            <FooterLinks>
                                <FooterLinkTitle>Contact</FooterLinkTitle>
                                <FooterLink to='/'></FooterLink>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>Facebook</FooterLink>
                                <FooterLink to='/'>Youtube</FooterLink>
                                <FooterLink to='/'>Linkedin</FooterLink>
                            </FooterLinks>
                        </FooterLinksWrapper>
                    </FooterLinkContainer>
                    <FooterCopyRight src='https://github.com/Patelsweta12/internship-react-app'> &copy; Copyright 2022, Designed and coded by Sweta Patel & Mahi Patel</FooterCopyRight>
                </FooterContainer>
            </FooterSection>
        </div>
    )
}
export default Footer;
