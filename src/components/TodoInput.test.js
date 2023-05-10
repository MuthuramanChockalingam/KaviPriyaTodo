/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TodoInput from './TodoInput';

describe('TodoInput', () => {
    it('renders TodoInput properly', () => {
        const {getByDisplayValue} = render(<TodoInput input="demo" handler={() => {}}/>);

        expect(getByDisplayValue("demo")).toBeTruthy();
    });

    it('triggers event properly', () => {
        const triggerValue = "dummy";
        const handlerMock = jest.fn();
        const {getByRole} = render(<TodoInput input="demo" handler={handlerMock}/>);

        fireEvent.change(getByRole('textbox'), { target: { value: triggerValue } })

        expect(handlerMock).toBeCalledWith(triggerValue);
    });
})