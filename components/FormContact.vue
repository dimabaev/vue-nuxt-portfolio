<template>
    <form class="form__style" action="">
        <div class="form__style--title">
            <h2 class="form__style--h2">Напишите мне, если вас что-то интересует</h2>
        </div>
        <div class="form__style--inputGroup">
            <input class="form__style--input" type="text" placeholder="Имя">
            <input class="form__style--input" type="email" placeholder="Email">
            <input class="form__style--input" type="tel" placeholder="Телефон">
            <textarea class="form__style--textarea" placeholder="Сообщение"></textarea>
            <div class="form__style--groupSubmit">
                <input class="form__style--input form__style--submit" type="submit">
            </div>
        </div>
    </form>
</template>

<style>
    .form__style {
        display: flex;
        flex-flow: column wrap;
        margin-bottom: 50px;
        justify-content: space-between;

        .form__style--title {
            margin-bottom: 30px;
            
            .form__style--h2 {
                text-align: center;
                color: #ddd;
                font-size: 30px;
                border-left: 4px solid #fff;
                border-right: 4px solid #fff;
            }
        }

        
        .form__style--inputGroup {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            width: 1100px;
            transition: all 0.5s;

            @media (width>= 1000px) and (width <= 1200px) {
                width: 600px;
                justify-content: center;

            }

            @media (width>= 500px) and (width <= 1000px) {
                width: 330px;

            }

            @media (width>= 300px) and (width <= 500px) {
                width: 330px;
      
            }
        }

        .form__style--input {
            background: color(rgb(31, 30, 29) lightness(20%));
            border: none;
            border-radius: 3px;
            padding: 10px;
            padding-left: 15px;
            color: var(--baseColor);
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            transition: border 0.3s;

            &:hover::placeholder {
                padding-left: 50px;
                transition: 0.3s linear;
                opacity: 0;
            }

           

            &:focus::placeholder {
                padding-left: 50px;
                transition: 0.3s;
                opacity: 0;
            }
        
            &:focus {
                outline: none;
                border: 1px solid var(--baseColor);
            }
        }

        .form__style--textarea {
            width: 100%;
            background: color(rgb(31, 30, 29) lightness(20%));
            border: none;
            border-radius: 3px;
            padding: 10px;
            padding-left: 15px;
            color: var(--baseColor);
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            transition: border 0.3s;
            resize: none;

            &:focus {
                outline: none;
                border: 1px solid var(--baseColor);
            }

            &:hover::placeholder {
                padding-left: 50px;
                transition: 0.3s linear;
                opacity: 0;
            }

            &:focus::placeholder {
                padding-left: 50px;
                transition: 0.3s;
                opacity: 0;
            }
        }
    }

    .form__style--groupSubmit {
        display: flex;
        width: 100%;
        justify-content: center;

        .form__style--submit {
            cursor: pointer;
            transition: all 0.3s;
            box-sizing: border-box;

            &:hover {
                color: #fff;
                background: var(--baseColor);
                box-shadow: 0px 5px 20px rgba(255, 173, 21, 0.3)
            }

            &:focus {
               color: var(--baseColor);
            }
        }
    }

</style>