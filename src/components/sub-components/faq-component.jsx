import '../../css/faq.css'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from 'react';
function FaqComponent({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <>
            <div className='faq-component'>
                <div className='question-faq' onClick={() => setShowAnswer(!showAnswer)}>
                    <p>{question}</p>
                    {
                        showAnswer ?
                            <FaMinus color='#20509F' size={20} />
                            :
                            <FaPlus color='#20509F' size={20} />
                    }

                </div>
                {showAnswer && <div className='answer-faq'><p>{answer}</p></div>}
            </div>
        </>
    )
}
export default FaqComponent;
