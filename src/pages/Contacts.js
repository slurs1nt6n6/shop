import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    
    <div className='contacts-container'>
      <h1 className='contacts-heading'>Контакты</h1>
      <div className='contact-info'>
        <p>ИП: info@f8cknonsense.ru</p>
        <p>ИНН: 700 13 123 123</p>
        <p>ОГРНИП: 3213 128388888 1233</p>
        <p>Телефон: 8(999)5441213</p>
        <p>E-mail: info@f8cknonsense.ru</p>
      </div>
      <h1 className='payment-heading'>Процесс оплаты</h1>
      <p className='payment-description'>
        Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Veriﬁed By Visa, MasterCard SecureCode, MIR Accept, J-Secure для проведения платежа также может потребоваться ввод специального пароля. Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платёжных систем
      </p>
      <Link to="/">Вернуться на главную</Link>

    </div>
  );
};

export default Contacts;
