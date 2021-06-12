import moment from "moment";
import { types } from "../types/types"

export const uiCloseModal = () => ({
    type: types.uiCloseModal
})

const now = moment().minute(0).seconds(0).add(1, 'hours');
const nowPlus1 = moment().clone().add(1, 'hours');

export const uiOpenModal = (start = now, end = nowPlus1) => ({
    type: types.uiOpenModal,
    payload: {
        start,
        end
    }
})