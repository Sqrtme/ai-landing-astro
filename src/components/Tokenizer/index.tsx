import React, { useState, useMemo } from 'react';

import api from "gpt-tokenizer";
import cl100k_base from 'gpt-tokenizer/encoding/cl100k_base';
import p50k_base from 'gpt-tokenizer/encoding/p50k_base';
import r50k_base from 'gpt-tokenizer/encoding/r50k_base';
import p50k_edit from 'gpt-tokenizer/encoding/p50k_edit';
import styles from './styles.module.scss';
const tokenizers = {
  cl100k_base,
  p50k_base,
  r50k_base,
  p50k_edit
};

const pastelColors = [
  "rgba(107,64,216,.3)",
  "rgba(104,222,122,.4)",
  "rgba(244,172,54,.4)",
  "rgba(239,65,70,.4)",
  "rgba(39,181,234,.4)"
];

const TextInput = ({
  value,
  onChange
}: {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}) => (
  <textarea
    value={value}
    onChange={onChange}
    style={{ width: "100%", height: "200px" }}
  />
);

const TokenizedText = ({ tokens }: { tokens: (string | number)[] }) => (
  <div className={styles['tokenized-text']}>
    {tokens.map((token, index) => (String(token).match(/\n/g)) ? (
      <>
        {String(token).match(/\n/g).map(() => (<span key={index} style={{ width: '100%' }}><br/></span>))}
      </>
    ) : (
      <span key={index} style={{ backgroundColor: pastelColors[index % pastelColors.length] }}>
        {String(token).replaceAll(" ", "\u00A0")}
      </span>
    ))}
  </div>
);

type Encoding = "cl100k_base" | "p50k_base" | "p50k_edit" | "r50k_base";

const Tokenizer = () => {
  const [inputText, setInputText] = useState(
    "Много слов соответствуют одному токену, но некоторые — нет: они неделимы." + "\n" +"Символы Unicode, такие как эмодзи, могут разбиваться на несколько токенов, содержащих базовые байты: 🤚🏾\n" +
    "\n" +
    "Последовательности символов, которые часто встречаются рядом, могут группироваться вместе: 1234567890."
  );
  const [displayTokens, setDisplayTokens] = useState(false);

  const [selectedEncoding, setSelectedEncoding] = useState<Encoding>(
    "cl100k_base"
  );


  const onModelSelect = (event: any) => {
    setSelectedEncoding(event.target.value as Encoding);
  };

  const selectEncoding = (
    <div style={{ marginBottom: 8 }}>
      <span>Модель: </span>
      <select
        id="encoding-select"
        className={styles['model-select']}
        value={selectedEncoding}
        onChange={onModelSelect}
      >
        <option value="cl100k_base">
          cl100k_base (GPT-3.5-turbo and GPT-4)
        </option>
        <option value="p50k_base">p50k_base</option>
        <option value="p50k_edit">p50k_edit</option>
        <option value="r50k_base">r50k_base</option>
      </select>
    </div>
  );



  const api = tokenizers[selectedEncoding];
  const encodedTokens = api.encode(inputText);

  const decodedTokens = useMemo(() => {
    const tokens = [];
    for (const token of api.decodeGenerator(encodedTokens)) {
      tokens.push(token);
    }
    return tokens;
  }, [encodedTokens, api]);

  const toggleDisplay = () => {
    setDisplayTokens(!displayTokens);
  };

  return (
      <div className={`main ${styles['tokenizer-container-centered']}`}>
        <div className={styles['tokenizer-container']}>
          {selectEncoding}
          <div className="tokenizer">
            <TextInput
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button className={styles['model-btn']} onClick={() => setInputText("")}>Очистить</button>
          </div>
          <div className={styles['statistics']}>
            <div className={styles['char']}>
              <div className={styles['statistics-text']}>Символов:</div>
              <span>{inputText.length}</span>
            </div>
            <div className={styles['token']}>
              <div className={styles['statistics-text']}>Токенов:</div>
              <span>{encodedTokens.length}</span>
            </div>
          </div>
          <TokenizedText tokens={displayTokens ? encodedTokens : decodedTokens}/>

          {/*<button onClick={toggleDisplay}>*/}
          {/*  {displayTokens ? "Show tokenized text" : "Show Token IDs"}*/}
          {/*</button>*/}
        </div>
      </div>
  );
};

export default Tokenizer;
