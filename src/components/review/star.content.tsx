import { getUuid } from '@framework/utils/get.uuid';

interface IStarContent {
    star: number;
}
export const StarContent = ({ star }: IStarContent) => {
    const starArray = new Array(star ?? 0).fill('-');
    return (
        <div className="home-header-stars-wrapper">
            {starArray.map((v) => (
                <div className="product-stars" key={getUuid()}>
                    star
                </div>
            ))}
        </div>
    );
};
