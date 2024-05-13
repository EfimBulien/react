import React from "react";

class Main extends React.Component{
    render(){
        return(
        <main class="main">
        <section class="welcome flyIn">
            <h1>Добро пожаловать на лэндинг PS5</h1>
            <p>Здесь вы найдете всю необходимую информацию о PlayStation 5.</p>
        </section>
        
        <section class="main-image">
            <div class="flyIn">
                <img  width="1500" height="750" alt="Игровая приставка PS5"></img>
            </div>
        </section>

        <section class="features">
            <div class="feature fade-in">
                <h2>4K Графика</h2>
                <p>На PS5 вы сможете наслаждаться играми в невероятном качестве 4K.</p>
            </div>
            <div class="feature fade-in">
                <h2>Быстрая загрузка</h2>
                <p>С SSD-накопителем PS5 игры загружаются мгновенно.</p>
            </div>
            <div class="feature fade-in">
                <h2>Игры нового поколения</h2>
                <p>Погрузитесь в захватывающие игровые миры нового поколения.</p>
            </div>
        </section>

        <section class="image">
            <div class="slide-in-from-left">
                <img src="images/ps5_controller.jpg" alt=""></img>
            </div>
            <div class="dualsense slide-in-from-right">
                <h1>Погрузитесь в мир игр с DualSense</h1>
                <p>Ощутите уникальные ощущения и эмоции с инновационным геймпадом DualSense от Sony PS5.</p>
                <h1>&nbsp;</h1>
                <a href="#" class="more">Узнать больше</a>
            </div>
        </section>

        <section class="features">
            <div class="feature fade-in">
                <h2>Новая система виброотклика</h2>
                <p>Погрузитесь в игровой мир с ощущением, создаваемым системой тактильной обратной связи DualSense. Ощутите каждый шаг, взрыв или касание в игре.</p>
            </div>
            <div class="feature fade-in">
                <h2>Адаптивные триггеры</h2>
                <p>Почувствуйте уникальные ощущения при использовании адаптивных триггеров DualSense, которые адаптируются под каждую ситуацию в игре, делая ее более реалистичной и захватывающей.</p>
            </div>
            <div class="feature fade-in">
                <h2>Удобный и эргономичный дизайн</h2>
                <p>Геймпад DualSense разработан с учетом удобства и эргономики, чтобы обеспечить комфортное и приятное использование в течение долгих игровых сессий.</p>
            </div>
        </section>
        </main>
        )
    }
}

export default Main