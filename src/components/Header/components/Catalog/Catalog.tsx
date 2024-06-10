import pStyles from '../../style.module.scss';
import Accordion from "../../../../containers/Accordion/Accordion";
import {filterSeachGoodsSetGender } from '../../../../features/goods/slice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';


export default function Catalog(): JSX.Element {

    const dispatch = useAppDispatch();

    function handleChooseFilter(name: string) {
        switch (name) {
            case 'Мужские': {
                dispatch(filterSeachGoodsSetGender('men'));
                break;
            } case 'Женские': {
                dispatch(filterSeachGoodsSetGender('women'));
                break;
            } case 'Унисекс': {
                dispatch(filterSeachGoodsSetGender('unisex'));
                break;
            }
        }
    }

    return (
        <Accordion handleChoose={handleChooseFilter} text='каталог' selectClass={pStyles.select} selectItem={['Мужские', 'Женские', 'Унисекс']}>
            <div className={pStyles.burgerAccordion}>
                <span></span>
            </div>
        </Accordion>
    );
}