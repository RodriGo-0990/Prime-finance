import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowDownRight } from 'react-icons/fi';

function askPrime() {
    return (
        <>
            <div className='ask-div'>
                <Link to={'/Prime-finance/solucoes'}>
                    <span><FiArrowDownRight /></span> Por que escolher a Prime Finance?
                </Link>
            </div>
        </>
    )
}
export default askPrime;