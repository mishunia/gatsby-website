import React from 'react'
import {
  GetAppStyled,
  GetAppMaskStyled,
  GetAppHeadStyled,
  GetAppContentStyled,
  GetAppListStyled,
  GetAppListItemStyled
} from './styles'
import Heading from '../../atoms/Heading/Heading'
import backgroundImg from '../../../assets/images/get-app-img.png'
import appStoreImg from '../../../assets/images/app-store-img.png'
import googlePlayImg from '../../../assets/images/google-play-img.png'

const GetApp = () => (
  <GetAppStyled bgImg={backgroundImg}>
    <GetAppMaskStyled />
    <GetAppHeadStyled>
      <Heading h2 center>
        Get The App Now
      </Heading>
    </GetAppHeadStyled>
    <GetAppContentStyled>
      <GetAppListStyled>
        <GetAppListItemStyled>
          <img src={appStoreImg} />
        </GetAppListItemStyled>
        <GetAppListItemStyled>
          <img src={googlePlayImg} />
        </GetAppListItemStyled>
      </GetAppListStyled>
    </GetAppContentStyled>
  </GetAppStyled>
)

export default GetApp
