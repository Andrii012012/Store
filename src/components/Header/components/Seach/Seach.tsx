import gStyles from '../../../../styles/style.module.scss';
import pStyles from '../../style.module.scss';
import seach from '../../../../assets/imgs/Header/search.svg';
import { debounce } from 'lodash';
import { useCallback, useEffect, useRef } from 'react';
import { filterSeachGoodsSetNameGoods } from '../../../../features/goods/slice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import ListGoods from '../ListGoods/ListGoods';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { filterSeachGoods } from '../../../../features/goods/createSelect';
import useScrollbar from '../../../../hooks/useScrollbar';
import useWatchElement from '../../../../hooks/useWatchElement';

interface IProps {
    refHeader: React.MutableRefObject<HTMLDivElement | null>
}

export default function Seach(props: IProps): JSX.Element {

    let { refHeader } = props;

    const dispatch = useAppDispatch();

    const listGoods = useAppSelector(filterSeachGoods);

    const refList = useRef<HTMLDivElement | null>(null);

    const refInput = useRef<HTMLInputElement | null>(null);

    const setWatch = useWatchElement();

    useScrollbar(refList);

     const hangleChange = useCallback(
        debounce(() => {
            if (refInput.current && refInput.current instanceof HTMLInputElement) {
                dispatch(filterSeachGoodsSetNameGoods(refInput.current.value));
            }
        }, 1000),
     []);

    function hangleOpenSeach() {
        if (refHeader.current) {
            refHeader.current.classList.add(pStyles.openSeachActive);
            setWatch({elementHangle: refHeader.current, watchClassName: 'seachWrapper', removeClassName: pStyles.openSeachActive});
        }
    }

    return (
        <form className={pStyles.seach} action="#" >
            <div className={`${pStyles.wrapper} seachWrapper`}>
                <div className={`${pStyles.bodyInput} ${gStyles.bodyInput}`}>
                    <input ref={refInput} className={pStyles.input} type='text' onChange={hangleChange} placeholder='Найти парфюм..' />
                    <img onClick={hangleOpenSeach} className={pStyles.iconSeach} src={seach} alt="" />
                    <ul className={`${pStyles.listGoods} header-list-goods`}>
                        <div style={{ maxHeight: '350px', display: 'flex' }} ref={refList}>
                            <div style={{ display: 'contest' }}>
                                <ListGoods list={listGoods} refInput={refInput} />
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </form>
    )
}