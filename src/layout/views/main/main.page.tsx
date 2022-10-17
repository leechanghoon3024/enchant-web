import React from 'react';
import { NextPage } from 'next';
import styled from '@emotion/styled';
import { Main1Section } from '@layout/views/main/main.1.section';
import { Main2Section } from '@layout/views/main/main.2.section';
import { Main3Section } from '@layout/views/main/main.3.section';
import { Main4Section } from '@layout/views/main/main.4.section';
import { Main5Section } from '@layout/views/main/main.5.section';
import { Main6Section } from '@layout/views/main/main.6.section';
import { Main7Section } from '@layout/views/main/main.7.section';
import { FullScreenModal } from '@components/modals/fullscreen.modal';
import { useDrawer } from '@store/drawer/use.drawer';
import { IframeWrapper, VideoWrapper } from '@styles/styled/wrapper.styled';
import { MainAboutPage } from '@layout/views/main/main.about.page';
const MainContainer = styled.main``;
const MainPage: NextPage = () => {
    const youtubeModal = useDrawer('youtube', true);
    return (
        <MainContainer className={'main-wrapper'}>
            <Main1Section />
            <Main2Section />
            <Main3Section />
            <MainAboutPage />
            <Main4Section />
            <Main5Section />
            <Main6Section />
            <Main7Section />
            <FullScreenModal useBlurBackdrop={true} open={youtubeModal.open} onClose={youtubeModal.onClose}>
                <VideoWrapper>
                    <IframeWrapper
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/O5TdnuUhIgs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </VideoWrapper>
            </FullScreenModal>
        </MainContainer>
    );
};

export default MainPage;
