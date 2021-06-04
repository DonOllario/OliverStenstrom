import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#14ffec' : 'CD853F')};
    white-space: nowrap;
    outline: none;
    border: solid;
    border-color: #14ffec;
    border-radius: 25px;
    minwidth: 100px;
    max-width: 180px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? 'Black' : '#000d1a')};
    font-size: ${({big}) => (big ? '24px' : '18px')};
    font-weight: 700;
    &:hover{
        transform: translateY(-2px);
        background-color: Black;
        color: #14ffec;
        border: solid;
        border-color: #14ffec;
    }
`;