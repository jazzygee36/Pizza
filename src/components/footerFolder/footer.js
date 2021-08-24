import React from 'react'
import { FooterContainer, FooterWrap, SocialMedia, SocialLogo,SocialMediaWrap } from './footerElements'

const footer = () => {


  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' >Pizza</SocialLogo>   
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default footer
