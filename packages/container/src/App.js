import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/marketingApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
// import { mount } from 'marketing/MarketingApp';
// console.log(mount);

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </BrowserRouter>
        </StylesProvider>

    )
}