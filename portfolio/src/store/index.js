import { createSlice, legacy_createStore } from '@reduxjs/toolkit'

const reducerFun = (state = {
    homeRef: null,
    careerRef: null,
    skillsRef: null,
    projectRef: null,
    academicsRef: null,
    contactRef: null
}, action) => {
    switch (action.type) {
        case 'home': {
            return {
                ...state,
                homeRef: action.payload

            }
        }
        case 'career': {
            return {
                ...state,
                careerRef: action.payload

            }
        }
        case 'skills': {
            return {
                ...state,
                skillsRef: action.payload

            }
        }
        case 'project': {
            return {
                ...state,
                projectRef: action.payload

            }
        }
        case 'academics': {
            return {
                ...state,
                academicsRef: action.payload

            }
        }
        case 'contact': {
            return {
                ...state,
                contactRef: action.payload

            }
        }
    }
}

const store = legacy_createStore(reducerFun);

export default store;


