
interface IProps {
    refInput: React.MutableRefObject<HTMLInputElement | null>;
    list: string[];
}

export default function ListGoods(props: IProps): JSX.Element {
    let { list, refInput } = props;
    return (
        <>
            {(refInput.current && refInput.current.value != '') &&
                list.map((item: string, index: number) => {
                    return <li key={index}><p>{item}</p></li>
                })
            }
        </>
    );
}