import React from 'react';
import { useDrawer } from '@store/drawer/use.drawer';
import { useRouter } from 'next/router';
import { CoursesPlainUrl } from '@framework/lib/page.url';

export const Main1Section = () => {
    const youtubeModal = useDrawer('youtube', true);
    const router = useRouter();
    return (
        <header className="section-home-header">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-top padding-large">
                        <div className="padding-bottom padding-xxlarge">
                            <div className="w-layout-grid header-component">
                                <div className="header-content">
                                    <div className="margin-bottom margin-small">
                                        <h1 data-w-id="ea2f80b1-51e0-2692-a8ad-8c2f8852aeea" className="text-color-white">
                                            코딩스트레스 없이
                                            <br />
                                            노코딩으로 앱 만들기
                                        </h1>
                                    </div>
                                    <p data-w-id="ea2f80b1-51e0-2692-a8ad-8c2f8852aeec" className="text-size-medium">
                                        <span>노코드클래스</span>는 국내 최초 No-Code 전문 온라인러닝 센터입니다.
                                    </p>
                                    <div className="margin-top margin-small">
                                        <div data-w-id="12932e07-0be0-e298-41b5-2b944cf6a733" className="button-row">
                                            <div className="button-wrapper">
                                                <a onClick={() => router.push(CoursesPlainUrl)} className="button w-button">
                                                    강의미리보기
                                                </a>
                                            </div>
                                            <div className="button-wrapper">
                                                <a
                                                    onClick={() => youtubeModal.onOpen()}
                                                    className="button-link is-white w-inline-block w-lightbox"
                                                >
                                                    <div>강의 미리보기</div>
                                                    <div className="icon-xsmall">play_circle_filled</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="margin-top margin-large">
                                        <div data-w-id="556c46f3-e133-c08a-c74c-e0067f1f06ab" className="home-header-reviews-row">
                                            <div className="home-header-reviews-content">
                                                <div className="home-header-stars-wrapper">
                                                    <div className="icon-xsmall">star</div>
                                                    <div className="icon-xsmall">star</div>
                                                    <div className="icon-xsmall">star</div>
                                                    <div className="icon-xsmall">star</div>
                                                    <div className="icon-xsmall">star</div>
                                                </div>
                                                <div className="text-weight-medium">From 3k+ reviews</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-image-wrapper">
                                    <img
                                        src="images/austin-distel-60caCHdOqH0-unsplash.jpg"
                                        loading="lazy"
                                        data-w-id="ea2f80b1-51e0-2692-a8ad-8c2f8852aef7"
                                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 43vw"
                                        srcSet="images/austin-distel-60caCHdOqH0-unsplash-p-500.jpeg 500w, images/austin-distel-60caCHdOqH0-unsplash-p-800.jpeg 800w, images/austin-distel-60caCHdOqH0-unsplash-p-1080.jpeg 1080w, images/austin-distel-60caCHdOqH0-unsplash.jpg 1400w"
                                        alt=""
                                        className="header-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
