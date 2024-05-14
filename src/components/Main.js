import React from "react";
import consoleImage from "../images/console2.png";
import сontrollerImage from "../images/ps5_controller.jpg";

class Main extends React.Component{
    render(){
        return(
            <main className="main">
                <section className="welcome flyIn">
                    <h1>Добро пожаловать на лэндинг PS5</h1>
                    <p>Здесь вы найдете всю необходимую информацию о PlayStation 5.</p>
                </section>
        
                <section className="main-image">
                    <div className="flyIn">
                        <img src={consoleImage} width="1500" height="750" alt="Игровая приставка PS5"></img>
                    </div>
                </section>

                <section className="features">
                    <div className="feature fade-in">
                        <h2>4K Графика</h2>
                        <p>На PS5 вы сможете наслаждаться играми в невероятном качестве 4K.</p>
                    </div>

                    <div className="feature fade-in">
                        <h2>Быстрая загрузка</h2>
                        <p>С SSD-накопителем PS5 игры загружаются мгновенно.</p>
                    </div>

                    <div className="feature fade-in">
                        <h2>Игры нового поколения</h2>
                        <p>Погрузитесь в захватывающие игровые миры нового поколения.</p>
                    </div>
                </section>

                <section className="image">
                    <div className="slide-in-from-left">
                        <img src={сontrollerImage} alt="Контроллер PS5"></img>
                    </div>
                    <div className="dualsense slide-in-from-right">
                        <h1>Погрузитесь в мир игр с DualSense</h1>
                        <p>Ощутите уникальные ощущения и эмоции с инновационным геймпадом DualSense от Sony PS5.</p>
                        <h1>&nbsp;</h1>
                        <a href="/" className="more">Узнать больше</a>
                    </div>
                </section>

                <section className="features">
                    <div className="feature fade-in">
                        <h2>Новая система виброотклика</h2>
                        <p>Погрузитесь в игровой мир с ощущением, создаваемым системой тактильной обратной связи DualSense. Ощутите каждый шаг, взрыв или касание в игре.</p>
                    </div>

                    <div className="feature fade-in">
                        <h2>Адаптивные триггеры</h2>
                        <p>Почувствуйте уникальные ощущения при использовании адаптивных триггеров DualSense, которые адаптируются под каждую ситуацию в игре, делая ее более реалистичной и захватывающей.</p>
                    </div>
                    
                    <div className="feature fade-in">
                        <h2>Удобный и эргономичный дизайн</h2>
                        <p>Геймпад DualSense разработан с учетом удобства и эргономики, чтобы обеспечить комфортное и приятное использование в течение долгих игровых сессий.</p>
                    </div>
                </section>
            </main>
        )
    }
}

export default Main