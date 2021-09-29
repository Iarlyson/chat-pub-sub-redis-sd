import { BoxChat, BoxInput, ButtonSend, CardChat, CardMessageConvidad, CardMessageUser, Container, ContentData, ContentUsername, IconChat, InputMessage, SideLeft, SideRight, TextCard, TextLabel, TextLabelUser, TextMessage, Title } from "./styles";
import img from '../../assests/image/icon.png'
function Index() {
    return (<>
        <Container>
            <SideLeft>
                <Title>CHAT-REDIS</Title>
                <TextLabelUser>Usuário</TextLabelUser>
                <CardChat>
                    <IconChat src={img} />
                    <TextLabel>Chat Global</TextLabel>
                </CardChat>
            </SideLeft>

            <SideRight>
                <Title>CHAT-REDIS</Title>
                <BoxChat>
                    <CardMessageConvidad>
                        <ContentUsername>
                            <TextCard>
                                James Gatão</TextCard></ContentUsername>
                        <TextMessage>oi bb</TextMessage>
                        <ContentData>
                            <TextCard>
                                10:55</TextCard>
                        </ContentData>
                    </CardMessageConvidad>
                    <CardMessageUser>

                    </CardMessageUser>
                    <CardMessageUser>oi</CardMessageUser>
                    <CardMessageConvidad>eae meu pit</CardMessageConvidad>
                </BoxChat>
                <BoxInput>
                    <InputMessage />
                    <ButtonSend>enviar</ButtonSend>
                </BoxInput>
            </SideRight>
        </Container>
    </>)
}
export default Index;