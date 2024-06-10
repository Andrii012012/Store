import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { filterSeachGoodsSetNameGoods } from "../../../../features/goods/slice";

interface IProps {
    refInput: React.MutableRefObject<HTMLInputElement | null>;
    list: string[];
}

export default function ListGoods(props: IProps): JSX.Element {
    let { list, refInput } = props;

    const goGoods = useNavigate();

     const dispatch = useAppDispatch();

    function hangleSwitch(e: React.MouseEvent<HTMLLIElement>){
        if(e.target && e.target instanceof HTMLElement && e.target.innerHTML){
            dispatch(filterSeachGoodsSetNameGoods(e.currentTarget.children[0].innerHTML));
            goGoods(`/catalog/${e.currentTarget.children[0].innerHTML}`);
        }
    }

    return (
        <>
            {(refInput.current && refInput.current.value != '') &&
                list.map((item: string, index: number) => {
                    return <li onClick={(e) => hangleSwitch(e)} key={index}><p>{item}</p></li>
                })
            }
        </>
    );
}