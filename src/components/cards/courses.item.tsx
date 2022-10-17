import styled from '@emotion/styled';
import { CardInformationType } from '../../mock/data/product.data';
import { UpperFirstString } from '@framework/utils/util.string/upper.first';
import { useRouter } from 'next/router';
import { ProductPageUrl } from '@framework/lib/page.url';

interface ICoursesItemProps {
    item: CardInformationType;
}
interface ICoursesCardStyleProps {
    item: CardInformationType[];
}

const ListItem = styled('div')``;

export const CoursesItem = ({ item }: ICoursesItemProps) => {
    const router = useRouter();
    return (
        <ListItem role="listitem" className="card w-dyn-item">
            <div className="card-content-wrapper">
                <div className="tagline">{UpperFirstString(item.level)}</div>
                <a href="#" className="course-card-link w-inline-block">
                    <h3 className="heading-small card-link">{item.title}</h3>
                </a>
                <div className="text-size-medium text-color-white">$ {item.amount} USD</div>
            </div>
            <a onClick={() => router.push(ProductPageUrl(item.id))} className="button is-button-small w-button">
                Enroll Course
            </a>
            <img src={item.thumbnailImage} loading="lazy" alt="" className="card-image" />
        </ListItem>
    );
};
