import React from 'react'
import ReactDom from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import AuthOrApp from './main/authOrApp'
import reducers from './main/reducers'

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers)
ReactDom.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>
    , document.getElementById('app'))