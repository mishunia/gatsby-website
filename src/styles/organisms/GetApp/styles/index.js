import styled from 'styled-components'

const GetAppStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => theme.gutter.xl};
  background-image: url(${({ bgImg }) => bgImg});
  background-repeat: no-repeat;
  background-size: cover;
`

const GetAppMaskStyled = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.dark2};
  opacity: 0.8;
`

const GetAppHeadStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.gutter.l};
  color: ${({ theme }) => theme.colors.white};
`

const GetAppContentStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`

const GetAppListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  width: 100%;
  max-width: 430px;
  padding: 0;
`

const GetAppListItemStyled = styled.li`
  img {
    width: 140px;
  }
`

export {
  GetAppStyled,
  GetAppMaskStyled,
  GetAppHeadStyled,
  GetAppContentStyled,
  GetAppListStyled,
  GetAppListItemStyled
}
