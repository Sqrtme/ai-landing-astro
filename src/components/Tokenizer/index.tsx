import React, { useState, useMemo, Fragment } from 'react';
import cl100k_base from 'gpt-tokenizer/encoding/cl100k_base';
import o200k_base from 'gpt-tokenizer/encoding/o200k_base';
import styles from './styles.module.scss';
const tokenizers = {
  o200k_base,
  cl100k_base,
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
      <Fragment key={index}>
        {String(token).match(/\n/g).map((t, inx) => (<span key={`t-${inx}`} style={{ width: '100%' }}><br/></span>))}
      </Fragment>
    ) : (
      <span key={index} style={{ backgroundColor: pastelColors[index % pastelColors.length] }}>
        {String(token).replaceAll(" ", "\u00A0")}
      </span>
    ))}
  </div>
);

type Encoding = "cl100k_base" | "o200k_base";

const Tokenizer = () => {
  const [inputText, setInputText] = useState(
    "Многие слова или хотя бы их часть соответствуют одному токену. " + "\n" +"Символы Unicode, такие как эмодзи, могут разбиваться на несколько токенов, содержащих базовые байты: 🤚🏾\n" +
    "\n" +
    "Последовательности символов, которые часто встречаются рядом, могут группироваться вместе: 1234567890."
  );

  const [selectedEncoding, setSelectedEncoding] = useState<Encoding>(
    "o200k_base"
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
        <option value="o200k_base">GPT-4o</option>
        <option value="cl100k_base">GPT-4; GPT-3.5-turbo</option>
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
          <TokenizedText tokens={decodedTokens}/>
        </div>
      </div>
  );
};

export default Tokenizer;
