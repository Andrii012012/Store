
import { useState } from 'react';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import ListData from './components/ListData/ListData';
import EditForm from './components/EditForm/EditForm';
import AddAddressPay from './components/AddAddressPay/AddAddressPay';

export default function Address(): JSX.Element {

    const [isChange, seIsChange] = useState<boolean>(true);

    const user = useAppSelector((state) => state.user.user);

    function hangleIsChange() {
        seIsChange(!isChange);
    }

    console.log(user);

    if (user && !user.address && isChange) {
        return <AddAddressPay onChange={hangleIsChange} />
    } else if (user && user.address && isChange) {
        return <ListData user={user} onChange={hangleIsChange} />;
    } else if (user && !isChange) {
        return <EditForm user={user} onChange={hangleIsChange} />;
    } else {
        return <></>;
    }
}
