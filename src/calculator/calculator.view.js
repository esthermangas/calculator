import React, {useState} from 'react';
import styles from './calculator.module.css';

const Calculator = () => {
    const [history, setHistory] = useState([]);
    const [dech, setDech] = useState('');
    const [operando, setOperando] = useState('');
    const [izq, setIzq] = useState('');

    const handleClickOperando = (sim) => {
        if(dech) {
            setHistory([...history, {izq, operando, dech, result: eval(izq + operando + dech) }])
            setIzq(eval(izq + operando + dech));
            setDech('');
        }
        setOperando(sim)
    }
    const handleClickNum = (ch) => {
        if(!operando) {
            setIzq(izq + ch);
        } else {
            setDech(dech + ch)
        }
    };

    const handleClean = () => {
        setDech('');
        setOperando('');
        setIzq('');
    };
    const handleResult = () => {
        if (operando && dech && izq) {
            setHistory([...history, {izq, operando, dech, result: eval(izq + operando + dech) }])
            setIzq(eval(izq + operando + dech));
            setOperando('');
            setDech('');
        }
    };
    const handleReturn = (elem) => {
        setDech(elem.dech);
        setOperando(elem.operando);
        setIzq(elem.izq);
    };
    return (
        <div className={styles.root}>
            <div className={styles.displayContainer}>
                <div className={styles.historic}>
                    {history.map(el => (
                        <div onClick={(e) => (handleReturn(el))} className={styles.itemHistory}>{el.izq} {el.operando} {el.dech } = {el.result}</div>)
                    )}
                </div>
                <div className={styles.display}>
                    {izq}{operando}{dech}
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <div className={styles.row}>
                    <div className={styles.button} onClick={(e) => (handleClickNum('7'))}>7</div>
                    <div className={styles.button} onClick={(e) => (handleClickNum('8'))}>8</div>
                    <div className={styles.button} onClick={(e) => (handleClickNum('9'))}>9</div>
                    <div className={styles.specialButton} onClick={(e) => (handleClickOperando('/'))}>/</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.button} onClick={(e) => (handleClickNum('4'))}>4</div>
                    <div className={styles.button} onClick={(e) => (handleClickNum('5'))}>5</div>
                    <div className={styles.button} onClick={(e) => (handleClickNum('6'))}>6</div>
                    <div className={styles.specialButton} onClick={(e) => (handleClickOperando('*'))}>x</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.button} onClick={(e) => (handleClickNum('1'))}>1</div>
                    <div className={styles.button} onClick={(e) => (handleClickNum('2'))}>2</div>
                    <div className={styles.button} onClick={(e) => (handleClickNum('3'))}>3</div>
                    <div className={styles.specialButton} onClick={(e) => (handleClickOperando('+'))}>+</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.button} onClick={(e) => (handleClickNum('0'))}>0</div>
                    <div className={styles.specialButton} onClick={handleClean}>AC</div>
                    <div className={styles.specialButton} onClick={handleResult}>=</div>
                    <div className={styles.specialButton} onClick={(e) => (handleClickOperando('-'))}>-</div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;


