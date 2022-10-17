import { UserDataInformationType } from '../../mock/data/blog.data';

interface ITeacherPage {
    teacher: UserDataInformationType;
}

export const TeacherHeader = ({ teacher }: ITeacherPage) => {
    return (
        <section className="section-teacher-header">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xhuge">
                        <div className="max-width-xlarge">
                            <div data-w-id="931de199-b73b-abe0-7631-7f01307f3f92" className="teacher-single-header-component">
                                <a href="#" className="teacher-single-header-image-wrapper w-inline-block w--current">
                                    <img src={teacher.userImage} loading="lazy" alt="" className="teacher-single-header-image" />
                                </a>
                                <div className="teacher-single-header-content z-index-1">
                                    <div className="teacher-single-header-content-top">
                                        <div className="teacher-single-header-title-wrapper">
                                            <a href="#" className="link-white w-inline-block">
                                                <h1 className="heading-large text-color-white">{`${teacher.userFirstName} ${teacher.userLastName}`}</h1>
                                            </a>
                                            <div className="text-size-medium">{teacher.grade}</div>
                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                            elementum tristique.
                                        </div>
                                        <div className="w-layout-grid team-social teacher-single">
                                            <a href="#" className="social-link w-inline-block">
                                                <div className="social-icon w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                                                            fill="CurrentColor"
                                                        />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="#" className="social-link w-inline-block">
                                                <div className="social-icon w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M20.9728 6.7174C20.5084 7.33692 19.947 7.87733 19.3103 8.31776C19.3103 8.47959 19.3103 8.64142 19.3103 8.81225C19.3154 11.7511 18.1415 14.5691 16.0518 16.6345C13.962 18.6999 11.1312 19.8399 8.19405 19.7989C6.49599 19.8046 4.81967 19.4169 3.29642 18.6661C3.21428 18.6302 3.16131 18.549 3.16162 18.4593V18.3604C3.16162 18.2313 3.26623 18.1267 3.39527 18.1267C5.06442 18.0716 6.67402 17.4929 7.99634 16.4724C6.48553 16.4419 5.12619 15.5469 4.5006 14.1707C4.46901 14.0956 4.47884 14.0093 4.52657 13.9432C4.57429 13.8771 4.653 13.8407 4.73425 13.8471C5.19342 13.8932 5.65718 13.8505 6.1002 13.7212C4.43239 13.375 3.17921 11.9904 2.99986 10.2957C2.99349 10.2144 3.02992 10.1357 3.096 10.0879C3.16207 10.0402 3.24824 10.0303 3.32338 10.062C3.77094 10.2595 4.25409 10.3635 4.74324 10.3676C3.28184 9.40846 2.65061 7.58405 3.20655 5.92622C3.26394 5.76513 3.40181 5.64612 3.5695 5.61294C3.73718 5.57975 3.90996 5.63728 4.02432 5.76439C5.99639 7.86325 8.70604 9.11396 11.5819 9.25279C11.5083 8.95885 11.4721 8.65676 11.4741 8.35372C11.501 6.76472 12.4842 5.34921 13.9634 4.76987C15.4425 4.19054 17.1249 4.56203 18.223 5.71044C18.9714 5.56785 19.695 5.31645 20.3707 4.96421C20.4202 4.93331 20.483 4.93331 20.5325 4.96421C20.5634 5.01373 20.5634 5.07652 20.5325 5.12604C20.2052 5.87552 19.6523 6.50412 18.9509 6.92419C19.5651 6.85296 20.1685 6.70807 20.7482 6.49264C20.797 6.45942 20.8611 6.45942 20.9099 6.49264C20.9508 6.51134 20.9814 6.54711 20.9935 6.59042C21.0056 6.63373 20.998 6.68018 20.9728 6.7174Z"
                                                            fill="CurrentColor"
                                                        />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="#" className="social-link w-inline-block">
                                                <div className="social-icon w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M12 3C7.03145 3 3 7.03145 3 12C3 16.9686 7.03145 21 12 21C16.9588 21 21 16.9686 21 12C21 7.03145 16.9588 3 12 3ZM17.9447 7.14859C19.0184 8.45662 19.6627 10.1258 19.6822 11.9317C19.4284 11.8829 16.8904 11.3655 14.333 11.6876C14.2744 11.5607 14.2256 11.4241 14.167 11.2874C14.0108 10.9165 13.8352 10.5358 13.6594 10.1746C16.4902 9.0228 17.7787 7.36334 17.9447 7.14859ZM12 4.32755C13.9523 4.32755 15.7386 5.05966 17.0955 6.26031C16.9588 6.45553 15.7972 8.00759 13.064 9.03253C11.8048 6.71909 10.4089 4.82538 10.1942 4.53254C10.77 4.39588 11.3753 4.32755 12 4.32755ZM8.72996 5.04989C8.93494 5.32321 10.3015 7.22668 11.5803 9.49131C7.98807 10.448 4.81562 10.4284 4.47397 10.4284C4.9718 8.04664 6.58243 6.06507 8.72996 5.04989ZM4.30803 12.0098C4.30803 11.9317 4.30803 11.8536 4.30803 11.7755C4.63991 11.7852 8.36876 11.8341 12.205 10.6822C12.4295 11.1117 12.6345 11.551 12.8297 11.9902C12.7321 12.0195 12.6247 12.0488 12.5271 12.0781C8.56399 13.3568 6.45553 16.8514 6.27983 17.1442C5.05965 15.7874 4.30803 13.9816 4.30803 12.0098ZM12 19.692C10.2234 19.692 8.58352 19.0868 7.28525 18.0716C7.42191 17.7885 8.98371 14.782 13.3178 13.269C13.3373 13.2592 13.3471 13.2592 13.3666 13.2495C14.4501 16.051 14.8894 18.4034 15.0065 19.077C14.0792 19.4772 13.064 19.692 12 19.692ZM16.2852 18.3742C16.2072 17.9056 15.7972 15.6605 14.7917 12.898C17.2028 12.5173 19.3113 13.1421 19.5749 13.23C19.243 15.3677 18.013 17.2126 16.2852 18.3742Z"
                                                            fill="CurrentColor"
                                                        />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src="images/Graphic.svg"
                loading="lazy"
                data-w-id="83501e25-0571-509f-1e11-006224add75e"
                alt=""
                className="header-graphic"
            />
        </section>
    );
};
