import moment from 'moment';
import React from 'react'
import { useDispatch } from 'react-redux';
import { uiOpenModalParams } from '../../actions/ui';

export const AddNewFab = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        const now = moment().minute(0).seconds(0).add(1, 'hours').toDate();
        const nowPlus1 = moment().clone().add(1, 'hour').toDate();

        dispatch(uiOpenModalParams(now, nowPlus1));
    }

    return (
        <button
            onClick={handleClick}
            className="btn btn-primary fab">
            <i className="fas fa-plus"></i>
        </button>
    )
}
