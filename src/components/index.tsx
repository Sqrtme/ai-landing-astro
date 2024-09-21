import React, { useRef } from 'react';
import TabSmallBlock from 'components/Tabs/TabSmallBlock';
import CheckMarks from 'components/CheckMarks';
import Accordion from 'components/Accordion';
import styles from 'components/PriceCalculator/styles.module.scss';
import './index.scss';
import {
  About,
  AboutAutoPay,
  AboutCommission,
  AboutHelp,
  AboutLeak,
  AboutLocation,
  AboutMoney,
  AboutPrice,
  AboutPrivacy,
  AboutToken,
  AboutUploaded,
} from 'components/Accordion/AccordionTemplates';
import Centered from 'components/Centered';
import FeedBackForm from 'components/FeedBackForm';
import { RightTab } from 'components/Tabs/TabsTemplates';
import Tokenizer from 'components/Tokenizer/index.tsx';


const PageMain = () => {
  const pricesRef = useRef(null);
  const formRef = useRef(null);
  const executeScroll = () => pricesRef.current.scrollIntoView({ behavior: 'smooth' });
  const executeScrollToForm = () => formRef.current.scrollIntoView({ behavior: 'smooth' });
  return (
    <div>
      <div className="main _grey">
        <div className="main-with-image">
          <div className="right">
            <h1>AlpinaGen</h1>
            <h3>Простое и эффективное SaaS-решение для вашего бизнеса.</h3>
            <p>AlpinaGen – ИИ платформа, объединяющая возможности различных нейронных сетей в удобном интерфейсе. AlpinaGen автоматизирует рутинные задачи и оптимизирует повседневные операции.</p>
            <div className="btn" onClick={executeScroll}>Подробнее о тарифах</div>
          </div>
          <div className="left">
            <img src="/images/notebook.png" alt="AlpinaGen inteface on notebook" />
          </div>
        </div>
      </div>

      <div style={{ padding: 16 }}>
        <Centered>
          <h2 className="tabs-small-h2">Токенизатор</h2>
          <p>Большие языковые модели OpenAI обрабатывают текст с помощью токенов — последовательностей символов, встречающихся в тексте. Они учатся понимать статистические зависимости между токенами и хорошо предсказывают следующий токен. Используйте инструмент ниже, чтобы увидеть, как текст токенизируется, и узнать общее количество токенов.</p>
        </Centered>
        <Tokenizer />
      </div>

      <RightTab />
      {/*<Tabs items={[{ id: 1, name: "Для меня", data: <LeftTab />}, { id: 2, name: "Для сотрудников", data: <RightTab />}]} />*/}

      <Centered orange borders className="colored-description-margin">
        <div className="colored-description">
          <h2>ИИ - эффективное средство для экономии времени и увеличения продуктивности</h2>
          <h4>35% компаний в мире уже активно используют ИИ в своем бизнесе, а еще 42% находятся на стадии изучения и внедрения (по данным McKinsey, 2024)</h4>
        </div>
      </Centered>

      <Centered>
        <h2 className="tabs-small-h2">Что стоит за чатом AlpinaGen?</h2>
      </Centered>
      <Centered>
        <div className="tabs-single">
          <TabSmallBlock title="Умные чаты" description="Chat GPT, Claude, и Gemini понимают и генерируют естественный язык, помогая в создании текстов, ответах на вопросы и автоматизации выполнения задач" />
          <TabSmallBlock title="Создание изображений" description="Midjourney V5 и Dall-E 3 трансформируют ваши слова в уникальные и захватывающие изображения, открывая новые горизонты творчества" />
          <TabSmallBlock title="Мгновенный перевод" description="DeepL Translator известен высокой точностью и естественностью переводов, особенно при работе с европейскими языками" />
          <TabSmallBlock title="Библиотека Шаблонов" description="Шаблоны запросов к нейросетям с качественными ответами для различных тематик. Создавайте чаты, делитесь ими, работайте над проектами вместе с коллегами" />
        </div>
      </Centered>


      <Centered>
        <h2 className="check-marks-h2">Почему выбирают нас?</h2>
      </Centered>
      <Centered>
        <div className="check-marks-list">
          <CheckMarks title="Простота использования" description="Доступ к различным нейросетям в одном интерфейсе; не нужен номер телефона и иностранная карта" />
          <CheckMarks title="Русский язык" description="Чат поддерживает русский язык" />
          <CheckMarks title="Удобство оплаты" description="Поддержка оплаты по счету, все расходы отображаются в личном кабинете" />
          <CheckMarks title="Скорость" description="Быстрые ответы без очереди и остановок на час" />
        </div>
      </Centered>

      <div ref={pricesRef} />
      <Centered grey large>
        {/*<Tabs*/}
        {/*  white*/}
        {/*  className="gap-tabs-margin"*/}
        {/*  items={[*/}
        {/*    { id: 1, name: "Для меня", data: <LeftBottomTab />},*/}
        {/*    { id: 2, name: "Для сотрудников", data: },*/}
        {/*  ]}*/}
        {/*/>*/}
        {/*<PriceCalculator onClick={executeScrollToForm} />*/}
        <h2 style={{ padding: 40 }}>Тарифы для компаний от 20 человек начинаются от 50 тыс. рублей</h2>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '0 16px 40px 16px' }}>
          <h5 className={styles.largeTooltip} style={{ textAlign: 'center', fontSize: 22, marginBottom: 20 }}>
            У вас есть вопросы?
          </h5>
          <h5 className={styles.largeTooltip} style={{ textAlign: 'center', fontSize: 22, marginBottom: 20 }}>
            Хотите узнать подробнее?
          </h5>
          <h5 className={styles.largeTooltip} style={{ textAlign: 'center', fontSize: 22, marginBottom: 20 }}>
            Напишите нам
          </h5>
          <div className="btn" onClick={executeScrollToForm}>Получить консультацию</div>
        </div>

      </Centered>
      <div style={{ padding: 16 }}>
        <h2 style={{ marginTop: 112, marginBottom: 48 }}>Отвечаем на вопросы</h2>
        <Accordion title="Что умеет каждая сеть?" content={<About/>}/>
        <Accordion title="Что такое токен?" content={<AboutToken />} />
        <Accordion title="Как понять сколько стоит мой запрос?" content={<AboutPrice />} />
        <Accordion title="Что будет, если баланс закончится раньше месяца?" content={<AboutMoney />} />
        <Accordion title="Почему вы берете комиссию 10%?" content={<AboutCommission />} />
        <Accordion title="Как отключить автопродление?" content={<AboutAutoPay />} />
        <Accordion title="Как я смогу обратиться за помощью?" content={<AboutHelp />} />

        <Accordion title="Насколько безопасно использование AlpinaGen?" content={<AboutPrivacy />} />
        <Accordion title="Где хранятся персональные данные? В РФ?" content={<AboutLocation />} />
        <Accordion title="Могут ли другие видеть мои запросы или загружаемую мною информацию?" content={<AboutUploaded />} />
        <Accordion title="Можно ли скачать из нейросети загруженные в нее кем-либо файлы?" content={<AboutLeak />} />
      </div>
      <Centered>
        <h2 style={{ marginTop: 48, marginBottom: 16 }}>Видео-мануал и поддержка</h2>
        <p style={{ textAlign: 'center' }}>
          В ближайшее время будет доступен видео-мануал. Для вопросов и поддержки, пожалуйста, свяжитесь с нами через раздел “Получить бесплатную консультацию”.
        </p>
      </Centered>
      <Centered>
        <h2 ref={formRef} style={{ marginTop: 104, marginBottom: 48 }}>Остались вопросы?</h2>
      </Centered>
      <FeedBackForm />
    </div>
  )
}

export default PageMain;
