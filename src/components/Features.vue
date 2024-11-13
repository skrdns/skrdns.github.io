<template>
  <div class="features-container">
    <h1>Наша колекція NFT картинок з котами</h1>
    <p>Ознайомтесь з унікальними та обмеженими цифровими творами мистецтва котів, доступними як NFT на нашій платформі. Кожен витвір є неповторним, ідеальним для колекціонерів, любителів мистецтва та котів. Купуйте, продавайте та обмінюйте ці ексклюзивні твори, ставши частиною світу NFT мистецтва.</p>
    
    <div class="nft-image">
      <img src="@/png/1.png" alt="NFT Cat Image" class="nft-image-img" />
    </div>

    <h2>Чому обирають наші NFT?</h2>
    <ul>
      <li><strong>Унікальні твори мистецтва:</strong> Кожна картинка кота унікально створена та токенізована на блокчейні.</li>
      <li><strong>Обмежена кількість:</strong> Кожен NFT доступний в обмеженій кількості, що забезпечує рідкість та ексклюзивність.</li>
      <li><strong>Безпечні транзакції:</strong> Усі транзакції надійно фіксуються на блокчейні для прозорості та автентичності.</li>
      <li><strong>Підтримка художників:</strong> Кожна покупка підтримує талановитих цифрових художників, які спеціалізуються на котячих малюнках.</li>
    </ul>

    <h2>Як купити NFT?</h2>
    <p>Купити NFT дуже просто! Перегляньте нашу колекцію, оберіть улюблену картину і завершите покупку за допомогою криптовалюти. Після покупки NFT буде додано до вашого гаманця, і ви станете власником унікального цифрового твору мистецтва, який можна перепродати або виставити в віртуальній галереї.</p>

    <h2>Приєднуйтесь до революції NFT котів</h2>
    <p>Станьте частиною великої спільноти колекціонерів NFT та любителів котів. Незалежно від того, чи шукаєте ви інвестиції, чи просто любите котів, у нашій колекції знайдеться щось для кожного!</p>
  </div>
</template>

<script>
export default {
  name: "Features",
};
</script>

<style scoped>
.features-container {
  padding: 40px;
  font-family: 'Arial', sans-serif;
  margin-top: 80px; /* Відступ зверху, щоб контент не накладався на хедер */
  background-color: rgba(249, 249, 249, 1); 
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Тінь для надання глибини */
  width: 95%; /* Задаємо ширину блоку */
  max-width: 1500px; /* Максимальна ширина блоку */
  margin: 80px auto; /* Центруємо блок по горизонталі */
}

h1 {
  color: #620F9A;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
}

h2 {
  color: #333;
  font-size: 1.8rem;
  margin-top: 30px;
  margin-bottom: 15px;
  text-align: center;
}

p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  text-align: justify;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

li {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #555;
}

.nft-image {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
}

.nft-image-img {
  width: 300px; /* Ширина зображення */
  height: 300px; /* Висота зображення для квадратної форми */
  object-fit: cover; /* Забезпечує правильні пропорції */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Тінь навколо зображення */
}

ul li {
  margin-bottom: 15px;
}

.features-container p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 15px;
}

.features-container h2 {
  color: #620F9A; /* Колір для підзаголовків */
}
</style>
