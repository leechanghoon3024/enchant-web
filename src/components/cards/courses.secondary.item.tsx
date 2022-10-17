import styled from '@emotion/styled';
import { CardInformationType } from '../../mock/data/product.data';
import { UpperFirstString } from '@framework/utils/util.string/upper.first';
import { ProductPageUrl } from '@framework/lib/page.url';
import { useRouter } from 'next/router';

const ListItem = styled('div')``;
interface ICoursesItemProps {
    item: CardInformationType;
}
export const CoursesSecondaryItem = ({ item }: ICoursesItemProps) => {
    const router = useRouter();
    return (
        <ListItem role="listitem" className="card secondary w-dyn-item">
            <div className="card-content-wrapper">
                <div className="tagline secondary">{UpperFirstString(item.level)}</div>
                <a href="#" className="card-title-link w-inline-block">
                    <h3 className="heading-small heading-link-hover">{item.title}</h3>
                </a>
                <div className="text-size-medium">$ {item.amount} USD</div>
            </div>
            <a onClick={() => router.push(ProductPageUrl(item.id))} className="button-tertiary is-button-small w-button">
                Enroll Course
            </a>
            <img src={item.thumbnailImage} loading="lazy" alt="" className="card-image" />
        </ListItem>
    );
};
