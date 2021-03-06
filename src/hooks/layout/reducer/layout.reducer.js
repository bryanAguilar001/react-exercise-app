import { LAYOUT_TYPES } from '../types/layout.types'

export function LayoutReducer(state, action) {
    const currentState = {...state};
    switch (action.type) {
        case LAYOUT_TYPES.SHOW_HIDE_LEFTNAV:
            currentState.show = !currentState.show;
            return currentState;
        default:
            return currentState;
    }
}