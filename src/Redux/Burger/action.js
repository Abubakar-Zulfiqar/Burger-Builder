import {
    LETTUCE_ADD,
    LETTUCE_REMOVE,
    BACON_ADD,
    BACON_REMOVE,
    CHEESE_ADD,
    CHEESE_REMOVE,
    MEAT_ADD,
    MEAT_REMOVE
} from "./types"


export const addLettuce = () => {
    return {
        type: LETTUCE_ADD
    }
}

export const removeLettuce = () => {
    return {
        type: LETTUCE_REMOVE
    }
}

export const addBacon = () => {
    return {
        type: BACON_ADD
    }
}

export const removeBacon = () => {
    return {
        type: BACON_REMOVE
    }
}

export const addCheese = () => {
    return {
        type: CHEESE_ADD
    }
}

export const removeCheese = () => {
    return {
        type: CHEESE_REMOVE
    }
}

export const addMeat = () => {
    return {
        type: MEAT_ADD
    }
}

export const removeMeat = () => {
    return {
        type: MEAT_REMOVE
    }
}



